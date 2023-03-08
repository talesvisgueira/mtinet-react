import Input from '../Input'
import styled from 'styled-components';
import { useState } from 'react'
import { livros } from './dadosSearch';
 
const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`
const Titulo = styled.div`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   cursor: pointer;
   p {
       width: 200px;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`


function Search() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    //console.log(livrosPesquisados);
    return (
        <SearchContainer> 
            <Titulo> Pesquisar </Titulo>
            <SubTitulo> Encontre os dados..</SubTitulo>
            <Input  
              placeholder='Digite o parâmetro da pesquisa'
              onBlur={evento => {
                const textoDigitado = evento.target.value;
                const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado) );
                setLivrosPesquisados(resultadoPesquisa);
                 
              }} />
              {
                livrosPesquisados.map( livro => (
                    <Resultado>
                        <p>{livro.nome}</p>
                    </Resultado>
                ) )
              }
        </SearchContainer>
    )
}

export default Search;


