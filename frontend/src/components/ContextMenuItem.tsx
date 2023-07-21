interface ContextMenuItemProps {
    name: string,
    icon?: JSX.Element,
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