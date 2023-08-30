'use client'
import Image from 'next/image'
import styles from './page.module.css'

import { useState } from 'react';


function Btn(props: { title: string, bg_color: string, color: string }) {
  return (
    <button
    className={styles.snsBtn}
      style={{ backgroundColor: props.bg_color, color: props.color }}
    >
     
      {props.title}로 로그인
    </button>
  );
}



function Input (props) {
  return (
    <div className={styles.login_input}>
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
     
    />
  </div>

  )
}




export default function Home() {

  let [LoginSNS, setLoginSNS] = useState<string[]>([" 카카오톡으", " Google"]);





  return (
    <main className={styles.background}>
 <section>
        <form>
          <input type="hidden"></input>
          <div className={styles.title_logo}>
            <strong className={styles.logo}>
              <a href="#">여기어때</a>
            </strong>
          </div>

          <div className={styles.snsBtn_box}>
            <Btn
              title={LoginSNS[0]}
              bg_color="rgb(252,229,30)"
              color="black"
            ></Btn>
            <Btn
              title={LoginSNS[1]}
              bg_color="rgb(24,119,242)"
              color="white"
            ></Btn>
            
          </div>

          <div className={styles.or_box}>
            <p className={styles.space_or}>
              <span>또는</span>
            </p>
          </div>

          <Input 
          type="email"
      name="id"
      placeholder="이메일 주소"
   ></Input>


      <Input
      type="password"
  name="pw"
  placeholder="비밀번호"
></Input>
         
          <div className={`${styles.snsBtn_box} ${styles.login_btn}`}>
            <button className={styles.snsBtn} type="submit">
              로그인
            </button>
          </div>

          <div className={styles.footer_box}>
            <div className={styles.join_box}>
              <div className={styles.textbox}>
                <a href="https://www.goodchoice.kr/user/join">
                  <span>비밀번호 재설정</span>
                </a>
              </div>
            </div>

            <div className={styles.join_box}>
              <div className={styles.textbox}>
                <a href="https://www.goodchoice.kr/user/join">
                  <span>회원가입</span>
                </a>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  )
}
