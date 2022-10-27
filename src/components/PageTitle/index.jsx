import { Container, Text } from './styles'

import Logo from '../../assets/svg/crescerCompleteLogo.svg'

export function PageTitle({ title }) {
    return (
        <Container>
            <Text>
                {title}
            </Text>
            <img src={Logo} alt="Logo Sociedade Crescer" />
        </Container>
    )
}