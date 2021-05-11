import React from 'react'
import './ButtonNeu.scss';
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonNeu = () => {
  return (
    <div className="neu-background">
      <h1>Neumorphism</h1>
      <a href="#" className="neu-button">
        <FontAwesomeIcon icon={ faPowerOff } />
      </a>  
    </div>
  )
}

export default ButtonNeu;
