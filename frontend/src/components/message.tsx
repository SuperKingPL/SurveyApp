interface messageProps {
    author: string,
    content: string
}

const Message = (props: messageProps) => {
    return (
        <div className="messageContainer">
            <div className="userAvatar" style={{width: 65, height: 65, minWidth: 65, maxWidth: 65, minHeight: 65, maxHeight: 65, backgroundImage: "url(https://cdn-icons-png.flaticon.com/512/149/149071.png)"}}></div>
            <div className="messageContent">
                <span className="messageAuthor">{props.author}</span>
                <span className="messageText">{props.content}</span>
            </div>
        </div>
    )
}

export default Message