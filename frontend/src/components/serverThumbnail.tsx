import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';

interface serverThumbnailProps {
    isHome?: boolean
    isDashboard?: boolean
    iconUrl?: string
}

const ServerThumbnail = (props: serverThumbnailProps) => {
    var component = <div className="serverThumb" style={{backgroundImage: `url(${props.iconUrl})`}}></div> 

    if (props.isHome) {
        return (
            <div className="serverThumb" style={{backgroundImage: `url(${props.iconUrl})`}}>
                <img src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png' width={45} height={34} style={{filter: 'brightness(1000%)'}}/>
            </div>
        )
    } else if (props.isDashboard) {
        return (
            <div className="serverThumb" style={{backgroundImage: `url(${props.iconUrl})`, marginLeft: 'auto'}}>
                <SpaceDashboardRoundedIcon htmlColor='white' fontSize='large'/>
            </div>
        )
    } else {
        return (
            <div className="serverThumb" style={{backgroundImage: `url(${props.iconUrl})`}}/>
        )
    }
}

export default ServerThumbnail