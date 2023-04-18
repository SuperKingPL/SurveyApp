import DataSaverOnRoundedIcon from '@mui/icons-material/DataSaverOnRounded';
import GifBoxRoundedIcon from '@mui/icons-material/GifBoxRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';

const TextInput = () => {
    return (
        <div className="textInputContainer">
            <div className="textInput">
                <DataSaverOnRoundedIcon htmlColor='var(--disabled)' fontSize='large' className='interactableIcon'/>
                <input placeholder="Napisz na #chat..."/>
                <GifBoxRoundedIcon htmlColor='var(--disabled)' fontSize='large' className='interactableIcon'/>
                <EmojiEmotionsRoundedIcon htmlColor='var(--disabled)' fontSize='large' className='interactableIcon'/>
            </div>
        </div>
    )
}

export default TextInput