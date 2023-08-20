import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getMarketdata } from '../assets/Api'

function Explore() {
    const [marketInfo, setMarketInfo] = useState([])

    useEffect(()=> {
        const globalData = async () =>{
            try {
                const globalData = await getMarketdata()
                setMarketInfo(globalData)
                console.log(marketInfo)
            } catch{
                console.log('Error fetching global market data:', console.error)
            }
        }
        globalData()

        const intervalId = setInterval(globalData, 10 * 60 * 1000)
        return () => clearInterval(intervalId)
    }, [])

    return (
    <Container>
        <Box>
            <Typography>
                Explore Cryptocurrency Prices by Market Cap
            </Typography>
        </Box>
    </Container>
    )
}

export default Explore