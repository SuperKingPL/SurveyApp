import UsernameBadge from "./usernameBadge"

interface messageProps {
    author: string,
    content: string
}

const Message = (props: messageProps) => {
    return (
        <div className="messageContainer">
            <div className="userAvatar" style={{width: 55, height: 55, minWidth: 55, maxWidth: 55, minHeight: 55, maxHeight: 55, backgroundImage: "url(https://cdn-icons-png.flaticon.com/512/149/149071.png)"}}></div>
            <div className="messageContent">
                <span className="messageAuthor">{props.author} <UsernameBadge badge="Personel" verified={true}/></span>
                <span className="messageText">{props.content}</span>
            </div>
        </div>
    )
}

export default Message