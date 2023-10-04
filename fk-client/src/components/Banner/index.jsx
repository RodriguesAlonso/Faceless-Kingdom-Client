import {styled} from "styled-components"
import Intro from "../IntroText"
import Form from "../Form"

const BannerStyle = styled.div `   
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    max-width: 100%;
    margin-top: 10px;
    font-family: 'Kelly Slab';    
    `
const Banner = () => {
    return (
        <BannerStyle>
            <Intro/>
            <Form/>
        </BannerStyle>
    )
}

export default Banner
