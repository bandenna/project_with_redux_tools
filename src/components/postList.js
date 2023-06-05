import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import Addpost from './addPost'
const Postlist = () => {
    const posts = useSelector(selectAllPosts)
    console.log(posts)
    return (
        <div className='conta'>
            <h1 className='c'>Posts</h1>
            {posts.map(post => (
                <article className='cardss m-3' key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>

                </article>
            ))}
        </div>
    )
}
export default Postlist