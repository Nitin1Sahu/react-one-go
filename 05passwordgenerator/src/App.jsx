import React from 'react'

const App = () => {
  const [length, setLength] = React.useState(8);
  const [charAllowed, setCharAllowed] = React.useState(false);
  const [numberAllowed, setNumberAllowed] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const passwordRef = React.useRef(null);
  const passwordGenerator = React.useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "~!@#$%^&*()_+-=[]{}|';:<>.,/?";
    for (let i = 1; i < length; i++) {
      let charChoosedNumber = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charChoosedNumber);
    }
    setPassword(pass)
  }, [numberAllowed, charAllowed, length, setPassword])
  const copyToClipboard = React.useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 25);
    window.navigator.clipboard.writeText(password);
  }, [password])
  React.useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <div className="container">
      <div className="container__section1">
        <input type="text" ref={passwordRef} value={password} placeholder='Password...' readOnly />
        <button onClick={copyToClipboard}>Copy</button>
      </div>
      <div className="container__section2">
        <div>
          <input type="range" min={8} max={24} onChange={(e) => { setLength(e.target.value) }} value={length} />
          <label>Length: {length}</label>
        </div>
        <div>
          <input type="checkbox" onChange={() => setCharAllowed(charAllowed => !charAllowed)} />
          <label>Charactor</label>
        </div>
        <div>
          <input type="checkbox" onChange={() => setNumberAllowed(numberAllowed => !numberAllowed)} />
          <label>Number</label>
        </div>
      </div>
    </div>
  )
}

export default App