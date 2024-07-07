import React ,{ useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Grid, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function UserCreate() {
  const handleSubmit = event =>{
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "fname": fname,
      "lname": lname,
      "username": username,
      "password": password,
      "email": email,
      "avatar": avatar
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("https://www.melivecode.com/api/users/create", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result['message']) 
        if (result['status']==='ok'){
          window.location.href = "/"
        }
      })
      .catch((error) => console.error(error));
  }
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [avatar,setAvatar] = useState('');
  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="sm" sx={{p:2}}>
          <Paper sx ={{p:2}}>
            <Typography variant="h6" gutterBottom>User</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField id="fname" label="Frist Nmae" variant="outlined" fullWidth required onChange={(e)=> setFname(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id="lname" label="Last Nmae" variant="outlined" fullWidth required onChange={(e)=> setLname(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id="username" label="Username" variant="outlined" fullWidth required onChange={(e)=> setUsername(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id="email" label="Email" variant="outlined" fullWidth required onChange={(e)=> setEmail(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField id="password" label="Password" variant="outlined" fullWidth required onChange={(e)=> setPassword(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField id="avatar" label="Avatar" variant="outlined" fullWidth required onChange={(e)=> setAvatar(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button type="submit" variant='contained'>
                    Create
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
    </React.Fragment>
  );
}
