import "./Hero.css"

const Hero = () => {

    const playSound = () => {
        const audio = new Audio('./src/assets/mp3/sound-1-167181.mp3'); 
        audio.play();
    }


  return (
    <div className="hero">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <div className="dd"><h1 className="h11">FIND CLOTHES THAT MATCHES YOUR STYLE</h1></div>
                    <div className="hero__p"><p className="ppp">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p></div>
                    <div className="hero__button"><button className="btn" onClick={playSound}>Shop Now</button></div>
                    <div className="dd"><img src="./src/assets/img/Frame 57.png" alt="" /></div>
                </div>
                <div>
                    <img className="hero___img" src="./src/assets/img/ccfd8aa5825862cdb9604a4fb4930464.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero