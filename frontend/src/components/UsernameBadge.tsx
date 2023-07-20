import { Tooltip } from '@mui/material';
import '../styles/UserInfo.css'
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';

interface usernameBadgeProps {
    verified?: boolean
    badge: string
}

const UsernameBadge = (props: usernameBadgeProps) => {
    return (
        <div className="usernameBadge">{props.verified ? <Tooltip title={`Zweryfikowany ${props.badge?.toLowerCase()}`}><VerifiedUserRoundedIcon fontSize='small' style={{transform: 'scale(80%)'}}/></Tooltip> : null} {props.badge}</div>
    )
}

export default UsernameBadge