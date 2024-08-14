import React from 'react'

const Box = ({player, choice, image, result}) => {
 
  const imgStyle = {
    width: '290px',
    height: '100%',
    backgroundImage : choice ? 'url(/images/rsp.png)' : image,
    backgroundSize: 'cover',
    backgroundPosition : choice ? `${choice} 0px` : '0px 0px',
  }

  if(result !== 'DRAW' && result !== ''){
    if(player === '빵빵이') {
      result = result === 'WIN' ? 'LOSE' : 'WIN'  
    }
  }
  
  return (
    <div className={`box ${result}`}>
      <h2>{player}</h2>
      <div style={imgStyle}></div>
      <h2>{result}</h2>
    </div>
  )
}

export default Box