import * as types from './actionTypes';

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
