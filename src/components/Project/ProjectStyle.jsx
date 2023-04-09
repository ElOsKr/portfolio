import styled from 'styled-components';

const ProjectContainter = styled.div`
    border-radius: 8px;
    border: 1px solid white;
    margin-top: 20px;
    width: 100%;
    max-width: 600px;
    min-width: 260px;
    overflow: hidden;
    position: relative;
    height: 250px;
    transition: all 0.5s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    &:hover{
        border: 1px solid #00ADB5;

        div{
            opacity: 1;
        }
    }

`

const ProjectDescription = styled.div`
    transition: opacity .5s;
    opacity: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(57, 57, 57, 0.737) 100%);

    h2{
        margin: 0;
    }
`

const ProjectOptions = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    a{
        text-decoration: none;
        color: #00ADB5;
        border: 1px solid #00ADB5;
        border-radius: 8px;
        padding: 5px 10px;
        transition: background .8s;

        &:hover{
            background: #00ADB5;
            color: white;
        }

    }
`

export {
    ProjectContainter,
    ProjectDescription,
    ProjectOptions
}