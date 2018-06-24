import * as React from 'react';
import * as Modal from 'react-modal';
import styled from 'styled-components';

import '../styles.css';
import SignIn from './SignInModal';
import SignOut from './SignOutModal';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.div``;
const AccountBtn = styled.button`
    display: flex;
`;

interface IHeaderState {
    inModalIsOpen: boolean;
    outModalIsOpen: boolean;
}

Modal.setAppElement('#root');

class Header<IHeader> extends React.Component<{}, IHeaderState> {

    constructor() {
        super({});

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
        return (
            <HeaderContainer className='appLayout__constrainWidth'>
                <Logo>Logo</Logo>
                <AccountBtn>
                    <div onClick={this.inOpenModal}>Sign in</div>
                    <div onClick={this.outOpenModal}>Sign out</div>
                </AccountBtn>

                <SignIn closeModal={this.inCloseModal} modalIsOpen={this.state.inModalIsOpen}/>
                <SignOut closeModal={this.outCloseModal} modalIsOpen={this.state.outModalIsOpen}/>
            </HeaderContainer>
        );
    }
}

export default Header;
