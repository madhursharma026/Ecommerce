const COWGHEEINCREMENT = "COWGHEEINCREMENT";
const COWGHEEDECREMENT = "COWGHEEDECREMENT";
const BUFFALOGHEEINCREMENT = "BUFFALOGHEEINCREMENT";
const BUFFALOGHEEDECREMENT = "BUFFALOGHEEDECREMENT";

// Action creators
export const CowGheeincrement = () => ({
    type: COWGHEEINCREMENT,
})

export const CowGheedecrement = () => ({
    type: COWGHEEDECREMENT,
})

// Action creators
export const BuffaloGheeincrement = () => ({
    type: BUFFALOGHEEINCREMENT,
})

export const BuffaloGheedecrement = () => ({
    type: BUFFALOGHEEDECREMENT,
})

// Initial state
const initialState = {
    // counter: 1,
    BuffaloGhee: 0,
    CowGhee: 0
}

// Root reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case COWGHEEINCREMENT:
            return {
                ...state,
                // counter: 1,
                BuffaloGhee: state.BuffaloGhee,
                CowGhee: state.CowGhee + 1
            }
        case COWGHEEDECREMENT:
            return {
                ...state,
                BuffaloGhee: state.BuffaloGhee,
                CowGhee: state.CowGhee - 1
            }
        case BUFFALOGHEEINCREMENT:
            return {
                ...state,
                BuffaloGhee: state.BuffaloGhee + 1,
                CowGhee: state.CowGhee
            }
        case BUFFALOGHEEDECREMENT:
            return {
                ...state,
                BuffaloGhee: state.BuffaloGhee - 1,
                CowGhee: state.CowGhee
            }
        default:
            return state
    }
}

export default rootReducer