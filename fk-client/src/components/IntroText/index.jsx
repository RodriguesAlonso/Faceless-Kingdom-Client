import styled from "styled-components"

const IntroTextStyle = styled.header `    
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 65px;
    max-width: 430px;
    min-width: 115px;  
    background-color: #124C59;
    box-shadow: 5px 5px 15px #4d6763;        
    padding: 30px 10px 20px 35px;
    
    .intro{            
        display: flex;
        flex-direction: column;                    
        
        color: #F2E1AE;
        font-size: 1.6rem;
        font-weight: bolder;        
        line-height: 40px;
    }
    p{
        margin-top: -15px;
    }       
`

const IntroText = () => {
    return (
        <IntroTextStyle>
            <div className="intro">
                <p>
                    The mysterious land of the Faceless Kingdom lies beyond our world, an unknown land inhabited by strange creatures.</p>
                <p>Here the faceless people wander the endless plains, their faces hidden from the world.</p>
                <p>For centuries they have remained unknown, their secrets and stories untold, keeping the wonders of the Faceless Kingdom hidden from the eyes of the world.</p>

            </div>
        </IntroTextStyle>
    )
}
export default IntroText
