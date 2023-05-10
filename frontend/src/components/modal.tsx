import { ReactNode } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import '../styles/Modal.css'
import { useAppDispatch, useAppSelector } from '../scripts/hooks';
import { ModalState, closeModal } from '../store/modal';
import { store } from '../store/store';

function sleep(ms) {
    var start = new Date().getTime(), expire = start + ms;
    while (new Date().getTime() < expire) { }
    return;
}

const Modal = () => {

    const dispatch = useAppDispatch();
    const modalOpen = useAppSelector((state) => state.modal.isOpen);
    const modalContent = useAppSelector((state) => state.modal.modalContent);

    console.log(modalOpen);

    if (modalOpen) {
        return (
            <div className="ModalContainer fadeIn">
                <div className="Modal fadeIn">
                    <i onClick={() => dispatch(closeModal())}><CloseRoundedIcon className='closeModalButton' fontSize='large' htmlColor='#adadad'/></i>
                    {modalContent}
                </div>
            </div>
        )
    } else {return null;}
}

export default Modal