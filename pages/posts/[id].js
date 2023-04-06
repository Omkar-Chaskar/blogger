import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';

export default function ReadPost({ post }) {
  const router = useRouter();
  const { title, content, image } = post;
  const [postData, setPostData] = useState(post);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.main}>
      <div className="max-w-auto m-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
        <img src={image} alt={title} className="my-6 w-full h-auto object-cover" />
        <p className="my-6 font-normal text-gray-700 dark:text-white">{content}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/post/${id}`);
  const post = await res.json();
  return { props: { post } };
}
