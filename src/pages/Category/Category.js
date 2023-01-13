import { Box, Button, DialogActions, DialogContent, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Delete, Edit } from '@mui/icons-material';
import { Modal } from '../../components/Modal/Modal';
import axios from 'axios';
import './Category.css';


export const Category = () => {

    const [ categoryModal, setCategoryModal ] = useState(false);
    const [ category, setCategory ] = useState([]);


    const categoryRef = useRef();

    const handleSubmit = (evt) => {
        evt.preventDefault()
        axios.post('http://localhost:8080/category', {
            category_name: categoryRef.current.value,
        }).then(res => {
            if(res.status === 201){
                setCategoryModal(false)
                getCategory()
            }
        })
        .catch(err => console.log(err))
    };

    const getCategory = async () => {
        axios.get('http://localhost:8080/category')
        .then(res => {
            if(res.status === 200){
                setCategory(res.data)
            }
        })
        .catch(err => console.log(err))
    }

    const handleDel = async (id) => {
        axios.delete('http://localhost:8080/category/' + id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }


    useEffect(() => {
        getCategory()
    }, [])


  return (
    <Box>
        <Button onClick={() => setCategoryModal(true)} sx={{marginBottom:'24px'}} variant='contained' endIcon={<AddIcon/>}>Add category</Button>


        <Paper sx={{ width: '100%'  }}>
        <TableContainer className='box-flow' sx={{ maxHeight: 480 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{backgroundColor:'gray', color: 'white'}}>ID</TableCell>
                        <TableCell sx={{backgroundColor:'gray', color: 'white'}}>Name</TableCell>
                        <TableCell sx={{backgroundColor:'gray', color: 'white'}}>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        category.map(el => (
                            <TableRow key={el.id}>
                                <TableCell>{el.id}</TableCell>
                                <TableCell>{el.category_name}</TableCell>
                                <TableCell>
                                    <IconButton sx={{ marginRight: '7px'}}>
                                        <Edit sx={{color: 'orange'}}/>
                                    </IconButton>

                                    <IconButton onClick={() => handleDel(el.id)}>
                                        <Delete sx={{color: 'red'}}/>
                                    </IconButton>

                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
        </Paper>



        <Modal modal={categoryModal} title='Add category' setModal={setCategoryModal}>
            <form onSubmit={handleSubmit}>
            <DialogContent dividers>
                <Stack spacing={2}>
                    <TextField inputRef={categoryRef} sx={{width: '400px'}} label='Category name'/>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button type='submit' color='success' variant='contained' >Add category</Button>
            </DialogActions>
            </form>
        </Modal>
    </Box>
  )
}
