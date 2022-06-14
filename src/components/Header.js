import Image from "next/image";
import Link from "next/link";

import styles from "../styles/components/Header.module.scss";

import github  from "../../public/img/github-icon.png";

export const Header = () => {
  return (
    <header className={styles.header__container}>
        <h1 className={styles.nav__brand}>
          <Link href="#">
            <a>
              {/* <Image src={logo} layout="fill" objectFit="contain" alt="ロゴ" /> */}
              <p>kazule.log</p>
            </a>
          </Link>
        </h1>
        <nav className={styles.nav__container}>
          <ul>
            <li className={styles.nav__list}>
              <Link href="#about">
                <a className={styles.nav__item01}>About</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className={styles.nav__list}>
              <Link  href="#works">
                <a className={styles.nav__item02}>Works</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className={styles.nav__list}>
              <Link href="#skills">
                <a className={styles.nav__item03}>Skills</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className={styles.nav__list}>
              <Link href="#news">
                <a className={styles.nav__item04}>News</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className={styles.nav__list}>
              <Link href="#contact">
                <a className={styles.nav__item05}>Contact</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li className={styles.nav__list}>
              <Link href="https://github.com/KazMat1">
                <a>
                  <div className={styles.icon__container}>
                    <Image 
                      src={github} 
                      layout={"responsive"}
                      objectFit="contain" 
                      alt="ギットハブのアイコン" 
                    />
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}
