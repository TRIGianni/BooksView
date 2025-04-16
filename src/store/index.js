import {createStore} from "redux";


function bookReducer(state=[], action) {
    switch (action.type) {
        case "SET_BOOKS":
            return action.payload;

    }
    return state;

}

let store = createStore(bookReducer)

export default store;