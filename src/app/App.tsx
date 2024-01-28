import {Link, Outlet} from "react-router-dom";
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";


const App = () => {

    const {theme,toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
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