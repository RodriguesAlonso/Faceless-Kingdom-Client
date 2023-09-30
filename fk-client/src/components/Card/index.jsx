import styled from "styled-components"

const CardStyle = styled.div `
    display: flex;    
    justify-content: center;

    img{
    margin-top: 10px;
    max-width: 100%;
    width: 240px;
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
