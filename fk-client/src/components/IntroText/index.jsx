import styled from "styled-components"

const IntroTextStyle = styled.header `
    .intro{    
        display: flex;
        flex-direction: column;                
        
        margin-top: 5px;           
        width: 100%;        
        max-width: 415px;
        min-width: 115px;
        height: 100%;
        max-height: 475px;
        color: #4d6763;
        background-color: #F2E1AE;
        box-shadow: 10px 10px 32px hsla(0, 0%, 0%, 0.514);        
        padding: 30px 10px 20px 35px;
        font-size: 1.4rem;
        font-weight: bold;
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
