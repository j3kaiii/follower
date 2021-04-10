const ADD_DIALOG_MESSAGE = 'ADD_DIALOG_MESSAGE'

let initialState = {
    dialogs: [],
    messages: []
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE :
            return {
                ...state,
                messages: [...state.messages, {id: 0, message: action.newMessageText}]
            }
        default :
            return state
    }
}

export const addDialogMessage = (newMessageText) => ({type: ADD_DIALOG_MESSAGE, newMessageText})

export default dialogsReducer