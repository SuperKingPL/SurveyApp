import DataSaverOnRoundedIcon from '@mui/icons-material/DataSaverOnRounded';
import GifBoxRoundedIcon from '@mui/icons-material/GifBoxRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import { useEffect, useRef } from 'react';
import { sendMessage } from '../services/channelService';

const TextInput = () => {

    const textInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        textInput.current.onkeydown = async (event) => {
            if (event.key === "Enter") {
                await sendMessage("1", textInput.current.value);
                textInput.current.value = "";
            }
        }
    }, [])

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