import Link from "next/link";

import { client } from "../libs/client";
import { Pagination } from "../components/Pagination";
import { CategoryList } from "../components/CategoryList";
import { TagList } from "../components/TagList";
import { BlogList } from "../components/BlogList"

export default function Home({ blog, category, tag, totalCount }) {
  return (
    <div> 
      <h1>投稿一覧ページです</h1>
      <h3>これはタグによるブログの絞り込みです</h3>
      <TagList tag={tag} />
      <h3>これはカテゴリーによるブログの絞り込みです</h3>
      <CategoryList category={category} />
      <h3>これはブログの取得です</h3>
      <BlogList blog={blog} />
      <Pagination totalCount={totalCount} />
    </div>
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
