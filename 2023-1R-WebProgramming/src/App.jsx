import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [row, setRow] = useState([]);

    // useEffect(() => {
    //     console.log("mount or update");
    //
    //     return () => {
    //         console.log("unmount");
    //     }
    // });
    //
    // useEffect(() => {
    //     console.log("mount only");
    // }, []);
    //
    // useEffect(() => {
    //     console.log("update only");
    // }, [row]);

    // useEffect(() => {
    //     fetchData()
    // }, []);

    const fetchData = () => {
        fetch("http://openapi.seoul.go.kr:8088/5a46486149786f6439305372514a6f/json/RealtimeCityAir/1/25")
            .then((res) => res.json())
            .then((res) => setRow(res.RealtimeCityAir.row));
    }

    // const fetchData = () => {
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
                <tr>
                    <th>이름</th>
                    <th>PM10</th>
                    <th>03</th>
                    <th>상태</th>
                </tr>
                </thead>
                <tbody>
                {
                    row.map((district, idx) => {
                        return <tr key={idx}>
                            <td>{district.MSRSTE_NM}</td>
                            <td>{district.PM10}</td>
                            <td>{district.O3}</td>
                            <td>{district.IDEX_NM}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </>
    );
}

export default App
