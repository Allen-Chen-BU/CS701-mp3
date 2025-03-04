import styled from "styled-components";

const StyleContainer = styled.div`
    overflow-x: auto;
    height: 55vh;
    width: 100vw;

    @media screen and (min-width: 750px) {
        width: 100%;
    }
`;

const StyleTable = styled.table`
    border: solid black;
    border-collapse: collapse;
    width: 100%;
    text-align: center;

    td, th {
        border: solid black;
    }

    tr {
        height: 7vh;
    }
`;

export default function Education() {
    return(
        <>
            <StyleContainer>
                <StyleTable>
                    <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Major</th>
                        <th>GPA</th>
                        <th>Graduation Date</th>
                    </tr>
                    <tr>
                        <td>Boston University</td>
                        <td>Master of Science</td>
                        <td>Computer Science</td>
                        <td>3.84</td>
                        <td>Expected 05/2025</td>
                    </tr>
                    <tr>
                        <td>University of California, Davis</td>
                        <td>Bachelor of Arts & Sciences</td>
                        <td>Statistics, Japanese</td>
                        <td>3.33</td>
                        <td>05/2021</td>
                    </tr>
                </StyleTable>
            </StyleContainer>
        </>
    )
}