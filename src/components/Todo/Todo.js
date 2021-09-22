import React, { useState } from "react";
import { List, ListItem, ListItemText, Button, Modal} from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import db from '../../firebase';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const Todo = (props) => {      
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const updateTodo = (e) =>  {
        //update todo with the new input text
        db.collection('todos').doc(props.todo.id).set({
            todo : input
        }, {merge : true})
        setOpen(false);
    }
    return ( 
        <>
            <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Update the Todo
                </Typography>
                <input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)}/>
                <Button onClick={updateTodo}>Update Todo</Button>
                </Box>
            </Modal>
            </div>
            <List className="todo__list">
                <ListItem >
                    <ListItemText primary={props.todo.todo} />
                </ListItem>
                <EditIcon onClick={handleOpen}>Edit</EditIcon>
                <DeleteIcon className="delete__icon" onClick={(event) => {db.collection('todos').doc(props.todo.id).delete()}}>Delete</DeleteIcon>
            </List>
        </>
     );
}
 
export default Todo;