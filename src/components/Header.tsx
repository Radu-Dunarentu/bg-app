import Button from '@material-ui/core/Button';
import * as React from 'react';
import * as Modal from 'react-modal';
import styled from 'styled-components';

import Games from '@material-ui/icons/Games';

import withStyles from '@material-ui/core/styles/withStyles';
import '../styles.css';
import SignIn from './SignInModal';
import SignOut from './SignOutModal';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

interface IHeaderState {
    inModalIsOpen: boolean;
    outModalIsOpen: boolean;
}

interface IHeader {
    classes: any;
}
Modal.setAppElement('#root');

class Header extends React.Component<IHeader, IHeaderState> {

    constructor(props: IHeader) {
        super(props);

        this.state = {
            inModalIsOpen: false,
            outModalIsOpen: false
        };

        this.inOpenModal = this.inOpenModal.bind(this);
        this.outOpenModal = this.outOpenModal.bind(this);
        this.inCloseModal = this.inCloseModal.bind(this);
        this.outCloseModal = this.outCloseModal.bind(this);
    }

    inOpenModal() {
        this.setState({inModalIsOpen: true});
    }

    outOpenModal() {
        this.setState({outModalIsOpen: true});
    }

    inCloseModal() {
        this.setState({inModalIsOpen: false});
    }

    outCloseModal() {
        this.setState({outModalIsOpen: false});
    }

    render() {
        const {classes} = this.props;
        return (
            <HeaderContainer className='appLayout__constrainWidth'>
              <Games className={classes.logo}/>
              <Button variant="contained" color="secondary">
                <Button size="small" onClick={this.inOpenModal}>Sign in</Button >
                  /
                <Button size="small" onClick={this.outOpenModal}>Sign out</Button >
              </Button>
               {/* <AccountBtn>
                    <div onClick={this.inOpenModal}>Sign in</div>
                    <div onClick={this.outOpenModal}>Sign out</div>
                </AccountBtn>*/}

                <SignIn closeModal={this.inCloseModal} modalIsOpen={this.state.inModalIsOpen}/>
                <SignOut closeModal={this.outCloseModal} modalIsOpen={this.state.outModalIsOpen}/>
            </HeaderContainer>
        );
    }
}

export default withStyles({
  logo: {
    fontSize: 48,
    color: '#f50057',
  },
})(Header);