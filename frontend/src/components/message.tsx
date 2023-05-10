import { useEffect, useState } from "react"
import UsernameBadge from "./usernameBadge"
import { fetchUserByID } from "../services/userService";

interface messageProps {
    author: string,
    content: string
}

const Message = (props: messageProps) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchUserByID(props.author).then((u) => {
            setUser(u);
            setLoading(false);
        });
    }, [])

    if (!loading) {
        return (
            <div className="messageContainer">
                <div className="userAvatar" style={{width: 55, height: 55, minWidth: 55, maxWidth: 55, minHeight: 55, maxHeight: 55, backgroundImage: `url(${user['avatarUrl']})`}}></div>
                <div className="messageContent">
                    <span className="messageAuthor">{user["username"]} <UsernameBadge badge="Personel" verified={true}/></span>
                    <span className="messageText">{props.content}</span>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Message