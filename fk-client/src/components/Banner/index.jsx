import {styled} from "styled-components"
import Intro from "../IntroText"

const BannerStyle = styled.header `    
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 15px;   
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;    
    align-items: center;
    background-color: #1F598C;
    max-width: 100%;
    margin-top: 10px;

    img{
        
        
        width: 100%;        
        max-width: 1000px;        
        box-shadow: 10px 10px 32px rgba(0, 0, 0, 0.514);
    }
    `


const Banner = () => {
    return (
        <BannerStyle>
                <Intro/>
                <img src="/banner.png" alt=""/>
        </BannerStyle>
    )
}

export default Banner
