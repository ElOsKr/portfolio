import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PortfolioContainer = styled.div`
    @media only screen and (min-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
`

export {
    MainContainer,
    PortfolioContainer
}