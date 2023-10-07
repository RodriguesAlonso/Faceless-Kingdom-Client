import axios from "axios";
import styled from "styled-components";
import {useState, useEffect} from 'react';


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
    padding: 10px;
    
}
`

function TableRealm() {
    const [realmList, setRealmList] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/realms')
        .then((res) => {
            console.log(res.data)
            setRealmList(res.data)
        })
        .catch((err) => console.log(err))
    }, [])
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
