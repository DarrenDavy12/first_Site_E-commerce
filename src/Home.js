import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='Home'>
            <div className='home__container'>
            <img 
            className='home__image'
            src='https://image.freepik.com/free-vector/weekend-sale-banner-template-promotion_8499-1113.jpg' 
            alt='' />

            <div className='home__row'>
                <Product 
                id= '1869505'
                title= 'Urban Classics Sunglasses Chios' 
                price= {12.91}
                image='https://m.media-amazon.com/images/I/61zBR-qEpYL._AC_UL320_.jpg' 
                rating={5}
                />
                <Product
                id = '1287934'
                title= 'Converse Mini Bag'
                image='https://m.media-amazon.com/images/I/51KSSErZoJL._AC_SY200_.jpg'
                price={24.99}
                rating={5}
                />
                {/* Product */}
            </div>

            <div className='home__row'>
                <Product 
                id = '454636'
                title= 'Apple Ipad W/Retina Display Md785/Cl/B 16Gb Wi-Fi (Unlocked) (Space Gray) (Renewed)'
                image='https://m.media-amazon.com/images/I/41yHZgr2VZL.jpg'
                price={154.29}
                rating={5}
                /> 
                <Product 
                id = '875849'
                title= 'Tommy Hilfiger Mens Analogue Quartz Watch Collin'
                image='https://m.media-amazon.com/images/I/81D2V+pXheL._AC_UL320_.jpg'
                price={145.68}
                rating={5}
                /> 
                <Product 
                id = '546374'
                title= 'AMD Ryzen 5 3600 Processor (6C/12T, 35 MB Cache, 4.2 GHz Max Boost)'
                image='https://m.media-amazon.com/images/I/41m+krxXiBL._AC_SY200_.jpg'
                price={150.00}
                rating={5}
                /> 
                <Product 
                id = '596839'
                title= 'Apple AirPods with Charging Case (Wired)'
                image='https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UY218_.jpg'
                price={124.99}
                rating={5}
                /> 
            </div>

            <div className='home__row'>
                <Product 
                id = '758326'
                title= 'Samsung 43" TU7100 HDR Smart 4K TV with Tizen OS'
                image='https://m.media-amazon.com/images/I/81pizRn9ieL._AC_UY218_.jpg'
                price={388.99}
                rating={5}
                /> 
                <Product 
                id = '697904'
                title= 'Unisex Canvas Holdall, AIZBO Travel Carry On Duffles Bags Overnight Weekend Weekender Bag '
                image='https://m.media-amazon.com/images/I/61f7K6QGKzL._AC_UL320_.jpg'
                price={27.99}
                rating={5}
                /> 
            </div>


            </div>
        </div>
    );
}


export default Home;
