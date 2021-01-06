import React, {useEffect} from 'react'

import start from '../assets/start2.png'
import pokeIntroMusic from "../assets/PokeIntroMusic.mp3"

const Start = props => {

    useEffect(() => {
        const audioEl = document.querySelector(".intro-tunes")
        audioEl.loop = true
        audioEl.volume = 0.05
        audioEl.play()
    },[])

    return (
        <div id="logo-wrapper">
                <img src={start} id="start-button"/>
                <div id="logo">
                </div>
                <audio className="intro-tunes">
                    <source src={pokeIntroMusic}></source>
                </audio>
        </div>
    )
}

export default Start