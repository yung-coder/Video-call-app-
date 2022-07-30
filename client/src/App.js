import React from 'react';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import Github from './github.svg'

const App = () => {

  return (
    <div>
      <a href="https://github.com/yung-coder?tab=repositories" className='Logo' target='blank'><img src={Github} alt="Github" /></a>
      <h1 className='Heading'>Videocall</h1>
      <VideoPlayer/>
      <hr />
      <Options>
         <Notifications/>
      </Options>
    </div>
  );
};

export default App;
