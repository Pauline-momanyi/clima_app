import React, {useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import Categories from "./Categories";
import Header from "./Header";
import QuestionList from "./QuestionList";
import { db } from '../../config/fbConfig'
import { collection, getDocs, addDoc } from "firebase/firestore"

function Main({user,loading}) {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    
    // useEffect(()=>{
    //     fetch('http://localhost:3000/questions?_embed=comments')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data)
    //         setIsLoaded(true)
    //     })
    //     .catch(err=>console.log(err.message))
    // },[])
    // const [posts, setPosts] = useState([])
    const postCollection = collection(db, "posts")

    // const[title, setTitle] = useState()
    // const[question, setQuestion] = useState()
    // const[tags, setTags] = useState([]) 
    // const[upvotes, setUpvotes] = useState(0)
    // const[downvotes, setDownvotes] = useState(0)
    // const[comments, setComments] = useState([])

    // const createPost = async()=>{
    //     await addDoc(postCollection, {
    //         title: title, 
    //         question: question, 
    //         tags:tags,
    //         upvotes: upvotes,
    //         downvotes: downvotes,
    //         comments: comments
    //     })
    //     console.log('hey');

    // }

    useEffect(()=>{
        const getPost = async()=>{
            const fetchedPosts = await getDocs(postCollection)
            console.log(fetchedPosts.docs);
            setData(fetchedPosts.docs.map((doc)=>({...doc.data(), id:doc.id})))
            setIsLoaded(true)

        }
        // console.log(posts);
       
        getPost()
    }, [])
    console.log(data);


    if(!user && !loading){
      return <Redirect to='/signup'/>
    }

  return (
    <main>
     {user && !loading ?
      <div className="sm:mx-10">
        <div className="flex mt-2 mx-2">
          <Categories />
          <div>
            <Header />
            <QuestionList questionData={data} isLoaded={isLoaded}/>
          </div>
        </div>
      </div> : null}
    </main>
  );
}

export default Main;


  // useEffect(()=>{
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Host': 'stack-overflow.p.rapidapi.com',
    //             'X-RapidAPI-Key': 'a37da41679msh85c390529de135dp134b22jsn8fe66d12cf5d'
    //         }
    //     };
        
    //     fetch('https://stack-overflow.p.rapidapi.com/?q=Javascript', options)
    //         .then(response => response.json())
    //         .then(response => {
    //             setData(response.data)
    //             setIsLoaded(true)
    //         })
                
    //         .catch(err => console.error(err.message));
    // },[isfetch])
