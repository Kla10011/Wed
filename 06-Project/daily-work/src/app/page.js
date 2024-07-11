'use client'

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Home() {
  const [postData, setPostData] = useState([])

  return (
    <main >
      <Container maxWidth="lg" sx = {{p:2}}>
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
          </Paper>
      </Container>
    </main>
  );
}
