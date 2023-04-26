import { Box, Button, Checkbox, Container, Divider, FormControl, FormControlLabel, FormLabel, Input, InputBase, List, ListItem, ListItemText, ListSubheader, Paper, Radio, RadioGroup, Slider, Stack, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

function Home() {


    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
    ) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
        <Container maxWidth="lg" sx={{ pt: "15px", pb: "45px" }}>
            <Box className="home-pages">
                <Paper className='form-header' variant="outlined" sx={{ p: "32px", borderRadius: 2 }} elevation={0}>
                    <Typography variant="h5" gutterBottom >
                        ผลลัพธ์แบบประเมินแผนประกัน
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>รายการ</TableCell>
                                    <TableCell align="right">จำนวน</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </Container >

    )
}

export default Home