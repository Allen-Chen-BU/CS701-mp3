import styled from "styled-components";

const StyledFooter = styled.footer`
    padding: 1%;
    background-color: rgb(62, 127, 147);
    color: white;
`;

const StyledAnchor = styled.a`
    color: rgb(253, 242, 210);
`;

export default function Footer() {
    return (
        <>
            <StyledFooter>
                <p>
                    All Rights Reserved by HungHsu(Allen) Chen&nbsp;
                    <StyledAnchor href="./index.html">
                        Credits
                    </StyledAnchor> 
                    &copy;
                </p>
            </StyledFooter>
        </>
    )
}