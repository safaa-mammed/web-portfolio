"use client"
import React, { useState } from 'react';


const MyModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    console.log("Clicked Close!");
  }
  const handleShow = () => {
    setShow(true);
    console.log("Clicked Show!");
  }
  return (
    <div className='w-full h-full'>
   
    </div>
  )
};

export default MyModal;