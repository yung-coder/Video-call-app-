import React from 'react'
import { useContext } from 'react'
import { SocketContext } from '../Context'
const Notifications = () => {
  const { answerCall,call, callAccepted }= useContext(SocketContext)

  return (
    <>
      <div className='Notifications'>
        {call.isReceivingCall && !callAccepted &&(
            <div className='answer'>
              <h1>{call.name} is calling</h1>
              <button onClick={answerCall} className="btn">
                Answer
              </button>
            </div>
        )}
      </div>
    </>
  )
}

export default Notifications

