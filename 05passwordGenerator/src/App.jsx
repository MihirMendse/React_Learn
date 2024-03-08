import { useRef } from 'react'
import { useState, useCallback, useEffect} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()
  const [buttonText, setButtonText] = useState('Copy');

  const handleFocus = () => {
    setButtonText('Copied');
  };

  const handleBlur = () => {
    setButtonText('Copy');
  };

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    //passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str+="0123456789"
    }
    if (charAllowed) {
      str+="!@#$%^&*-_=+"
    }
    for (let index = 1; index <= length; index++) {
      let randomIndex = Math.floor(Math.random()*str.length)
      pass+=str.charAt(randomIndex)
    }

    setPassword(pass)
  },[length, numberAllowed, charAllowed])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-[#172842] text-orange-500 font-bold'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text"
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder='password'
           ref={passwordRef}
           readOnly/>

           <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 focus:bg-green-500 transition-all duration-100'
           onFocus={handleFocus}
           onBlur={handleBlur}
           onClick={copyPasswordToClipboard}>
            {buttonText}
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
             type="range"
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked={numberAllowed}
             id='numberInput'
             onChange={()=>{
              setNumberAllowed((prev)=>!prev)
             }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input
             type="checkbox"
             defaultChecked={charAllowed}
             id='charInput'
             onChange={()=>{
              setCharAllowed((prev)=>!prev)
             }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
