import { useAppSelector } from "../scripts/hooks";
import "../styles/ContextMenu.css";
import ContextMenuItem from "./ContextMenuItem";
import React from 'react';


const ContextMenu = () => {

    const ctx = useAppSelector(state => state.ContextMenu)

    React.useEffect(() => {
        const ctxObject = document.getElementById("ContextMenu");
        const x = ctx.x;
        const y = ctx.y;
        const width = ctxObject.offsetWidth;
        const height = ctxObject.offsetHeight;
        const pageWidth = document.body.offsetWidth;
        const pageHeight = document.body.offsetHeight;
        
        var xOffset = 0;
        var yOffset = 0;

        if (pageWidth - x < width) {
            xOffset = width
        }

        if (pageHeight - y < height) {
            yOffset = height - (pageHeight - y);
        }
        
        ctxObject.style.transform = `translate(${x - xOffset}px, ${y - yOffset}px)`
    }, [ctx])
    

    return (
        <div className={`ContextMenu${ctx.shown ? " shown" : ''}`} id="ContextMenu">
            {ctx.menuItems}
        </div>
    )
};

export default ContextMenu