import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImgContainer = styled.div`
    position: relative;
    width: 150px;
    height: 200px;
    margin: 0 auto;
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
        border-bottom: 1px solid white;
        margin: 20px 15% 10px 7%;
    }

    @media only screen and (min-width: 1000px) {
        width: 100%;
        padding-left: 0% ;
        h1{
            margin: 0;
        }
    }
`

const UserMedia = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 390px;
    left: 5%;

    @media only screen and (min-width: 1000px) {
        position: static;
        flex-direction: row;
        justify-content: center;
        gap: 30px;
    }

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
const UserContainer = styled.div`
    text-align: center;

    @media only screen and (min-width: 1000px) {
        display: flex;
        gap: 20px;
        align-items: center;
    }
`

const EditPhoto = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 200px;
    background: linear-gradient(rgba(34, 40, 49, 0) 0%, rgba(34, 40, 49, 0.2) 50%, rgba(34, 40, 49, 0.5) 80%, rgb(34, 40, 49) 100%);
`

const UserData = styled.div`

`

export {
    MainContainer,
    ImgContainer,
    UserName,
    UserJob,
    UserDescription,
    UserMedia,
    UserCV,
    UserContainer,
    UserData,
    EditPhoto
}