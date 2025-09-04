import { Navbar } from "../../components";
import "./Home.css";
import buyTicket from "../../helpers/event";

interface Props {
    wallet: walletInterfaceProps;
}

const Home = (props: Props) => {
    console.log(props);
    const buytick = async ()=>{
        const useraddr = await props.wallet.dAppclient.getActiveAccount()
        if(useraddr)
            buyTicket(props.wallet.dAppclient, useraddr.address);
    }
    return (
        <div className="home-div">
            <Navbar wallet={props.wallet} />
            <div className="home-h1">Co-(l)-de Play</div>
            <div className="home-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aut enim molestiae dolores officia
                architecto sed reprehenderit, magni eaque excepturi?
            </div>
            <button onClick={()=>{buytick()}}> Buy</button>
        </div>
    );
};

export default Home;