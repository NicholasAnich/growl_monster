import React from 'react'
import Img from '../img/img.png'
import Attach from '../img/attach.png'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <img src={Attach} alt="attach feature icon" />
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <img src={Img} alt="img feature icon" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input