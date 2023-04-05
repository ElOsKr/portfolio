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
    color: #d2d2d2;
`

const UserDescription = styled.div`
    padding-left: 10%;
    h1{
        border-bottom: 1px solid white
    }
`

const UserMedia = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 390px;
    left: 5%;
`

const UserCV = styled.a`
    text-decoration: none;
    color: #00ADB5;
    border: 1px solid #00ADB5;
    border-radius: 8px;
    padding: 10px 20px;
    transition: all .4s;

    &:hover{
        background: #00ADB5;
        color: white;
    }
`

export {
    MainContainer,
    ImgContainer,
    UserName,
    UserJob,
    UserDescription,
    UserMedia,
    UserCV
}