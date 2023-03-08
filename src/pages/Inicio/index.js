 
import styled from 'styled-components';
import Card from '../../comp/Card';

const DivPage = styled.div`
width: 100vw;
height: 100vh;

`

const CadList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

function Inicio() {
    return (
        <DivPage> 
             <h1> Página Home do Sistema</h1>
             <CadList>
             <Card titulo="TITULO" subtitulo="Sub titulo do CAD" descricao="Este é uma descricao do CAD"  />
            <Card titulo="TITULO" subtitulo="Sub titulo do CAD" descricao="Este é uma descricao do CAD"  />
            <Card titulo="TITULO" subtitulo="Sub titulo do CAD" descricao="Este é uma descricao do CAD"  />
            </CadList>
        </DivPage>
    )
}

export default Inicio