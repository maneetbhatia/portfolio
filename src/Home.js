import styled, {keyframes} from "styled-components";
import {Link} from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const Home = () => {
    return (
        <Main>
            <Wrapper>
                <H1>Hello, I'm Maneet</H1>
                <H3>Full-Stack Web Developer</H3>
                <Div><ProjectLink to="/portfolio" >Projects</ProjectLink></Div>
                <Icons>
                    <Span>
                        <LogoLink href="https://github.com/maneetbhatia" target="_blank">
                            <AiFillGithub size={40}/>
                        </LogoLink>
                    </Span>
                    <Span>
                        <LogoLink href="https://ca.linkedin.com/in/maneet-bhatia-web-developer?trk=people-guest_people_search-card" target="_blank">
                            <AiFillLinkedin size={40}/>
                        </LogoLink>
                    </Span>
                    <Span>
                        <LogoLink href="mailto:someone@example.com">
                            <AiOutlineMail size={40}/>
                        </LogoLink>
                    </Span>
                </Icons>
            </Wrapper>
        </Main>
    )

}

export default Home;

const Main = styled.div`
    min-height: calc(100vh - 113px);
`

const flash = keyframes`
    0% { transform: scale(0); }
    100% { transform: scale(1); }
`;

const Wrapper = styled.div`
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

const H1 = styled.p`
    font-size: 80px;
    margin: 20px 0px;
`

const H3 = styled.h3`
    font-size: 30px;
`

const Icons = styled.p`
    margin: 50px 0px 40px 0px;
    animation: ${flash} 1s linear;
`

const Span = styled.span`
    cursor: pointer;
    margin: 0px 25px;
`

const LogoLink = styled.a`
    text-decoration: none;
    color: grey;
    animation: ${flash} 0.7s linear;
    
    &:hover{
        color: white;
    }
`

const ProjectLink = styled(Link)`
    padding: 10px 35px;
    border: 1px solid white;
    text-decoration: none;
    color: white;
    font-size: 25px;
    border-radius: 15px;

    &:hover{
        background-color: black;
        color: white;
    }
`

const IconLink = styled(Link)`
    text-decoration: none;
    color: grey;
`

const Div = styled.div`
    margin: 50px 0px 40px 0px;
`