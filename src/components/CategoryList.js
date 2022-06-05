import Router from "next/router";
import Link from "next/link";

export const CategoryList = ({ category }) => {
  return (
    <div>
      <h3>これはカテゴリーによるブログの絞り込みです</h3>
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
    </div>
  );
}
