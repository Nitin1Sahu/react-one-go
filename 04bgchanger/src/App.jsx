import React, { useEffect } from 'react'
import Button from './components/Button';

const App = () => {
  const [color, setColor] = React.useState('');
  useEffect(() => {
    document.querySelector('.main-section').style.backgroundColor = color;
  }, [color, setColor])
  return (
    <div className='main-section'>
      <Button color={'red'} setColor={setColor} />
      <Button color={'blue'} setColor={setColor} />
      <Button color={'green'} setColor={setColor} />
      <Button setColor={setColor} />

    </div>
  )
}

export default App