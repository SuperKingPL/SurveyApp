import {Skeleton} from '@mui/material';
import '../styles/skeletons.css'

const SkeletonPlaceholder = () => {
    return (
        <div className="messageSkeleton">
            <Skeleton variant="circular" animation="wave" className="avatarSkeleton"/>
            <Skeleton height={80} width={'100%'} animation="wave"/>
        </div>
    )
}

export default SkeletonPlaceholder