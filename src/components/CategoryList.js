import Router from "next/router";
import Link from "next/link";

export const CategoryList = ({ category }) => {
  return (
    <div>
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
