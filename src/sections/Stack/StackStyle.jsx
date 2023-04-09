import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StackContainer = styled.div`
    @media only screen and (min-width: 1000px) {
        display: flex;
        gap: 20px;
    }
`

export {
    MainContainer,
    StackContainer
}