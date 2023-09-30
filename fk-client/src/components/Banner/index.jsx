import {styled} from "styled-components"

const BannerStyle = styled.header `    
    
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;    
    align-items: center;
    background-color: #1F598C;
    max-width: 100%;
    .intro{    
        margin-top: 30px;
        margin-left: 5px;
        margin-right: 5px;
        width: 100%;
        height: 100%;
        max-width: 440px;
        height: 630px;
        max-height: 590px;
        color: #4d6763;
        background-color: #F2E1AE;
        box-shadow: 10px 10px 32px rgba(0, 0, 0, 0.514);        
        padding: 1px 1px 20px 20px;
        font-size: 28px;
        font-weight: bold;
        line-height: 40px;
    }
    img{
        margin-left: 5px;
        margin-right: 5px;        
        margin-top: 30px;        
        width: 100%;
        
        max-width: 1200px;        
        box-shadow: 10px 10px 32px rgba(0, 0, 0, 0.514);
    }
    `


const Banner = () => {
    return (
        <BannerStyle>
            <div className="intro">
                <p>
                    The mysterious land of the Faceless Kingdom lies beyond our world, an unknown land inhabited by strange creatures.</p>
                    <p>Here the faceless people wander the endless plains, their faces hidden from the world.</p><p>For centuries they have remained unknown, their secrets and stories untold, keeping the wonders of the Faceless Kingdom hidden from the eyes of the world.</p>
                
            </div>
            <img src="/banner.png" alt=""/>
        </BannerStyle>
    )
}

export default Banner
