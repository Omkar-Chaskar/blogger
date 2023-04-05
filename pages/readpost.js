import React from 'react';
import styles from '@/styles/Home.module.css';

function ReadBlog() {
  return (
    <div className={styles.main}>
      <div class="max-w-auto m-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h3>
        <p class="my-6 font-normal text-gray-700 dark:text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </div>
  )
}

export default ReadBlog