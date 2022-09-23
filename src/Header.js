import styled from 'styled-components'
import {Link} from 'react-router-dom'

const  Header = () => {
    return(
        <Main>
            <Head>
            <H1><Link to="/">Maneet Bhatia</Link></H1>
            <Ul>
                <Li><Link to="/portfolio">Projects</Link></Li>
                <Li><Link to="/resume">Resume</Link></Li>
            </Ul>
            </Head>
        </Main>
    )
}

export default Header;

const Main = styled.div`
    background-color: grey;
    color: white;
    margin-bottom: 40px;

`

const Head = styled.div`
display: flex;
`

const H1 = styled.h1`
float: left;
margin-right: 35%;
margin-left: 40px;
`

const Ul = styled.ul`
float: right;
display: flex;
`

const Li = styled.li`
padding:  0px 20px;
list-style: none;
margin-top: 7px;
color: white;
text-decoration: none;
`