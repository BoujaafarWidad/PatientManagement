import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateFnsUtils from '@date-io/date-fns'

interface SimpleDialogProps {
  onClose?: any,
  open: boolean,
  onAddClick: any,
}

const SimpleDialog: React.FC<SimpleDialogProps> = (props: any) => {
  const { onClose, open, onAddClick } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = React.useState<Date | null>(new Date());

  const handleOnAddClick = () => {
    if (firstName && lastName && address) {
      onAddClick({ firstName, lastName, date, address })
    }
  }

  return (
    <Dialog onClose={onClose} open={open} >
      <Box sx={{ padding: "10%", flexDirection: "column", display: "flex", gap: 3 }}>
        <DialogContentText sx={{ textAlign: "center" }}>
          Ajouter votre nouveau patient en remplissant le formulaire suivant:
        </DialogContentText>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}

          />
        </LocalizationProvider>
        <Input placeholder="Nom" onChange={(event: any) => setFirstName(event.target.value)} />
        <Input placeholder="Prénom" onChange={(event: any) => setLastName(event.target.value)} />
        <Input placeholder="adresse" onChange={(event: any) => setAddress(event.target.value)} />
        <Button
          variant="contained"
          sx={{ marginTop: 3 }}
          onClick={handleOnAddClick}
          disabled={!firstName || !lastName || !address}
        >Ajouter</Button>
      </Box>
    </Dialog>
  );
}
export default SimpleDialog;

