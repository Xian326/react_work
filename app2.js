import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return(
    <div>
    <Header/>
    <Content/>
    </div>
)}

function Header() {
    return <h1>Header</h1>
}
function Content() {
    return <h2>Content</h2>
}

ReactDOM.render(<App />,document.getElementById('root'));

export default App;