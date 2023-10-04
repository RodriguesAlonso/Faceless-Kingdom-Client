import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const ApiComponent = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/realms')
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Erro ao buscar dados da API:', error);
        });
    }, []);
  
    return (
      <>
        <h1>Dados da API</h1>
        <ul>
          {data.map((item) => (<>
            <li key={item.realm}></li>
            <li key={item.level}></li>
            <li key={item.building}></li>
            <li key={item.type}></li>
            <li key={item.experience}></li>
            <li key={item.food}></li>
            <li key={item.gold}></li>
            <li key={item.unit}></li>
          </>
          ))}
        </ul>
      </>
    );
  };
  
  export default ApiComponent;