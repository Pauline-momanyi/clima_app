import React, {useEffect, useState} from 'react'
import { db } from '../config/fbConfig'
import { collection, getDocs, addDoc } from "firebase/firestore"
//getDocs - all documents from a specific collection

function FbFetch() {
    const [posts, setPosts] = useState([])
    const postCollection = collection(db, "posts")

    const[title, setTitle] = useState()
    const[question, setQuestion] = useState()
    const[tags, setTags] = useState([]) 
    const[upvotes, setUpvotes] = useState(0)
    const[downvotes, setDownvotes] = useState(0)
    const[comments, setComments] = useState([])

    const createPost = async()=>{
        await addDoc(postCollection, {
            title: title, 
            question: question, 
            tags:tags,
            upvotes: upvotes,
            downvotes: downvotes,
            comments: comments
        })
        console.log('hey');

    }

    useEffect(()=>{
        const getPost = async()=>{
            const fetchedPosts = await getDocs(postCollection)
            console.log(fetchedPosts.docs);
            setPosts(fetchedPosts.docs.map((doc)=>({...doc.data(), id:doc.id})))

        }
        // console.log(posts);
       
        getPost()
    }, [])
    console.log(posts);

  return (
    <div className='flex flex-col w-64 p-2 m-2 space-y-2'>
        <input type="text" placeholder='title' className='border-2 border-red-500' onChange={e=>setTitle(e.target.value)}/>
        <input type="text" placeholder='question' className='border-2 border-red-500' onChange={e=>setQuestion(e.target.value)}/>
        <input type="text" placeholder='tags' className='border-2 border-red-500' onChange={e=>setTags(e.target.value.split(" "))}/>
        <button onClick={createPost}>Create Post</button>
    </div>
  )
}

export default FbFetch
apiKey: "AIzaSyAPwNGHlTXyNey-rEIYN8ok-o9PebnTH00",
  authDomain: "phase2-mq.firebaseapp.com",
  projectId: "phase2-mq",
  storageBucket: "phase2-mq.appspot.com",
  messagingSenderId: "983472936187",
  appId: "1:983472936187:web:2cd99c46456165ae034c5e",
  measurementId: "G-6093LY2M5N"