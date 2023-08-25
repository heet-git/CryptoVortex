import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar'
import styled from 'styled-components';
import { getMarketdata, getCoins } from '../assets/Api'

import TablePagination from '@mui/material/TablePagination';
import Tooltip from '@mui/material/Tooltip';


function Explore() {
    const [marketInfo, setMarketInfo] = useState([])
    const [cryptoData, setCryptoData] = useState([]) 

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);

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
    },[])

    const StyledText = styled.p`
        color: green
    `;

// font-size: 16px;
//    ${({ isPositive }) => isPositive ? 'color: green;' : 'color: red;'}

    function removeExtra(value){
        const shortValue = parseFloat(value).toFixed(2)
        return shortValue
    }

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
            removeExtra(coin.price_change_percentage_1h_in_currency),
            removeExtra(coin.price_change_percentage_24h_in_currency),
            removeExtra(coin.price_change_percentage_30d_in_currency),
            coin.market_cap,
            coin.circulating_supply
        );
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 20));
        setPage(0);
    };

   // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

const paginatedRows = rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

    return (
    <Container>
        <Box sx={{
                    m: 10,
                    textAlign: 'center',
                }}>
            <Typography
                variant='h4'
                fontWeight= {600}  
            >
                Explore Cryptocurrency Prices by Market Cap
            </Typography>
            <Typography
                variant='subtitle2'  
                mt= {2}  
            >
                The global Cryptocurrency is change by %
            </Typography>
        </Box>
        <Box>
            <Paper sx={{ width: '100%'}}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ '& > *': {fontWeight: '600'}}}>
                            <TableCell>Rank</TableCell>
                            <TableCell align="left" >Name</TableCell>
                            <TableCell align="right">Current Price</TableCell>
                            <TableCell align="right">1h</TableCell>
                            <TableCell align="right">24h</TableCell>
                            <TableCell align="right">30d</TableCell>
                            <TableCell align="right">Market cap</TableCell>
                            <TableCell align="right">Circulating supply</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ '& > *': {fontWeight: '600'}}}>
                        {rows.map((row) => (
                            <TableRow
                                key={row.marketCapRank}
                                sx={{  '& > *': {fontWeight: '600'}}}
                            >
                            <TableCell>
                                {row.marketCapRank}
                            </TableCell>
                            <TableCell>
                                <Box
                                    sx={{
                                        display: "flex",
                                        textAlign: 'right',
                                        alignItems: 'center',
                                    }}
                                >
                                <Avatar alt={row.name} src={row.image} sx={{mr: 2}}/>
                                {row.name}
                                </Box>
                            </TableCell>
                            <TableCell align="right">{row.currentPrice}</TableCell>
                            <TableCell align="right" style={{ color: row.priceChange1h >= 0 ? 'green' : 'red' }}>
                            
                                    {row.priceChange1h}
                                
                            </TableCell>
                            <TableCell align="right" style={{ color: row.priceChange24h >= 0 ? 'green' : 'red' }}>
                            
                                    {row.priceChange24h}
                                
                            </TableCell>
                            <TableCell align="right" style={{ color: row.priceChange30d >= 0 ? 'green' : 'red' }}>
                            
                                    {row.priceChange30d}
                                
                            </TableCell>
                            <TableCell align="right">{row.marketCap}</TableCell>
                            <TableCell align="right">{row.circulatingSupply}</TableCell>
                            </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[20, 40, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Paper>

        </Box>
    </Container>
    )
}

export default Explore