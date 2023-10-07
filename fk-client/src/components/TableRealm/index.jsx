import styled from "styled-components";
import realmInstance from "../../helper/axios-instance";
import useAxios from "../../hook/use-axios";


const StyledTable = styled.div `
    margin: 30px;
    justify-content: center;
    
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    max-width: 680px;
    
    background-color:#F2F1DC;
    font-size:1em;    
    text-align: center;      
    td, th {
    padding: 5px;
    
}
`

function TableRealm() {
    const [realmList, loading, error] = useAxios({
        axiosInstance: realmInstance,
        method: 'get',
        url:'realms',

    })
    
    if (loading) {
        return <div><h1>LOADING</h1></div>
    }
    if (error) {
        return <>
        <div>{error}</div>
        <h1>Error na URL</h1>
        </>
    }
    return (
        <StyledTable>
            <table>
                <thead>
                    <tr>
                        <th>Realm</th>
                        <th>Type</th>
                        <th>Experience</th>
                        <th>Level</th>

                    </tr>
                </thead>
                <tbody> {
                    realmList.map((realm) => (
                        <tr key={
                            realm.id
                        }>
                            <td>{
                                realm.realm
                            }</td>
                            <td>{
                                realm.type
                            }</td>
                            <td>{
                                realm.experience
                            }</td>
                            <td>{
                                realm.level
                            }</td>
                        </tr>
                    ))
                } </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>Gold</th>
                        <th>Food</th>
                        <th>Building</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>{
                    realmList.map((realm) => (
                        <tr key={
                            realm.id
                        }>
                            <td>{
                                realm.gold
                            }</td>
                            <td>{
                                realm.food
                            }</td>
                            <td>{
                                realm.building
                            }</td>
                            <td>{
                                realm.unit
                            }</td>
                        </tr>
                    ))
                } </tbody>
            </table>

        </StyledTable>
    );
}

export default TableRealm;
