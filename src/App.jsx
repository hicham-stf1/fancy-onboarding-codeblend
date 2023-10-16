import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTag from './components/AddTag'
import AddTagComponent from './components/AddTagComponent'

function App() {

  return (
    <div className='max-w-8xl h-screen bg-gray-50'>
      {/* Page header here */}
      <div className='max-w-2xl mx-auto text-center pb-12 md:pb-20'>
        <h2 className='font-medium text-4xl my-2 mb-2'>
          Add tags
        </h2>
        {/* <AddTag /> */}
        <AddTagComponent />
      </div>
      {/* Cards here */}


    </div>
  )
}

export default App
