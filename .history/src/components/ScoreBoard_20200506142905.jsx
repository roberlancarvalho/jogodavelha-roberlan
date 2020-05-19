import React from 'react'
import {FaTimes, FaRegCircle} from 'react-icons/fa'

import './scoreBoard.css'

export default props => {


    return (
        <div className="score-board">
            <label>Jogador <FaTimes className="icon-x" /> vitórias: {props.wins[0]}</label>
            <label>Jogador <FaRegCircle className="icon-o" /> vitórias: {props.wins[1]}</label>
        </div>
    )
}