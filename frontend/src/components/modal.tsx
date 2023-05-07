import { ReactNode } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import '../styles/Modal.css'

type ModalProps = {
    children?: ReactNode | ReactNode[],
    closable?: boolean
}

const Modal = ({children}: ModalProps) => {
    return (
        <div className="ModalContainer">
            <div className="Modal">
                <CloseRoundedIcon className='closeModalButton' fontSize='large' htmlColor='#adadad'/>
                {children}
            </div>
        </div>
    )
}

export default Modal