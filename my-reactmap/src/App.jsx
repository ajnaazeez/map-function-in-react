import Blog from "./components/blog";


export default function App() {
  const blogs = [
    {title:"my blog 1",content:"my blog 1 content"},
    {title:"my blog 2",content:"my blog 2 content"},
    {title:"my blog 3",content:"my blog 3 content"},
  ]
  
  return (<div>
    <h1>Blogs</h1>
    <hr />
    {blogs.map(blog =>(
      <Blog title={blog.title} content={blog.content} />
    ))}

  </div>);
}