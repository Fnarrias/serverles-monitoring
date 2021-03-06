import {useEffect, useState} from 'react';
import axios from 'axios';
import {Grid, Stack} from '@mui/material'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Navbar from './components/Navbar';


function App() {
  const [datos, setDatos] = useState('text');
  const fetchData = async()=>{
    const result = await axios.get('/.netlify/functions/helloWorld')
    setDatos(result.data.message);
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <Grid container justify = "center">
    <Navbar datos={datos}/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
      </Stack>
    </Grid>
  );
}

export default App;
