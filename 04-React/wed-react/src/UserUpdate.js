import React ,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Grid, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function UserUpdate() {
  const { id } = useParams();

  useEffect(()=>{
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://www.melivecode.com/api/users/"+id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result['status']==='ok') {
          setFname(result['user']['fname'])
          setLname(result['user']['lname'])
          setUsername(result['user']['username'])
          setEmail(result['user']['email'])
          setPassword(result['user']['password'])
          setAvatar(result['user']['avatar'])
        }
      })
      .catch((error) => console.error(error));
  },[id])

  const handleSubmit = event =>{
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "id": id,
      "fname": fname,
      "lname": lname,
      "username": username,
      "password": password,
      "email": email,
      "avatar": avatar
    });
    
    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("https://www.melivecode.com/api/users/update", requestOptions)
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
            <Typography variant="h6" gutterBottom>Update User</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField id="fname" label="Frist Nmae" variant="outlined" 
                  fullWidth required onChange={(e)=> setFname(e.target.value)} 
                  value={fname}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id="lname" label="Last Nmae" variant="outlined" 
                  fullWidth required onChange={(e)=> setLname(e.target.value)} 
                  value={lname}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id="username" label="Username" variant="outlined" 
                  fullWidth required onChange={(e)=> setUsername(e.target.value) }
                  value={username}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id="email" label="Email" variant="outlined" 
                  fullWidth required onChange={(e)=> setEmail(e.target.value)}
                  value={email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="password" label="Password" variant="outlined" 
                  fullWidth required onChange={(e)=> setPassword(e.target.value)}
                  value={password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="avatar" label="Avatar" variant="outlined" 
                  fullWidth required onChange={(e)=> setAvatar(e.target.value)}
                  value={avatar}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button type="submit" variant='contained'>
                    Update
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
    </React.Fragment>
  );
}
