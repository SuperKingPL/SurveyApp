import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded'
import { useDispatch } from 'react-redux/es/exports';
import Modal from './modal';
import { closeModal, openModal } from '../store/modal';
import { ModalState } from "../store/modal";
import { GuildService } from '../services/GuildService';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import { SetCurrentGuild } from '../store/CurrentGuild';
import { useRef } from 'react';

interface GuildThumbnailProps {
    name?: string,
    id?: number,
    isHome?: boolean,
    isDashboard?: boolean,
    isCreateServer?: boolean,
    iconUrl?: string
}

const ServerThumbnail = (props: GuildThumbnailProps) => {
    const dispatch = useDispatch();
    const guildInputName = useRef<HTMLInputElement>(null);

    const OpenAddServerModal = () => {
        
        const createServer = () => {

            const createGuildAction = () => {
                GuildService.CreateGuild(guildInputName.current.value);
            };

            dispatch(closeModal());
            dispatch(openModal(
                <>
                    <h2>Stwórz nowy serwer</h2>
                    <p style={{fontSize: '15px'}}>Hej! Jak ma się nazywać twój serwer?</p>
                    <input placeholder="Super ultra fajny giga kox serwer" ref={guildInputName}/>
                    <div className="actionBar">
                        <button onClick={createGuildAction}>Stwórz serwer!</button>
                    </div>
                </>
            ));
        }
        dispatch(openModal(
        <>
            <h2>Dołącz do serwera</h2>
            <p style={{fontSize: '15px'}}>Wprowadź zaproszenie poniżej, aby dołączyć do istniejącego serwera</p>
            <input placeholder="https://survey.app/G7YkgeVV"/>
            <div className="img" style={{width: "100%", height: "120px", backgroundSize: "cover", backgroundImage: "url('https://img.freepik.com/free-vector/cartoon-galaxy-background_23-2148984167.jpg')", backgroundPosition: "center", margin: "20px"}}/>
            <div className="actionBar">
                <button onClick={() => {dispatch(closeModal())}}>Dołącz do serwera</button>
                <button onClick={createServer}>Stwórz nowy serwer</button>
            </div>
            <h2></h2>
        </>
        ));
    }



    var component = <div className="serverThumb" style={{backgroundImage: `url(${props.iconUrl})`}}></div> 

    if (props.isHome) {
        return (
            <Tooltip title="Strona główna" placement='right'>
                <div className="serverThumb" style={{backgroundImage: `url(${props.iconUrl})`}}>
                    <img src='https://cdn.discordapp.com/attachments/1023265697293406320/1105918466696949760/SurveyWhite.png' width={21} height={24} style={{filter: 'brightness(1000%)'}}/>
                </div>
            </Tooltip>
        )
    } else if (props.isDashboard) {
        return (
            <Tooltip title="Panel użytkownika" placement='right'>
                <div className="serverThumb" style={{marginTop: 'auto', marginBottom: '17px'}}>
                    <SpaceDashboardRoundedIcon htmlColor='white' fontSize='medium'/>
                </div>
            </Tooltip>
        )
    } else if (props.isCreateServer) {
        return (
            <Tooltip title="Dodaj serwer" placement='right'>
                <div className="serverThumb" onClick={OpenAddServerModal}>
                    <AddBoxRoundedIcon htmlColor='white' fontSize='medium'/>
                </div>
            </Tooltip>
        )
    } else {
        return (
            <Tooltip title={props.name} placement='right'>
                <div className="serverThumb" style={{backgroundImage: `url(${props.iconUrl})`}} onClick={() => new GuildService(props.id).Fetch().then((e) => dispatch(SetCurrentGuild(e)))}>
                    <div className="activeServerThumb"></div>
                </div>
            </Tooltip>
        )
    }
}

export default ServerThumbnail