import React from "react";
import styles from '@/styles/Home.module.css'
import dynamic from "next/dynamic";

const MyEditor = dynamic(()=> import('../components/DraftEditor') ,
{ ssr : false })

function CreatePost() {
    
  return (
    <>
        <div className="flex justify-end items-center mx-auto max-w-screen-xl p-4">
                    <div className="flex items-center">
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create Post</button>
                    </div>
        </div>
        <div className={styles.main}>
            <div className="w-full max-w-xl m-6 p-6 bg-gray-600 border border-gray-200 rounded-lg shadow ">
                <div className="mb-6">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" id="base-input" className="bg-gray-900 border border-gray-50 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                    <MyEditor />
                </div>
            
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="post_avatar">Upload Image</label>
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="post_avatar" type="file" />
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A picture is useful to wirte beutiful blogs.</div>
            </div>
        </div>
    </>
  )
}

export default CreatePost