"use client";
import React, { useEffect, useState } from 'react';
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

function EditPostPage({ params }) {
    const { id } = params;

    const [work, setWork] = useState("");
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [timestart, setTimestart] = useState(dayjs());
    const [timend, setTimend] = useState(dayjs());

    const [postData, setPostData] = useState(null);
    
    const router = useRouter();
    
    const getPostById = async (id) => {
        try {
            const res = await fetch(`../api/posts/${id}`, {
                method: "GET",
                cache: "no-store"
            });
            if (!res.ok) {
                throw new Error("Failed to fetch a post");
            }
            const data = await res.json();
            console.log("edit post: ", data);
            setPostData(data.posts);
            setWork(data.posts.work)
            setStatus(data.posts.status)
            setName(data.posts.name)
            setTimestart(dayjs(data.posts.timestart));
            setTimend(dayjs(data.posts.timend));

        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`../api/posts/${id}`, {
                method: 'PUT',
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
                throw new Error('Failed to update the post');
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPostById(id);
    }, [id]);
    
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

    if (!postData) {
        return <div className='px-2 py-2'>Loading...</div>;
    }

    return (
        <main>
            <Container maxWidth="sm" sx={{ p: 2 }}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>แก้ไขบันทึกผลการปฎิบัติงานประจำวัน</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Autocomplete
                                    disablePortal
                                    options={workOptions}
                                    defaultValue={workOptions.find(option => option.label === postData.work)}
                                    isOptionEqualToValue={(option, value) => option.label === value.label}
                                    onChange={(event, value) => setWork(value ? value.label : '')}
                                    renderInput={(params) => <TextField {...params} label='ประเภทงาน' />}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-disabled"
                                    label="ชื่องานที่ดำเนินการ"
                                    defaultValue={postData.name}
                                    onChange={(e) => setName(e.target.value)}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    disablePortal
                                    options={statusOptions}
                                    defaultValue={statusOptions.find(option => option.label === postData.status)}
                                    isOptionEqualToValue={(option, value) => option.label === value.label}
                                    onChange={(event, value) => setStatus(value ? value.label : '')}
                                    renderInput={(params) => <TextField {...params} label="สถานะ" />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" gutterBottom>เวลาที่เริ่มดำเนินการ</Typography>
                                            <DateTimePicker
                                                value={timestart}
                                                onChange={(newValue) => setTimestart(newValue)}
                                                slotProps={{ textField: { fullWidth: true } }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" gutterBottom>เวลาที่เสร็จสิ้น</Typography>
                                            <DateTimePicker
                                                value={timend}
                                                onChange={(newValue) => setTimend(newValue)}
                                                slotProps={{ textField: { fullWidth: true } }}
                                            />
                                        </Grid>
                                    </Grid>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button color="success" type="submit" variant="contained">Edit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </main>
    );
}

export default EditPostPage;
