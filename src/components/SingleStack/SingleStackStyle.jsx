import styled from 'styled-components';

const StackContainter = styled.div`
    border-radius: 8px;
    padding: 10px;
    border: 1px solid white;
    margin-top: 20px;
    transition: all .7s;
    width: 100%;
    max-width: 600px;
    min-width: 239px;

    h3{
        text-align: center;
    }

    &:hover{
        border: 1px solid #00ADB5;
    }
`

const StackList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Stack = styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
    width: 50%;
    gap: 10px;
    justify-content: center;
    
`

export{
    StackContainter,
    StackList,
    Stack,
}