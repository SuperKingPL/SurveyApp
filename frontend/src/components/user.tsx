interface userProps {
    name: string,
    customStatus: string,
    avatar: string
}

const User = (props: userProps) => {
    return (
        <div className="userWrapperContainer">
            <div className="userAvatar" style={{width: 45, height: 45, minWidth: 45, maxWidth: 45, minHeight: 45, maxHeight: 45, backgroundImage: `url(${props.avatar})`}}></div>
                <div className="userStatus">
            </div>
            <div className="userDetails">
                <span className="username">{props.name}</span>
                <span className="userCustomStatus">{props.customStatus}</span>
            </div>
        </div>
    )
}

export default User