import { Box, Button, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { removeToken } from '../reducer/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const API_URL = "http://localhost:3000/v1/poll"
    const token = useSelector((state: any) => state.auth.token)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(removeToken())
        navigate("/");
    }

    const [data, setData] = useState([]);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const fetchData = async () => {
        await axios.get(API_URL, { headers: { "x-api-key": token } }).then((response: any) => {
            if (response.data && response.data.success) {
                const { data } = response.data
                setData(data);
            }
        }).catch((err: any) => {
            handleLogout();
            setData([]);
        });
    }

    useEffect(() => {
        if (data.length == 0) {
            fetchData()
        }
    }, data)
    return (
        <Container maxWidth="xl" sx={{ pt: "15px", pb: "45px" }}>
            <Box className="home-pages">
                <Paper className='form-header' variant="outlined" sx={{ p: "32px", borderRadius: 2 }} elevation={0}>
                    <Typography variant="h5" gutterBottom sx={{ mb: 2 }} >
                        ผลลัพธ์แบบประเมินแผนประกัน
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ชื่อ นามสกุล</TableCell>
                                    <TableCell align="right">ประเภทประกันภัย</TableCell>
                                    <TableCell align="right">แบบ Top-up เติมชั่วโมง</TableCell>
                                    <TableCell align="right">แบบ Package เหมาจ่าย</TableCell>
                                    <TableCell align="right">แบบ รายปี</TableCell>
                                    <TableCell align="right">ซ่อมรถ</TableCell>
                                    <TableCell align="right">ช่วงทุนประกัน</TableCell>
                                    <TableCell align="right">ช่วงเบี้ยประกัน</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.length != 0 && data
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row: any) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.type_ins}</TableCell>
                                            <TableCell align="right">{row.type_topup}</TableCell>
                                            <TableCell align="right">{row.type_fixed}</TableCell>
                                            <TableCell align="right">{row.type_year}</TableCell>
                                            <TableCell align="right">{row.type_fix}</TableCell>
                                            <TableCell align="right">{row.range_sum_insure}</TableCell>
                                            <TableCell align="right">{row.range_premiums_insure}</TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 100]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{ width: "100%", mt: "15px" }}
                >
                    <Box></Box>
                    <Button variant="contained" onClick={handleLogout}>ออกจากระบบ</Button>
                </Stack>
            </Box>
        </Container >

    )
}

export default Home