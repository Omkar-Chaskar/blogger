import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function DraftEditor() {

    const [value, setValue] = useState('');

    return <ReactQuill theme="snow" value={value} onChange={setValue} rows="4"
    className="bg-gray-50 border border-gray-50 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />;
}

export default DraftEditor