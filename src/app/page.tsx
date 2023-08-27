'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { Stack, Button } from '@mui/material'
import AbcIcon from '@mui/icons-material/Abc';
import DeleteIcon from '@mui/icons-material/Delete';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
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



export default function Home() {

  let [LoginSNS, setLoginSNS] = useState<string[]>([" 카카오톡으", " Google", " 네이버"]);





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
            <Btn
              title={LoginSNS[2]}
              bg_color="rgb(40,209,17)"
              color="white"
            ></Btn>
          </div>

          <div className={styles.or_box}>
            <p className={styles.space_or}>
              <span>또는</span>
            </p>
          </div>

          <div className={styles.login_input}>
            <input
              type="email"
              name="id"
              placeholder="이메일 주소"
              data-msg-required="이메일 주소를 입력해 주세요."
            />
          </div>
          <div className={styles.login_input}>
            <input
              type="password"
              name="pw"
              placeholder="비밀번호"
              required
              className="required"
              data-msg-required="비밀번호를 입력해 주세요."
            />
          </div>
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
