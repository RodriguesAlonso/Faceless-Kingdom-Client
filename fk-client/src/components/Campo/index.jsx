import styled from "styled-components"

const CampoStyle = styled.div `   
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);    
    width: 100%;
    border: none;
    font-size: 24px;
    box-sizing: border-box;
    padding:24px;
    box-shadow: 5px 5px 15px #4d6763;        
    margin-top: 15px;
    margin-bottom: 15px;
    input{
        
        margin-top: 15px;
        padding: 5px;
        background-color: #124C59;
        border-radius: 10px;
        width: 100%;
        border-style: none;
        color: #fff;
    }
`

const Campo = () => {
    return (
        <CampoStyle >
            <input type="text" placeholder="User"/>
            <input type="password" placeholder="Password"/>
        </CampoStyle>


    )
}

export default Campo
