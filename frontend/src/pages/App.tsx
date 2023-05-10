import '../styles/App.css';
import '../styles/theme.css'
import Message from '../components/message';
import RoleGroup from '../components/rolegroup';
import {Channel, channelType} from '../components/channel';
import ServerBadge from '../components/serverBadge';
import SkeletonPlaceholder from '../components/skeleton';
import User from '../components/user';
import TextInput from '../components/textInput';
import SelfUserInfo from '../components/selfUserInfo';
import ServerThumbnail from '../components/serverThumbnail';
import { Component, useEffect, useState } from 'react';
import { socket } from '../scripts/socket';
import { fetchUserByID } from '../services/userService';
import { convertTokenToID, getUserToken } from '../services/authService';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/modal';
import { useDispatch } from 'react-redux';
import { closeModal } from '../store/modal';
import { fetchMessageByID } from '../services/messageService';

export default () => {

  const [Messages, setMessages] = useState([]);
  const [UserServers, setUserServers] = useState([]);
  const [OpenModal, SetOpenModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const cookies = new Cookies();
  
    const t = cookies.get("token"); 
  
  
    if (t == undefined) {
      window.location.href = "/login";
      return null;
    }

    socket.connect();

    // setTimeout(() => {
    //   setModal(true);
    // }, 1000);

    socket.on("sendMessage", (data: string) => {
      fetchMessageByID(data).then((msg) => {
        setMessages(current => [...current, msg])
        document.getElementById("messagesContainer").scrollTop = document.getElementById("messagesContainer").scrollHeight;
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
            {Messages.map(msg => <Message key={msg["id"]} author={msg["author"]} content={msg["content"]}/>)}
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