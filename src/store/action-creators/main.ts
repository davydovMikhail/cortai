import { MainAction, MainActionTypes } from "../../types/main";

export function PushMessage(message: any): MainAction {
    return {type: MainActionTypes.PUSH_MESSAGE, payload: message}
}
export function ClearMessages(): MainAction {
    return {type: MainActionTypes.CLEAR_MESSAGES}
}
export function EditLastMessage(message: any): MainAction {
    return {type: MainActionTypes.EDIT_LAST_MESSAGE, payload: message}
}