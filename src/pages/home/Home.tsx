import { Navbar } from "../../components";
import "./Home.css";

interface Props {
    wallet: walletInterfaceProps;
}

const Home = (props: Props) => {
    return (
        <div className="home-div">
            <Navbar wallet={props.wallet} />
            <div className="home-h1">Co-l-de-Play</div>
            <div className="home-p">
                Co-l-de-Play is a secure ticket booking and reselling service on the Tezos blockchain that provides
                reliability to the customer and safety to the client.
            </div>
        </div>
    );
};

export default Home;