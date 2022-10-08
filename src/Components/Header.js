import styled from 'styled-components'
import {NavLink,Link} from 'react-router-dom'
import './header.css'

const  Header = () => {
    return(
        <Main>
            <Head>
                <H1><NavLinks to="/">MB</NavLinks></H1>
                <Ul>
                    <Li><Links to="/about">About</Links></Li>
                    <Li><Links to="/portfolio">Projects</Links></Li>
                    <Li><Links to="/contact">Contact</Links></Li>
                </Ul>
            </Head>
        </Main>
    )
}

export default Header;

const Main = styled.div`
    border-bottom: 1px solid black;
    background-color: gray;
`

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: auto;
    padding: 15px 0px;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

const H1 = styled.h1`
    width: fit-content;
    font-family: Arial, Helvetica, sans-serif;
    color: white;

    @media (max-width: 800px) {
        width: 100%;
        text-align: center;
        font-size: 45px;
        padding-bottom: 15px;
    }
`

const Ul = styled.ul`
    width: fit-content;
    display: flex;
    text-decoration: none;

    @media (max-width: 800px) {
        flex-direction: column;
        width: 90%;
        margin: auto;
    }
`

const Li = styled.li`
    margin-left: 60px;
    list-style: none;
    font-size: 18px;;
    margin-top: 8px;

    @media (max-width: 800px) {
        font-size: 30px;
        margin: auto;
        padding-top: 20px;
    }
`

const Links = styled(NavLink)`
    text-decoration: none;
    color: whitesmoke;
    color: white;
    
    &:hover{
        color: silver;
    }

    @media (max-width: 800px) {
        color: whitesmoke;
    }
`

const NavLinks = styled(Link)`
    text-decoration: none;
    color: whitesmoke;
    color: white;
    
    &:hover{
        color: silver;
    }
`