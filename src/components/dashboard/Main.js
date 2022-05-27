import React, {useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import Categories from "./Categories";
import Header from "./Header";
import QuestionList from "./QuestionList";
import { db, auth } from '../../config/fbConfig'
import { collection, getDocs } from "firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth'

function Main({user,loading, data, setData, search }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const postCollection = collection(db, "posts")
    // const[read, setRead] = useState(true)
  let searchedQuery = data.filter(query=>(
    query.title.toLowerCase().includes(search.toLowerCase())
    // query.title.toLowerCase().includes(search.toLowerCase())
  ))
  // console.log(searchedQuery);
  useEffect(()=>{
    if(data.length>1){
    console.log(data)
    }},[])

    useEffect(()=>{
        const getPost = async()=>{
            const fetchedPosts = await getDocs(postCollection)
            // console.log(fetchedPosts.docs);
            setData(fetchedPosts.docs.map((doc)=>({...doc.data(), id:doc.id})))
            setIsLoaded(true)
        }
        // console.log(posts);
       
        getPost()
    }, [])
    // console.log(data);

  const [currentlyLoggedinUser] = useAuthState(auth);
  useEffect(()=>{
    // console.log(currentlyLoggedinUser.displayName);
  },[])

  if (currentlyLoggedinUser){
    console.log(currentlyLoggedinUser.displayName)
    }
    

    const handleReaction = async(id, reaction)=>{
      console.log(id);
      console.log(reaction);
      // const newFields = {upvotes: upvotes+1}
    }


    if(!user && !loading){
      return <Redirect to='/signup'/>
    }

  return (
    <main>
     {user && !loading ?
      <div className="sm:mx-10">
        <div className="flex mt-2 mx-2">
          <Categories data={data}/>
          <div>
            <Header />
            <QuestionList questionData={searchedQuery} isLoaded={isLoaded} reaction={handleReaction}/>
          </div>
        </div>
      </div> : null}
    </main>
  );
}


export default Main;
