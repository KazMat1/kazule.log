import Link from "next/link";

export const TagList = ({ tag }) => {
  return (
    <div>
      <h3>これはタグによるブログの絞り込みです</h3>
      <ul>
        {tag.map((tag) => (
          // タグの取得
          <li key={tag.id}>
            <Link href={`/tag/${tag.id}`}>
              <a>{tag.name}</a>
            </Link>
          </li>
        ))}
      </ul> 
    </div>
  );
}
