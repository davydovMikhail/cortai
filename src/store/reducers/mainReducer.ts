import { MainState, MainAction, MainActionTypes } from "../../types/main";

const initialState: MainState = {
    messages: []
}

export const mainReducer = (state: MainState = initialState, action: MainAction): MainState => {
    switch (action.type) {
        case MainActionTypes.PUSH_MESSAGE:
            return {...state, messages: [...state.messages, action.payload]}
        case MainActionTypes.CLEAR_MESSAGES:
            return {...state, messages: [] }
        case MainActionTypes.EDIT_LAST_MESSAGE:
            return {
                ...state,
                messages: state.messages.map((item, index) =>
                    index === state.messages.length - 1 ? action.payload : item
                ),
            }
        default:
            return state
    }
}