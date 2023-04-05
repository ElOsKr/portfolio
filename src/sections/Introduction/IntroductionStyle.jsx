import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImgContainer = styled.div`
    width: 150px;
    height: 150px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const UserName = styled.h1`
    font-size: 20px;
    text-align: center;
`

const UserJob = styled.p`
    color: #adadad;
`

const UserDescription = styled.p`
    h1{
        border-bottom: 1px solid white
    }
`

export {
    MainContainer,
    ImgContainer,
    UserName,
    UserJob,
    UserDescription
}