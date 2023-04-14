interface messageProps {
    author: string,
    content: string
}

const Message = (props: messageProps) => {
    return (
        <div className="messageContainer">
            <div className="userAvatar" style={{width: 65, height: 65, minWidth: 65, maxWidth: 65, minHeight: 65, maxHeight: 65, backgroundImage: "url(https://image.api.playstation.com/cdn/EP1464/CUSA07669_00/jBeiHA5Cmkwq4OV4Pz9dkTKmiVC4WTB1.png?w=440&thumb=false)"}}></div>
            <div className="messageContent">
                <span className="messageAuthor">{props.author}</span>
                <span className="messageText">{props.content}</span>
            </div>
        </div>
    )
}

export default Message