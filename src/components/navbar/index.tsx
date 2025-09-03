import "./Navbar.css";
import WalletNav from "./wallet";

interface Props {
    wallet: walletInterfaceProps;
}

const Navbar = (props: Props) => {
    return (
        <div className="navbar-root">
            <div className="navbar-logo">PEACE</div>
            <div className="navbar-wallet">
                <WalletNav
                    key={"tezos"}
                    walletType={props.wallet.walletType}
                    wallets={props.wallet.wallets}
                    connect={props.wallet.connect}
                    disconnect={props.wallet.disconnect}
                />
            </div>
        </div>
    );
};

export default Navbar;