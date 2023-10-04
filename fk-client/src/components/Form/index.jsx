import {styled} from "styled-components"
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
    return (
        <FormStyle>
            <Logo/>
            <form action="|">
                <Campo/>
                <Button/>
            </form>
        </FormStyle>
    )
}


export default Form
