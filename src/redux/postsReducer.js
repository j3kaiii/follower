const ADD_POST = 'ADD_POST'

let initialState = {
        posts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            return {
                ...state,
                posts: [...state.posts, {id:0, message: action.newPostText, likesCount:0}]
            }
        default :
            return state
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})

export default postsReducer