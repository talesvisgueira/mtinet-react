import styled from 'styled-components';
 
import Search from '../../comp/Search';
 

const DivPage = styled.div`
width: 100vw;
height: 100vh;
`
function Pesquisa() {
      return (
        <DivPage>
            <Search />
        </DivPage>
      )
     
}

export default Pesquisa