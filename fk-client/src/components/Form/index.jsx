import {useState} from "react"
import {styled} from "styled-components"
import Campo from "../Campo"
import Button from "../Button"
import Logo from "../Logo"


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    try {
        const response = fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {username, password}
            )
        });

        if (response.ok) { 
            console.log('Login OK');
        } else {
            console.error('Login Error');
        }
    } catch (error) {
        console.error('Error send request:', error);
    }
}


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



const Form = ({onPost, aoAlterado}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const aoSubmeter = (event) => {
        event.preventDefault();
        console.log('send form', username, password);
        onPost({
            username,
            password
        })
    }
    return (
        
        <FormStyle>
            <Logo/>
            <form action="/realm" method="POST" onSubmit={aoSubmeter}>
                <Campo  
                type='text' 
                placehoder='User'
                value="valor"
                aoAlterado={value => setUsername(value)}
                />
                <Campo  
                type='password' 
                placehoder='password'
                value="valor"
                aoAlterado={value => setPassword(value)}
                />
                <Button/>
            </form>
        </FormStyle>
    )
}


export default Form
