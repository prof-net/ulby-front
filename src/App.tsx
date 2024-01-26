import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import img from './assets/1.jpg';
import Svg from './assets/adobe.svg';

const App = () => {
    console.log(__VERSION__);
    return (
        <div className={classes.App}>
            <div>
                <Link to={'/about'}>about</Link>
            </div>
            <div>
                <Link to={'/contact'}>contact</Link>
            </div>

            <img src={img} width={100} height={100}/>
            <Svg fill={'red'} height={100} width={100}/>
            222
            <Outlet />
        </div>
    );
};

export default App;