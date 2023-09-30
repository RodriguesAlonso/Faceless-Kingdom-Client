import styled from "styled-components"

const IntroTextStyle = styled.header `
    .intro{    
        display: flex;
        flex-direction: column;              
        margin-top: 30px;
        margin-left: 5px;
        margin-right: 15px;
        width: 100%;
        max-width: 540px;
        
        max-height: 550px;
        color: #4d6763;
        background-color: #F2E1AE;
        box-shadow: 10px 10px 32px hsla(0, 0%, 0%, 0.514);        
        padding: 0px 10px 20px 15px;
        font-size: 1.7rem;
        font-weight: bold;
        line-height: 40px;
    }
    p{
        margin-top: 0px;
    }       
`

const IntroText = () => {
    return (
        <>
            <IntroTextStyle/>

            <div className="intro">
                <p>
                    The mysterious land of the Faceless Kingdom lies beyond our world, an unknown land inhabited by strange creatures.</p>
                <p>Here the faceless people wander the endless plains, their faces hidden from the world.</p>
                <p>For centuries they have remained unknown, their secrets and stories untold, keeping the wonders of the Faceless Kingdom hidden from the eyes of the world.</p>

            </div>
        </>
    )
}
export default IntroText