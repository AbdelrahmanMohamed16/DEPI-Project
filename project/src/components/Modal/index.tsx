import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import { Stack, TextField } from '@mui/material'

export default function Modal() {

const [open,setOpen] = useState<boolean>(false)

const openModal = ()=> {
  setOpen(true);
}
const closeModal = ()=>  {
  setOpen(false);
}


  return (
    <React.Fragment>
    <Button variant="contained" color='primary' onClick={openModal}>
      Create Task
    </Button>
    <Dialog
      open={open}
      onClose={closeModal}
      fullWidth
      // PaperProps={{
      //   component: 'form',
      //   onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
      //     event.preventDefault();
      //     const formData = new FormData(event.currentTarget);
      //     const formJson = Object.fromEntries((formData as any).entries());
      //     const email = formJson.email;
      //     console.log(email);
      //     closeModal();
      //   },
      // }}
    >
      <DialogTitle>Create A Task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          please enter your task details  here
        </DialogContentText>
        <Stack spacing={2} margin={2}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="email"
          label="Title"
          type="email"
          fullWidth
          variant="outlined"
        />
        <TextField
          
          required
          margin="dense"
          id="name"
          name="Status"
          label="Status"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="name"
          name="Description"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
        />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={closeModal} color='error'>Cancel</Button>
        <Button variant='contained' type="submit" color='success'>Add</Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
  )
}

