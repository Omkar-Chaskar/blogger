import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import BlogPost from '@/components/BlogPost'
import useAuth from '../hooks/useAuth';
import { getBlogPosts } from '../services/blogPost';
import { useRouter } from 'next/router'
import { useEffect } from 'react';


export default function Home({ posts, error }) {

  const router = useRouter();

  const {user, loading} = useAuth() ;

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Head>
        <title>Blogger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {posts && posts.map((post) => (
          <BlogPost post={post} key={post.id}/>
        ))}
      </main>
    </>
  )
}

export async function getServerSideProps(context) {

  try {
    const posts = await getBlogPosts();
    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts))
      }
    };
  } catch (error) {
    return {
      props: {
        error: {
          message: 'Failed to fetch blog posts'
        }
      }
    };
  }
}