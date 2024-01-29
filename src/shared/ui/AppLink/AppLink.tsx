import React from 'react';
import classes from './AppLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";


export enum EnumAppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IProps extends LinkProps {
    className?: string;
    theme?: EnumAppLinkTheme;
}

const AppLink: React.FC<IProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = EnumAppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(classes.AppLink, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;