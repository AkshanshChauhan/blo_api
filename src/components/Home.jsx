import { useState } from "react";
import "./components.scss";
import { Link } from "react-router-dom";
export default function Home() {
    function fe() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://blo-backend.onrender.com/blo/all", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const [val, setVal] = useState("");
    return(
        <div className="home">
            <h1>welcome</h1>
            <input className="key-input" type="text" placeholder="enter pass key" onChange={(e)=>setVal(e.target.value)} />
            <Link to={"/selection"}> <button className="key-button" disabled={val==="#uk11" ? false : true}>Enter</button></Link>
        </div>
    )
}