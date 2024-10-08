import {useState} from 'react'

const HomeTwo = () => {
    const [hotstar, setHotstar] = useState(0);
    const [netflix, setNetflix] = useState(0);
  
  const handleClick1 = () => {
    setHotstar(hotstar + 1);
  }
  const handleClick2 = () => {
    setNetflix(netflix + 1);
  }
  
    return (
    <div>
        <div>Add Subscription</div>
        <button onClick={handleClick1}>Hotstar</button>
        <button onClick={handleClick2}>Netflix</button>

        <div>{hotstar}</div>
        <div>{netflix}</div>
    </div>
  )
}

export default HomeTwo  