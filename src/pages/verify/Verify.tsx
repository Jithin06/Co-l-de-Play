import { useState } from "react";
import { Navbar, QrReader } from "../../components";
import fetchData from "../../helpers/utils";

import "./Verify.css";

interface Props {
  wallet: walletInterfaceProps;
}

const Verify = (props: Props) => {
  const [kyc, setKyc] = useState("");
  const [qrData, setQrdata] = useState("");
  const [hide, setHide] = useState(true);

  const checkTicket = async () => {
    const tokenData = await fetchData();
    console.log("Data: ", tokenData);
  };

  return (
    <div className="verify-main">
      <Navbar wallet={props.wallet} />
      <div className="verify-body">
        <div className="verify-heading">Verify</div>
        <div className="verify-form">
          <div className="verify-form-body qr">
            {hide ? (
              <>
                <button
                  className="qr-scan-button"
                  onClick={() => {
                    setHide(false);
                  }}
                >
                  Scan QR
                </button>
                {qrData}
              </>
            ) : (
              <QrReader setHide={setHide} setQrdata={setQrdata} />
            )}
          </div>
          <div className="verify-form-body">
            <div>
              <div className="verify-label">KYC Document</div>
              <br/>
              <input
                className="verify-input"
                value={kyc}
                onChange={(e) => setKyc(e.target.value)}
              />
            </div>
            <button
              className="qr-scan-button"
              onClick={async () => {
                setHide(true);
                await checkTicket();
              }}
              disabled={qrData == "" || kyc == ""}
            >
              Verify Ticket
            </button>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default Verify;