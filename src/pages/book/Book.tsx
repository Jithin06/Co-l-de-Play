import { Navbar } from "../../components";
import "./Book.css";

interface Props {
    wallet: walletInterfaceProps;
}

const Book = (props: Props) => {
    console.log(props);
    return (
        <div className="book-div">
            <Navbar wallet={props.wallet} />
            <div className="book-h1">EVENTS</div>
            <div className="book-cardlist">
                <div className="book-card card1">
                    <div className="card-img"></div>
                     <div className="card-sold">SOLD OUT</div>
                    <div className="card-h2">COLDPLAY</div>
                    <div className="card-date">26th October, 2024</div>
                    <div className="card-venue">Mumbai</div>
                    <div className="card-sold">Sold Out</div>
                </div>
                <div className="book-card card2">
                    <div className="card-img"></div>
                    <div className="card-sold">SOLD OUT</div>
                    <div className="card-h2">COLDPLAY</div>
                    <div className="card-date">26 OCT</div>
                    <div className="card-venue">MUMBAI</div>
                </div>
                <div className="book-card card3">
                    <div className="card-img"></div>
                    <div className="card-sold">SOLD OUT</div>
                    <div className="card-h2">COLDPLAY</div>
                    <div className="card-date">26 OCT</div>
                    <div className="card-venue">MUMBAI</div>
                </div>
            </div>
        </div>
    );
};

export default Book;