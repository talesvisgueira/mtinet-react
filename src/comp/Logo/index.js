 
import imgLogo from '../../image/logo.jpg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
    font-size: 25px;
    margin: 5px;
`

const LogoImage = styled.img`
  width: 55px;
  height: 55px;
  margin: 10px;
`

function Logo() {
    return (
      <LogoContainer> 
        <LogoImage src={imgLogo} alt="logo"  />
        <p> <strong>VERLOG</strong> Logística </p>
      </LogoContainer>
    )
}

export default Logo;
