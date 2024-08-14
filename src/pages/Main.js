import React, { useState,useEffect } from 'react'
import Box from '../component/Box';
const Main = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [isEnd, setIsEnd] = useState(false);

  const [score, setScore] = useState({
    user : 0,
    computer : 0,
  });

  const position = {
    scissors : '0px',
    rock : '605px',
    paper : '292px',
  }

  const image = {
    BBang: 'url(/images/BBang.png)',
    Okji: 'url(/images/Okji.png)',
  }



  const play = (choice) => {
    const list = Object.keys(position);
    setUserChoice(position[choice]);

    // computer 랜덤 선택
    const index = ~~(Math.random()*3);
    const choiceC = list[index];
    setComputerChoice(position[choiceC]);
    
    setResult(judgement(choice, choiceC));
  }

  const judgement = (user, computer) => {
    if(user === computer) {
      return 'DRAW'
    } else if (user === 'rock') {
      return computer === 'scissors' ? 'WIN' : 'LOSE';
    } else if (user === 'scissors') {
      return computer === 'paper' ? 'WIN' : 'LOSE';
    } else if (user === 'paper') {
      return computer === 'rock' ? 'WIN' : 'LOSE';
    }
  }

  const resetGame = () => {
    setScore({ user: 0, computer: 0 });
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
    setIsEnd(false);
  };

  useEffect(() => {
    if (result === 'WIN') {
      setScore((prevScore) => {
        const newScore = { ...prevScore, user: prevScore.user + 1 };
        if (newScore.user === 2) setIsEnd(true);
        return newScore;
      });
    } else if (result === 'LOSE') {
      setScore((prevScore) => {
        const newScore = { ...prevScore, computer: prevScore.computer + 1 };
        if (newScore.computer === 2) setIsEnd(true);
        return newScore;
      });
    }
  }, [result]);

  const winnerMessage = score.user === 2 
  ? "유저 승!!" 
  : score.computer === 2 
  ? "컴퓨터 승!!" 
  : `${score.user}승 ${score.computer}패`;


  return (
    <div className="wrap">
      <div className="box_area">
        <Box player='옥지' choice={userChoice} image={image.Okji} result={result}/>
        <Box player='빵빵이' choice={computerChoice} image={image.BBang} result={result}/>
      </div>
      <div className={`btns ${isEnd ? 'hidden' : ''}`}>
        <button onClick={()=>{play('scissors')}} className="btn"><i class="fa-solid fa-hand-scissors"></i></button>
        <button onClick={()=>{play('rock')}} className="btn"><i class="fa-solid fa-hand-back-fist"></i></button>
        <button onClick={()=>{play('paper')}} className="btn"><i class="fa-solid fa-hand"></i></button>
      </div>
      <h1>{winnerMessage}</h1>
      {isEnd ? <button onClick={()=>{resetGame()}}>다시하기</button> : null}
    </div>
  )
}

export default Main