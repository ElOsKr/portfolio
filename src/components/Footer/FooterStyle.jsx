import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: rgb(57, 62, 70);
    width: auto;
    margin:  30px -2rem 0 -2rem;
    justify-content: space-between;
    height: auto;
    padding: 20px;

    @media only screen and (min-width: 1000px) {
        margin: 30px -4rem 0 -4rem;
    }
`

const CopyrightContainer = styled.div`
`

const SocialContainer = styled.div`
    display: flex;
    gap: 10px;
`

export {
    MainContainer,
    CopyrightContainer,
    SocialContainer
}