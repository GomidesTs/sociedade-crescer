import { Container } from './styles'

export function LeftBlock({ image, description }) {
    return (
        <Container>
            <img src={image} alt="ilustracao" />
            <p>
                {description}
            </p>
        </Container>
    )
}