import styled from 'styled-components';
 

const CardArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #354;
    text-align: center;
    padding: 5px 10px;
    margin: 10px;
    height: 200px;
    width: 250px;
`

function Card({titulo,subtitulo,descricao}) {
    return (
        <CardArea >
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <p>{descricao}</p>
            <button> Saiba mais</button>
        </CardArea>
   )
}

export default Card