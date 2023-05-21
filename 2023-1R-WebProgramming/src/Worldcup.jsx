import pkm1 from './assets/worldcup/구구.jpg'
import pkm2 from './assets/worldcup/꼬링크.jpg'
import pkm3 from './assets/worldcup/꼬부기.jpg'
import pkm4 from './assets/worldcup/누오.jpg'
import pkm5 from './assets/worldcup/도치마론.jpg'
import pkm6 from './assets/worldcup/디그다.jpg'
import pkm7 from './assets/worldcup/따라큐.jpg'
import pkm8 from './assets/worldcup/뚜꾸리.jpg'
import pkm9 from './assets/worldcup/리자몽.jpg'
import pkm10 from './assets/worldcup/먹고자.jpg'
import pkm11 from './assets/worldcup/메타몽.jpg'
import pkm12 from './assets/worldcup/뮤.jpg'
import pkm13 from './assets/worldcup/빠모.jpg'
import pkm14 from './assets/worldcup/삐.jpg'
import pkm15 from './assets/worldcup/삐삐.jpg'
import pkm16 from './assets/worldcup/피츄.jpg'

import {useEffect, useState} from "react";
import './Worldcup.css'

function Worldcup() {
    const candidate = [
        {id: 1, name: "구구", src: pkm1},
        {id: 2, name: "꼬링크", src: pkm2},
        {id: 3, name: "꼬부기", src: pkm3},
        {id: 4, name: "누오", src: pkm4},
        {id: 5, name: "도치마론", src: pkm5},
        {id: 6, name: "디그다", src: pkm6},
        {id: 7, name: "따라큐", src: pkm7},
        {id: 8, name: "뚜꾸리", src: pkm8},
        {id: 9, name: "리자몽", src: pkm9},
        {id: 10, name: "먹고자", src: pkm10},
        {id: 11, name: "메타몽", src: pkm11},
        {id: 12, name: "뮤", src: pkm12},
        {id: 13, name: "빠모", src: pkm13},
        {id: 14, name: "삐", src: pkm14},
        {id: 15, name: "삐삐", src: pkm15},
        {id: 16, name: "피츄", src: pkm16}
    ];

    const [game, setGame] = useState([]);
    const [round, setRound] = useState(0);
    const [nextGame, setNextGame] = useState([]);
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    const [left_flex_item, setLeft_flex_item] = useState("flex-item");
    const [right_flex_item, setRight_flex_item] = useState("flex-item");
    const [stat, setStat] = useState({
        "구구": 0,
        "꼬링크": 0,
        "꼬부기": 0,
        "누오": 0,
        "도치마론": 0,
        "디그다": 0,
        "따라큐": 0,
        "뚜꾸리": 0,
        "리자몽": 0,
        "먹고자": 0,
        "메타몽": 0,
        "뮤": 0,
        "빠모": 0,
        "삐": 0,
        "삐삐": 0,
        "피츄": 0
    });

    useEffect(() => {
        const str = localStorage.getItem("2018112034");
        if (str != null) {
            setStat(JSON.parse(str));
        }

        setGame(candidate.map(c => {
            return {
                name: c.name, src: c.src, order: Math.random()
            }
        }).sort((l, r) => {
            return l.order - r.order;
        }));
    }, []);

    useEffect(() => {
        if (left === true) {
            setRight_flex_item("selected");
            setTimeout(() => {
                setLeft(false);
                setRound(r => r + 1);
                setRight_flex_item("flex-item");
            }, 3000);
        }
        if (right === true) {
            setLeft_flex_item("selected");
            setTimeout(() => {
                setRight(false);
                setRound(r => r + 1);
                setLeft_flex_item("flex-item");
            }, 3000);
        }
    }, [left, right]);

    useEffect(() => {
        if (game.length > 1 && round + 1 > game.length / 2) {
            setGame(nextGame.map(c => {
                return {
                    name: c.name, src: c.src, order: Math.random()
                }
            }).sort((l, r) => {
                return l.order - r.order;
            }));    // 다음 round로 nextGame에 있는 포켓몬들 넘길 때 랜덤으로 섞어서 넘김
            setNextGame([]);
            setRound(0);
        }
    }, [round]);

    if (game.length === 1) {
        localStorage.setItem("2018112034", JSON.stringify(stat));
        return <div id={"flex-container"}>
            <div className={"flex-item"}>
                <p className={"worldCup-info"}>이상형 월드컵 우승</p>
                <img src={game[0].src} alt={game[0].name}/>
                <p className={"pkm-name"}> {game[0].name}</p>
            </div>

            <div className={"statistics"}>
                <p className={"winner-info"}>{game[0].name} {stat[game[0].name]}번 승리!</p>
                <p className={"count-info"}>전체 승리 횟빼</p>
                <table>
                    {Object.keys(stat).map(name => {
                        return <tr key={name}>
                            <td>{name}</td>
                            <td>{stat[name]}</td>
                        </tr>
                    })}
                </table>
            </div>
        </div>;
    }

    if (game.length === 0 || round + 1 > game.length / 2) {
        return <p>Loading</p>;
    }

    const leftIndex = round * 2;
    const rightIndex = round * 2 + 1;

    const leftFunction = () => {
        setStat({
            ...stat,
            [game[leftIndex].name]: stat[game[leftIndex].name] + 1
        });
        // setStat((prevStat) => {
        //     prevStat[game[leftIndex].name] = prevStat[game[leftIndex].name] + 1;
        //     return prevStat;
        // });
        setNextGame((prev) => prev.concat(game[leftIndex]));
        setLeft(true);
    };
    const rightFunction = () => {
        setStat({
            ...stat,
            [game[rightIndex].name]: stat[game[rightIndex].name] + 1
        });
        // setStat((prevStat) => {
        //     prevStat[game[rightIndex].name] = prevStat[game[rightIndex].name] + 1;
        //     return prevStat;
        // });
        setNextGame((prev) => prev.concat(game[rightIndex]));
        setRight(true);
    };

    // console.log(stat);
    return <div>
        <div className={"worldCup-info"}>이상형 월드컵 {round + 1} / {game.length / 2}&nbsp;&nbsp;
            {game.length === 2 ? "결승" : game.length + "강"}
        </div>
        <div id={"flex-container"}>
            <div className={left_flex_item}>
                <img src={game[leftIndex].src} alt={game[leftIndex].name}
                     onClick={leftFunction}/>
                <p className={"pkm-name"}>{game[leftIndex].name}</p>
            </div>
            <div className={right_flex_item}>
                <img src={game[rightIndex].src} alt={game[rightIndex].name}
                     onClick={rightFunction}/>
                <p className={"pkm-name"}>{game[rightIndex].name}</p>
            </div>
        </div>
    </div>;
}

export default Worldcup;