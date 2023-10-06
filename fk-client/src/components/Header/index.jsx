import {styled} from "styled-components"
import Intro from "../IntroText"
import Form from "../Form"


const Wrapper = styled.body`
    
    background-image: url(/banner.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;    
    height: 100vh;   
    margin-top: 0px;
    h1{
        margin: 0px;
        padding: 10px;    
    }    
    `
    


const StyledHeader = styled.header `       
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    max-width: 100%;
    margin-top: 10px;
    font-family: 'Kelly Slab';    
    `

const Header = () => {
    return (
        <Wrapper>
        <h1>Faceless Kingdom</h1>
        <StyledHeader>
            <Intro/>
            <Form/>
        </StyledHeader>
        </Wrapper>
    )
}

export default Header