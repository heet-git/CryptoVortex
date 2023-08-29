import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';


import { cryptoNewsData } from '../assets/Api';

function News() {
    const [cryptoNews, setCryptoNews] = useState([])

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
    <Container>
    {cryptoNews.map((news, index) => (
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
        </Card>
    ))}
    </Container>
);

}

export default News;
