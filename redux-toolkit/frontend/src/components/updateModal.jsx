import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTodoList, updateTodo } from '../utils/asyncFun';

const validate = (values) => {
    let errors = {};
    
    if(!values.task){
        errors.task = "Task is required"
    }

    return errors
}

export default function UpdateModal({todo}) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik({
        initialValues : {id: todo.id, task: todo.task, status: todo.status},
        validate,
        onSubmit: useCallback((values) => {
            dispatch(updateTodo({method: "PATCH", url: `todos/${todo.id}`, data: values}))
            .then(() => {
                dispatch(getTodoList({method: "GET", url: "todos", data: ""}))
                handleClose()
            })
        }, [])
    })


    return (
        <>
            <button variant="outlined" onClick={handleClickOpen}>
                Edit
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" onClick={handleClose}>
                    Update
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" name ="task" value={formik.values.task} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Type your task' style={{width:"90%", display:"block", margin:"0.5rem auto", borderRadius:"0.5rem", border:"1px solid black", padding:"0.6rem"}} />
                        <input type="submit" value={"Update"} style={{width:"90%", display:"block", margin:" 2rem auto 0.5rem auto", borderRadius:"0.5rem", border:"1px solid black", padding:"0.6rem"}} />
                        <span>{formik.errors.task && formik.touched.task ? formik.errors.task : ""}</span>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}