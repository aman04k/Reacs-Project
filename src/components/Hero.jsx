const HeroSection = () => {
    return (
        <main className="hero" >
            <div className="hero-contant">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                    SHOES.
                </p>
                <div className="hero-button">
                    <button className="primary-button">Shop Now</button>
                    <button className="secondary-button">category</button>
                </div>
                <div className="shopping">
                    <p>Also Available on</p>
                    <div className="brand-icon">
                        <img src="/images/amazon.png" alt="amazon-logo"/>
                        <img src="/images/flipkart.png" alt="flipkart-logo"/>

                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="shoe-logo" />
            </div>
        </main>
    );


};

export default HeroSection;