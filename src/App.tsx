import * as React from 'react';
// import styled from 'styled-components';
import ForumTable from './components/ForumTable';
import Header from './components/Header';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ForumTable />
      </div>
    );
  }
}

export default App;
