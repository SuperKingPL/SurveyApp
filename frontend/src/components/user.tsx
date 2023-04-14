interface userProps {
    name: string,
    customStatus: string
}

const User = (props: userProps) => {
    return (
        <div className="userWrapperContainer">
            <div className="userAvatar" style={{width: 45, height: 45, minWidth: 45, maxWidth: 45, minHeight: 45, maxHeight: 45, backgroundImage: "url(https://image.api.playstation.com/cdn/EP1464/CUSA07669_00/jBeiHA5Cmkwq4OV4Pz9dkTKmiVC4WTB1.png?w=440&thumb=false)"}}></div>
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