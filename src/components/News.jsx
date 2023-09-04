import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container } from '@mui/material';
import newsImg from '/public/news-img.png'
import { cryptoNewsData } from '../assets/Api';

function News() {
    const [cryptoNews, setCryptoNews] = useState([])
    const [newsFeed, setNewsFeed] = useState([]);
    useEffect(() => {
        const fetchCryptoNews = async () => {
            try {
                const news = await cryptoNewsData();
                setCryptoNews(news);
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

return (
    <Container maxWidth="xl" disableGutters>
        <Box>
            <Typography
                variant='h4'
                fontWeight="600"
                textAlign="center"
                my="5rem"
            >
                Latest Global Crypto News
            </Typography>
        </Box>
        <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"    
            sx={{
                maxWidth: "100%",
                padding: "0 auto",
            }}
        >
            {(cryptoNews.length === 0) ? (
                <Typography>
                    Loading...
                </Typography>
                ) : ( newsFeed.map((news, index) => (
                        <Card 
                            key={index} 
                            sx={{ 
                                maxWidth: 300,
                                p: 2,
                                m: 2,
                                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)"
                            }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                width= "10"
                                image={news.image_url ? news.image_url : newsImg}
                                alt="news image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="subtitle1"
                                        sx={{
                                            fontFamily: "lato",
                                        }}
                                    >
                                        {news.title}
                                    </Typography>
                                    <Typography variant='caption'>
                                        {news.creator} {news.pubDate}
                                    </Typography>
                                    <Box
                                        sx={{
                                            height:"200",
                                            mt: "20px"    
                                        }}
                                    >
                                        <Typography variant="body2" color="text.secondary">
                                            {news.description.length > 100
                                            ? `${news.description.substring(0, 100)}...`
                                            : news.description}
                                        <Button size="small" href={news.link} target='_blank' color='success'>Read more</Button>
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card> ))
                )}
        </Box>
    </Container>
);
}
export default News;