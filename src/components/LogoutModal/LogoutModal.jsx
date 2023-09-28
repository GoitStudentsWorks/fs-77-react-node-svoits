import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import { BtnWrapper, CancelBtn, LogoutBtn, Text } from './LogoutModal.styled';
import { signOut } from '../../redux/auth/auth-operation';

export default function LogoutModal({ ...props }) {
  const dispatch = useDispatch();

  return (
    <Modal {...props}>
      <Text>Are you sure you want to log out?</Text>
      <BtnWrapper>
        <LogoutBtn onClick={() => dispatch(signOut())}>Log out</LogoutBtn>
        <CancelBtn>Cancel</CancelBtn>
      </BtnWrapper>
    </Modal>
  );
}
