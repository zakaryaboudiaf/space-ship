
export const MOVE_FORWARD = "MOVE_FORWARD"
export const MOVE_BACKWARD = "MOVE_BACKWARD"
export const TURN_LEFT = "TURN_LEFT"
export const TURN_RIGHT = "TURN_RIGHT"


export const moveForward = () => {
    return {
        type : MOVE_FORWARD
    }
}

export const moveBackward = () => {
    return{
        type : MOVE_BACKWARD
    }
}

export const turnLeft = () => {
    return{
        type : TURN_LEFT
    }
}

export const turnRight = () => {
    return{
        type : TURN_RIGHT
    }
}