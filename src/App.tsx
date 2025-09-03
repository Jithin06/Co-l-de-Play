import "./App.css";
import { dAppClientTezos } from "./helpers/constants";
import { useEffect, useState } from "react";

interface walletList {
  tezos: string;
  etherlink: string;
}

interface refreshList {
  tezos: Date;
  etherlink: Date;
}

interface walletInterfaceProps {
  walletType: "tezos" | "etherlink";
  wallets: walletList;
  connect: (walletType: "tezos" | "etherlink") => Promise<string | undefined>;
  disconnect: (
    walletType: "tezos" | "etherlink"
  ) => Promise<string | undefined>;
}

const WalletInterface = ({
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

function App() {
  const [activeAddress, setActiveAddress] = useState<walletList>({
    tezos: "",
    etherlink: "",
  });
  const [refreshedAt, setRefreshedAt] = useState<refreshList>({
    tezos: new Date(),
    etherlink: new Date(),
  });
  const onConnectWallet = async (walletType: "tezos" | "etherlink") => {
    if (activeAddress[walletType]) alert(activeAddress);
    else {
      const dAppClient =
        walletType == "tezos" ? dAppClientTezos : dAppClientTezos;
      await dAppClient.requestPermissions();
      const result = await dAppClient.getActiveAccount();
      const tempaddr = activeAddress;
      tempaddr[walletType] = result?.address || "";
      console.log(activeAddress);
      setActiveAddress(tempaddr);
      return result?.address || "";
    }
  };

  const onDisconnectWallet = async (walletType: "tezos" | "etherlink") => {
    const dAppClient =
      walletType == "tezos" ? dAppClientTezos : dAppClientTezos;
    await dAppClient.disconnect();
    setRefreshedAt((prevRefreshedAt) => ({
      ...prevRefreshedAt,
      walletType: new Date(),
    }));
    return "";
  };

  useEffect(() => {
    const getActiveAccounts = async () => {
      const _activeAddressTezos = await dAppClientTezos.getActiveAccount();
      const _activeAddressEtherlink = await dAppClientTezos.getActiveAccount();

      setActiveAddress({
        tezos: _activeAddressTezos?.address || "",
        etherlink: _activeAddressEtherlink?.address || "",
      });
    };
    getActiveAccounts();
  }, [refreshedAt]);
  return (
    <>
      <h1>Co-(l)-de Play</h1>
      <div className="card">
        <WalletInterface
          key={"tezos"}
          walletType="tezos"
          wallets={activeAddress}
          connect={onConnectWallet}
          disconnect={onDisconnectWallet}
        />
        <br />
        {/* <WalletInterface
          key={"etherlink"}
          walletType="etherlink"
          wallets={activeAddress}
          connect={onConnectWallet}
          disconnect={onDisconnectWallet}
        /> */}
      </div>
    </>
  );
}

export default App;