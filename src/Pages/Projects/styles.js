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
 
    p{
        font-size: 2.4rem;
        padding-top: 2rem;
    }
`