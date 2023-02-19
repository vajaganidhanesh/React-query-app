
import { useContext } from 'react'
import SampleContext from '../context/Sample'

function SamplePage() {

    const {state,dispatch} = useContext(SampleContext)

    const increment = ()=>{
        dispatch({
          type:'addnumber',
          payload : {name:'dhanesh'}
        })
      }
      const decrement = ()=>{
        dispatch({
          type:'subnumber',
          payload : {name:'vajagani'}
        })
      } 
  return (
    <div className='App'>
        {state.name}
        <button onClick={increment}>add</button>
        {state.count}
        <button onClick={decrement}>sub</button>
    </div>
  )
}

export default SamplePage