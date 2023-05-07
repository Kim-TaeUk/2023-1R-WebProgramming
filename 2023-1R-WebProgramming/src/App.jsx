import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [row, setRow] = useState([]);

    const fetchData = () => {
        fetch("http://openapi.seoul.go.kr:8088/5a46486149786f6439305372514a6f/json/RealtimeCityAir/1/25")
            .then(function (res2) {
                res2.json().then(function (res3) {
                    setRow(res3.RealtimeCityAir.row);
                });
            });
    }

    // if (row.length === 0) {
    //     fetch("http://openapi.seoul.go.kr:8088/5a46486149786f6439305372514a6f/json/RealtimeCityAir/1/25")
    //         .then(function (res2) {
    //             res2.json().then(function (res3) {
    //                 setRow(res3.RealtimeCityAir.row);
    //             });
    //         });
    // }

    return (
        <>
            <button onClick={fetchData}>Fetch</button>
            <table>
                <thead>
                <th>이름</th>
                <th>PM10</th>
                <th>03</th>
                <th>상태</th>
                </thead>
                <tbody>
                {
                    row.map(function (obj) {
                        return <tr>
                            <td>{obj.MSRSTE_NM}</td>
                            <td>{obj.PM10}</td>
                            <td>{obj.O3}</td>
                            <td>{obj.IDEX_NM}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </>
    );
}

export default App
