import styled from "styled-components";

const SkillContanier = styled.div`
    width: 100%;
    height: 55vh;
`;

const StyledUl = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const StyledLi = styled.li`
    margin-bottom: 5vh;
`;

const InnerUl = styled.ul`
    list-style-type: "- ";
`;

const InnerLi = styled.li`
    margin-right: 3vw;
`;

export default function Skills() {
    return (
        <>
            <title>Skills | Resume</title>
            <SkillContanier>
                <StyledUl>
                    <StyledLi>
                        <strong>Software Knowledge</strong>
                        <InnerUl>
                            <InnerLi>Java (Spring Boot)</InnerLi>
                            <InnerLi>Python (Django)</InnerLi>
                            <InnerLi>PHP (Laravel)</InnerLi>
                            <InnerLi>JavaScript (Node.js, React)</InnerLi>
                            <InnerLi>HTML/CSS</InnerLi>
                            <InnerLi>SQL</InnerLi>
                            <InnerLi>Git</InnerLi>
                            <InnerLi>Maven</InnerLi>
                            <InnerLi>Linux</InnerLi>
                            <InnerLi>PowerShell</InnerLi>
                            <InnerLi>Docker</InnerLi>
                            <InnerLi>Azure</InnerLi>
                            <InnerLi>Google Cloud</InnerLi>
                            <InnerLi>R</InnerLi>
                        </InnerUl>
                    </StyledLi>
                    <StyledLi>
                        <strong>Other Languages</strong>
                        <InnerUl>
                            <InnerLi>Chinese (Mandarin) - Native</InnerLi>
                            <InnerLi>Japanese - N1 Level</InnerLi>
                        </InnerUl>
                    </StyledLi>
                </StyledUl>
            </SkillContanier>
        </>
    )
}