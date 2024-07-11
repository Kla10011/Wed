"use client";
import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Grid, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

function Page() {
    const [work, setWork] = useState("");
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [timestart, setTimestart] = useState(dayjs());
    const [timend, setTimend] = useState(dayjs());
    const [datetimerecord, setDatetimerecord] = useState(dayjs());
    const [datetimelatest, setDatetimelatest] = useState(dayjs());

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
                    timestart: timestart.toISOString(),
                    timend: timend.toISOString(),
                    datetimerecord: datetimerecord.toISOString(),
                    datetimelatest: datetimelatest.toISOString(),
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

    const workOptions = [
        { label: 'Development' },
        { label: 'Test' },
        { label: 'Document' },
    ];

    const statusOptions = [
        { label: 'ดำเนินการ' },
        { label: 'เสร็จสิ้น' },
        { label: 'ยกเลิก' },
    ];

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ p: 2 }}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>บันทึกผลการปฎิบัติงานประจำวัน</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Autocomplete
                                    disablePortal
                                    options={workOptions}
                                    onChange={(event, value) => setWork(value ? value.label : '')}
                                    renderInput={(params) => <TextField {...params} label="ประเภทงาน" />}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="ชื่องานที่ดำเนินการ"
                                    variant="outlined"
                                    onChange={(e) => setName(e.target.value)}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    disablePortal
                                    options={statusOptions}
                                    onChange={(event, value) => setStatus(value ? value.label : '')}
                                    renderInput={(params) => <TextField {...params} label="สถานะ" />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" gutterBottom>เวลาที่เริ่มดำเนินการ</Typography>
                                            <TimePicker
                                                value={timestart}
                                                onChange={(newValue) => setTimestart(newValue)}
                                                slotProps={{ textField: { fullWidth: true } }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" gutterBottom>เวลาที่เสร็จสิ้น</Typography>
                                            <TimePicker
                                                value={timend}
                                                onChange={(newValue) => setTimend(newValue)}
                                                slotProps={{ textField: { fullWidth: true } }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" gutterBottom>วันเวลาที่บันทึกข้อมูล</Typography>
                                            <DateTimePicker
                                                value={datetimerecord}
                                                onChange={(newValue) => setDatetimerecord(newValue)}
                                                slotProps={{ textField: { fullWidth: true } }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" gutterBottom>วันเวลาที่ปรับปรุงข้อมูลล่าสุด</Typography>
                                            <DateTimePicker
                                                value={datetimelatest}
                                                onChange={(newValue) => setDatetimelatest(newValue)}
                                                slotProps={{ textField: { fullWidth: true } }}
                                            />
                                        </Grid>
                                    </Grid>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button type="submit" variant="contained">Create</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </React.Fragment>
    );
}

export default Page;
