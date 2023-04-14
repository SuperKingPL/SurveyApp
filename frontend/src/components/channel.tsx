import TagRoundedIcon from '@mui/icons-material/TagRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';

enum channelType {
    text,
    voice
}

interface channelProps {
    name: string,
    emoji: string,
    type: channelType
}

const Channel = (props: channelProps) => {

    var channelTypeIcon: JSX.Element

    if (props.type == channelType.text) {
        channelTypeIcon = <TagRoundedIcon htmlColor='white' className='channelTypeIcon'/>
    } else if (props.type == channelType.voice) {
        channelTypeIcon = <VolumeUpRoundedIcon htmlColor='white' className='channelTypeIcon'/>
    } else {
        channelTypeIcon = <QuestionMarkRoundedIcon htmlColor='white' className='channelTypeIcon'/>
    }

    return (
        <div className="channelContainer">
            <span className="channelEmoji">{props.emoji}</span>
            <span className="channelName">{props.name}</span>
            {channelTypeIcon}
        </div>
    )
}

export {
    Channel,
    channelType
}