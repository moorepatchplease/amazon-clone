import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
    <div className='home'>
            <div className="home__container">
                <img 
                 className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" 
                />

                <div className="home__row">
            
                    <Product id = '111111111'
                    title='Perry Boys' 
                    price= {19.99} 
                    image="https://m.media-amazon.com/images/I/51PoCKmi+iL.jpg" 
                    rating={5} />

                    <Product id = '222222222'
                    title= "Undesireables: The Story of the Inter City Jibbers"
                    price= {14.95}
                    image="https://m.media-amazon.com/images/I/71f34ndv5JL._AC_UY327_FMwebp_QL65_.jpg"
                    rating= {5} />

                    <Product id = '333333333' 
                    title= 'Stone Island Zip Up Jacket'
                    price= {750.00}
                    image = 'https://m.media-amazon.com/images/I/51agXB8netL._AC_UL480_FMwebp_QL65_.jpg'
                    rating= {5}
                    />
                   
                </div>

                <div className="home__row">
                <Product id = '444444444'
                title= 'David Beckham Instinct Cologne'
                price= {14.99}
                image="https://m.media-amazon.com/images/I/4172gHbe9DL._AC_UL480_FMwebp_QL65_.jpg"
                rating= {4}
                />

                <Product id = '555555555' 
                title= 'Confederations Cup Glider Soccer Ball'
                price={21.99}
                image= 'https://m.media-amazon.com/images/I/913z+fy0cNL._AC_UL480_FMwebp_QL65_.jpg'
                rating={5}
                />

                <Product id = '666666666' 
                title= "Adidas Nemeziz Soccer Boots"
                price= {55.00}
                image= 'https://m.media-amazon.com/images/I/61voI-kG51L._AC_UL480_FMwebp_QL65_.jpg'
                rating={5}
                />

                <Product id = '7777777777'
                title="Comica Shotgun Mic"
                price={53.99}
                image="https://m.media-amazon.com/images/I/61am5PPlSoL._AC_UL480_FMwebp_QL65_.jpg"
                rating={4}
                />

                </div>

                <div className="home__row">
                <Product id = '888888888'
                title="Ellesse Padded Jacket"
                price={83.99}
                image= "https://m.media-amazon.com/images/I/81kxAf5I8zL._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
                />

                <Product id = '9999999999'
                title="Fred Perry shoulder bag"
                price={34.99}
                image="https://m.media-amazon.com/images/I/91meWfDq-rL._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
                />
                <Product id = '101010101'
                title= 'Manchester United fridge magnet'
                price={11.99}
                image="https://m.media-amazon.com/images/I/81UYaJFVjCL._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
                />

                </div>
            </div>
        </div>
        
        );

}

export default Home;