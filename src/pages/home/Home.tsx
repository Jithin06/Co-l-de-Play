import { Navbar } from "../../components";
import "./Home.css";

interface Props {
    wallet: walletInterfaceProps;
}

const Home = (props: Props) => {
    
    return (
        <div className="home-div">
            <Navbar wallet={props.wallet} />
            <div className="home-h1">Co-(l)-de Play</div>
            <div className="home-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aut enim molestiae dolores officia
                architecto sed reprehenderit, magni eaque excepturi?
            </div>
        </div>
    );
};

export default Home;