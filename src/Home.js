import styled from "styled-components";
import {Link} from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import backgroungImg from './Assests/background.jpg';

const Home = () => {
    return (
        <Main>
            <Wrapper>
                <H1>Maneet Bhatia.</H1>
                <H3>Full-Stack Web Developer</H3>
                <Div><LogoLink to="/portfolio" >Projects</LogoLink></Div>
                <Icons>
                    <Span><AiFillGithub size={40}/></Span>
                    <Span><AiFillLinkedin size={40}/></Span>
                    <Span><IconLink to=""><AiOutlineMail size={40}/></IconLink></Span>
                </Icons>
            </Wrapper>
        </Main>
    )

}

export default Home;

const Main = styled.div`
    min-height: calc(100vh - 113px);
`

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
`

const Span = styled.span`
    cursor: pointer;
    margin: 0px 25px;
`

const LogoLink = styled(Link)`
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