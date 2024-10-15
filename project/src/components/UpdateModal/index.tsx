import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { Stack, TextField, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import Joi from 'joi';

interface UpdateModalProps {
    open: boolean;
    onClose: () => void;
    task: {
        title: string;
        status: string;
        description: string;
    };
    onUpdate: (updatedTask: { title: string; status: string; description: string }) => void;
}

export default function UpdateModal({ open, onClose, task, onUpdate }: UpdateModalProps) {
    const [formValues, setFormValues] = useState({
        title: task.title,
        status: task.status,
        description: task.description
    });

    const [errors, setErrors] = useState({
        title: '',
        status: '',
        description: ''
    });

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
        return !error; // returns true if no error
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
            onUpdate(formValues); 
            onClose(); 
        }
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
        >
            <DialogTitle>Update Your Task!</DialogTitle>
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
                <Button variant='contained' onClick={onClose} color='error'>Cancel</Button>
                <Button variant='contained' onClick={handleSubmit} color='info'>Update</Button>
            </DialogActions>
        </Dialog>
    );
}


