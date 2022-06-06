import Link from "next/link";

export const TagList = ({ tag }) => {
  return (
    <div>
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
