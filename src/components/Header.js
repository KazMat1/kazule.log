import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.scss"
import github  from "../../public/img/github-icon.png";

export const Header = () => {
  return (
    <header className="header__container">
        <h1>
          <a href="">
            {/* <Image src={logo} layout="fill" objectFit="contain" alt="ロゴ" /> */}
            <p>kazule.log</p>
          </a>
        </h1>
        <nav>
          <ul className="">
            <li className="">
              <a className="nav--item01" href="#about">About</a>
            </li>
          </ul>
          <ul className="">
            <li className="">
              <a className="nav--item02" href="#works">Works</a>
            </li>
          </ul>
          <ul className="">
            <li className="">
              <a className="nav--item03"  href="#skills">Skills</a>
            </li>
          </ul>
          <ul className="">
            <li className="">
              <a className="nav--item04"  href="#news">News</a>
            </li>
          </ul>
          <ul className="">
            <li className="">
              <a className="nav--item05"  href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="">
            <li className="">
              <a>
                <Image src={github} layout="fill" objectFit="contain" alt="ギットハブのアイコン" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
  );
}
