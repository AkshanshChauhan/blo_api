import { Link } from "react-router-dom";

export default function Selection() {
    return(
        <div className="selection">
            <h3 className="selection-heading">अपना विकल्प चुनें</h3>
            <div className="selection-buttons">
                <Link to={"/selection2?type=edit"}><button className="selection-button">डेटा दर्ज करें</button></Link>
                <Link to={"/selection2?type=view"}><button className="selection-button">डेटा देखें</button></Link>
            </div>
        </div>
    );
}