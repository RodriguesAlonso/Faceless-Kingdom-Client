import styled from "styled-components"
import Card from "../Card"

// const Wrapper = styled.aside`
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
//     position: absolute;
//     right: 0px;
//     width: 100%;
//     max-width: 900px;
// `

const RealmStyle = styled.div `    
    margin-top: 30px;
    display: flex;
    justify-content: center;    
    flex-wrap: wrap;
    gap: 40px;   
    
`

const Realm = () => {
    return(
        <RealmStyle>
            <Card realm_img="/src/assets/realms/Dominaria.png"></Card>            
            <Card realm_img="/src/assets/realms/Mirrodin.png"></Card>            
            <Card realm_img="/src/assets/realms/Tolariano.png"></Card>            
        </RealmStyle>
    )
}

export default Realm
