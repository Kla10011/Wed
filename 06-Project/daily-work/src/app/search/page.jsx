"use client";
import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Grid , Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

function SearchPost() {
    const [work, setWork] = useState("");
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [timestart, setTimestart] = useState(dayjs());
    const [timend, setTimend] = useState(dayjs());

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!work || !status || !name) {
            alert('Please fill in all required fields');
            return;
        }

        try {
            const res = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    work,
                    status,
                    name,
                    timestart,
                    timend,
                }),
            });
            if (res.ok) {
                router.push('/');
            } else {
                throw new Error('Failed to create a post');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ p: 2 }}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>ค้นหาบันทึกการปฎิบัติงานประจำวันตามช่วงเวลา</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
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
                            <Grid item xs={12} sm={6}>
                                <Button type="submit" variant="contained">SEARCH</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </React.Fragment>
    );
}

export default SearchPost;
