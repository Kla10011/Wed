'use client'

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import DeleteBtn from './Delete';

export default function Home() {
  const [postData, setPostData] = useState([])
  console.log(postData)

  const getPosts = async() => {
    try{
      const res = await fetch('./api/posts',{
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
  }

  

  useEffect(() => {
    getPosts()
  },[])

  return (
    <main >
      <Container maxWidth="xl" sx = {{p:2}}>
          <Paper sx ={{p:2}}>
          <Box display={'flex'}>
              <Box sx={{flexGrow:1}}>
                  <Typography variant="h6" gutterBottom>User</Typography>
              </Box>
              <Link href="create">
                  <Button variant="contained">
                      CREATE
                  </Button>
              </Link>
          </Box>
          <div className='grid grid-cols-5 mt-3 gap-5'>
            {postData && postData.length > 0 ?
              (postData.map(val=>(
                <Paper sx= {{p:2}}>
                  <div key={val._id}>
                      <li>{val.work}</li>
                      <li>{val.name}</li>
                      <li>{val.status}</li>
                      <li>{new Date(val.timestart).toLocaleString('en-US')}</li>
                      <li>{new Date(val.timend).toLocaleString('en-US')}</li>
                      <li>{new Date(val.createdAt).toLocaleString('en-US')}</li>
                      <li>{new Date(val.updatedAt).toLocaleString('en-US')}</li>
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
    </main>
  );
}
