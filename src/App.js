import React from  'react'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import "./App.css"
import RowPost from './Components/RowPost/RowPost'
import {action, orginals,horror,romantic,comedy} from './urls'
function App() {
  return (
    <div className="App">
     <NavBar/>
    <Banner/>
    <RowPost  url= {orginals} title='Netflix Orginals'/>
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={horror} title='Horror' isSmall/>
    <RowPost url={romantic} title='Romantic' isSmall/>
    <RowPost url={comedy} title='Comedy' isSmall/>




    </div>
  );
}

export default App;
