import { useAppDispatch } from "../scripts/hooks"
import { ShowContextMenu } from "../store/ContextMenu";
import { OpenModal } from "../store/modal";
import UsernameBadge from "./UsernameBadge"

interface userProps {
    name: string,
    customStatus: string,
    avatar: string
}

const User = (props: userProps) => {

    const dispatch = useAppDispatch();

    const showProfile = () => {
        dispatch(OpenModal("siema"));
    };

    return (
        <div className="userWrapperContainer" onContextMenu={(e) => {
            dispatch(ShowContextMenu({x: e.pageX, y: e.pageY}))
        }} onClick={showProfile}>
            <div className="userAvatar" style={{width: 40, height: 40, minWidth: 40, maxWidth: 40, minHeight: 40, maxHeight: 40, backgroundImage: `url(${props.avatar})`}}></div>
                <div className="userStatus">
            </div>
            <div className="userDetails">
                <span className="username">{props.name} </span>
                {/* <span className="userCustomStatus">{props.customStatus}</span> */}
                {/* <UsernameBadge badge="BOT"/> */}
            </div>
        </div>
    )
}

export default User