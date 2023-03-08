import styled from 'styled-components';
import Card from '../Card';
import { Titulo } from './../Titulo';

const CadContainer = styled.div`
    background: #42F;
    text-align: center;
    padding: 5px 0;
    height: 650px;
    width: 100%;
`
const CadList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
function SecaoContainer() {   
    return (
        <CadContainer> 
            <Titulo cor="#43f"> NOVA SECAO</Titulo>
            <CadList> 
            <Card titulo="TITULO" subtitulo="Sub titulo do CAD" descricao="Este é uma descricao do CAD"  />
            <Card titulo="TITULO" subtitulo="Sub titulo do CAD" descricao="Este é uma descricao do CAD"  />
            <Card titulo="TITULO" subtitulo="Sub titulo do CAD" descricao="Este é uma descricao do CAD"  />
            </CadList>
            
        </CadContainer> 
    )
}

export default SecaoContainer