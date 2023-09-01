import { useContext } from 'react';
import { Context1 } from './page';
import Modal from './modal.module.css';

function Tab() {
  let { 재고 } = useContext(Context1);
  return (
    <div>
      탭 컴포넌트
      {재고[1]}
    </div>
  );
}

export default function Detail() {
  let { 재고 } = useContext(Context1);

  return (
    <div className={Modal.background}>
      경고창 아이디 혹은 비밀번호가 형식에 일치하지 않습니다.
      {재고[0]}
      <button>확인</button>
      <button>취소</button>
      <Tab></Tab>
    </div>
  );
}
