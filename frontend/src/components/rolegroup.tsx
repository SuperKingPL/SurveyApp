interface roleGroupProps {
    name: string
}

const RoleGroup = (props: roleGroupProps) => {
    return (
        <div className="roleGroup">{props.name}</div>
    )
}

export default RoleGroup