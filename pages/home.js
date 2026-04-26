import Link from "next/link";
import ReadMore from "../components/layout";
import Layout from "../components/layout";
function Home() {
  return (
    <Layout>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog/hello-world">Blog Post</Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            onNavigate={(e) => {
              // Only executes during SPA navigation
              console.log('Navigating...')

              // Optionally prevent navigation
              e.preventDefault()
            }}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/posts">Link to Post</Link>
        </li>
      </ul>
    </Layout>
  );
}

export default Home;
