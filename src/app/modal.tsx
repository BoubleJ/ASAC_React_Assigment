import { Box, Button, Modal } from '@mui/material';
import { createContext, useState } from 'react';
import { Typography } from '@mui/material';

// Default Value
export const ModalContext = createContext({
  show: (param: ModalContent) => {},
  hide: () => {},
});
// createContext 함수를 이용하여 ModalContext라는 새로운 컨텍스트를 생성
// ModalContext는 초기값으로 객체를 가지고 있는데,
// 이 객체에는 두 개의 함수(show함수, hide 함수)와 빈 객체가 존재.
// show: 모달을 표시하기 위한 함수로, ModalContent라는 매개변수 존재
// hide: 모달을 숨기기 위한 함수
// 모달 관련 동작을 컴포넌트 간에 공유하고 상태를 관리하는 데 사용
interface ModalProviderProps {
  // children 속성 타입을 지정하는 interface다.
  children: React.ReactNode;
}
// React.ReactNode 는 typescript에서 쓰이는 타입 지정방법으로
// type ReactNode = ReactElement | string | number | ReactFragment | ReactPortal | boolean | null | undefined;
// 등 다양한 타입을 포함하고 있다.

interface Modal extends ModalContent {
  show: boolean;
}
// interface Modal extends ModalContent 구문은 TypeScript에서 인터페이스 간 상속을 나타내며,
// 여기서 Modal 인터페이스가 ModalContent 인터페이스를 확장(상속)한다는 의미
// extends 키워드를 사용하면 하나의 인터페이스를 다른 인터페이스로 확장하여,
// 기존 인터페이스의 속성을 포함하면서 새로운 속성을 추가하거나 재정의할 수 있다.
// 따라서 Modal 인터페이스는 ModalContent 인터페이스의 모든 속성과 함께
// show라는 부울(Boolean) 속성을 가지고 있는 것으로 정의
interface ModalContent {
  title?: string;
  description?: string;
  confirmButton?: string;
  cancelButton?: string;
  confirmCallback?: () => void;
  // confirmCallback 함수는 router 사용 목적. 확인 누르면 다른 페이지로 이동하게 만들고 싶으면 사용하면 된다.
  cancelCallback?: () => void;
  useConfirmButton?: boolean;
  useCancelButton?: boolean;
}
// 여기서 ? 는 선택적 프로퍼티 문법이다.  title?: string; 의 경우
// ModalContent 객체 프로퍼티 중 title 이란 값이 있어도 되고 없어도 된다는 뜻.
// ? 가 없으면 무조건 있어야한다.
// void는 결과 값을 반환하지 않는 함수에 설정합니다.

export default function ModalProvider({ children }: ModalProviderProps) {
  const [modal, setModal] = useState<Modal>({
    show: false,
  });
  {
    /* ModalProvider 라는 함수를 export했고 매개변수로 {children}을 가지고 있으며
 타입은 위에 정의한 ModalProviderProps interface 를 따른다.
 children은 React 컴포넌트의 특별한 프로퍼티 중 하나로, 컴포넌트의 자식 요소를 나타낸다.
 ex.
  <ModalProvider>
  <App />
  </ModalProvider>
  <App />는 ModalProvider의 children이 된다. */
  }

  return (
    // Initial Value
    <ModalContext.Provider
      value={{
        show: (param: ModalContent) => {
          setModal({
            show: true,
            //이값들이 NestedReactComponent로 전달되고 show를 true로 했기 떄문에 button을 클릭하면 화면에 모달이 렌더링된다.
            title: param.title,
            //a버튼 기준 param.title은 안녕
            //description등등 나머지도 똑같이 적용
            //page.tsx에서 title 매개변수를 없애도 괜찮다. title 없는채로 렌더링된다.

            description: param.description,
            confirmButton: param.confirmButton,
            cancelButton: param.cancelButton,
            confirmCallback: param.confirmCallback,
            cancelCallback: param.cancelCallback,
            useConfirmButton: param.useConfirmButton ?? true,
            useCancelButton: param.useCancelButton ?? true,
          });
        },

        // ?? 를 통해 왼쪽의 값이 null 혹은 undefined 인지 확인.
        // 만약 왼쪽의 값이 null 혹은 undefined 라면 NCO(??) 의 오른쪽에 위치한 값이 반환.

        hide: () => {
          setModal({ show: false });
        },
        // show를 false로 만들어 모달창을 닫게 하는 함수
      }}
    >
      {children}
      {/* page.tsx의 NestedReactComponent
      컴포넌트의 return 부분인
      버튼 a ,b, c, d, 닫기 를 의미 */}

      {/* 버튼 왼쪽 아래 뜨는 모달창 */}
      <Box>
        <Typography variant="h6" component="h2">
          {modal.title}
          {/* page.tsx button마다 써있는 title 값 */}
        </Typography>
        <Typography sx={{ mt: 2 }}>{modal.description}</Typography>
        {/* page.tsx button마다 써있는 description 값 */}

        <div style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
          {modal.useConfirmButton ? (
            //modal.useConfirmButton 값이 null, undefined가 아니면 그 값을 지정하고
            //null, undefined 면 확인으로 값을 지정 하는 로직이 걸려있기 때문에
            //page.tsx에서 useConfirmButton를 true로 지정하면 버튼 사용가능. false로 하면 버튼 안나타남
            <Button
              variant="contained"
              onClick={() => {
                console.log('확인을 눌렀습니다. 다음 작업을 수행하세요.');
                modal.confirmCallback && modal.confirmCallback();
              }}
            >
              {/*  modal.cancelCallback이 존재하면 (즉, null 또는 undefined가 아니면), 그 값을 확인.
                modal.cancelCallback이 존재하고 "truthy"한 값이라면 (예: 함수), 그 함수를 호출합.
               modal.cancelCallback이 null 또는 undefined인 경우 또는 "falsy"한 값이라면 (예: null, undefined, false), 함수를 호출하지 않고 넘어갑니다.
                이 패턴은 함수의 존재 여부를 확인하고, 함수가 존재할 때만 호출하고자 할 때 유용하게 사용. */}

              {/* 모달창 confirm버튼 이름을 설정하는곳 */}
              {modal.confirmButton ?? '확인'}
              {/* 모달창 confirm버튼 이름을 설정하는곳 */}
              {/* modal.confirmButton의 값이 존재하면(즉, null 또는 undefined가 아니면), 그 값을 사용.
              modal.confirmButton의 값이 null 또는 undefined인 경우, 대체 값으로 '확인'을 사용. */}
            </Button>
          ) : (
            <></>
          )}
          {modal.useCancelButton ? (
            <Button
              variant="contained"
              onClick={() => {
                modal.cancelCallback && modal.cancelCallback();
                setModal({ show: false });

                {
                  /* show가 false값이 되었으므로 모달창이 닫힘 */
                }
              }}
            >
              {modal.cancelButton ?? '취소'}
            </Button>
          ) : (
            <></>
          )}
        </div>
      </Box>
      {/* 버튼 왼쪽 아래 뜨는 모달창*/}
    </ModalContext.Provider>
  );
}
