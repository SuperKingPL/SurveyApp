import MicRoundedIcon from '@mui/icons-material/MicRounded';
import MicOffRoundedIcon from '@mui/icons-material/MicOffRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

const SelfUserInfo = () => {

    var MicrophoneMuted: boolean = false
    var SpeakersMuted: boolean = false

    return (
        <div className="selfUserInfo">
            <img src='https://cdn.discordapp.com/avatars/726424660014530626/0d4accc92e2754ec2df9d1e5d45d319a.webp' className="userAvatar" width={40} height={40} style={{minWidth: 40, minHeight: 40, maxWidth: 40, maxHeight: 40}}/>
            <div className="user">
                <span className="username" style={{color: "white"}}>SuperKing</span>
                <span className="discriminator" style={{color: "var(--disabled)"}}>#0000</span>
            </div>
            {!MicrophoneMuted ? <MicRoundedIcon htmlColor='var(--disabled)' className='interactableIcon'/> : <MicOffRoundedIcon htmlColor='var(--disabled)' className='interactableIcon'/>}
            {!SpeakersMuted ? <VolumeUpRoundedIcon htmlColor='var(--disabled)' className='interactableIcon'/> : <VolumeOffRoundedIcon htmlColor='var(--disabled)' className='interactableIcon'/>}
            <SettingsRoundedIcon htmlColor='var(--disabled)' className='interactableIcon'/>
        </div>
    )
}

export default SelfUserInfo