import WalletNav from "./wallet"

interface Props{
  wallet: walletInterfaceProps
}

const Navbar = (props: Props)=>{
    return <>
        <div className="card">
        <WalletNav
          key={"tezos"}
          walletType={props.wallet.walletType}
          wallets={props.wallet.wallets}
          connect={props.wallet.connect}
          disconnect={props.wallet.disconnect}
        />
        {/* <WalletInterface
          key={"etherlink"}
          walletType="etherlink"
          wallets={activeAddress}
          connect={onConnectWallet}
          disconnect={onDisconnectWallet}
        /> */}
      </div>
    </>
}

export default Navbar