import { useState } from "react";
import '../App.css'
import { nanoid } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
const Addpost = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState()


    const savePost = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
            setTitle('')
            setContent('')

        }
    }
    const fortitle = (event) => {
        setTitle(event.target.value)
    }

    const forcontent = (event) => {
        setContent(event.target.value)
    }
    return (
        <div className="container">
            <form >
                <h1 className="c p-5">Add post</h1>
                <div className="d-flex mb-4">
                    <label className="mr-5">Title :</label>
                    <input type="text" className="for-input" placeholder="Enter title" onChange={fortitle} />
                </div>
                <div className="d-flex">
                    <label className="mr-3">Content :
                    </label>
                    <textarea className="for-area" cols={55} rows={4} placeholder="Enter Content" onChange={forcontent} />
                </div>
                <button onClick={savePost} type="button" className="mt-4 btn btn-primary">Save Post</button>

            </form>
        </div>
    )
}
export default Addpost