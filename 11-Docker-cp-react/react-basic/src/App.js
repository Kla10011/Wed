import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import MyBar from './MyBar'
import MyCard from './MyCard'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://www.melivecode.com/api/attractions')
      .then(res => res.json())
      .then((result) => {
        setData(result)
      })
  }, [])
  return (
    <div>
      <MyBar name="Me App" />
      <h1>Hello DIT, RSU</h1>
      <Grid container spacing={2}>
      {data.map(item => (
        <Grid item xs={12} md={4}>
          <MyCard 
            key={item.id} 
            name={item.name} 
            coverimage={item.coverimage}
            detail={item.detail}
          />
        </Grid>
      ))}
      </Grid>
    </div>
  )
}

export default App