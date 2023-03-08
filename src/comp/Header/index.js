import Logo from '../../comp/Logo';
import Menu from '../../comp/Menu';
import MenuIcon from '../../comp/MenuIcon';
import styled from 'styled-components';

const HeaderContaier = styled.header`
    display: flex;
    background-color: #FFF;
    justify-content: center;
`
 
function Header() {
    return (
        <HeaderContaier> 
            <Logo />
            <Menu /> 
            <MenuIcon />
        </HeaderContaier>
    )
}

export default Header