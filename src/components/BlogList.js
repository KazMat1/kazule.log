import Link from "next/link";

export const BlogList = ({ blog }) => {
  return (
    <div>
      <h3>これはブログの取得です</h3>
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
