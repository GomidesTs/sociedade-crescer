import styled from 'styled-components'

export const Container = styled.div`
    max-width: 40rem;
    height: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    overflow: hidden;

    border-radius: 2rem;

    img{
        width: 100%;
        height: 100%;
    }

    p{
        padding: 1rem 2rem;

        text-align: justify;
        line-height: 140%;

        :nth-child(2){
            color: ${({ theme }) => theme.COLORS.ORANGE};
        }

        :nth-child(3){
            font-size: 1.6rem;

            padding-bottom:1rem;
        }
    }
`