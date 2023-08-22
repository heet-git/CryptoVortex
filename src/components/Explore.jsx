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
import Avatar from '@mui/material/Avatar'


function Explore() {
    const [marketInfo, setMarketInfo] = useState([])
    const [cryptoData, setCryptoData] = useState([]) 

    useEffect(()=> {
        const globalData = async () =>{
            try {
                const globalData = await getMarketdata()
                setMarketInfo(globalData)
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


    function insertData (
        marketCapRank, 
        name, 
        image, 
        currentPrice, 
        priceChange1h, 
        priceChange24h, 
        priceChange30d, 
        marketCap, 
        circulatingSupply
    ){
        return { 
            marketCapRank, 
            name, 
            image, 
            currentPrice, 
            priceChange1h, 
            priceChange24h, 
            priceChange30d, 
            marketCap, 
            circulatingSupply 
        }
    }

    const rows = cryptoData.map(coin => {
        return insertData(
            coin.market_cap_rank,
            coin.name,
            coin.image,
            coin.current_price,
            coin.price_change_percentage_1h_in_currency,
            coin.price_change_percentage_24h_in_currency,
            coin.price_change_percentage_30d_in_currency,
            coin.market_cap,
            coin.circulating_supply
        );
    });

    console.log(rows)

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

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Current Price</TableCell>
                        <TableCell align="right">1h</TableCell>
                        <TableCell align="right">24h</TableCell>
                        <TableCell align="right">30d</TableCell>
                        <TableCell align="right">Market cap</TableCell>
                        <TableCell align="right">Circulating supply</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.marketCapRank}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">
                                <Avatar alt={row.name} src={row.image} />
                            </TableCell>
                            <TableCell align="right">{row.currentPrice}</TableCell>
                            <TableCell align="right">{row.priceChange1h}</TableCell>
                            <TableCell align="right">{row.priceChange24h}</TableCell>
                            <TableCell align="right">{row.priceChange30d}</TableCell>
                            <TableCell align="right">{row.marketCap}</TableCell>
                            <TableCell align="right">{row.circulatingSupply}</TableCell>
                            </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    </Container>
    )
}

export default Explore