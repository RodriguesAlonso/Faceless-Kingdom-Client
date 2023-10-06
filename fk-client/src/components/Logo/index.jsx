import styled from "styled-components"


const StyledLogo = styled.div `   
    width: 100%;     
    margin-top: 60px;
    img{
        
        width: 100%;
        box-shadow: 5px 5px 15px #4d6763;        
        
    }
    
`
const Logo = () => {
    return (
        <StyledLogo>
            <img src="/logo.png" alt="logo"/>
        </StyledLogo>
    )

}

export default Logo
