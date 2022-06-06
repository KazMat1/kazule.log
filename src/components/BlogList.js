import Link from "next/link";

export const BlogList = ({ blog }) => {
  return (
    <div>
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
