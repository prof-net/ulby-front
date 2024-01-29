import {Outlet} from "react-router-dom";
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme,toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <Outlet/>
            <button onClick={toggleTheme}>toggle</button>
        </div>
    );
};

export default App;