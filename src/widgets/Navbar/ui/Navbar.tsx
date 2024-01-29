import React from 'react';
import classes from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import AppLink, {EnumAppLinkTheme} from "shared/ui/AppLink/AppLink";

interface IProps {
    className?: string;
}

export const Navbar: React.FC<IProps> = (props) => {

    const {className} = props;

    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div className={classes.Links}>
                <AppLink
                    theme={EnumAppLinkTheme.SECONDARY}
                    className={classes.MainLink}
                    to={'/about'}>
                    about
                </AppLink>
                <AppLink
                    theme={EnumAppLinkTheme.SECONDARY}
                    to={'/contact'}>
                    contact
                </AppLink>
            </div>
        </div>
    );
};

