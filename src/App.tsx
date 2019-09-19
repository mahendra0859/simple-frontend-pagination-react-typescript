import React, { Dispatch, useState, useEffect, SetStateAction } from 'react';
import axios from "axios";
import './App.scss';
import { IAxiosResp, IPost } from "./constants";
import Post from "./componets/post";
import Pagination from "./componets/pagination";

const App: React.FC = () => {
  const [posts, setPosts]: [Array<IPost>, React.Dispatch<any>] = useState([]),
    [loading, setLoading]: [boolean, React.Dispatch<SetStateAction<any>>] = useState(false),
    [currentPage, setCurrentPage]: [number, Dispatch<SetStateAction<number>>] = useState(1),
    [postsPerPge]: [number, Dispatch<SetStateAction<number>>] = useState(10);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res: IAxiosResp = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    }
    fetchPost();
  }, [])
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPge,
    indexOfFirstPost = indexOfLastPost - postsPerPge,
    currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Post posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPge} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
