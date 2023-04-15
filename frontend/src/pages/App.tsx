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

function App() {
  return (
    <div className='appMount'>
      <div className="ServersBar">
        <ServerThumbnail isHome={true}/>
        <ServerThumbnail iconUrl='https://i.pinimg.com/originals/f3/a6/e5/f3a6e57461a25a3e3031349e8a217f51.jpg'/>
        <ServerThumbnail isDashboard={true}/>
      </div>
      <div className="Content">
        <div className="ChannelsBar">
          <div className="Mount1">
            <div className="ServerQuickInfo">
              <ServerBadge/>Survey Support
            </div>
            <div className="ServerBanner"/>

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
          <Message author='Michał Kwiatkowski' content='Lubisz jamniki?'/>
          <Message author='Qx' content='nie'/>
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