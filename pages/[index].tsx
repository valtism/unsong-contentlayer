import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext,
} from "next";
import { allPosts } from "contentlayer/generated";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Layout from "components/layout";

allPosts.sort((a, b) => a.number - b.number);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map((_, index) => `/${index}`),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const index = Number(context.params?.index);
  return {
    props: {
      post: allPosts[index],
      postCount: allPosts.length,
    },
  };
};

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
  postCount,
}) => {
  const postIndex = usePostIndex();
  const linkClass =
    "border border-gray-300 hover:border-gray-500 dark:border-gray-600 dark:hover:border-gray-400 rounded p-2 text-center hover:contrast-200";
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: post.body.html }}
          className="font-lora prose-h1:font-pt-serif"
        />
        <nav className="grid grid-cols-2 gap-6 py-12 not-prose">
          {postIndex !== 0 ? (
            <Link href={`/${postIndex - 1}`}>
              <a className={linkClass}>Previous</a>
            </Link>
          ) : (
            <div />
          )}
          {postIndex + 1 < postCount && (
            <Link href={`/${postIndex + 1}`}>
              <a className={linkClass}>Next</a>
            </Link>
          )}
        </nav>
      </div>
    </Layout>
  );
};

function usePostIndex() {
  const router = useRouter();
  const { index } = router.query;
  return Number(index);
}

export default Post;
