import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return ( 
         <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://images.squarespace-cdn.com/content/v1/53959472e4b0be7c80fd6137/1405005053538-9ZOJXX9SQWJVUXDBVEX8/ke17ZwdGBToddI8pDm48kBWly4pQPSHmsYiyY0es4gIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dmUPh8VAtl-w2zosWjozwvydXvi-te584BltZijbUNyHW07ycm2Trb21kYhaLJjddA/MC_Banners4.jpg?format=1500w' 
                alt=''
            />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout__title'>
                    Your Shopping Basket
                    </h2>

           
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    
                </div>
            </div>
            
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
