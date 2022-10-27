import { Container, Content, Information, Description } from './styles'

import { Header } from '../../components/Header'
import { PageTitle } from '../../components/PageTitle'
import { SectionTitle } from '../../components/SectionTitle'
import { Card } from '../../components/Card'

import Lunch from '../../assets/img/lunch.png'
import Breakfast from '../../assets/img/breakfast.png'
import Children from '../../assets/img/children.png'
import Activity from '../../assets/img/activity.png'

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <PageTitle title='Sociedade Crescer' />

                <h2>
                    Um lugar para crescer, aprender e ser <span>feliz</span>
                </h2>

                <p>
                    A missão da Sociedade Crescer é promover o desenvolvimento humano de crianças e jovens de 6 a 17 anos residente na região da Vila Zumbi, que fica no município de Colombo-PR, região constituída por ocupação territorial e suas famílias vivenciam muitas situações de ausências de direitos e condições de vulnerabilidade social em larga escala.
                </p>

                <SectionTitle
                    title='Crescendo com a comunidade'
                />

                <Information>
                    <Card
                        image={Lunch}
                        title='Almoço'
                        description='O almoço é uma das principais refeições do dia,  é por meio dele que ingerimos a maior quantidade de nutrientes e calorias, que nos oferecem energia para terminarmos o restante de nossas atividades diárias, na Sociedade Crescer são oferecidos 20.240 almoços em média por ano com cardápios variados garantindo assim uma alimentação balanceada e saudável'
                    />

                    <Card
                        image={Breakfast}
                        title='Lanches'
                        description='Para realizar todas as atividades oferecidas pelo projeto, as crianças ganham pequenos lanches saudáveis, que contribuam com o consumo de nutrientes essenciais à saúde e com a manutenção da disposição ao longo do dia.
                A Sociedade Crescer oferece em média 40.480 lanches por mês separados em lances pela manhã e tarde.'
                    />

                    <Card
                        image={Children}
                        title='Crianças'
                        description='O projeto conta atualmente com 140 crianças inscritas em atividades regulares em uma média de 200 dias letivos.
                A Sociedade Crescer contribui  com o desenvolvimento de aptidões múltiplas para ampliação do universo informacional, artístico e cultural das crianças e adolescentes incentivando a formação cidadã e vivências para o alcance de autonomia e protagonismo social'
                    />
                </Information>

                    
                <Description>
                    <div>
                    <SectionTitle
                        title='Impactando a sociedade'
                    />
                    <p>
                        A Sociedade Cresce desenvolve atividades para crianças e suas famílias voltadas ao desenvolvimento pessoal e interpessoal para os pequenos adentrarem a sociedade.
                    </p>
                    </div>

                    <img src={Activity} alt="" />
                </Description>
            </Content>
        </Container>

    )
}