import React, {ButtonHTMLAttributes} from 'react';
import classes from './Button.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

export enum EnumThemeButton {
    CLEAR = 'clear',
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: EnumThemeButton;
}

const Button: React.FC<IProps> = (props) => {
    const {
        className,
        children,
        theme = EnumThemeButton.CLEAR,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(classes.Button, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;