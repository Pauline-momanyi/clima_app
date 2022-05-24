import React, {useEffect, useState} from 'react'
import { db } from '../config/fbConfig'
import { collection, getDocs } from "firebase/firestore"
//getDocs - all documents from a specific collection

function FbFetch() {
    const [posts, setPosts] = useState([])
    const postCollection = collection(db, "posts")

    useEffect(()=>{
        const getPost = async()=>{
            const fetchedPosts = await getDocs(postCollection)
            console.log(fetchedPosts.docs);
            setPosts(fetchedPosts.docs.map((doc)=>({...doc.data(), id:doc.id})))

        }
        console.log(posts);
        console.log(posts);
        getPost()
    }, [])

  return (
    <div>

    </div>
  )
}

export default FbFetch