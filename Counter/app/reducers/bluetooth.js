

const initialState = {
    bluetoothState: 'unconnected'
};

export default function (state= initialState, action={}) {
    switch (action.type) {
        case "CONNECT_BLUETOOTH":
            return {
                ...state,
                bluetoothState: 'connected'
            };

        case "UNCONNECT_BLUETOOTH":
            return {
                ...state,
                bluetoothState: 'unconnected'
            };
        default:
            return state;
    }
}