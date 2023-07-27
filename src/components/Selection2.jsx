import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Selection2() {
    const [typeSelection, setTypeSelection] = useState("");
    useEffect(()=>{
        const urlSearchParam = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParam.entries());
        setTypeSelection(params);
    }, []);
    return(
        <div className="selection">
            <h3 className="selection-heading">विधानसभा चुनें</h3>
            {
                typeSelection.type==="edit" ?
                <div className="selection-buttons">
                    <Link to={"edit/04"}><button className="selection-button">04 - बदरीनाथ विधानसभा</button></Link>
                    <Link to={"edit/05"}><button className="selection-button">05 - थराली विधानसभा</button></Link>
                    <Link to={"edit/06"}><button className="selection-button">06 - कर्णप्रयाग विधानसभा</button></Link>
                </div>
                :
                <div className="selection-buttons">
                    <Link to={"view/04"}><button className="selection-button">04 - बदरीनाथ विधानसभा</button></Link>
                    <Link to={"view/05"}><button className="selection-button">05 - थराली विधानसभा</button></Link>
                    <Link to={"view/06"}><button className="selection-button">06 - कर्णप्रयाग विधानसभा</button></Link>
                </div>              
            }
        </div>
    );
}