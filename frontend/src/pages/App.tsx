import React from 'react';
import '../styles/App.css';
import '../styles/theme.css'
import Message from '../components/message';
import RoleGroup from '../components/rolegroup';

function App() {
  return (
    <div>
      <div className="ServersBar"></div>
      <div className="Content">
        <div className="ChannelsBar">
          <div className="ServerQuickInfo">
            Discord Official Server
          </div>
          <div className="ServerBanner"></div>
        </div>
        <div className="ContentBar">
          <div className="ChannelQuickInfo"></div>
          <Message/>
          <Message/>
        </div>
        <div className="MembersBar">
          <RoleGroup/>
          <RoleGroup/>
        </div>
      </div>
    </div>
  );
}

export default App;