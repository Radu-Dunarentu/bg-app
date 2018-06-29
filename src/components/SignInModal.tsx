import * as React from 'react';
import * as Modal from 'react-modal';

interface ISignInProps {
    closeModal: () => void;
    modalIsOpen: boolean;
}

const customStyles = {
    content : {
        bottom                : 'auto',
        left                  : '50%',
        marginRight           : '-50%',
        right                 : 'auto',
        top                   : '50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class SignIn extends React.Component<ISignInProps>{
    render() {
        const {closeModal, modalIsOpen} = this.props;
        return(
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <button onClick={closeModal}>close</button>
                <div>I am a sign in modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        );
    }
}

export default SignIn;
