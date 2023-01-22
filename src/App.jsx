import { useState } from 'react'

function App() {
  const [score, setScore] = useState(0)
  const [box, setBox] = useState([])

  const square = () => {
    for (let i = 0; i < 10; i++) {
      const arr = box.push(i)
    }

    return arr
  }



  const handleClick = () => {

  }

  return (
    <div className=''>
      Tik Tok Toe
    </div >
  )
}

const Cube = ({ value, onClick }) => (
  <>
    {
      box.map(boxes =>
        <button onClick={onClick}> {value}</button>
      )
    }
  </>
)

export default App
