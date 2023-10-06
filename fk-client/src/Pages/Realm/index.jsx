import GlobalStyle from "../../components/GlobalStyle"
import styled from "styled-components"
import Card from "../../components/Card"
import TableRealm from "../../components/TableRealm"

const RealmStyle = styled.body `
    position: fixed;   
    background-image: url(/backGroundRealms.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;    
    h1{     
        font-family: 'Kelly Slab';
        color: #396D73;
        font-size: 6em;
    }
    .realms{        
        margin-left: 2%;
        display: flex;
        flex-wrap: wrap; 
        gap: 5px;;    
        
        
    }      
`
const WrapperTable = styled.div `

`


const Realm = () => {
    return (
        <>
            <GlobalStyle/>
            <RealmStyle>
                <h1>Realms</h1>
                <WrapperTable>
                </WrapperTable>
                    <TableRealm/>
                <div className="realms">
                    <Card realm_img="/src/assets/realms/Tolariano.png"></Card>
                    <Card realm_img="/src/assets/realms/Dominaria.png"></Card>
                    <Card realm_img="/src/assets/realms/Mirrodin.png"></Card>
                </div>
            </RealmStyle>
        </>
    )
}

export default Realm
