import { useEffect, useState } from "react";
import { Navbar } from "../../components";
import "./Book.css";
import fetchEvents from "../../helpers/fetchEvents";
import buyTicket from "../../helpers/contracts/buyTicket";
import toast from "react-hot-toast";

interface Props {
    wallet: walletInterfaceProps;
}

const Book = (props: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchEvents();
      setEvents(data);
      console.log(data);
    })();
  }, []);

  return (
    <div className="book-div">
      <Navbar wallet={props.wallet} />
      <div className="book-h1">EVENTS</div>
      <div className="book-cardlist">
        {events.map((eve, ind) => (
          <div className={`book-card card${(ind % 3) + 1}`} key={ind}>
            <div className="card-img"></div>
            {/* <div className="card-sold">SOLD OUT</div> */}
            <div className="card-h2">{eve["parameter"]["value"]["name"]}</div>
            <div className="card-date">
              {eve["parameter"]["value"]["price"]} Tez
            </div>
            <div
              className="card-venue"
              onClick={async () => {
                const rp = await buyTicket(
                  props.wallet.dAppclient,
                  eve["parameter"]["value"]["name"],
                  1,
                  eve["parameter"]["value"]["price"]
                );
                if (rp["status"]) {
                  toast.success("Transaction is Succesfull. ");
                } else {
                  toast.error("Transaction has failed.");
                }
              }}
            >
              <p>Buy Now</p>
               </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Book;