import React, {Dispatch,SetStateAction} from 'react';
import '../../../style/components/Ordinary/Modal.css'
import ModalItems from './Modaltems';
import { Modal } from 'antd';
import { ICard } from '../../../models/ICard';

type booleanProps = {
    state: boolean
    setState: Dispatch<SetStateAction<boolean>>;
    cards: ICard;
  }
const ModalCards: React.FC <booleanProps> = ({state, cards, setState}: booleanProps) => {

  return (
        
    <Modal
    destroyOnClose     
    visible={state}
    footer={null}
    onCancel={() => setState(false)}
    width={850}
    className="modal__cards"
    >
      <ModalItems cards={cards}/>      
    </Modal>
  )
}
export default ModalCards;