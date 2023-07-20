import * as icons from '@mui/icons-material/'

interface ContextMenuItemProps {
    name: string,
    icon?: keyof typeof icons,
    click?: () => void
}

const ContextMenuItem = (props: ContextMenuItemProps) => {

    
    return (
        <div className="ContextMenuItem" onClick={() => {if (props.click !== undefined) {props.click()}}}>
            {props.name}
            {props.icon}
        </div>
    );
};

export default ContextMenuItem