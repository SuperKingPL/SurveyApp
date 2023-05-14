import { useEffect, useState } from "react"
import UsernameBadge from "./usernameBadge"
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
                <div className="userAvatar" style={{width: 55, height: 55, minWidth: 55, maxWidth: 55, minHeight: 55, maxHeight: 55, backgroundImage: `url(${user['avatarUrl']})`}}></div>
                <div className="messageContent">
                    <span className="messageAuthor">
                        {user["username"]}
                        <UsernameBadge badge="Personel" verified={true}/>
                        <Tooltip title={format(props.timestamp, "iiii, dd MMMM y HH:mm", {locale: pl})} disableInteractive arrow placement="top">
                            <p>{GetReadeableTimestamp(props.timestamp)}</p>
                        </Tooltip>
                    </span>
                    <span className="messageText">{props.content}</span>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Message