

import { Component } from 'react'
import Navbar from './pages/navbar';
import News from './pages/News';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

export default App;
