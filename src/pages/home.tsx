import {Link, Outlet} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div></div>
            <Link to="/drag-sort">layout</Link>
            <Link to="/grid-layout">grid布局</Link>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};
export default Home;
