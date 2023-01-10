import { Close } from '@mui/icons-material';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import React from 'react';


export const Modal = ({ title, modal, setModal, children }) => {
  return (
    <Dialog onClose={() => setModal(false)} open={modal}>

        <DialogTitle id="customized-dialog-title" onClose={() => setModal(false)}>
          {title}
        </DialogTitle>

        <IconButton onClick={() => setModal(false)} sx={{position: 'absolute', right: '5px', top: '11px'}}>
            <Close/>
        </IconButton>

        {children}

    </Dialog>
  )
}
