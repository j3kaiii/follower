import React from 'react'
import Post from "./Post";
import styles from './Posts.module.css'

let posts = [
    {id: 0, postText: 'post number 1'},
    {id: 2, postText: 'another number 1'},
    {id: 3, postText: 'is anybody here?'},
    {id: 4, postText: 'mmm'},
    {id: 5, postText: 'ok'},
]

let postItems = posts.map((post) => <Post message={post.postText}/>)

const Posts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.newPost}>
                <input type='text' />
                <button>Send</button>
            </div>
            <div className={styles.myPosts}>
                my posts
            </div>
        </div>
    )
}

export default Posts