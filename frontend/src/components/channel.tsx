import TagRoundedIcon from '@mui/icons-material/TagRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import { useAppDispatch } from '../scripts/hooks';
import { SetCurrentChannel } from '../store/CurrentChannel';

enum channelType {
    text,
    voice
}

interface ChannelProps {
    id: number,
    name: string,
    emoji: string,
    type: channelType
}

const Channel = (props: ChannelProps) => {

    var channelTypeIcon: JSX.Element

    const dispatch = useAppDispatch();

    if (props.type == channelType.text) {
        channelTypeIcon = <TagRoundedIcon htmlColor='white' className='channelTypeIcon'/>
    } else if (props.type == channelType.voice) {
        channelTypeIcon = <VolumeUpRoundedIcon htmlColor='white' className='channelTypeIcon'/>
    } else {
        channelTypeIcon = <QuestionMarkRoundedIcon htmlColor='white' className='channelTypeIcon'/>
    }

    return (
        <div className="channelContainer" onClick={() => {dispatch(SetCurrentChannel(props.id))}}>
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