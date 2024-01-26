
import {Link, Outlet} from "react-router-dom";
import './styles/index.scss';
import {useState} from "react";

enum EnumTheme {
    "DARK"= 'dark',
    "LIGHT" = 'light'
}


const App = () => {
    const [theme, setTheme] = useState<EnumTheme>(EnumTheme.DARK);

    const handleTheme = () => {
        setTheme(theme === EnumTheme.DARK ? EnumTheme.LIGHT : EnumTheme.DARK);
    }

    return (
        <div className={`app ${theme}`}>
            <button onClick={handleTheme}>toggle</button>
            <div>
                <Link to={'/about'}>about</Link>
            </div>
            <div>
                <Link to={'/contact'}>contact</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default App;