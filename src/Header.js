import styled from 'styled-components'
import {Link} from 'react-router-dom'

const  Header = () => {
    return(
        <Main>
            <Head>
            <H1><NavLink to="/">MB</NavLink></H1>
            <Ul>
                <Li><NavLink to="/about">About</NavLink></Li>
                <Li><NavLink to="/portfolio">Projects</NavLink></Li>
                <Li><NavLink to="/contact">Contact</NavLink></Li>
                <Li><NavLink to="/resume">Resume</NavLink></Li>
            </Ul>
            </Head>
        </Main>
    )
}

export default Header;

const Main = styled.div`
border-bottom: 1px solid black;
background-color: grey;

`

const Head = styled.div`
display: flex;
justify-content: space-between;
width: 70%;
margin: auto;
padding: 15px 0px;
`

const H1 = styled.h1`
width: fit-content;
font-family: Arial, Helvetica, sans-serif;
color: white;
`

const Ul = styled.ul`
width: fit-content;
display: flex;
text-decoration: none;
`

const Li = styled.li`
margin-left: 60px;
list-style: none;

margin-top: 8px;
color: white;
text-decoration: none;
`

const NavLink = styled(Link)`
text-decoration: none;
color: whitesmoke;
`