import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog, category, tag }) {
  return (
    <div> 
      <p>これはタグによるブログの絞り込みです</p>
      <ul>
        {tag.map((tag) => (
          // カテゴリの取得
          <li key={tag.id}>
            <Link href={`/tag/${tag.id}`}>
              <a>{tag.name}</a>
            </Link>
          </li>
        ))}
      </ul> 
      <p>これはカテゴリーによるブログの絞り込みです</p>
      <ul>
        {category.map((category) => (
          // カテゴリの取得
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul> 
      <p>これはブログの取得です</p>
      <ul>
        {blog.map((blog) => (
          // ブログの出力
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  // コンテンツの取得
  const blogData = await client.get({ endpoint: "blog" });
  const categoryData = await client.get({ endpoint: "categories" });
  const tagData = await client.get({ endpoint: "tags" });
  return {
    props: {
      blog: blogData.contents,
      category: categoryData.contents,
      tag: tagData.contents,
    },
  };
};
