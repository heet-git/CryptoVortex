import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getMarketdata, getCoins } from '../assets/Api'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Explore() {
    const [marketInfo, setMarketInfo] = useState([])
    const [cryptoData, setCryptoData] = useState([]) 

    useEffect(()=> {
        const globalData = async () =>{
            try {
                const globalData = await getMarketdata()
                setMarketInfo(globalData)
                console.log(marketInfo.data)
            } catch{
                console.log('Error fetching global market data:', console.error)
            }
        }
        globalData()

        const intervalId = setInterval(globalData, 10 * 60 * 1000)
        return () => clearInterval(intervalId)
    }, [])

    useEffect(()=> {
        const coinInfo = async () =>{
            try{
                const coinData = await getCoins()
                setCryptoData(coinData)
            } catch {
                console.log('Error fetching coin data:', console.error)
            }
        }
        coinInfo()

        const intervalId = setInterval(coinInfo, 4500)
        return () => clearInterval(intervalId)
    })


    function insertData (marketCapRank, name, image, currentPrice, priceChange1h, priceChange24h, priceChange30d, marketCap, circulatingSupply){
        return { marketCapRank, name, image, currentPrice, priceChange1h, priceChange24h, priceChange30d, marketCap, circulatingSupply }
    }

    return (
    <Container>
        <Box>
            <Typography>
                Explore Cryptocurrency Prices by Market Cap
            </Typography>
            <Typography>
                The global Cryptocurrency
            </Typography>
        </Box>
        <Box>
            
        </Box>
    </Container>
    )
}

export default Explore