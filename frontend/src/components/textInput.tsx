import DataSaverOnRoundedIcon from '@mui/icons-material/DataSaverOnRounded';
import GifBoxRoundedIcon from '@mui/icons-material/GifBoxRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import { useEffect, useRef } from 'react';
import ChannelService from '../services/ChannelService';
import { useAppSelector } from '../scripts/hooks';

const TextInput = () => {

    const textInput = useRef<HTMLInputElement>(null);
    const CurrentChannel = useAppSelector(state => state.CurrentChannel.CurrentChannel);

    useEffect(() => {
        textInput.current.onkeydown = async (event) => {
            if (event.key === "Enter") {
                console.log(CurrentChannel.toString());
                console.log(`Sending message...\nChannel: ${CurrentChannel.toString()}`)
                new ChannelService(CurrentChannel.toString()).SendMessage(textInput.current.value);
                textInput.current.value = "";
            }
        }
    }, [CurrentChannel])

    return (
        <div className="textInputContainer">
            <div className="textInput">
                <DataSaverOnRoundedIcon htmlColor='var(--disabled)' fontSize='large' className='interactableIcon'/>
                <input placeholder="Napisz na #chat..." ref={textInput}/>
                <GifBoxRoundedIcon htmlColor='var(--disabled)' fontSize='large' className='interactableIcon'/>
                <EmojiEmotionsRoundedIcon htmlColor='var(--disabled)' fontSize='large' className='interactableIcon'/>
            </div>
        </div>
    )
}

export default TextInput