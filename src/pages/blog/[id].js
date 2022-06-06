// 記事詳細ページ
import { client } from "../../libs/client"
import { renderToc } from "../../libs/render-toc";
import styles from '../../styles/Home.module.scss';
import { TableOfContents } from "../../components/TableOfComponent";

export default function BlogId({ blog }) {
  // ブログの本文がない場合
  if(!blog.body) {
    return (
      <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <p>{blog.category && `${blog.category.name}`}</p>
      {
        blog.tags && blog.tags.map(tag =>(
        <p key={tag.id}>{`${tag.name}`}</p>
        ))
      }
      <div className={styles.post}>ブログの本文がありません</div>
      <div/>
    </main>
    );
  }
  // ブログの本文がある場合
  const toc = renderToc(blog.body);
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <p>{blog.category && `${blog.category.name}`}</p>
      {
        blog.tags && blog.tags.map(tag =>(
        <p key={tag.id}>{`${tag.name}`}</p>
        ))
      }
      {blog.toc_visible && (
        <TableOfContents toc={toc} />
      )}
      <div 
        dangerouslySetInnerHTML={{
          __html:`${blog.body}`,
        }}
        className={styles.post}
      />
    </main>
  );
}
// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
