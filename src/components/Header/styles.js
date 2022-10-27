import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    img{
        max-width: 9.5rem;
        max-height: 10.6rem;
    }

    a{
        padding: 2rem;

        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`