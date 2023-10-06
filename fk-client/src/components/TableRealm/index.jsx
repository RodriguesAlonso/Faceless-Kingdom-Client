import styled from "styled-components";



const realms = [
  {
    "id": 0,
    "realm": "Tolariano",
    "type": "onix",
    "experience": "200",
    "level": "2",
    "gold": "1000",
    "food": "10",
    "building": "3",
    "unit": "101"
  },
  {
    "id": 1,
    "realm": "Dominaria",
    "type": "Amestist",
    "experience": "1200",
    "level": "20",
    "gold": "10",
    "food": "1000",
    "building": "6",
    "unit": "5"
  },
  {
    "id": 2,
    "realm": "Mirrodim",
    "type": "Steel",
    "experience": "20000",
    "level": "35",
    "gold": "10000",
    "food": "0",
    "building": "3",
    "unit": "101"
  }
];

const StyledTable = styled.table`

`

function TableRealm() {
  return (
    
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Realm</th>
          <th>Type</th>
          <th>Experience</th>
          <th>Level</th>
          <th>Gold</th>
          <th>Food</th>
          <th>Building</th>
          <th>Unit</th>
        </tr>
      </thead>
      <tbody>
        {realms.map((realm) => (
          <tr key={realm.id}>
            <td>{realm.id}</td>
            <td>{realm.realm}</td>
            <td>{realm.type}</td>
            <td>{realm.experience}</td>
            <td>{realm.level}</td>
            <td>{realm.gold}</td>
            <td>{realm.food}</td>
            <td>{realm.building}</td>
            <td>{realm.unit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableRealm;
