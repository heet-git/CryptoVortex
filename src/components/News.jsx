import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container } from '@mui/material';
import logoImgBg from '/public/logo-bg-img.png'
import { cryptoNewsData } from '../assets/Api';

import { useLoaderData } from 'react-router';

function loader(){
    return cryptoNewsData()
}

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

    // const newsImg = (cryptoNews.image_url === null ? logoImgBg : news.image_url)

return (
    <Container maxWidth="xl" disableGutters>
        <Box>
            <Typography
                variant='h4'
                fontWeight={800}
                textAlign="center"
                my={5}
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
                padding: "0 auto"
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
                            image={news.image_url}
                            alt="news image"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {news.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {news.description}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            More..
                            </Button>
                        </CardActions>
                        </Card> ))
                    )}
        </Box>
    </Container>
);
}
export default News;