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
import { SparkLineChart } from '@mui/x-charts/SparkLineChart'
import Avatar from '@mui/material/Avatar'
import TablePagination from '@mui/material/TablePagination';
import { getMarketdata, getCoins } from '../assets/Api'
import { Button } from '@mui/material';

function removeExtra(value){
        const shortValue = parseFloat(value).toFixed(2)
        return shortValue
    }

function addCommas(price){
        const inFormat = parseFloat(price).toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
        return inFormat
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
        circulatingSupply,
        last7Days
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
            circulatingSupply,
            last7Days
        }
    }


function Explore() {
    const [marketInfo, setMarketInfo] = useState([])
    const [cryptoData, setCryptoData] = useState([])

   //console.log(cryptoData[0].sparkline_in_7d.price)

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

    const rows = cryptoData.map(coin => {
        return insertData(
            coin.market_cap_rank,
            coin.name,
            coin.image,
            addCommas(coin.current_price),
            removeExtra(coin.price_change_percentage_1h_in_currency),
            removeExtra(coin.price_change_percentage_24h_in_currency),
            removeExtra(coin.price_change_percentage_30d_in_currency),
            addCommas(coin.market_cap),
            addCommas(coin.circulating_supply),
            coin.sparkline_in_7d.price
        );
    });
    

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(20);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

    const marketData = (removeExtra(marketInfo?.data?.market_cap_change_percentage_24h_usd)) || 'N/A'

    return (
    <Container disableGutters>
        <Box sx={{
                    m: "5rem",
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
                The global Cryptocurrency is change by {' '}
                {marketData}%
            </Typography>
        </Box>
        <Box>
            <Paper sx={{ width: '100%'}}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow
                            sx={{
                            "& th": {
                            fontWeight: "600",
                                }
                            }}>
                            <TableCell>Rank</TableCell>
                            <TableCell align="left" size='10px'>Name</TableCell>
                            <TableCell align="right">Current Price</TableCell>
                            <TableCell align="right">1h</TableCell>
                            <TableCell align="right">24h</TableCell>
                            <TableCell align="right">30d</TableCell>
                            <TableCell align="right">Market cap</TableCell>
                            <TableCell align="right">Circulating supply</TableCell>
                            <TableCell align="center">Last 7 days</TableCell>
                            <TableCell align="center">Trade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow
                                key={row.marketCapRank}>
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
                                    <Avatar alt={row.name} src={row.image} sx={{mr: 1}}/>
                                        {row.name}
                                    </Box>
                                </TableCell>
                                <TableCell align="right">{row.currentPrice}</TableCell>
                                <TableCell align="right" style={{ color: (row.priceChange1h) > 0 ? '#12bf02' : '#eb0202' }}>
                                    {addCommas(row.priceChange1h)}
                                </TableCell>
                                <TableCell align="right" style={{ color: row.priceChange24h > 0 ? '#12bf02' : '#eb0202' }}>
                                    {addCommas(row.priceChange24h)}
                                </TableCell>
                                <TableCell align="right" style={{ color: row.priceChange30d > 0 ? '#12bf02' : '#eb0202' }}>
                                    {addCommas(row.priceChange30d)}
                                </TableCell>
                                <TableCell align="right">{row.marketCap}</TableCell>
                                <TableCell align="right">{row.circulatingSupply}</TableCell>
                                <TableCell align="right">
                                    <Box>
                                        <SparkLineChart data={row.last7Days} height={100} />
                                    </Box>
                                </TableCell>
                                <TableCell>
                                        <Button size="small" variant="contained">Trade</Button>
                                </TableCell>
                            </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[20,30,50]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
            />
            </Paper>

        </Box>
    </Container>
    )
}

export default Explore



