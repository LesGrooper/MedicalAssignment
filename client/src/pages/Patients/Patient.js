import React from 'react'
import { Outlet } from "react-router-dom";

const Patient = () => {
  return (
    <>
        <div className='container my-3'>
            <div className='w-100 my-3 text-center'>
                <div className='flex'>
                    <h2>Patient's Page</h2>
                    <p>asdf</p>
                </div>
            </div>
            <Outlet/>
        </div>
    </>
  )
}

export default Patient