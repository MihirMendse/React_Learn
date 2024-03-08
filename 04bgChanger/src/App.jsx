import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-1000 flex justify-center" style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 px-2'>
          <div className='flex flex-wrap justify-center gap-4 bg-white rounded-full px-3 py-2 '>

            <button onClick={() => setColor("red")} className='outline-none rounded-full px-2 shadow-lg text-white transition-transform transform hover:scale-110' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setColor("green")} className='outline-none rounded-full px-2 shadow-lg text-white transition-transform transform hover:scale-110' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={() => setColor("blue")} className='outline-none rounded-full px-2 shadow-lg text-white transition-transform transform hover:scale-110' style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={() => setColor("olive")} className='outline-none rounded-full px-2 shadow-lg text-white transition-transform transform hover:scale-110' style={{ backgroundColor: "olive" }}>Olive</button>
            <button onClick={() => setColor("gray")} className='outline-none rounded-full px-2 shadow-lg text-white transition-transform transform hover:scale-110' style={{ backgroundColor: "gray" }}>Gray</button>
            <button onClick={() => setColor("yellow")} className='outline-none rounded-full px-2 shadow-lg text-black transition-transform transform hover:scale-110' style={{ backgroundColor: "yellow" }}>Yellow</button>
            <button onClick={() => setColor("pink")} className='outline-none rounded-full px-2 shadow-lg text-black transition-transform transform hover:scale-110' style={{ backgroundColor: "pink" }}>Pink</button>
            <button onClick={() => setColor("purple")} className='outline-none rounded-full px-2 shadow-lg text-white transition-transform transform hover:scale-110' style={{ backgroundColor: "purple" }}>Purple</button>
            <button onClick={() => setColor("lavender")} className='outline-none rounded-full px-2 shadow-lg text-black transition-transform transform hover:scale-110' style={{ backgroundColor: "lavender" }}>Lavender</button>
            <button onClick={() => setColor("white")} className='outline-none rounded-full px-2 shadow-lg text-black transition-transform transform hover:scale-110' style={{ backgroundColor: "white" }}>White</button>
            <button onClick={() => setColor("black")} className='outline-none rounded-full px-2 shadow-lg text-white transition-transform transform hover:scale-110' style={{ backgroundColor: "black" }}>Black</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
