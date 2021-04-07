import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>
  <Header />
  <Content />
  </div>
};

const Header = () => (
    <h1>Header</h1>
);
const Content = () => (
    <h2>Content</h2>
);

ReactDOM.render(<App />,document.getElementById('root'));

export default App;