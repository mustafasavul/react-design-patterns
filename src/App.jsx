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
      <SplitScreen 
       leftWidth={6}
       rightWidth={6}
      >
        <LeftSideComp title={'Left Side'}/>
        <RightSideComp title={'Right Side'} />
      </SplitScreen>
    </>
  )
}

export default App
