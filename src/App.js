
import Header from './comp/Header';
import Search from './comp/Search';
import SecaoContainer from './comp/SecaoContainer';
import styled from 'styled-components';


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image:  linear-gradient(90deg, #002F52 35%, #326589);
`
function App() {
  return (
    <AppContainer>
        <Header />
        <Search />
        <SecaoContainer />
    </AppContainer>
  );
}

export default App;
