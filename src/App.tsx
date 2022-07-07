import React,{useEffect} from 'react'
import axios from 'axios'

const App:React.FC<any> = () => {
  useEffect(()=>{
    axios.get('https://restful-api-gamma.vercel.app/').then((res)=>{
      console.log(res)
    }).catch((error:Error)=>{
      console.log(error?.message)
    })
  },[])
  return (
    <div>
      hello world
    </div>
  )
}

export default App
