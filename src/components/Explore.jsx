import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid';
import { getMarketdata, getCoins } from '../assets/Api'

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



    const columns = [
        { field: 'id', headerName: 'Rank', width: 70 },
        { field: 'coin', headerName: 'Coin', width: 130 },
        { field: 'price', headerName: 'Price', type: 'number', width: 130 },
        { field: '1h', headerName: '1h', type: 'number', width: 70 },
        { field: '24h', headerName: '24h', type: 'number', width: 70 },
        { field: '7d', headerName: '7d', type: 'number', width: 70 },
        { field: 'market_cap', headerName: 'Market Cap', type: 'number', width: 130 },
        { field: 'total_volume', headerName: 'Volume', type: 'number', width: 130 },
        { field: 'circulating_supply', headerName: 'Circulating Supply', type: 'number', width: 130 },
    ]

    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];




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
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    //rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
                </div>
        </Box>
    </Container>
    )
}

export default Explore