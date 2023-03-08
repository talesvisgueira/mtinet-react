import styled from 'styled-components';

const Footer = styled.footer`
    display: flex;
    width: 100vw;
    height: 80px;
    justify-content: center;
    background-color: #000
`
const TituloBranco = styled.h2`
    color: #FFF
`

function Rodape() {
    return (
        <Footer> 
            <TituloBranco> Desenvolvido por MTINet Soluções Inteligente</TituloBranco>
        </Footer>
    )
        
 
}

export default Rodape