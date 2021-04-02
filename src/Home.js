import React from 'react';
import Product from './Product';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className="home_container">
                <img  className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" /> 

            <div className='home__row'>
            <Product
            id={1}
             title='Headphones' 
            price={29.99} 
            image={`data:image/jpeg;base64,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`}
            rating ={5}
            />
            <Product
            id={2}
            title="Kenwood KMix Stand Mixer for Baking, stylish kitchen
             mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass bowl"
             price ={239.0}
             rating={4}
             image="data:image/jpeg;base64,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"
            />
            </div>

            <div className='home__row'>
            <Product
            id={3}
            title =" Samsung Galaxy Watch Active2 Bracelet en silicone + lunette en aluminium Bluetooth international Bleu aqua noir R820-44 mm"
            price ={199.99}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWqlyYKcRkxR1WQe9jF3UVEgIGSpjXrZ3A3r3jXjwhX1BwpNmDVyxXb2j3xw&usqp=CAc"
            />
            <Product
            id={4}
            title ="Amazon Echo 3rd Generation Smart Speaker with Alexa, Charcaol Fabric"
            price={98.99}
            rating={5}
            image="https://www.bhphotovideo.com/images/images2500x2500/amazon_b07nftvp7p_echo_3rd_generation_charcoal_1512895.jpg"
            />
            <Product
            id={5}
            title ="New Apple iPad Pro (12.9- inch, Wi-Fi, 128GB) - 
            Silver (4th Generation)"
            price ={598.80}
            rating={4}
            image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmY_x4HLo9Is4oq8st1bSxDIA63agY0MAexu9AmFDhByDNFx1TGOECIvdJg&usqp=CAc"
            />
            </div>

            <div className='home__row'>
            <Product
            id={6}
            title =" The Samsung 49-Inch Super Ultra wide Curved WQHD Monitor is the hardware your gaming has been waiting for. With a curved monitor."
            price ={569.99}
            rating={5}
            image="https://images.samsung.com/is/image/samsung/uk-monitor-crg90-lc49rg90ssuxen-lperspectivesilver-156915394?$PD_GALLERY_JPG$"
            />
            </div>

            </div>
        </div>
    )
}

export default Home
