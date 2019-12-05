import React from "react";
import classNames from "classnames";

import "./Badge.scss";

const Badge = ({color, onClick, className}) => {
    return <i onClick={onClick} className={`badge badge--${color} ` + classNames(className)}/>
};

export default Badge;