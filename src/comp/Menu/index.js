import styled from 'styled-components';

const itemListMenu = ['HOME','SERVIÇOS','PORTIFÓLIO','PESQUISA','LOGIN'];
const ListMenu = styled.ul`
    display: flex;
`
const ItemMenu = styled.li`
    font-size: 16px;    
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
function Menu() {
    return (
        <ListMenu>
            { itemListMenu.map( (texto) => ( <ItemMenu><p>{texto}</p></ItemMenu> ) ) }
        </ListMenu>
    )
}

export default Menu