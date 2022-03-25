import React from "react";

const MyButton = ({className ,title}: {className: string, title: string}) => {
    return (
        <button className={className}>{title}</button>
    )
}

export default MyButton;
