import React from 'react'
import { Header } from './components/Modal/Header';

export const Modal = () => {
  return (
    <div className="flex justify-center items-center min-h-screen text">
         <div className="flex flex-col px-5 pt-5 pb-20 bg-white shadow-sm w-[718px] h-[600px]">
            <Header />
         </div>
    </div>
  )
}

