import styled from "styled-components"

const CardStyle = styled.div `    
    img{
    margin-left: 20px;
    margin-right: 20px;
    max-width: 100%;
    width: 180px;
    box-shadow: 2px 2px 15px #1E0226;        
}
`

const Card = (props) => {
    return(
        <CardStyle>
            <img src={props.realm_img} alt="Card"/>
        </CardStyle>
    )
}

export default Card
