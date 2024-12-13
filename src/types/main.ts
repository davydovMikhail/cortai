
export interface MainState {
    messages: any[];
}
export enum MainActionTypes {
    PUSH_MESSAGE = 'PUSH_MESSAGE',
    CLEAR_MESSAGES = 'CLEAR_MESSAGES',
    EDIT_LAST_MESSAGE = 'EDIT_LAST_MESSAGE',
} 
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
