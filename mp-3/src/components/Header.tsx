import styled from "styled-components";

const StyledHeader = styled.header`
    padding: 2%;
    background-color:rgb(62, 127, 147);
    color: white;

    @media screen and (max-width: 750px) {
    text-align: center;
    }
`;

const StyledH1 = styled.h1`
    font-size: calc(1px + 2vw);

    @media screen and (max-width: 750px) {
        font-size: calc(2px + 4vw);
    }
`;

const StyledP = styled.p`
    font-size: calc(1px + 1vw);

    @media screen and (max-width: 750px) {
        font-size: calc(2px + 3vw);
    }
`;

export default function Header() {
    return (
    <>
        <StyledHeader>
            <StyledH1>HungHsu(Allen) Chen's Resume</StyledH1>
            <StyledP>A website version of Resume</StyledP>
        </StyledHeader>
    </>
    )
}