import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, IconButton, Chip, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import UpdateModal from './../UpdateModal/index';

interface TaskCardProps {
    title: string;
    description: string;
    status: string;
    onStatusChange: (newStatus: string) => void;
    onDelete: () => void; 
    onUpdate: (updatedTask: { title: string; status: string; description: string }) => void; // Prop for updating
}

export default function TaskCard({ title, description, status, onStatusChange, onDelete, onUpdate }: TaskCardProps) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleMarkAsDone = () => {
        onStatusChange('Completed');
    };

    return (
        <Card sx={{ maxWidth: 400, mx: 'auto', p: 2, position: 'relative', borderRadius: 2 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>{title}</Typography>

                <Chip
                    label={status}
                    color={status === 'Completed' ? 'success' : status === 'Pending' ? 'default' : 'primary'}
                    size="small"
                    sx={{ mb: 2 }}
                />

                <Typography variant="body2" color="text.secondary">{description}</Typography>

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                    {status !== 'Completed' && (
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<CheckIcon />}
                            sx={{ textTransform: 'none' }}
                            onClick={handleMarkAsDone}
                        >
                            Mark As Done
                        </Button>
                    )}
                    <div>
                        <IconButton aria-label="delete" color="error" onClick={onDelete}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="edit" color="primary" onClick={() => setModalOpen(true)}>
                            <EditIcon />
                        </IconButton>
                        <UpdateModal
                            open={modalOpen}
                            onClose={() => setModalOpen(false)}
                            task={{ title, status, description }} 
                            onUpdate={(updatedTask) => {
                                onUpdate(updatedTask); 
                                setModalOpen(false); 
                            }} 
                        />
                    </div>
                </Box>
            </CardContent>
        </Card>
    );
}
