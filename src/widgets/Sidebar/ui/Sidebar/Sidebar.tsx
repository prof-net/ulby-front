import React, {useState} from 'react';
import classes from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

export const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(classes.Sidebar, {[classes.Collapsed]:collapsed})}>
            <button onClick={onToggle}>бац</button>
            <div className={classes.Switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

