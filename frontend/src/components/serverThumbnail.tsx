import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded'
import { useDispatch } from 'react-redux/es/exports';
import Modal from './modal';
import { closeModal, openModal } from '../store/modal';
import { ModalState } from "../store/modal";
import { GuildService } from '../services/GuildService';
import Tooltip from '@mui/material/Tooltip/Tooltip';

interface serverThumbnailProps {
    name?: string,
    isHome?: boolean
    isDashboard?: boolean,
    isCreateServer?: boolean,
    iconUrl?: string
}

const ServerThumbnail = (props: serverThumbnailProps) => {

    const dispatch = useDispatch();
    
    const OpenAddServerModal = () => {
        
        const createServer = () => {
            GuildService.CreateServer("Test server");
            dispatch(closeModal());
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
        </>
        ));
    }



    var component = <div className="serverThumb" style={{backgroundImage: `url(${props.iconUrl})`}}></div> 

    if (props.isHome) {
        return (
            <Tooltip title="Strona główna">
                <div className="serverThumb" style={{backgroundImage: `url(${props.iconUrl})`}}>
                    <img src='https://cdn.discordapp.com/attachments/1023265697293406320/1105918466696949760/SurveyWhite.png' width={31} height={34} style={{filter: 'brightness(1000%)'}}/>
                </div>
            </Tooltip>
        )
    } else if (props.isDashboard) {
        return (
            <Tooltip title="Panel użytkownika">
                <div className="serverThumb">
                    <SpaceDashboardRoundedIcon htmlColor='white' fontSize='large'/>
                </div>
            </Tooltip>
        )
    } else if (props.isCreateServer) {
        return (
            <Tooltip title="Dodaj serwer">
                <div className="serverThumb" style={{marginLeft: 'auto'}} onClick={OpenAddServerModal}>
                <AddBoxRoundedIcon htmlColor='white' fontSize='large'/>
                </div>
            </Tooltip>
        )
    } else {
        return (
            <Tooltip title={props.name}>
                <div className="serverThumb" style={{backgroundImage: `url(${props.iconUrl})`}}>
                <div className="activeServerThumb"></div>
                </div>
            </Tooltip>
        )
    }
}

export default ServerThumbnail