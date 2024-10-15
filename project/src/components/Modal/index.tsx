import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import { Stack, TextField, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material'
import Joi from 'joi';

export default function Modal() {
  const [open, setOpen] = useState<boolean>(false)

  const [formValues, setFormValues] = useState({
    title: '',
    status: '',
    description: ''
  })

  const [errors, setErrors] = useState<{
    title: string,
    status: string,
    description: string
  }>({
    title: '',
    status: '',
    description: ''
  })

  const openModal = () => {
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }

  const validateForm = () => {
    const schema = Joi.object({
      title: Joi.string()
        .min(5)
        .regex(/^[a-zA-Z].*/)
        .required()
        .messages({
          'string.base': 'Title must be a string',
          'string.empty': 'Title is required',
          'string.min': 'Title must be at least 5 characters long',
          'string.pattern.base': 'Title must start with a letter'
        }),
      status: Joi.string()
        .valid('In Progress', 'Pending', 'Completed')
        .required()
        .messages({
          'any.required': 'Status is required'
        }),
      description: Joi.string()
        .min(5)
        .regex(/^[a-zA-Z].*/)
        .required()
        .messages({
          'string.base': 'Description must be a string',
          'string.empty': 'Description is required',
          'string.min': 'Description must be at least 5 characters long',
          'string.pattern.base': 'Description must start with a letter'
        })
    });

    const { error } = schema.validate(formValues, { abortEarly: false });

    const newErrors: { title: string; status: string; description: string } = {
      title: '',
      status: '',
      description: ''
    };

    if (error) {
      error.details.forEach((detail) => {
        const key = detail.path[0] as keyof typeof newErrors;
        newErrors[key] = detail.message;
      });
    }

    setErrors(newErrors);
    return !error; 
  }

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setFormValues({
      ...formValues,
      status: event.target.value
    });
  }

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      
      const newTask = {
        title: formValues.title,
        status: formValues.status,
        description: formValues.description,
      };
      
      const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      
      existingTasks.push(newTask);
      
      localStorage.setItem('tasks', JSON.stringify(existingTasks));

      setFormValues({ title: '', status: '', description: '' });
      setErrors({ title: '', status: '', description: '' });
      closeModal();  
    }
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
      >
        <DialogTitle>Create A Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your task details here
          </DialogContentText>
          <FormControl fullWidth margin="dense" variant="outlined">
            <Stack spacing={2} margin={2}>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                name="title"
                label="Title"
                type="text"
                fullWidth
                variant="outlined"
                value={formValues.title}
                onChange={handleTextFieldChange}
                error={!!errors.title}
              />
              {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}

              <FormControl fullWidth margin="dense" variant="outlined">
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  labelId="status-label"
                  id="status"
                  name="status"
                  value={formValues.status}
                  onChange={handleSelectChange}
                  label="Status"
                  error={!!errors.status}
                >
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
              </FormControl>
              {errors.status && <span style={{ color: 'red' }}>{errors.status}</span>}

              <TextField
                margin="dense"
                id="description"
                name="description"
                label="Description"
                type="text"
                fullWidth
                variant="outlined"
                value={formValues.description}
                onChange={handleTextFieldChange}
                error={!!errors.description}
              />
              {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
            </Stack>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={closeModal} color='error'>Cancel</Button>
          <Button variant='contained' onClick={handleSubmit} color='info'>Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

