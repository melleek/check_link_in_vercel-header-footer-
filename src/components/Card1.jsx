import React from 'react'

function Card1({img, p}) {
  return (
    <div>
      <div>
        <img src={img} alt="" />
        <h1>{p}</h1>
      </div>
    </div>
  )
}

export default Card1
