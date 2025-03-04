import { useState } from "react";
import styled from "styled-components";

const StyledOl = styled.ol`
    padding: 0;
    list-style: upper-roman;
`;

const StyledLi = styled.li`
    margin-bottom: 5vh;

    @media screen and (max-width: 750px) {
        margin-left: 3vw;
        margin-right: 3vw;
    }
`;

const StyledBtn = styled.button`
    font-family: inherit;
    margin-top: 1vh;
`;

const StyledInput = styled.input`
    font-family: inherit;
    margin-top: 1vh;
    margin-right: 1vw;
    width: 20%;
`;

export default function Projects() {
    const [inputA, setInputA] = useState<number | null>(null);
    const [inputB, setInputB] = useState<number | null>(null);
    const [result, setResult] = useState<number | null>(null);

    function roundSet(num: number) {
        setResult(parseFloat(num.toFixed(4)));
    }

    function clear() {
        setInputA(null);
        setInputB(null);
        setResult(null);
    }

    function hasInput() {
        return inputA !== null && inputB !== null;
    }

    function add() {
        if(!hasInput()) {
            return;
        }
        roundSet(inputA! + inputB!);
    }

    function minus() {
        if(!hasInput()) {
            return;
        }
        roundSet(inputA! - inputB!);
    }

    function power() {
        if(!hasInput()) {
            return;
        }
        let ans = 1;
        for (let _ = 0; _ < Math.abs(inputB!); _++) {
            ans *= inputA!;
        }

        if (inputB! < 0) {
            ans = 1 / ans;
        }
        roundSet(ans);
    }

    function mutiply() {
        if(!hasInput()) {
            return;
        }
        roundSet(inputA! * inputB!);
    }

    function divide() {
        if(!hasInput()) {
            return;
        }
        roundSet(inputA! / inputB!);
    }

    return (
        <>
            <StyledOl>
                <StyledLi>
                    <strong>Campus Exchange</strong>
                    <br/>
                    09/2024 - 12/2024
                    <ul>
                        <li>
                            Implemented a second-hand trading web app with Java Spring Boot,
                                MySQL, and Vue.js in a team of 6
                        </li>
                        <li>
                            Designed the system architecture based on the MVC design pattern to 
                            increase development speed and code reusability.
                        </li>
                        <li>
                            Built a GitHub workflow to automatically test, build, and 
                            deploy project to Docker Hub for CI.
                        </li>
                    </ul>
                </StyledLi>
                <StyledLi>
                    <strong><a href="https://allenlqve.github.io/YouTube_Randomizer/" target="_blank">YouTube Randomizer</a></strong>
                    <br/>
                    09/2024 - 12/2024
                    <ul>
                        <li>
                            Created a YouTube playlist randomizer that allows user to shuffle,
                                merge, and play YouTube playlists using JavaScript, HTML, and CSS.
                        </li>
                        <li>
                            Integrated with Google OAuth 2.0, Google YouTube API, and 
                            IFrame to allow user to fetch and play playlists in a Google account.
                        </li>
                    </ul>
                </StyledLi>
                <StyledLi>
                    <strong><a href="https://github.com/allenLQVE/ReceiptRecorder" target="_blank">Receipt Recorder</a></strong>
                    <br/>
                    07/2024 - 09/2024
                    <ul>
                        <li>
                            Designed a web application for user to compare the prices of 
                            merchandise in different grocery stores.
                        </li>
                        <li>
                            Developed a RESTful API using Python with Django 
                            and stored data in a SQLite3 database. 
                        </li>
                        <li>
                            Built frontend as a single-page application with React for 
                            user to view and manipulate data.
                        </li>
                    </ul>
                </StyledLi>
                <StyledLi>
                    <strong><a href="https://github.com/allenLQVE/3DMaze" target="_blank">3D Maze</a></strong>
                    <br/>
                    05/2024 - 06/2024
                    <ul>
                        <li>
                            Built up a 3D Maze by implementing ray casting algorithm with
                                Java to show 3D graphics using 2D raysand displayed 
                                using Java Swing JFrame.
                        </li>
                        <li>
                            Constructed event listeners in Java using Java AWT to 
                            allow user to move and rotate in the maze.
                        </li>
                        <li>
                            Generated randomized mazes by applying Eller's Algorithm.
                        </li>
                    </ul>
                </StyledLi>
                <StyledLi>
                    <strong>JavaScript Calculator</strong>
                    <br/>
                    <label>a: <StyledInput type="number" value={inputA !== null ? inputA : ""} onChange={(e) => {setInputA(Number(e.target.value));}}/></label>
                    <label>b: <StyledInput type="number" value={inputB !== null ? inputB : ""}  onChange={(e) => {setInputB(Number(e.target.value));}}/></label>
                    <StyledBtn onClick={clear}>Clear</StyledBtn>
                    <br/>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <StyledBtn onClick={add}>a + b</StyledBtn>
                                </td>
                                <td>
                                    <StyledBtn onClick={minus}>a - b</StyledBtn>
                                </td>
                                <td rowSpan={2}>
                                    <StyledBtn onClick={power}>a<sup>b</sup></StyledBtn>
                                </td>
                                <td rowSpan={2}>
                                    <span> = </span>
                                    <span style={{color:((result !== null && result < 0) ? "red" : "black")}}>{result}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <StyledBtn onClick={mutiply}>a * b</StyledBtn>
                                </td>
                                <td>
                                    <StyledBtn onClick={divide}>a / b</StyledBtn>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </StyledLi>
            </StyledOl>
        </>
    )
}