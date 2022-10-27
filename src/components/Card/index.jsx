import { Container } from './styled'

export function Card({ title, description, image }) {
    return (
        <Container>
            <img src={image} alt={title} />
            
            <p>{title}</p>
            <p>{description}</p>
        </Container>
    )
}