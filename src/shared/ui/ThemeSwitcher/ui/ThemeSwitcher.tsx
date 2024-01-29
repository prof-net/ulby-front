import React from 'react';
import classes from './ThemeSwitcher.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {EnumTheme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import Button, {EnumThemeButton} from "shared/ui/Button/Button";


interface IProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<IProps> = (props) => {
    const {className} = props;
    const {theme,toggleTheme} = useTheme();

    return (
        <Button
            theme={EnumThemeButton.CLEAR}
            className={classNames(classes.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === EnumTheme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

