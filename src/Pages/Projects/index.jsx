import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { PageTitle } from '../../components/PageTitle'
import { LeftBlock } from '../../components/LeftBlock'

import Bear from '../../assets/svg/bear.svg'
import Watch from '../../assets/svg/watch.svg'

export function Projects() {
    return (
        <Container>
            <Header />
            <Content>
                <PageTitle
                    title='Projetos'
                />

                <LeftBlock
                    image={Bear}
                    description='O desenvolvimento das ações da Sociedade Crescer, se constituem em um espaço de segurança e proteção e contribui efetivamente com o desenvolvimento de aptidões múltiplas que contribuem para ampliação do universo informacional, artístico e cultural das crianças e adolescentes, bem como desperta e incentiva o olhar e a elaboração de novos projetos de vida, incentivando a formação cidadã e vivências para o alcance de autonomia e protagonismo social, que intende que a valorização e a compreensão de seu território se constituem como elementos fundantes de uma práxis que busca a autonomia e a participação social.'
                />

                <LeftBlock
                    image={Watch}
                    description='Os participantes do projeto são atendidos no período de contra turno escolar.Todos são atendidos com o almoço, lanche da manhã e da tarde. Além do atendimento aos alunos, o projeto conta com doações, para entregar rotineiramente, cestas de alimentos para as famílias.'
                />
                
            </Content>
        </Container>
    )
}