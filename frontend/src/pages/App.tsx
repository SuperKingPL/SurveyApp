import '../styles/App.css';
import '../styles/theme.css'
import Message from '../components/Message';
import RoleGroup from '../components/RoleGroup';
import { Channel, channelType } from '../components/Channel';
import ServerBadge from '../components/ServerBadge';
import User from '../components/User';
import TextInput from '../components/TextInput';
import SelfUserInfo from '../components/SelfUserInfo';
import ServerThumbnail from '../components/ServerThumbnail';
import { useEffect, useState } from 'react';
import { socket } from '../scripts/socket';
import { Self } from '../services/UserService';
import Cookies from 'universal-cookie';
import Modal from '../components/Modal';
import MessageService from '../services/MessageService';
import ChannelService, { IChannel } from '../services/ChannelService';
import { DisplayDevInfo } from '../scripts/dev';
import { useAppSelector } from '../scripts/hooks';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default () => {

    const [Messages, setMessages] = useState([]);
    const [UserGuilds, setUserGuilds] = useState([]);

    const ActiveGuild = useAppSelector(state => state.CurrentGuild);
    const [GuildChannels, setGuildChannels] = useState([]);

    const ActiveChannel: number = useAppSelector(state => state.CurrentChannel).CurrentChannel;

    useEffect(() => {
        new ChannelService(ActiveChannel.toString()).GetMessages().then((res: []) => {

            var msg = [];
            for (var i = 0; i < res.length; i++) {
                const id = res[i];
                msg.push(id);
            }
            setMessages(msg);
        })
    }, [ActiveChannel]);

    useEffect(() => {
        const fetchChannels = async () => {
            var guildChannels = []
            for (const channel in ActiveGuild["CurrentGuild"]["channels"]) {
                const channelID = ActiveGuild["CurrentGuild"]["channels"][channel];
                const e = await new ChannelService(channelID).Fetch();
                guildChannels.push(e);
            };
            setGuildChannels(guildChannels);
        };

        fetchChannels();
    }, [ActiveGuild])

    useEffect(() => {
        const cookies = new Cookies();

        const t = cookies.get("token");

        if (t == undefined) {
            window.location.href = "/login";
            return null;
        }

        socket.on("SEND_MESSAGE", (data) => {
            new MessageService(data["id"]).Fetch().then((msg) => {
                setMessages(current => [...current, msg])
            })
        });
        socket.on("UPDATE_GUILD_LIST", () => {
            Self.GetUserGuilds().then((e) => {
                setUserGuilds(e);
            });
        });

        Self.GetUserGuilds().then((e) => {
            setUserGuilds(e);
        });

        DisplayDevInfo();

    }, [])

    return (
        <div className='appMount'>
            <Modal />
            <div className="ServersBar">
                <ServerThumbnail isHome={true} />
                {UserGuilds.map(server => server != null ? <ServerThumbnail iconUrl='https://cdn.discordapp.com/attachments/1023265697293406320/1106903348663291964/the-sandbox-sand-logo.png' name={server.name} key={server._id} id={server._id} /> : null)}
                <ServerThumbnail isCreateServer={true} />
                <ServerThumbnail isDashboard={true} />
            </div>
            <div className="Content">
                <div className="ChannelsBar">
                    <div className="Mount1">
                        <div className="ServerQuickInfo">
                            {<ServerBadge />}
                            <div className="flexColumn">
                                {ActiveGuild.CurrentGuild.name}
                                <div className="flexRow">
                                    <div className="circle green" /> 3
                                    <div className="circle white" style={{ marginLeft: "20px" }} /> 3
                                </div>
                            </div>
                            <KeyboardArrowDownRoundedIcon style={{ marginLeft: 'auto', marginRight: '10px' }} fontSize='medium' />
                        </div>
                    </div>
                    <div className="Mount2">
                        <div className="ServerBanner" />
                        {GuildChannels.map((ch: IChannel) => <Channel key={ch._id} id={ch._id} type={channelType.text} name={ch.name} emoji={ch.emoji} />)}
                    </div>
                    <div className="Mount3">
                        <SelfUserInfo />
                    </div>
                </div>
                <div className="ContentBar">
                    <div className="ChannelQuickInfo">
                        <SettingsIcon fontSize={"large"} /> Ustawienia użytkownika
                    </div>
                    <div className="messagesContainer" id="messagesContainer">
                        {Messages.map(msg => <Message key={msg["_id"]} author={msg["author"]} content={msg["content"]} timestamp={msg["sendTimestamp"]} />)}
                    </div>
                    <TextInput />
                </div>
                <div className="MembersBar">
                    <RoleGroup name="Administrator" />
                    <User name="SuperKing" customStatus='💯 Currently developing...' avatar='https://cdn.discordapp.com/attachments/1023265697293406320/1130478600257282118/SuperKing.jpg' />
                    <RoleGroup name="Moderator" />
                    <User name="Test user #1" customStatus='status' avatar='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                    <User name="Test user #2" customStatus='status' avatar='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                </div>
            </div>
        </div>
    );
}