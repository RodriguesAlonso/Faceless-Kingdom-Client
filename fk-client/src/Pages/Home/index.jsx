import styled from "styled-components"
import Header from "../../components/Header"
import GlobalStyle from "../../components/GlobalStyle"


const StyledBody = styled.body`
    padding: 0px;
    margin: 0px;
    height: 100vh;
    background-color:blue;
    h1{
        padding: 0px;
        margin: 0px;
    }
`

function Home() {
    return (
        <>
            <GlobalStyle />
            <StyledBody>
            <h1>Faceless Kingdom</h1>
                <Header />
            </StyledBody>
        </>
    )
}

export default Home
