import { moveBackward , moveForward , turnLeft , turnRight } from "./methods"
import { MOVE_FORWARD , MOVE_BACKWARD , TURN_RIGHT , TURN_LEFT } from "./actionTypes"

const initialState = {
    currentPosition : "0,0,N",
    gridDimention : 50 
}


const reducer = (state = initialState , action) => {

    switch (action.type) {

        case MOVE_FORWARD : return {
            ...state,
            currentPosition : moveForward(state.currentPosition , state.gridDimention)
        }

        case MOVE_BACKWARD : return {
            ...state,
            currentPosition : moveBackward(state.currentPosition , state.gridDimention)
        }

        case TURN_LEFT : return {
            ...state,
            currentPosition : turnLeft(state.currentPosition , state.gridDimention)
        }

        case TURN_RIGHT : return {
            ...state,
            currentPosition : turnRight(state.currentPosition , state.gridDimention)
        }
       
        default: return state

    }
    
}

export default reducer