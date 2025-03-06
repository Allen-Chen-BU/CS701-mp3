import styled from "styled-components";

const StyledUl = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const StyledLi = styled.li`
    margin-bottom: 5vh;
`;

export default function Experience() {
    return (
        <>
            <title>Experience | Resume</title>
            <StyledUl>
                <StyledLi>
                    <strong>Software Engineer</strong>, 
                    contracted with Microsoft through Antra, WA 
                    <br/>
                    02/2022 - 06/2022
                    <ul>
                        <li>
                            Responded to manage Cloud Resources and VMs on Azure 
                            by operating Azure portal, Azure CLI, and Azure PowerShell 
                            to maintain service for Dynamics 365 Fraud Protection.
                        </li>
                        <li>
                            Resolved 3+ incidents per day by communicating with teams 
                            to avoid issues like usage of expired keys.
                        </li>
                        <li>
                            Wrote automated scripts to scan VMs to ensure VMs are up 
                            and secrets are updated.
                        </li>
                        <li>
                            Deployed an Azure Service Fabric cluster to replace old cluster 
                            for vertical upgrade.
                        </li>
                        <li>
                            Studied Docker containers and pods on Azure Kubernetes for transformation
                            and further scalability.
                        </li>
                    </ul>
                </StyledLi>
                <StyledLi>
                    <strong>Management Information System Engineer</strong>, 
                    Willingbikes, Taiwan
                    <br/>
                    02/2023 - 07/2023
                    <ul>
                        <li>
                            Developed a file-searching application with PHP Laravel 
                            to improve workflow in production line by 5%. 
                        </li>
                        <li>
                            Generated monthly and weekly reports automatically with SQL 
                            and Laravel Mail based on an ERP system's database 
                            for different departments.
                        </li>
                        <li>
                            Recovered files, rebuilt servers, and determined source of attack 
                            after damaged from ransomware.
                        </li>
                        <li>
                            Managed Active Directory for employees to authorize files and 
                            applications by utilizing group policies.
                        </li>
                        <li>
                            Provided IT support on hardware and software issues 
                            for equipment such as computers and tablets.
                        </li>
                    </ul>
                </StyledLi>
            </StyledUl>
        </>
    )
}