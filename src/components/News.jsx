import React, { useEffect, useState } from 'react';
import { cryptoNewsData } from '../assets/Api';

function News() {
    const [cryptoNews, setCryptoNews] = useState({})

    useEffect(()=> {
        const newsData = async () =>{
            try {
                const cryptoNews = await cryptoNewsData()
                setCryptoNews(cryptoNews)
            } catch{
                console.log('Error fetching global market data:', console.error)
            }
        }
        newsData()
    }, [])

return (
    <div>news</div>
);
}

export default News;
