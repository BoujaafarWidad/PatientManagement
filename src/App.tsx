import React, { useState } from 'react';
import { data } from "./services/data";
import './App.css';
import Typography from '@mui/material/Typography';
import Card from "./components/Card";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SimpleDialog from "./components/Modal";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [patients, setPatients] = useState(data);

  const handleOnAdd = (data: any) => {
    console.log(data);
    setPatients(prev => prev.concat(data));
    setShowForm(false);
  }

  return (
    <div className="App">
      <Typography sx={{ marginTop: 2 }} variant='h4'>Gestion des patients</Typography>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 2, marginTop: 2 }}>
        {patients.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </Box>
      <Button variant="contained" sx={{ marginTop: 5 }} onClick={() => setShowForm(true)}>
        Ajouter
      </Button>
      {showForm &&
        <SimpleDialog
          open={showForm}
          onAddClick={handleOnAdd}
          onClose={() => setShowForm(false)}
        />
      }
    </div>
  );
}

export default App;
