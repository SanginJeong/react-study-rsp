import React from 'react'
import { useNavigate } from 'react-router-dom'
const Start = () => {

  const navigate = useNavigate();
  const startGame = () => {
    navigate('/main');
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className='title'>빵빵이를 이겨라~</h1>
        <div>
          <ul>
            <h2>규칙</h2>
            <li>당신은 옥지가 됩니다.</li>
            <li>가위,바위,보 중에 선택하면 컴퓨터(빵빵이)가 랜덤으로 냅니다.</li>
            <li>3판 2선승제 입니다.</li>
          </ul>
        </div>

        <button onClick={()=>{startGame()}}>게임 시작!</button>
      </div>
    </div>
  )
}

export default Start