import { useAppDispatch } from "../scripts/hooks"
import { ShowContextMenu } from "../store/ContextMenu";
import UsernameBadge from "./UsernameBadge"

interface userProps {
    name: string,
    customStatus: string,
    avatar: string
}

const User = (props: userProps) => {

    const dispatch = useAppDispatch();

    return (
        <div className="userWrapperContainer" onContextMenu={(e) => {
            dispatch(ShowContextMenu({x: e.pageX, y: e.pageY}))
        }}>
            <div className="userAvatar" style={{width: 45, height: 45, minWidth: 45, maxWidth: 45, minHeight: 45, maxHeight: 45, backgroundImage: `url(${props.avatar})`}}></div>
                <div className="userStatus">
            </div>
            <div className="userDetails">
                <span className="username">{props.name} </span>
                <span className="userCustomStatus">{props.customStatus}</span>
                {/* <UsernameBadge badge="BOT"/> */}
            </div>
        </div>
    )
}

export default User