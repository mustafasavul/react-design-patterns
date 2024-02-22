import './App.css'
import { LargeAuthorListItem } from './components/authors/LargeListItems'
import { SmallAuthorListItem } from './components/authors/SmallListItems'
import { RegularList } from './components/lists/Regular'
import { authors } from './data/books'

// SplitScreen Components

// const LeftSideComp = () => {
//   return (
//     <div className="left-side">
//       <h1 style={{
//         color: 'white',
//         backgroundColor: 'black'
//       }}>Left Side</h1>
//     </div>
//   )
// }

// const RightSideComp = () => {
//   return (
//     <div className="right-side">
//       <h1 style={{
//         color: 'black',
//         backgroundColor: 'white'
      
//       }}>Right Side</h1>
//     </div>
//   )
// }

// END SplitScreen Components

function App() {
  return (
    <>
      {/* <SplitScreen 
       leftWidth={6}
       rightWidth={6}
      >
        <LeftSideComp title={'Left Side'}/>
        <RightSideComp title={'Right Side'} />
      </SplitScreen> */}


      <RegularList 
        items={authors}
        sourceName={'authors'}
        ItemComponent={SmallAuthorListItem}
       />


      <RegularList 
        items={authors}
        sourceName={'authors'}
        ItemComponent={LargeAuthorListItem}
       />
    </>
  )
}

export default App
 