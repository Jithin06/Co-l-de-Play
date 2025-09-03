import { useEffect, useState } from "react";

const WalletNav = ({
  walletType,
  wallets,
  connect,
  disconnect,
}: walletInterfaceProps) => {
  const [addr, setAddr] = useState("");
  useEffect(() => {
    setAddr(wallets[walletType]);
    console.log(wallets);
  }, [wallets, walletType]);
  return (
    <>
      <button
        onClick={async () => {
          setAddr((await connect(walletType)) || "");
        }}
      >
        {addr || `Connect ${walletType} Wallet`}
      </button>
      <br />
      <button
        onClick={async () => {
          setAddr((await disconnect(walletType)) || "");
        }}
      >
        Disconnect Wallet
      </button>
    </>
  );
};

export default WalletNav