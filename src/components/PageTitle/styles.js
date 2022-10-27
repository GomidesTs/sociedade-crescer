import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        max-width: 40rem;
        max-height: 29.5rem;
    }
`

export const Text = styled.h1`
    max-width: 80rem;
    
    font-size: 10.28rem;
    line-height: 84%;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.BLUE};
`