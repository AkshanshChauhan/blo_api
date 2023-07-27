import { useEffect, useState } from "react";
import $ from "jquery";

export default function View(info) {
    const [json, setJson] = useState([]);
    useEffect(()=>{
        var settings = {
            "url": "https://blo-backend.onrender.com/blo/all",
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
            setJson(response.data);
          });
    }, []);
    return(
        <div className="view-section">
            <table>
                <tr>
                    <th colSpan={12}>{info.heading}</th>
                </tr>
                <tr>
                    <th colSpan={1}>क्र0सं0</th>
                    <th colSpan={1}>वी0एल0ओ0 का नाम</th>
                    <th colSpan={1}>पदनाम</th>
                    <th colSpan={1}>मतदेय स्थल की संख्या</th>
                    <th colSpan={1}>मतदेय स्थल का नाम</th>
                    <th colSpan={1}>मतदेय स्थल में सम्मिलित अनुभाग का नाम</th>
                    <th colSpan={1}>मतदेय स्थल में सम्मिलित अनुभाग का संख्या</th>
                    <th colSpan={1}>दिनांक</th>
                    <th colSpan={1}>मतदेय स्थल में सम्मिलित मकानो (परिवारों) की संख्या</th>
                    <th colSpan={1}>वी0एल0ओ0 द्वारा सत्यापित मतदेय स्थल मैं सम्मिलित मकानो (परिवारों) की संख्या</th>
                    <th colSpan={1}>मतदेय स्थल में मतदाताओं की कुल संख्या</th>
                    <th colSpan={1}>वी0एल0ओ0 द्वारा सत्यापित मतदाताओं की संख्या</th>
                </tr>
                {json.map((data, i)=>{
                    return(
                        <tr>
                            <td className="sno">{i + 1}</td>
                            <td>{data.input1}</td>
                            <td>{data.input2}</td>
                            <td>{data.input3}</td>
                            <td>{data.input4}</td>
                            <td>{data.input5}</td>
                            <td>{data.input6}</td>
                            <td>{data.input7}</td>
                            <td>{data.input8}</td>
                            <td>{data.input9}</td>
                            <td>{data.input10}</td>
                            <td>{data.input11}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}