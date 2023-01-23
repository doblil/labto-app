import React, { useState } from 'react';
import { ConfirmMessage } from '../blocs/confirmMessage/confirmMessage';


export const useConfirm = (text) => {
    const [promise, setPromise] = useState(null);

    const confirm = () => new Promise((resolve, reject) => {
      setPromise({ resolve });
    });
  
    const handleClose = () => {
      setPromise(null);
    };
  
    const handleConfirm = () => {
      promise?.resolve(true);
      handleClose();
    };
  
    const handleCancel = () => {
      promise?.resolve(false);
      handleClose();
    };
    // You could replace the Dialog with your library's version
    const ConfirmationDialog = () => (
        <ConfirmMessage 
            text={text}
            open={promise !== null} 
            confirmFunction = {handleConfirm}
            rejectFunction = {handleCancel} 
        />
      
    );
    return [ConfirmationDialog, confirm];
  };