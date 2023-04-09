import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MailContainer = styled.div`
    text-align: center;

    a{
        display: block;
        color: white;
    }
`

export {
    MainContainer,
    MailContainer
}