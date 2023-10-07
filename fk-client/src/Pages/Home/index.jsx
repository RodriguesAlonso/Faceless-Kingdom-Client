import styled from "styled-components"
import Header from "../../components/Header"
import GlobalStyle from "../../components/GlobalStyle"


const StyledBody = styled.body`
    padding: 0px;
    margin: 0px;    
    background-color:#1F598C;

`

function Home() {
    return (
        <>  
            <GlobalStyle />
            <StyledBody>
                <Header />
            </StyledBody>
        </>
    )
}

export default Home
