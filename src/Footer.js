import styled from 'styled-components'

const Footer = () => {
    return(
      <Main>
        <P>@copy 2022 Maneet Bhatia</P>
      </Main>
    )
}

export default Footer;

const Main = styled.div`
background-color: grey;
color: white;
text-align: center;
width: 100%;
position: absolute;
bottom: 0px;
`

const P = styled.p`
font-size: 22px;
padding: 10px;
`