import './App.css';
import { useState } from 'react';
import Box from './component/Box';

function App() {
  const [userChoice, setUserChoice] = useState(null);
  // const [computerChoice, setComputerChoice] = useState(null);
  const position = {
    scissors : '0px',
    rock : '680px',
    paper : '330px',
  }

  const play = (choice) => {
    setUserChoice(position[choice]);

    // const random = randomChoice();
    // setComputerChoice(position[random]);
  }

  // const randomChoice = () => {
  //   const list = Object.keys(position);
  //   let index = ~~(Math.random()*3);
  //   return list[index];
  // }
  return (
    <div className="wrap">
      <div className="box_area">
        <Box player='YOU' choice={userChoice}/>
        <Box player='COMPUTER'/>{/* 나중에 지우기 */}
        {/* <Box player='COMPUTER' choice={computerChoice}/> */}
      </div>
      <div className="btns">
        <button onClick={()=>{play('scissors')}} className="btn"><i class="fa-solid fa-hand-scissors"></i></button>
        <button onClick={()=>{play('rock')}} className="btn"><i class="fa-solid fa-hand-back-fist"></i></button>
        <button onClick={()=>{play('paper')}} className="btn"><i class="fa-solid fa-hand"></i></button>
      </div>
      <h1>WIN</h1>
    </div>
  );
}

export default App;