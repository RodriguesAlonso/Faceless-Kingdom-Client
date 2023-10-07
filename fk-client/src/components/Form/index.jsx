import {styled} from "styled-components"
// import {axios} from "axios";
 import {useState} from 'react'
import Campo from "../Campo"
import Button from "../Button"
import Logo from "../Logo"


const FormStyle = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;        
    width: 300px;
    height: 600px;
    margin-right: 10%;
    margin-left: 15%;
    font-family: 'Kelly Slab';
    
    `


const Form = () => {

    const [dataForm, setDataForm] = useState({
        username: ' ',
        password: ' ',
    })

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleChangeText = (event) => {
        setUsername(event.target.value)
        console.log(username)
    }

    const handleChangePassword = (event) =>{
        setPassword(event.target.value)
        console.log(password)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    

    //     try {
    //         const response = await axios.post('localhost:5173/post', {username, password});

    //         console.log('response:', response.data);
            
    //     } catch (error) {
    //         console.error('Error:', error);
            
    //     }
    // };

    return (

        <FormStyle>
            <Logo/>
            <form action="/realm?" method="post">
                <Campo type='text' placeholder='User' onChange={handleChangeText}/>
                <Campo type='password' placeholder='password' onChange={handleChangePassword}/>
                <Button type='submit'/>
            </form>
        </FormStyle>
    )
}


export default Form
