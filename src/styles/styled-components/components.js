import styled , {css} from "styled-components/macro";

export const Btn = styled.button`
    border: none;
    background-color: ${props => props.theme.primaryColor};
`

export const FirstBtn = styled(Btn)`
    padding: 0.5rem 1rem;
    border-radius: 10px;
    transition: opacity .4s;
    &:hover{
        opacity: 0.9;
    }
`

export const SecondBtn = styled.button`
    border: 1px solid ${props => props.theme.buttonColor};
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    color: ${props => props.theme.buttonColor};
    background-color: transparent;
    transition: background-color .3s;
    &:hover{
        color: ${props => props.theme.primaryBg};
        background-color: ${props => props.theme.buttonColor};
    }
 `

export const IconKeeper = styled.div`
    display: inline-block;
    padding: .7rem;
    border-radius: 15px;
    background-color: ${props => props.theme.iconKeeperColor};;

    .my-icon{
        color: ${props => props.theme.primaryColor};
        font-size: 35px;
    }
`