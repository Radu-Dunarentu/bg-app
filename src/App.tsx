import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
// import styled from 'styled-components';
import 'typeface-roboto'
import ForumTable from './components/ForumTable';
import Header from './components/Header';

const theme = createMuiTheme();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header/>
          <ForumTable />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
