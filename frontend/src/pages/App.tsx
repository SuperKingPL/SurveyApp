import React from 'react';
import '../styles/App.css';
import '../styles/theme.css'
import Message from '../components/message';
import RoleGroup from '../components/rolegroup';
import {Channel, channelType} from '../components/channel';
import ServerBadge from '../components/serverBadge';
import SkeletonPlaceholder from '../components/skeleton';
import { Button, Popover } from '@mui/material';
import User from '../components/user';

function App() {
  return (
    <div>
      <div className="ServersBar"></div>
      <div className="Content">
        <div className="ChannelsBar">
          <div className="ServerQuickInfo">
            <ServerBadge/>Discord Official Server
          </div>
          <div className="ServerBanner"></div>
          <button>Stwórz kanał</button>

          {/* <Popover id="create-channel-popover" open={}></Popover> */}

          <Channel name='chat' emoji='😊' type={channelType.text}/>
          <Channel name='media' emoji='📷' type={channelType.text}/>
        </div>
        <div className="ContentBar">
          <div className="ChannelQuickInfo"></div>
          <Message author='Jowisz' content='jestem jamnikiem'/>
          <Message author='Pocik' content='no ok'/>
          <SkeletonPlaceholder/>
        </div>
        <div className="MembersBar">
          <RoleGroup name="Administrator"/>
          <User name="SuperKing" customStatus='Currently developing...'/>
          <RoleGroup name="Moderator"/>
          <User name="SuperKing" customStatus='Currently developing...'/>
          <User name="SuperKing" customStatus='Currently developing...'/>
        </div>
      </div>
    </div>
  );
}

export default App;