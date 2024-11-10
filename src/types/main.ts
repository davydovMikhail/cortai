// export enum Status {
//     Connect,
//     Loader,
//     Guess,
//     Won,
//     Fail
// }

// export enum Currency {
//     Split = "SPLIT",
//     Ether = "ETH"
// }

export interface MainState {
    // notification: string;
    // status: Status;
    // currency: Currency;
    messages: any[];
    // splitGames: any[];
    // ethBalance: number;
    // splitBalance: number;
    // maxEthPayout: number;
    // maxSplitPayout: number;
}

export enum MainActionTypes {
    PUSH_MESSAGE = 'PUSH_MESSAGE',
    CLEAR_MESSAGES = 'CLEAR_MESSAGES',
    EDIT_LAST_MESSAGE = 'EDIT_LAST_MESSAGE',
} 



// interface SetStatusAction {
//     type: MainActionTypes.SET_STATUS;
//     payload: Status;
// }
// interface SetCurrencyAction {
//     type: MainActionTypes.SET_CURRENCY;
//     payload: Currency;
// }
// interface PushSegmentAction {
//     type: MainActionTypes.PUSH_SEGMENT;
//     payload: any;
// }
// interface PushSplitAction {
//     type: MainActionTypes.PUSH_SPLIT;
//     payload: any;
// }
// interface ClearSegmentsAction {
//     type: MainActionTypes.CLEAR_SEGMENTS;
// }
// interface ClearSplitsAction {
//     type: MainActionTypes.CLEAR_SPLITS;
// }
// interface SetEthBalAction {
//     type: MainActionTypes.SET_ETH_BAL;
//     payload: number;
// }

interface PushMessageAction {
    type: MainActionTypes.PUSH_MESSAGE;
    payload: any;
}
interface ClearMessagesAction {
    type: MainActionTypes.CLEAR_MESSAGES;
}
interface EditLastMessageAction {
    type: MainActionTypes.EDIT_LAST_MESSAGE;
    payload: any;
}
export type MainAction = 
    PushMessageAction |
    ClearMessagesAction |
    EditLastMessageAction;
