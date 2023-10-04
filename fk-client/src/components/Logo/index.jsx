import styled from "styled-components"


const LogoStyle = styled.div `   
    width: 100%;           
    img{
        width: 100%;
        box-shadow: 5px 5px 15px #4d6763;        
        
    }
    
`
const Logo = () => {
    return (
        <LogoStyle>
            <img src="/logo.png" alt="logo"/>
        </LogoStyle>
    )

}

export default Logo
