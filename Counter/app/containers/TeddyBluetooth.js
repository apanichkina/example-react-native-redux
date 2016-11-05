/**
 * Created by ihelos on 04.11.16.
 */
import BluetoothSerial from 'react-native-bluetooth-hc05'
class BlueManager {
    isFetching = false;
    stop = function (func) {
        BluetoothSerial.off('data', func);
        this.unsubscribe();
        this.isFetching = false;
    }.bind(this);

    errors = {
        isFetching: 'already fetching write now',
        disconnected: 'not connected',
        timeoutExpired: 'timeout limit expired',
        unknown: 'bluetooth problem'
    };

    talkToBear(bear_endmsg, bear_delimeter, onAnswer, message) {
        return function (timeout = 10000) {
            var read = function (endmsg, delimeter, resolve, reject, stop) {
                var temp = function (data) {
                    onAnswer(endmsg, delimeter, resolve, reject, data);
                    stop(temp);
                };
                return temp;
            };

            return new Promise((resolve, reject) => {
                var delimeter = bear_delimeter;
                var endmsg = bear_endmsg;
                var temp = read(endmsg, delimeter, resolve, reject, this.stop);
                if (this.isFetching == true) {
                    reject(this.errors.isFetching)
                }
                else {
                    this.isFetching = true;
                    BluetoothSerial.isConnected().then(
                        result => {
                            if (result) {
                                setTimeout(() => {
                                    this.stop(temp);
                                    reject(this.errors.timeoutExpired);
                                }, timeout);
                                this.subscribe(endmsg);
                                BluetoothSerial.on('data', temp);
                                BluetoothSerial.write(message);
                            }
                            else {
                                this.stop(temp);
                                reject(this.errors.disconnected);
                            }
                        }
                    ).catch(error => {
                            this.stop(temp);
                            reject(this.errors.unknown);
                        }
                    );
                }
            });
        }.bind(this)
    }

    unsubscribe = function () {
        BluetoothSerial.unsubscribe()
            .then((res) => {
            })
            .catch((err) => {
            })
    };

    subscribe = function (msg) {
        BluetoothSerial.subscribe(msg)
            .then((res) => {
            })
            .catch((err) => {
            })
    };


    // getStoryList(timeout = 10000) {
    //     var read = function (endmsg, delimeter, resolve, stop) {
    //         var temp = function (data) {
    //             var datastr = data.data.toString().replace(endmsg, '');
    //             console.log(datastr);
    //             var templist = datastr.split(delimeter);
    //             var len = templist.length;
    //             if (len > 0) {
    //                 templist.splice(len - 1, 1)
    //             }
    //             resolve(templist);
    //             stop(temp);
    //         };
    //         return temp;
    //     };
    //     return new Promise((resolve, reject) => {
    //         var delimeter = '\r\n';
    //         var endmsg = 'end\r\n';
    //
    //         var temp = read(endmsg, delimeter, resolve, this.stop);
    //         if (this.isFetching == true) {
    //             reject("already fetching write now")
    //         }
    //         else {
    //             this.isFetching = true;
    //             BluetoothSerial.isConnected().then(
    //                 result => {
    //                     if (result) {
    //                         setTimeout(() => {
    //                             this.stop(temp);
    //                             reject("timeout limit expired");
    //                         }, timeout);
    //                         this.subscribe(endmsg);
    //                         BluetoothSerial.on('data', temp);
    //                         BluetoothSerial.write('l\n');
    //                     }
    //                     else {
    //                         this.stop(temp);
    //                         reject("not connected");
    //                     }
    //                 }
    //             ).catch(error => {
    //                     this.stop(temp);
    //                     reject("bluetooth problems");
    //                 }
    //             );
    //         }
    //     });
    // }

    getStoryList(timeout = 10000) {
        var process = this.talkToBear(
            // КОНЕЦ ВСЕГО ОБЩЕНИЯ С МИШКОЙ
            'end\r\n',
            // РАЗДЕЛИТЕЛЬ
            '\r\n',
            // ФУНКЦИЯ НА ПРИЕМ СООБЩЕНИЯ
            // endmsg - переданный выше
            // delimeter - переданный выше
            // resolve - функция, в которую нужно передать ответ для внешнего мира, если все хорошо
            // reject - функция, в которую нужно передать информацию об ошибке для внешнего мира, если все плохо
            // data - данные от медведя
            (endmsg, delimeter, resolve, reject, data)=> {
                var datastr = data.data.toString().replace(endmsg, '');
                console.log(datastr);
                var templist = datastr.split(delimeter);
                var len = templist.length;
                if (len > 0) {
                    templist.splice(len - 1, 1)
                }
                resolve(templist);
            },
            //СООБЩЕНИЕ
            'l\n');
        return process(timeout)
    }

    connect(id) {
        return new Promise((resolve, reject) => {
            if (this.isFetching == false) {
                this.isFetching = true;
                BluetoothSerial.connect(id).then(response => {
                    resolve(response);
                    this.isFetching = false;
                }).catch(error => {

                    if (error.code == 'EUNSPECIFIED') {
                        setTimeout(()=> {
                            reject(error);
                            this.isFetching = false
                        }, 100)
                    }else {
                        reject(error);
                        this.isFetching = false;
                    }
                });

            }
            else {
                reject(this.errors.isFetching)
            }
        })
    };

    disconnect() {
        return new Promise((resolve, reject) => {
            if (this.isFetching == false) {
                this.isFetching = true;
                BluetoothSerial.disconnect().then(response => {
                    resolve(response);
                    this.isFetching = false;
                }).catch(error => {
                    reject(error);
                    this.isFetching = false;
                });

            }
            else {
                reject(this.errors.isFetching)
            }
        })
    };

    play(filename, timeout = 10000) {
        console.log('s' + filename + '\n');
        var process = this.talkToBear(
            '\r\n',
            '\r\n',
            (endmsg, delimeter, resolve, reject, data)=> {
                var datastr = data.data.toString().replace(endmsg, '');
                resolve(datastr);
            },
            's' + filename + '\n');
        return process(timeout)
    }

    pause_unpause() {
        var process = this.talkToBear(
            '\r\n',
            '\r\n',
            (endmsg, delimeter, resolve, reject, data)=> {
                var datastr = data.data.toString().replace(endmsg, '');
                resolve(datastr);
            },
            'p');
        return process(timeout)
    }

    downloadFile(filename, timeout = 10000) {
        var process = this.talkToBear(
            '\r\n',
            '\r\n',
            (endmsg, delimeter, resolve, reject, data)=> {
                var datastr = data.data.toString().replace(endmsg, '');
                resolve(datastr);
            },
            'y' + filename + '\n');
        return process(timeout)
    }

    removeFile(filename, timeout = 10000) {
        var process = this.talkToBear(
            '\r\n',
            '\r\n',
            (endmsg, delimeter, resolve, reject, data)=> {
                var datastr = data.data.toString().replace(endmsg, '');
                resolve(datastr);
            },
            'r' + filename + '\n');
        return process(timeout)
    }

    teddyConnected() {
        return BluetoothSerial.isConnected()
    }

}

export default Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new BlueManager();
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();