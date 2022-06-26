import React from 'react'
import { connect , useSelector } from 'react-redux'
import { moveForward , moveBackward , turnLeft , turnRight } from '../redux/actionTypes'


const Controls = (props) => {
    
    const { moveSpaceshipForward , moveSpaceshipBackward , turnSpaceshipLeft , turnSpaceshipRight } = props
    
    return (
        <div className='controls'>
            <div className="current-position">
                <p className='displayed-position'>{props.currentPosition}</p>
            </div>
            <div className="control-buttons">
                <div className='buttons-container-1'>
                    <button className='control-btn' onClick={() => moveSpaceshipForward()}>F</button>
                </div>
                <div className='buttons-container-2'>
                    <button className='control-btn' onClick={() => turnSpaceshipLeft()}>L</button>
                    <button className='control-btn' onClick={() => moveSpaceshipBackward()}>B</button>
                    <button className='control-btn' onClick={() => turnSpaceshipRight()}>R</button>
                </div>  
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentPosition : state.currentPosition
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        moveSpaceshipForward : () => dispatch(moveForward()),
        moveSpaceshipBackward : () => dispatch(moveBackward()),
        turnSpaceshipLeft : () => dispatch(turnLeft()),
        turnSpaceshipRight : () => dispatch(turnRight())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Controls)