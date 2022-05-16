import type { NextPage, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import Layout from "components/layout";

allPosts.sort((a, b) => a.number - b.number);

export async function getStaticProps() {
  return {
    props: {
      posts: allPosts.map((post, index) => ({
        title: post.title,
        href: `/${index}`,
        index: index,
      })),
    },
  };
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Layout>
      <ul className="list-none pl-0 pb-12">
        {posts.map((post) => (
          <li key={post.index}>
            <Link href={post.href}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
