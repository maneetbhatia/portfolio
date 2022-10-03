import styled from 'styled-components'

const Footer = () => {
    return(
      <Main>
        <P> &copy; 2022, All rights reserved</P>
      </Main>
    )
}

export default Footer;

const Main = styled.div`
text-align: center;
width: 100%;
background-color: grey;
color: whitesmoke;

`

const P = styled.p`
font-size: 22px;
padding: 10px;
`