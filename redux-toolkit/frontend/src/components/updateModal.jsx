import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTodoList, updateTodo } from '../utils/asyncFun';
import { mutateTodos } from '../toolkit/todoSlice';
import { validateForm } from '../utils/validate';

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
        validate: (values) => validateForm(values),
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
                        <input type="text" name ="task" value={formik.values.task} onChange={(e) => {formik.handleChange(e); dispatch(mutateTodos({todo, value: e.target.value}))}} onBlur={formik.handleBlur} placeholder='Type your task' style={{width:"90%", display:"block", margin:"0.5rem auto", borderRadius:"0.5rem", border:"1px solid black", padding:"0.6rem"}} />
                        <select name="status" value={formik.values.status} onChange={(e) => {formik.handleChange(e)}} onBlur={formik.handleBlur} style={{width:"90%", display:"block", margin:"0.5rem auto", borderRadius:"0.5rem", border:"1px solid black", padding:"0.6rem"}}>
                            <option value="">Status</option>
                            <option value={"true"}>True</option>
                            <option value={"false"}>False</option>
                        </select>
                        <input type="submit" value={"Update"} style={{width:"90%", display:"block", margin:" 2rem auto 0.5rem auto", borderRadius:"0.5rem", border:"1px solid black", padding:"0.6rem"}} />
                        <span>{formik.errors.task && formik.touched.task ? formik.errors.task : ""}, {formik.errors.status && formik.touched.status ? formik.errors.status : ""}</span>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}