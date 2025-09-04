import { useEffect, useState } from "react";
import fetchData from "../helpers/utils";
import QRCode from "react-qr-code";

interface Props {
  wallet: walletInterfaceProps;
}

const Tickets = (props: Props) => {
  const [fungi, setFungi] = useState(null);

  useEffect(() => {
    (async () => {
      const activeacc = await props.wallet.dAppclient.getActiveAccount();
      if (activeacc) {
        const userAddress = activeacc.address;
        const nfts = await fetchData();
        // Example of nft
        // {
        //     "amount": "20000",
        //     "author": "tz1KpT7STCbeTbf15oXkQRVCrk3r8d5RABiK",
        //     "holder": "tz1iFRH3cy6YQ3hhBK6dn2H2ACLQfrXsHokk",
        //     "prompt": "This is an example prompt",
        //     "token_id": "0",
        //     "collectable": true,
        //     "name": "Dog",
        //     "description": "Doge",
        //     "decimals": 0,
        //     "symbol": "DOGE",
        //     "image": "ipfs://bafybeiakhyig466rbvjabqk23636xzlzbbwyoigrgujb5uumxn26ep5aie/output_image.jpg"
        // }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filterednfts = nfts?.filter(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (nft: any) => userAddress === nft.holder
        );
        console.log(filterednfts);
        setFungi(fungi);
      }
    })();
  }, []);
  return (
    <>
      Tickets
      <QRCode value="Nishith" size={300} />
    </>
  );
};

export default Tickets;