import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded'
import { useDispatch } from 'react-redux/es/exports';
import Modal from './modal';
import { closeModal, openModal } from '../store/modal';
import { ModalState } from "../store/modal";

interface serverThumbnailProps {
    isHome?: boolean
    isDashboard?: boolean,
    isCreateServer?: boolean,
    iconUrl?: string
}

const ServerThumbnail = (props: serverThumbnailProps) => {

    const dispatch = useDispatch();
    
    const OpenAddServerModal = () => {
        
        dispatch(openModal(
        <>
            <h2>Dołącz do serwera</h2>
            <p style={{fontSize: '15px'}}>Wprowadź zaproszenie poniżej, aby dołączyć do istniejącego serwera</p>
            <input placeholder="https://survey.app/G7YkgeVV"/>
            <div className="img" style={{width: "100%", height: "120px", backgroundSize: "cover", backgroundImage: "url('https://img.freepik.com/free-vector/cartoon-galaxy-background_23-2148984167.jpg')", backgroundPosition: "center", margin: "20px"}}/>
            <div className="actionBar">
                <button onClick={() => {dispatch(closeModal())}}>Dołącz do serwera</button>
            </div>
        </>));
    }



    var component = <div className="serverThumb" style={{backgroundImage: `url(${props.iconUrl})`}}></div> 

    if (props.isHome) {
        return (
            <div className="serverThumb" style={{backgroundImage: `url(${props.iconUrl})`}}>
                <img src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png' width={45} height={34} style={{filter: 'brightness(1000%)'}}/>
            </div>
        )
    } else if (props.isDashboard) {
        return (
            <div className="serverThumb">
                <SpaceDashboardRoundedIcon htmlColor='white' fontSize='large'/>
            </div>
        )
    } else if (props.isCreateServer) {
        return (
            <div className="serverThumb" style={{marginLeft: 'auto'}} onClick={OpenAddServerModal}>
                <AddBoxRoundedIcon htmlColor='white' fontSize='large'/>
            </div>
        )
    } else {
        return (
            <div className="serverThumb" style={{backgroundImage: `url(${props.iconUrl})`}}/>
        )
    }
}

export default ServerThumbnail