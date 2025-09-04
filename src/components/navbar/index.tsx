import { useNavigate } from "react-router";
import "./Navbar.css";
import WalletNav from "./wallet";

interface Props {
    wallet: walletInterfaceProps;
}

const Navbar = (props: Props) => {
    const navigate = useNavigate()
    return (
        <div className="navbar-root">
            <div className="navbar-logo" onClick={()=>{navigate("/")}}>MENU</div>
            <div className="navbar-wallet">
                <WalletNav
                    key={"tezos"}
                    walletType={props.wallet.walletType}
                    wallets={props.wallet.wallets}
                    connect={props.wallet.connect}
                    disconnect={props.wallet.disconnect}
                    dAppclient={props.wallet.dAppclient}
                />
            </div>
        </div>
    );
};

export default Navbar;