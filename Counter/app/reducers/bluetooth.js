

const initialState = {
    bluetoothEnabled: false,
    bluetoothConnected: false,
    isConnecting: false
};

export default function (state= initialState, action={}) {
    switch (action.type) {
        case "ENABLE_BLUETOOTH":
            return {
                ...state,
                bluetoothEnabled: true
            };

        case "DISABLE_BLUETOOTH":
            return {
                ...state,
                bluetoothEnabled: false
            };
        case "CONNECT_BLUETOOTH":
            return {
                ...state,
                bluetoothConnected: true
            };

        case "UNCONNECT_BLUETOOTH":
            return {
                ...state,
                bluetoothConnected: false
            };
        default:
            return state;
    }
}