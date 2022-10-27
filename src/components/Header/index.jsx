import { Link } from 'react-router-dom'

import { Container } from './styles'

import Logo from '../../assets/svg/crescerSimpleLogo.svg'

export function Header() {
    return (
        <Container>
            <img src={Logo} alt="" />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projetos</Link>
                <Link>Histórias</Link>
                <Link>Doe</Link>
                <Link>Contato</Link>
            </nav>
        </Container>
    )
}