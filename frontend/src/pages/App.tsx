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
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import TextInput from '../components/textInput';
import SelfUserInfo from '../components/selfUserInfo';

function App() {
  return (
    <div>
      <div className="ServersBar"></div>
      <div className="Content">
        <div className="ChannelsBar">
          <div className="Mount1">
            <div className="ServerQuickInfo">
              <ServerBadge/>Discord Official Server
            </div>
            <div className="ServerBanner"></div>
            {/* <Popover id="create-channel-popover" open={}></Popover> */}

            <Channel name='chat' emoji='😊' type={channelType.text}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
          </div>
          <div className="Mount2">
            <SelfUserInfo/>
          </div>
        </div>
        <div className="ContentBar">
          <div className="ChannelQuickInfo">
            #Channel;
          </div>
          <Message author='Test user #1' content='Lubisz jamniki?'/>
          <Message author='Test user #2' content='nie'/>
          <SkeletonPlaceholder/>
          <TextInput/>
        </div>
        <div className="MembersBar">
          <RoleGroup name="Administrator"/>
          <User name="SuperKing" customStatus='Currently developing...' avatar='https://cdn.discordapp.com/avatars/726424660014530626/0d4accc92e2754ec2df9d1e5d45d319a.webp'/>
          <RoleGroup name="Moderator"/>
          <User name="Michał Kwiatkowski" customStatus='lol' avatar='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
          <User name="Qx" customStatus='xd' avatar='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
        </div>
      </div>
    </div>
  );
}

export default App;