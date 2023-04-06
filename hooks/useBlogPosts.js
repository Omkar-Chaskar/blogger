import { useState, useEffect } from 'react';

const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getSinglePost = async (postId) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/posts/${postId}`);
      const data = await response.json();
      setSinglePost(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const createPost = async (postData) => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, data]);
    } catch (error) {
      setError(error);
    }
  };

  const updatePost = async (postId, postData) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      const data = await response.json();
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === data.id ? data : post))
      );
    } catch (error) {
      setError(error);
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      } else {
        throw new Error('Failed to delete post');
      }
    } catch (error) {
      setError(error);
    }
  };

  return { posts, loading, error, createPost, updatePost, deletePost, singlePost, getSinglePost };
};

export default useBlogPosts;
