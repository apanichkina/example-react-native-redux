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