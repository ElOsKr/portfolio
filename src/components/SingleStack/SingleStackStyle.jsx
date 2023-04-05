import styled from 'styled-components';

const StackContainter = styled.div`
    border-radius: 8px;
    padding: 10px;
    border: 1px solid white;
    margin-top: 20px;
    transition: all .7s;

    &:hover{
        border: 1px solid #00ADB5;
    }
`

const StackList = styled.div`
    display: flex;
`

const Stack = styled.div`
    display: flex;
    align-items: center;
`

const StackImg = styled.div`
    width: 30px;
    height: 30px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export{
    StackContainter,
    StackList,
    Stack,
    StackImg
}