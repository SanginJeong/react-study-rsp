import React from 'react'

const Box = ({player, choice}) => {
  const imgStyle = {
    width: '330px',
    height: '100%',
    backgroundImage : choice ? 'url(/images/rsp.png)' : 'url(/images/BBang.png)',
    backgroundSize: 'cover',
    backgroundPosition : choice ? `${choice} 0px` : '0px 300px',
  }

  return (
    <div className="box">
      <h2>{player}</h2>
      <div style={imgStyle}></div>
      <h2>WIN</h2>
    </div>
  )
}

export default Box