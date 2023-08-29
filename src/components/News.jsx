import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container } from '@mui/material';


import { cryptoNewsData } from '../assets/Api';

function News() {
    const [cryptoNews, setCryptoNews] = useState([])

    // useEffect(()=> {
    //     const newsData = async () =>{
    //         try {
    //             const news = await cryptoNewsData()
    //             setCryptoNews(news.results || [])
    //         } catch(error){
    //             console.log('Error fetching global market data:', error)
    //         }
    //     }
    //     newsData()
    // }, [])

    // console.log(cryptoNews[0])

    // const newsFeed = []
    
    // function getNews(){
    //     for (let i = 0; i < 10; i++){
    //         newsFeed.push(cryptoNews[i])
    //         return newsFeed
    //     }
    // }


        const [newsFeed, setNewsFeed] = useState([]);

    useEffect(() => {
        const fetchCryptoNews = async () => {
            try {
                const news = await cryptoNewsData();
                setCryptoNews(news.results || []);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };
        fetchCryptoNews();
    }, []);

    useEffect(() => {
        if (cryptoNews.length > 0) {
            const updatedNewsFeed = [];

            for (let i = 0; i < 10; i++) {
                updatedNewsFeed.push(cryptoNews[i]);
            }

            setNewsFeed(updatedNewsFeed);
        }
    }, [cryptoNews])

    console.log(newsFeed)


return (
    <Container>
    {/* {newsFeed.length === 0 ? (
        <Typography>Loading...</Typography>
    ) : (
        newsFeed.map((news, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={news.results.image_url}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {news.results.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {news.results.description}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            More..
            </Button>
        </CardActions>
        </Card> ))
    )} */}
    <Box>News</Box>
    </Container>
);

}

export default News;
