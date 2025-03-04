import styled from "styled-components";
import { Link } from "react-router";

const StyledNav = styled.nav`
    padding: 2%;
    background-color:rgb(67, 64, 62);
`;

const StyledUl = styled.ul`
    list-style: none;
    margin: 0;
    padding-left: 0;

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

const StyledLi = styled.li`
    border-bottom: white solid;
    margin-bottom: 5vh;

    &:hover {
        border-bottom: rgb(117, 196, 220) solid;

        a {
            color: rgb(117, 196, 220);
        }
    }

    @media screen and (max-width: 750px) {
        display: inline-block;
        text-align: center;
        margin: 1vh 2vw;
    }
`;

const StyledLink = styled(Link)`
    color: white;
    font-weight: bolder;
    text-decoration: none;
`;

export default function Nav() {
    return (
    <>
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={"/"}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={"/about"}>About Me</StyledLink></StyledLi>
                <StyledLi><StyledLink to={"/edu"}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={"/exp"}>Experience</StyledLink></StyledLi>
                <StyledLi><StyledLink to={"/projects"}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={"/skill"}>Skills</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    </>
    )
}