import {Outlet} from "react-router-dom";
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "app/providers/ThemeProvider";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <Outlet/>
        </div>
    );
};

export default App;