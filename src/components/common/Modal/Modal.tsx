import React, {FC} from 'react';
import style from './Modal.module.css'


interface ModalType {
    open: boolean
    onClose: () => void
}


const Modal: FC<ModalType> = ({open, onClose, children}) => {
    const finalModalClassName = `${style.modal} ${open ? style.active : ""}`;
    const finalModalContentClassName = `${style.modal_content} ${open ? style.active : ""}`;
    return (
        <div className={finalModalClassName} onClick={ () => onClose()}>
            <div className={finalModalContentClassName} onClick={e =>  e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;