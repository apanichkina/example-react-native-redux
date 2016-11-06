import * as types from './actionTypes';

export function enableBluetooth():Action {
    return {
        type: types.ENABLE_BLUETOOTH
    };
}

export function disableBluetooth():Action {
    return {
        type: types.DISABLE_BLUETOOTH
    };
}
export function connectBluetooth():Action {
    return {
        type: types.CONNECT_BLUETOOTH
    };
}

export function unconnectBluetooth():Action {
    return {
        type: types.UNCONNECT_BLUETOOTH
    };
}

export function searchBears(devices):Action {
    let arr = devices;
    let bears=[];
    arr.forEach(function(item,i,arr){
            if(item.name.indexOf('HC-') >= 0) bears[item.id] = item;
        }
    );
    return {
        type: types.SEARCH_BEARS,
        devices: bears
    };
}