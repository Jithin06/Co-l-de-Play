import { useState } from "react";
import { Navbar } from "../../components";
import "./Admin.css";

interface Props {
    wallet: walletInterfaceProps;
}

const Admin = (props: Props) => {
    console.log(props);

    const [activeForm, setActiveForm] = useState("form1");

    const changeActiveForm = (activeForm: any) => {
        setActiveForm(activeForm);
    };

    return (
        <div className="admin-div">
            <Navbar wallet={props.wallet} />
            <div className="admin-h1">ADMIN</div>
            <div className="admin-cardlist">
                <div className="admin-left">
                    <div className="admin-contract" onClick={() => changeActiveForm("form1")}>
                        ADD EVENT 1.
                    </div>
                    <div className="admin-contract" onClick={() => changeActiveForm("form2")}>
                        ADD EVENT 2.
                    </div>
                    <div className="admin-contract" onClick={() => changeActiveForm("form3")}>
                        ADD EVENT 3.
                    </div>
                    <div className="admin-contract" onClick={() => changeActiveForm("form4")}>
                        ADD EVENT 4.
                    </div>
                </div>
                <div className="admin-right">
                    {activeForm === "form1" && <Form1 />}
                    {activeForm === "form2" && <Form2 />}
                    {activeForm === "form3" && <Form3 />}
                    {activeForm === "form4" && <Form4 />}
                </div>
            </div>
        </div>
    );
};

function Form1() {
    return (
        <form className="admin-form" action="">
            <div className="form-main">
                <div className="form-section1">
                    <label htmlFor="field1">FIELD 1</label>
                    <br />
                    <input type="text" name="field1" id="field1" />
                    <br />
                    <label htmlFor="field2">FIELD 2</label>
                    <br />
                    <input type="text" name="field2" id="field2" />
                </div>
                <div className="form-section2">
                    <label htmlFor="field3">FIELD 3</label>
                    <br />
                    <input type="text" name="field3" id="field3" />
                    <br />
                    <label htmlFor="field4">FIELD 4</label>
                    <br />
                    <input type="text" name="field4" id="field4" />
                </div>
            </div>
            <input type="submit" className="submit-btn" value="SUBMIT." />
        </form>
    );
}

function Form2() {
    return (
        <form className="admin-form" action="">
            <div className="form-main">
                <div className="form-section1">
                    <label htmlFor="field1">FIELD 5</label>
                    <br />
                    <input type="text" name="field1" id="field1" />
                    <br />
                    <label htmlFor="field2">FIELD 6</label>
                    <br />
                    <input type="text" name="field2" id="field2" />
                </div>
                <div className="form-section2">
                    <label htmlFor="field3">FIELD 7</label>
                    <br />
                    <input type="text" name="field3" id="field3" />
                    <br />
                    <label htmlFor="field4">FIELD 8</label>
                    <br />
                    <input type="text" name="field4" id="field4" />
                </div>
            </div>
            <input type="submit" className="submit-btn" value="SUBMIT." />
        </form>
    );
}

function Form3() {
    return (
        <form className="admin-form" action="">
            <div className="form-main">
                <div className="form-section1">
                    <label htmlFor="field1">FIELD 9</label>
                    <br />
                    <input type="text" name="field1" id="field1" />
                    <br />
                    <label htmlFor="field2">FIELD 10</label>
                    <br />
                    <input type="text" name="field2" id="field2" />
                </div>
                <div className="form-section2">
                    <label htmlFor="field3">FIELD 11</label>
                    <br />
                    <input type="text" name="field3" id="field3" />
                    <br />
                    <label htmlFor="field4">FIELD 12</label>
                    <br />
                    <input type="text" name="field4" id="field4" />
                </div>
            </div>
            <input type="submit" className="submit-btn" value="SUBMIT." />
        </form>
    );
}

function Form4() {
    return (
        <form className="admin-form" action="">
            <div className="form-main">
                <div className="form-section1">
                    <label htmlFor="field1">FIELD 13</label>
                    <br />
                    <input type="text" name="field1" id="field1" />
                    <br />
                    <label htmlFor="field2">FIELD 16</label>
                    <br />
                    <input type="text" name="field2" id="field2" />
                </div>
                <div className="form-section2">
                    <label htmlFor="field3">FIELD 14</label>
                    <br />
                    <input type="text" name="field3" id="field3" />
                    <br />
                    <label htmlFor="field4">FIELD 15</label>
                    <br />
                    <input type="text" name="field4" id="field4" />
                </div>
            </div>
            <input type="submit" className="submit-btn" value="SUBMIT." />
        </form>
    );
}

export default Admin;