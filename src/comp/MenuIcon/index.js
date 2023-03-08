import icon1 from'../../image/icon1.png';
import icon2 from'../../image/icon2.png';
import styled from 'styled-components';

const ListMenu = styled.ul`
    display: flex;
`

const ItemMenu = styled.li`
    font-size: 16px;    
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const itemIconList = [icon1,icon2];

function MenuIcon() {
    return (
        <ListMenu>
            { itemIconList.map( (icon) => ( <ItemMenu> <img src={icon} alt="Icon"></img></ItemMenu>) ) }
        </ListMenu>

    )
}

export default MenuIcon