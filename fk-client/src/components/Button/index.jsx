import styled from "styled-components";

const ButtonStyle = styled.div `        
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;     
    button{            
        box-shadow: 5px 5px 15px #4d6763;        
        background: #F2E1AE;
        border-radius: 5px;
        border: none;
        color: #092626;
        padding: 22px;
        text-align: center;        
        font-size: 1.3rem;
        font-weight: Bolder;        
        font-size: 1rn;
        text-align: center;
        cursor: pointer;  
        &:hover
        {
            background-color: #124C59;
            
            color: #F2E1AE;
        }
        
        }
    `

const Button = () => {
    //onSubmit

    return (
        <ButtonStyle>
            <button type="submit">
                Sign Up
            </button>
        </ButtonStyle>
    )
}

export default Button
