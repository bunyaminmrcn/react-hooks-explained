import React, {useState} from 'react'
import FunctionContextComponent from './context/FunctionContextComponent'
import ClassContextComponent from './context/ClassContextComponent'
import  { ThemeProvider } from './context/ThemeContext'


export default function App() {
  

  return (
  <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
  </>
  )
}
