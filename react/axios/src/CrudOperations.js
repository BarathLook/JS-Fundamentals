// CrudOperations.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudOperations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3030/posts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPost = async () => {
    try {
      await axios.post('http://localhost:3030/posts', newPost);
      setNewPost({ title: '', body: '' });
      fetchData();
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const handleUpdatePost = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:3030/posts/${id}`, updatedData);
      fetchData();
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/posts/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <h2>CRUD Operations</h2>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
        </label>
        <label>
          Body:
          <input
            type="text"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
        </label>
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button onClick={() => handleUpdatePost(post.id, { title: 'Updated Title', body: 'Updated Body' })}>
                    Update
                  </button>
                  <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CrudOperations;
