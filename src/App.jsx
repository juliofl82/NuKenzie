import { useState } from 'react'
import { Header } from './components/Header';
import { FinanceForm } from './components/FinanceForm';
import { Total } from './components/Total';
import { FinanceList } from './components/FinanceList';


function App() {
  

  return (
    <>
      <Header />
      <FinanceForm/>
      <Total/>
      <FinanceList/>
    </>
  )
}

export default App
