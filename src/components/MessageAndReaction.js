import React from 'react';
import userAvatar from '../images/me.png';
import aiAvavar from '../images/robot.jpg';
import ChatMessage from './ChatMessage';

function MessageAndReaction({message}) {

  // answered by @bendytree at https://stackoverflow.com/a/24810220
  const aiMessage = new Array(5).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36);});

  return ( 
    <div className='flex flex-col mt-5'>
      <div className="self-end">
      <ChatMessage avatar={userAvatar} message={message} />
      </div>

      <ChatMessage avatar={aiAvavar} message={aiMessage} />
    </div>
  )
}

export default MessageAndReaction