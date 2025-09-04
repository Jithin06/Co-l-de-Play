import { useEffect, useState } from "react";
import { Navbar } from "../../components";
import fetchData from "../../helpers/utils";
import "./Tickets.css";
import QRCode from "react-qr-code";

interface Props {
  wallet: walletInterfaceProps;
}

const Tickets = (props: Props) => {
  const [fungi, setFungi] = useState(null);
  const [hide, setHide] = useState(true);

  const onQRClick = () => setHide(false)
  const onBobClick = () => setHide(true)

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
          (nft: any) => userAddress === nft.holder
        );
        console.log(filterednfts);
        setFungi(fungi);
      }
    })();
  }, []);
  return <>
  <div className="ticket-div">
            <Navbar wallet={props.wallet} />
            <>
            {hide?null:<div className="bob" onClick={onBobClick}>
              <QRCode value="Nishith" size={300}/>
            </div>}
            </>
            <div className="ticket-h1">TICKETS</div>
            <div className="ticket-cardlist">

                <div className="ticket-card">
                    <div className="card-img"></div>
                    <div className="card-h2">COLDPLAY</div>
                    <div className="card-bottom">
                      <div className="card-bottom-left">
                        <div className="card-date">26th October, 2024</div>
                        <div className="card-venue">Mumbai</div>
                        <div className="card-number-tickets">4 Tickets</div>
                      </div>
                      
                      <div className="card-bottom-right">
                        <div id="qr" className="card-qr" onClick={onQRClick} >
                        </div>
                      </div>

                    </div>
                </div>
                
            </div>
        </div>
  </>;
};

export default Tickets;