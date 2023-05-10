import MicRoundedIcon from '@mui/icons-material/MicRounded';
import MicOffRoundedIcon from '@mui/icons-material/MicOffRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import { fetchUserByID } from "../services/userService";
import { useState, useEffect } from 'react';
import { convertTokenToID, getUserToken } from '../services/authService';

const SelfUserInfo = () => {

    var MicrophoneMuted: boolean = false
    var SpeakersMuted: boolean = false

    const [user, setUser] = useState({
        "avatarUrl": "https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3",
        "discriminator": "0000",
        "username": "Survey user"
    });
    
    useEffect(() => {
        fetchUserByID(convertTokenToID(getUserToken())).then((json) => {
            setUser(json);
            console.log(json);
        });
    }, [])
    console.log(convertTokenToID(getUserToken()))
    return (
        <div className="selfUserInfo">
            <img src={user["avatarUrl"]} className="userAvatar" width={40} height={40} style={{minWidth: 40, minHeight: 40, maxWidth: 40, maxHeight: 40}}/>
            <div className="user">
                <span className="username" style={{color: "white"}}>{user["username"]} <HandymanRoundedIcon/></span>
                <span className="discriminator" style={{color: "var(--disabled)"}}>#{user["discriminator"]}</span>
            </div>
            {!MicrophoneMuted ? <MicRoundedIcon htmlColor='var(--disabled)' className='interactableIcon'/> : <MicOffRoundedIcon htmlColor='var(--disabled)' className='interactableIcon'/>}
            {!SpeakersMuted ? <VolumeUpRoundedIcon htmlColor='var(--disabled)' className='interactableIcon'/> : <VolumeOffRoundedIcon htmlColor='var(--disabled)' className='interactableIcon'/>}
            <SettingsRoundedIcon htmlColor='var(--disabled)' className='interactableIcon'/>
        </div>
    )
}

export default SelfUserInfo