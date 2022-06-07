import Link from "next/link";
import Image from "next/image";

import { client } from "../libs/client";
import { Pagination } from "../components/Pagination";
import { CategoryList } from "../components/CategoryList";
import { TagList } from "../components/TagList";
import { BlogList } from "../components/BlogList";
// import { logo } from "../../public/img/logo.svg";
import { Header } from "../components/Header";
import IconLabelButtons from "../components/IconLabelButtons";


export default function Home({ blog, category, tag, totalCount }) {
  return (
    <>
      <Header />
      <IconLabelButtons />
      {/* <main>
        <div className="kv">
          <picture>
            <source media="(min-width: 600px)" srcSet="img/Mainvisual-pc.jpg" />
            <Image src="img/mainvisual-sp.jpg" layout="fill" objectFit="contain" alt="メインの画像です" />
          </picture>
        </div>
        <section className="container" id="about">
          <h2>About</h2>
          <p>
            これは、私のポートフォリオサイトです。様々なサイトやサービス、アプリが掲載されています（予定）。今はお粗末なコードばっかり書いていますが、いつか自分の書いたコードに胸を張れるようになりたいです。
          </p>
        </section>
        <div className="bg-primary">
          <section className="container" id="works">
            <h2>Works</h2>
            <ul className="gallery">
              <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-once="true">
                <Image src="img/works1.jpg" layout="fill" objectFit="contain" alt="メインの画像です" />
              </li>
              <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="200" data-aos-once="true">
                <Image src="img/works2.jpg" layout="fill" objectFit="contain" alt="メインの画像です" />
              </li>
              <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="400" data-aos-once="true">
                <Image src="img/works3.jpg" layout="fill" objectFit="contain" alt="メインの画像です" />
              </li>
              <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-once="true">
                <Image src="img/works4.jpg" layout="fill" objectFit="contain" alt="メインの画像です" />
              </li>
              <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="200" data-aos-once="true">
                <Image src="img/works5.jpg" layout="fill" objectFit="contain" alt="メインの画像です" />
              </li>
              <li data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="400" data-aos-once="true">
                <Image src="img/works6.jpg" layout="fill" objectFit="contain" alt="メインの画像です" />
              </li>
            </ul>
          </section>
        </div>
        <section className="container" id="skills">
          <h2>Skills</h2>
          <div className="chart__container">
            <div className="chart-field" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-once="true">
              <canvas id="frontEndSkillSets" width="600" height="600"></canvas>
            </div>
            <div className="chart-field" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="250" data-aos-once="true">
              <canvas id="backEndSkillSets" width="600" height="600"></canvas>
            </div>
          </div>
        </section>
        <div className="bg-primary">
          <section className="container" id="news">
            <h2>News</h2>
            <dl>
              <dt>2000.08.04</dt>
              <dd>沖縄県豊見城市にて誕生。元気な男の子</dd>
              <dt>2007.04.01</dt>
              <dd>テキスト〼テキスト■テキスト〼テキスト■23字</dd>
              <dt>2013.04.01</dt>
              <dd>那覇市立仲井真中学校入学。悪夢の始まり</dd>
              <dt>2016.04.01</dt>
              <dd>国立大学法人琉球大学入学。やっと人間に戻る。</dd>
              <dt>20XX.XX.XX</dt>
              <dd>ニートなる。</dd>
            </dl>
          </section>
        </div>
        <section className="container" id="contact">
          <h2>Contact</h2>
          <form action="" method="get">
            <div className="input-field">
              <label htmlFor="name"><Image src="img/name.svg" layout="fill" objectFit="contain" alt="メインの画像です" />お名前</label>
              <input type="text" id="name" />
            </div>
            <div className="input-field">
              <label htmlFor="email"><Image src="img/email.svg" layout="fill" objectFit="contain" alt="メインの画像です" />メールアドレス</label>
              <input type="email" id="email" />
            </div>
            <div className="input-field">
              <label htmlFor="content"><Image src="img/content.svg" layout="fill" objectFit="contain" alt="メインの画像です" />お問い合わせ内容</label>
              <textarea name="content" id="content" cols="30" rows="10"></textarea>
            </div>
            <div className="btn-submit">
              <button type="submit"><i className="fa-solid fa-paper-plane"></i>送信</button>
            </div>
          </form>
        </section>
      </main>
      <div className="scroll__container scroll-nav" id="scroll-nav">
        <a href="#top">
          <p>
            <Image className="top-arrow" src="./img/arrow_to_top.png" layout="fill" objectFit="contain" alt="メインの画像です" />
          </p>
        </a>
      </div>
      <footer className="bg-secondary">
        <div className="footer__container">
          <p>
            © 2022 Kazuki Matsudou.
          </p>
        </div>
      </footer> */}

      <h1>投稿一覧ページです</h1>
      <TagList tag={tag} />
      <CategoryList category={category} />
      <BlogList blog={blog} />
      <Pagination totalCount={totalCount} />
    </>  
  );
}
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  // コンテンツの取得
  const blogData = await client.get({ endpoint: "blog" });
  const categoryData = await client.get({ endpoint: "categories" });
  const tagData = await client.get({ endpoint: "tags" });
  // 絞り込みがうまくできていない
  const totalCountData = await client.get({ endpoint: "blog", queries: { limit: 20, offset: 0, limit: 5 } });
  return {
    props: {
      blog: blogData.contents,
      category: categoryData.contents,
      tag: tagData.contents,
      totalCount: totalCountData.totalCount,
    },
  };
};
