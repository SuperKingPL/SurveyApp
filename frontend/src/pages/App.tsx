import '../styles/App.css';
import '../styles/theme.css'
import Message from '../components/message';
import RoleGroup from '../components/rolegroup';
import {Channel, channelType} from '../components/channel';
import ServerBadge from '../components/serverBadge';
import User from '../components/user';
import TextInput from '../components/textInput';
import SelfUserInfo from '../components/selfUserInfo';
import ServerThumbnail from '../components/serverThumbnail';
import { useEffect, useState } from 'react';
import { socket } from '../scripts/socket';
import { fetchUserByID } from '../services/userService';
import { convertTokenToID, getUserToken } from '../services/authService';
import Cookies from 'universal-cookie';
import Modal from '../components/modal';
import { fetchMessageByID } from '../services/messageService';
import { getMessages } from '../services/channelService';

export default () => {

  const [Messages, setMessages] = useState([]);
  const [UserServers, setUserServers] = useState([]);

  useEffect(() => {
    const cookies = new Cookies();
  
    const t = cookies.get("token"); 
  
  
    if (t == undefined) {
      window.location.href = "/login";
      return null;
    }

    socket.connect();

    getMessages("1").then((res: []) => {
      
      for (var i = 0; i < res.length; i++) {
        const id = res[i];
        setMessages(current => [...current, id])
      }
    })

    socket.on("sendMessage", (data: string) => {
      fetchMessageByID(data).then((msg) => {
        setMessages(current => [...current, msg])
      })
    });

    fetchUserByID(convertTokenToID(getUserToken())).then((e) => {
      setUserServers(e["guilds"]);
    })
  }, [])

  return (
    <div className='appMount'>

    <Modal/>

      <div className="ServersBar">
        <ServerThumbnail isHome={true}/>
        {UserServers.map(server => <ServerThumbnail/>)}
        <ServerThumbnail isCreateServer={true}/>
        <ServerThumbnail isDashboard={true}/>
      </div>
      <div className="Content">
        <div className="ChannelsBar">
          <div className="Mount1">
            <div className="ServerQuickInfo">
              <ServerBadge/>Survey Support
            </div>
          </div>
          <div className="Mount2">
            <div className="ServerBanner"/>

            <Channel name='chat' emoji='😊' type={channelType.text}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
            <Channel name='kanał głosowy' emoji='🔈' type={channelType.voice}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
            <Channel name='media' emoji='📷' type={channelType.text}/>
            
          </div>
          <div className="Mount3">
            <SelfUserInfo/>
          </div>
        </div>
        <div className="ContentBar">
          <div className="ChannelQuickInfo">
            #chat
          </div>
          <div className="messagesContainer" id="messagesContainer">
            {Messages.map(msg => <Message key={msg["_id"]} author={msg["author"]} content={msg["content"]} timestamp={msg["sendTimestamp"]}/>)}
          </div>
          <TextInput/>
        </div>
        <div className="MembersBar">
          <RoleGroup name="Administrator"/>
          <User name="SuperKing" customStatus='💯 Currently developing...' avatar='https://cdn.discordapp.com/avatars/726424660014530626/0d4accc92e2754ec2df9d1e5d45d319a.webp'/>
          <RoleGroup name="Moderator"/>
          <User name="Test user #1" customStatus='status' avatar='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
          <User name="Test uesr #2" customStatus='status' avatar='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
        </div>
      </div>
    </div>
  );
}