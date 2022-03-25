import React from "react";

const MyButton = ({className ,title, onClick}: {className: string, title: string, onClick: React.MouseEventHandler}) => {
    return (
        <button className={className} onClick={onClick}>{title}</button>
    )
}

export default MyButton;
