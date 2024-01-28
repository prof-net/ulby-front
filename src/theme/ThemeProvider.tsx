import React, {FC, useMemo, useState} from 'react';
import {EnumTheme, LOCAL_STORAGE_THEME, ThemeContext} from "./ThemeContext";


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME) as EnumTheme || EnumTheme.DARK;


interface IProps {
    children: React.ReactElement
}

const ThemeProvider: FC<IProps> = ({children}) => {
    const [theme, setTheme] = useState<EnumTheme>(defaultTheme);



    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;