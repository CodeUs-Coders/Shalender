import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './components/common/images/logo.png';

class Loading extends Component<any> {

  componentDidMount(){
    this.goMain();
  }

  goMain = () => {
    setTimeout(() => {
      this.props.history.push('/mainPage');
    }, 6200);
  }

  render() {
    return (
      <Animation>
        <div className="logo">
          <img src={logo} alt=""/>
        </div>

        <div className="words">
          <div className="word">Share</div>
          <div className="word">Your</div>
          <div className="word">Calendar</div>
          <div className="word">Shalendar</div>
        </div>
      </Animation>
    )
  }
}

export default Loading;

const Animation = styled.div`
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  transform: translateY(22vh);
  animation: backColor 6s;
  animation-delay: 4.5s;
  @keyframes backColor{
    0% {
      background-color: white;
    }
    5% {
      background-color: #00e6ac;
    }
    20% {
      background-color: #00e6ac;
    }
    30% {
      background-color: white;
    }
    80% {
      background-color: white;
    }
  }

  div{
    box-sizing: content-box;
  }

  .logo{
    display: flex;
    margin: 5vh;
    background-color: white;
    border: 3px solid white;
    border-radius: 29px;
    img{
      width: 150px;
    }
  }

  .words{
    text-align:center;
    display: flex;
    width: 300px;
    height: 100px;
    justify-content: center;
    align-items: center;

    .word{
      opacity: 0;
      animation: motion 6s;
      position: absolute;
      font-size: 3rem;
    }
    .word:nth-child(1) {
      animation-delay: 0s;
    }
    .word:nth-child(2) {
      animation-delay: 1.5s;
    }
    .word:nth-child(3) {
      animation-delay: 3s;
    }
    .word:nth-child(4) {
      color: white;
      
      animation-delay: 4.5s;
    }
  }

  @keyframes motion {
    0% {
    opacity: 0;
      transform: translateY(10px);
    }
    
    5% {
      opacity: 1;
      transform: translateY(0);
    }
    
    20% {
      opacity: 1;
      transform: translateY(0);
    }
    
    30% {
      opacity: 0;
      transform: translateY(-50px);
    }
    
    80% {
      opacity: 0;
      transform: translateY(-50px);
    }
  }
`