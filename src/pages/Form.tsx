import { Box, Button, Checkbox, Container, Divider, FormControl, FormControlLabel, FormLabel, Input, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Slider, Stack, Switch, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Home() {
    const token = useSelector((state: any) => state.auth.token)
    const navigate = useNavigate();
    const [submit, setSubmit] = useState(false);

    const handleClickShowResult = () => {
        navigate('/result');
    }

    const [input, setInput] = useState({
        name: "",
        type_ins: "",
        type_topup: "",
        type_fixed: "",
        type_year: "",
        type_fix: "",
        range_sum_insure: "",
        range_premiums_insure: ""
    })

    const handleChange = (event: any) => {
        const { target } = event
        const { name } = target
        const checkboxEle = ["type_year"];
        const value = checkboxEle.includes(name) ? target.checked ? 'Yes' : 'No' : target.value
        setInput({
            ...input,
            [name]: value
        })
    }

    const onSubmit = async (event: any) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:3000/v1/poll", input, { headers: { "x-api-key": token } })
        if (response.data && response.data.success) {
            const { data } = response.data
            setSubmit(true);
        }
    }
    return (
        <Container maxWidth="sm" sx={{ pt: "15px", pb: "45px" }}>
            <Box className="home-pages">
                {submit ? <Paper className='form-header' variant="outlined" sx={{ p: "32px", borderRadius: 2 }} elevation={0}>
                    <Typography variant="h5" gutterBottom >
                        แบบประเมินแผนประกันที่คุณสนใจ
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        การยืนยันของคุณจะปรากฏบนหน้าจอหลังจากที่แบบฟอร์มได้ถูกส่งข้อมูลเรียบร้อยแล้ว
                    </Typography>
                    <Button onClick={handleClickShowResult} variant="text">ดูการตอบกลับก่อนหน้านี้</Button>
                </Paper> : <form onSubmit={onSubmit}><Box>
                    <Paper className='form-header' variant="outlined" sx={{ p: "32px", borderRadius: 2 }} elevation={0}>
                        <Typography variant="h5" gutterBottom >
                            แบบประเมินแผนประกันที่คุณสนใจ
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            ปรับแบบแผนประกันภัย ให้ตรงตามใจคุณ
                        </Typography>
                        <Button onClick={handleClickShowResult} variant="text">ดูการตอบกลับก่อนหน้านี้</Button>
                        <Divider sx={{ ml: "-32px", mr: "-32px", mt: "15px" }} />
                    </Paper>
                    <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                        <FormControl>
                            <FormLabel id="name" >ชื่อ นามสกุล</FormLabel>
                            <Input placeholder="คำตอบของคุณ" aria-labelledby="name" name='name' onChange={handleChange} />
                        </FormControl>
                    </Paper>
                    <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                        <FormControl>
                            <FormLabel id="type_ins">ประเภทประกันภัย</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="type_ins"
                                name="type_ins"
                                onChange={handleChange}
                            >
                                <FormControlLabel value="ชั้น 1" control={<Radio />} label="ชั้น 1" />
                                <FormControlLabel value="ชั้น 2+" control={<Radio />} label="ชั้น 2+" />
                                <FormControlLabel value="ชั้น 3+" control={<Radio />} label="ชั้น 3+" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                    <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                        <FormControl>
                            <FormLabel id="type_topup">แบบ Top-up เติมชั่วโมง</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="type_topup"
                                name="type_topup"
                                onChange={handleChange}
                            >
                                <FormControlLabel value="50 ขม. / 365 วัน" control={<Radio />} label="50 ขม. / 365 วัน" />
                                <FormControlLabel value="70 ขม. / 730 วัน" control={<Radio />} label="70 ขม. / 730 วัน" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                    <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                        <FormControl>
                            <FormLabel id="type_fixed">แบบ Package เหมาจ่าย</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="type_fixed"
                                name="type_fixed"
                                onChange={handleChange}
                            >
                                <FormControlLabel value="144 ขม. / 30 วัน" control={<Radio />} label="144 ขม. / 30 วัน" />
                                <FormControlLabel value="360 ขม. / 90 วัน" control={<Radio />} label="360 ขม. / 90 วัน" />
                                <FormControlLabel value="480 ขม. / 120 วัน" control={<Radio />} label="480 ขม. / 120 วัน" />
                                <FormControlLabel value="600 ขม. / 180 วัน" control={<Radio />} label="600 ขม. / 180 วัน" />
                                <FormControlLabel value="960 ขม. / 365 วัน" control={<Radio />} label="960 ขม. / 365 วัน" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                    <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                        <FormControl>
                            <FormLabel id="type_year">แบบ รายปี</FormLabel>
                            <FormControlLabel control={<Checkbox aria-labelledby="type_year" name="type_year"
                                onChange={handleChange} />} label="รายปี 365 วัน" />
                        </FormControl>
                    </Paper>
                    <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                        <FormControl>
                            <FormLabel id="type_fix">ซ่อมรถ</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="type_fix"
                                name="type_fix"
                                onChange={handleChange}
                            >
                                <FormControlLabel value="อู่ในสัญญา" control={<Radio />} label="อู่ในสัญญา" />
                                <FormControlLabel value="ศูนย์ทั่วประเทศ" control={<Radio />} label="ศูนย์ทั่วประเทศ" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                    <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                        <FormControl fullWidth>
                            <InputLabel id="range_sum_insure">ช่วงทุนประกัน</InputLabel>
                            <Select
                                labelId="range_sum_insure"
                                id="range_sum_insure"
                                label="ช่วงทุนประกัน"
                                name='range_sum_insure'
                                onChange={handleChange}
                            >
                                <MenuItem value={100000}>100,000 บาท</MenuItem>
                                <MenuItem value={300000}>300,000 บาท</MenuItem>
                                <MenuItem value={200000}>200,000 บาท</MenuItem>
                                <MenuItem value={400000}>400,000 บาท</MenuItem>
                                <MenuItem value={500000}>500,000 บาท</MenuItem>
                            </Select>
                        </FormControl>
                    </Paper>
                    <Paper className='form-body' variant="outlined" sx={{ p: "32px", borderRadius: 2, mt: "15px" }} elevation={0}>
                        <FormControl sx={{ width: '100%', maxWidth: '300px' }}>
                            <FormLabel id="range_premiums_insure">ช่วงเบี้ยประกัน</FormLabel>
                            <Slider
                                sx={{ mt: 2 }}
                                aria-label="range_premiums_insure"
                                defaultValue={30}
                                valueLabelDisplay="auto"
                                step={1000}
                                marks
                                min={550}
                                max={27000}
                                name='range_premiums_insure'
                                onChange={handleChange}
                            />
                        </FormControl>
                    </Paper>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        sx={{ width: "100%", mt: "15px" }}
                    >
                        <Button variant="contained" type='submit'>ส่ง</Button>
                        <Box></Box>
                    </Stack>
                </Box></form>}



            </Box>
        </Container >

    )
}

export default Home