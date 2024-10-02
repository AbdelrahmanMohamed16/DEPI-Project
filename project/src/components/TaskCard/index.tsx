import React from 'react'
import { Card, CardContent, Typography, Button, IconButton, Chip, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/CheckCircle';




// title , status , Des 

export default function TaskCard() {
    return (
        <Card sx={{ maxWidth: 400, mx: 'auto', p: 2, position: 'relative', borderRadius: 2 }}>
            <CardContent>
                {/* Task Title */}
                <Typography variant="h5" gutterBottom>
                    Create a Design System for Enum Workspace.
                </Typography>

                {/* Status  */}
                <Chip
                    label="In Progress"
                    color="primary"
                    size="small"
                    sx={{ mb: 2 }}
                />

                {/*  Description */}
                <Typography variant="body2" color="text.secondary">
                    I am to create a simple design system to use to teach aspiring UI/UX Designers in my forthcoming class on the 2nd of October 2020.
                </Typography>

                {/* Action Buttons */}
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        variant="contained"
                        color="success"
                        startIcon={<CheckIcon />}
                        sx={{ textTransform: 'none' }}  
                    >
                        Mark As Done
                    </Button>

                    <div>
                        <IconButton aria-label="delete" color="error">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="edit" color="primary">
                            <EditIcon />
                        </IconButton>
                    </div>
                </Box>
            </CardContent>

        </Card>
    )
}
