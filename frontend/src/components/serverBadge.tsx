import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import {Tooltip, Typography} from '@mui/material/';

const ServerBadge = () => {
    return (
        <Tooltip title={<Typography fontSize={15}>Zweryfikowano </Typography>} arrow disableInteractive>
            <VerifiedRoundedIcon className='serverBadge'/>
        </Tooltip>
        
    )
}

export default ServerBadge