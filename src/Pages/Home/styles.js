import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 12.5rem auto;
    grid-template-areas: 
    'header'
    'content';
`

export const Content = styled.div`
    grid-area: content;

    overflow-y: auto;

    padding: 2rem;

    h2{
        max-width: 80rem;

        font-weight: 400;
        font-size: 6.4rem;

        padding-top: 2rem;

        span{
            font-family: 'Rouge Script', cursive;
            color: ${({ theme }) => theme.COLORS.ORANGE};
        }
    }

    p{
        font-size: 2.4rem;
        padding-top: 2rem;
    }
`

export const Information = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 2rem;
`

export const Description = styled.div`
    display: flex;

    align-items: center;

    padding-top: 10rem;

    img{
        max-width: 50rem;
    }
`