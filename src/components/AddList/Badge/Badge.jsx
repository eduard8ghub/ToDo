import React from "react";
import classNames from "classnames";

import "./Badge.scss";

const Badge = ({colors, onClick, className}) => {
    return <i className={`badge badge--${colors} ` + classNames(className)} onClick={onClick}/>
};

export default Badge;