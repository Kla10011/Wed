"use client";
import React, { useState ,useRef} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Grid , Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import Link from 'next/link';
import DeleteBtn from '../Delete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';


function SearchPost() {
    const [timestart, setTimestart] = useState(dayjs());
    const [timend, setTimend] = useState(dayjs());

    const [postData, setPostData] = useState([])


    const handleSearch = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch(`./api/search?timestart=${timestart}&timend=${timend}`,{
              method: "GET",
              cache: "no-store"
            })
            if (!res.ok) {
              throw new Error("Failed to fecth posts")
            }
            const data = await res.json()
            setPostData(data.posts)
          } catch(error){
            console.log("Error loading posts: ",error)
          }

    };

    const [value, setValue] = useState('Daily');
    const formRef = useRef(null);


    const handleChange = async (event) => {
        await setValue(event.target.value);
        formRef.current.requestSubmit();
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value === 'Daily') {
            setTimend(timestart)
        } else {
            ;
        }
      };

    const statusCount = postData.reduce((acc, post) => {
        const { status } = post;
        if (acc[status]) {
            acc[status]++;
        } else {
            acc[status] = 1;
        }
        return acc;
    }, {});

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" sx={{ p: 2 }}>
                <Paper sx={{ p: 2 }}>
                    <Box display={'flex'}>
                        <Box sx={{flexGrow:1}}>
                        <Typography variant="h6" gutterBottom>ค้นหาบันทึกการปฎิบัติงานประจำวันตามช่วงเวลา</Typography>
                        </Box>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <RadioGroup 
                            value={value} 
                            onChange={handleChange} 
                            row 
                            defaultValue="Daily"
                            >
                                <FormControlLabel
                                    value="Daily"
                                    control={<Radio />}
                                    label="ค้นหารายวัน"
                                />
                                <FormControlLabel
                                    value="Monthly"
                                    control={<Radio />}
                                    label="ค้นหาตามช่วงวันเวลา"
                                />
                            </RadioGroup>
                        </form>
                    </Box>
                    <form onSubmit={handleSearch}>
                        <Grid container spacing={2}>
                            {value === "Daily" ?
                                (
                                    <Grid item xs={12}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <Typography variant="body2" gutterBottom>วันที่ต้องการเริ่มค้นหา</Typography>
                                                    <DatePicker
                                                        value={timestart}
                                                        onChange={(newValue) => {
                                                            setTimestart(newValue);
                                                            setTimend(newValue);
                                                            }}
                                                        slotProps={{ textField: { fullWidth: true } }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </LocalizationProvider>
                                    </Grid>
                                ): (
                                    <Grid item xs={12}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <Typography variant="body2" gutterBottom>วันที่ต้องการเริ่มค้นหา</Typography>
                                                    <DatePicker
                                                        value={timestart}
                                                        onChange={(newValue) => setTimestart(newValue)}
                                                        slotProps={{ textField: { fullWidth: true } }}
                                                    />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography variant="body2" gutterBottom>วันที่สิ้นสุดการค้นหา</Typography>
                                                    <DatePicker
                                                        value={timend}
                                                        onChange={(newValue) => setTimend(newValue)}
                                                        slotProps={{ textField: { fullWidth: true } }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </LocalizationProvider>
                                    </Grid>
                            )}
                            <Grid item xs={12} sm={6}>
                                <Button type="submit" variant="contained">SEARCH</Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container >
                                    <Grid item xs={3} >
                                        <center>
                                        ดำเนินการ : {statusCount["ดำเนินการ"]}
                                        </center>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <center>
                                        ยกเลิก : {statusCount["ยกเลิก"]}
                                        </center>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <center>
                                        เสร็จสิ้น : {statusCount["เสร็จสิ้น"]}
                                        </center>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <center>
                                        ทั้งหมด : {statusCount["ดำเนินการ"]}
                                        </center>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                    <div className='grid grid-cols-5 mt-3 gap-5'>
                        {postData && postData.length > 0 ?
                        (postData.map(val=>(
                            <Paper sx= {{p:2}}>
                            <div key={val._id}>
                                <p>ประเภทงาน : {val.work}</p>
                                <p>ชื่องานที่ดำเนินการ : {val.name}</p>
                                <p>สถานะ : {val.status}</p>
                                <div className='py-2'>
                                    <p>เวลาที่เริ่มดำเนินการ : </p>
                                    <p>{new Date(val.timestart).toLocaleString('en-US')}</p>
                                </div>
                                <div className='py-2'>
                                    <p>เวลาที่เสร็จสิ้น</p>
                                    <p>{new Date(val.timend).toLocaleString('en-US')}</p>
                                </div>
                                <div className='py-2'>
                                    <p>วันเวลาที่บันทึกข้อมูล</p>
                                    <p>{new Date(val.createdAt).toLocaleString('en-US')}</p>
                                </div>
                                <div className='py-2'>
                                    <p>วันเวลาที่ปรับปรุงข้อมูลล่าสุด</p>
                                    <p>{new Date(val.updatedAt).toLocaleString('en-US')}</p>
                                </div>
                                <div className="my-5">
                                    <Link href = {`/edit/${val._id}`}>
                                    <Button className='border py-1 px-1' variant="contained" color='success'>EDIT</Button>
                                    </Link>
                                    <DeleteBtn id={val._id} />
                                </div>
                            </div>
                            </Paper>
                        ))): (
                            <p className="bg-gray-300 p-3 my-3">You do not have any posts yet.</p>
                        )}
                    </div>
                </Paper>
            </Container>
        </React.Fragment>
    );
}

export default SearchPost;
