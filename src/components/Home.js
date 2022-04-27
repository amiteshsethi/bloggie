import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { firestore } from "../firebase";

function Home() {
    const [post, setPosts] = useState([])

    useEffect(() => {
        firestore.collection('posts').get().then((snapshot) => {
            const posts = snapshot.docs.map((docs) => {
                return {
                    id: docs.id,
                    ...docs.data()
                }
            })
            console.log('posts', posts)
            setPosts(posts)
        })
    }, [])


    return (
        <div className="home">
        <h1> Welcome to Bloggie </h1>

        {post.map( (post,index) => (
            <div className="post" key={`post-${index}`}>
                <Link to={`/post/${post.id}`}>
                    <h3>{post.title}</h3>
                </Link>

                <p>{post.subTitle}</p>
            </div>

        ))}
    </div>
    )
}

export default Home