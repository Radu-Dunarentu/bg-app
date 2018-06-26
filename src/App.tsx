import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'typeface-roboto'
import ForumTable from './components/ForumTable';
import Header from './components/Header';
import Threads from './components/Threads';

const theme = createMuiTheme();

const NavHeader = styled.ul`
  display: flex;
`;

const HeaderLink = styled.li`
  margin: 0 16px;
`;
class App extends React.Component {
  render() {
    // noinspection TsLint
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className='appLayout__constrainWidth'>

            <Header/>

            <NavHeader>
              <HeaderLink>
                <Link to="/">Home</Link>
              </HeaderLink>
              <HeaderLink>
                <Link to="/threads">threads</Link>
              </HeaderLink>
              <HeaderLink>
                <Link to="/topics">Topics</Link>
              </HeaderLink>
            </NavHeader>

            <hr/>

            <Route exact path="/" component={ForumTable} />
            <Route path="/threads" component={Threads} />


            {/*<ForumTable />*/}
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
