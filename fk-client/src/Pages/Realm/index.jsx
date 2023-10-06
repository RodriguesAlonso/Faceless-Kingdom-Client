import GlobalStyle from "../../components/GlobalStyle"
import styled from "styled-components"
import Card from "../../components/Card"
import Table from "../../components/TableRealm"

// const Wrapper = styled.aside`
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
//     position: absolute;
//     right: 0px;
//     width: 100%;
//     max-width: 900px;
// `


const RealmStyle = styled.body `
    display: flex;
    justify-content: space-around;
    align-items: center;    
    background-image: url(/backGroundRealms.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    margin: 0;        
    h1{     
        font-family: 'Kelly Slab';
        color: #396D73;
        font-size: 6em;
    }
    .realms{
        margin-left: 30%;
        width: 50%;
        display: flex;                
        justify-content: center;    
        align-items: center;
        flex-wrap: wrap;        
        gap: 25px;  
    
    }  
    
`

const Realm = () => {
    return (
        <>
            <GlobalStyle />
            <RealmStyle>
                    <h1>Realms</h1>
                <div className="realms">
                <Table/>
                    <Card realm_img="/src/assets/realms/Tolariano.png"></Card>
                    <Card realm_img="/src/assets/realms/Dominaria.png"></Card>
                    <Card realm_img="/src/assets/realms/Mirrodin.png"></Card>
                </div>
            </RealmStyle>
        </>
    )
}

export default Realm
