import { useEffect, useState } from "react"
import UsernameBadge from "./UsernameBadge"
import UserService from "../services/UserService";
import { format, isToday, isYesterday } from "date-fns";
import { Tooltip, Zoom } from "@mui/material";
import { pl } from "date-fns/locale";

interface messageProps {
    author: string,
    content: string,
    timestamp: Date
}

const Message = (props: messageProps) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    useEffect(() => {
        new UserService(props.author).Fetch().then((e) => {
            setUser(e);
            setLoading(false);
        })
    }, [])


    function GetReadeableTimestamp(timestamp: Date) {
        var Prefix = ""
        if (isToday(timestamp)) {
            Prefix = "Dziś o";
        } else if (isYesterday(timestamp)) {
            Prefix = "Wczoraj o"
        } else {
            Prefix = format(timestamp, "dd.MM.y")
        }
        return `${Prefix} ${format(props.timestamp, "HH:mm")}`
    }

    if (!loading) {
        return (
            <div className="messageContainer">
                <div className="userAvatar" style={{width: 45, height: 45, minWidth: 45, maxWidth: 45, minHeight: 45, maxHeight: 45, backgroundImage: `url(${user['avatarUrl']})`}}></div>
                <div className="messageContent">
                    <div className="messageAuthor">
                        {user["username"]}
                        <UsernameBadge badge="Personel" verified={true}/>
                        <Tooltip title={format(props.timestamp, "iiii, dd MMMM y HH:mm", {locale: pl})} disableInteractive arrow placement="top">
                            <p>{GetReadeableTimestamp(props.timestamp)}</p>
                        </Tooltip>
                    </div>
                    <span className="messageText">{props.content}</span>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Message