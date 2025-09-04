import { useEffect, useState } from "react";
import { Navbar } from "../../components";
import "./Tickets.css";
import QRCode from "react-qr-code";

interface Props {
  wallet: walletInterfaceProps;
}

const Tickets = (props: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [fungi, setFungi] = useState<any[]>([]);
  const [hide, setHide] = useState(true);
  const [dt, setDT] = useState("");

  const onQRClick = (da: string) => {
    setHide(false);
    setDT(da);
  };
  const onBobClick = () => setHide(true);

  useEffect(() => {
    (async () => {
      const activeacc = await props.wallet.dAppclient.getActiveAccount();
      if (activeacc) {
        const userAddress = activeacc.address;
        const nfts = await fetchtickets(userAddress);
        console.log(nfts);
        setFungi(nfts);
      }
    })();
  }, []);
  return (
    <>
      <div className="ticket-div">
        <Navbar wallet={props.wallet} />
        <>
          {hide ? null : (
            <div className="bob" onClick={onBobClick}>
              <QRCode value={dt} size={300} />
            </div>
          )}
        </>
        <div className="ticket-h1">TICKETS</div>
        <div className="ticket-cardlist">
          {fungi.map((eve, ind) => (
            <div className={`book-card card${(ind % 3) + 1}`} key={ind}>
              <div className="card-img"></div>
              {/* <div className="card-sold">SOLD OUT</div> */}
              <div className="card-h2">{eve["parameter"]["value"]["name"]}</div>
              <div className="card-date" style={{ fontFamily: "sans-serif" }}>
                {eve["parameter"]["value"]["tickets_required"]} Ticket(s)
              </div>
              <div
                id="qr"
                className="card-qr"
                onClick={() => {
                  onQRClick(eve["target"]["address"]);
                }}
              >
                <QRCode value={eve["target"]["address"]} size={100} />
              </div>
                
            </div>
        ))}
        </div>
  </div>
    </>
  );
};

export default Tickets;