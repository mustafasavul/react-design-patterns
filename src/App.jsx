import './App.css'
import { SplitScreen } from './components/SplitScreen';

const LeftSideComp = () => {
  return (
    <div className="left-side">
      <h1 style={{
        color: 'white',
        backgroundColor: 'black'
      }}>Left Side</h1>
    </div>
  )
}

const RightSideComp = () => {
  return (
    <div className="right-side">
      <h1 style={{
        color: 'black',
        backgroundColor: 'white'
      
      }}>Right Side</h1>
    </div>
  )
}

function App() {
  return (
    <>
      <SplitScreen Left={LeftSideComp} Right={RightSideComp}/>
    </>
  )
}

export default App
