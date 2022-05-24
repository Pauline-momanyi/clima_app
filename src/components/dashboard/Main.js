import React, {useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import Categories from "./Categories";
import Header from "./Header";
import QuestionList from "./QuestionList";

function Main({user,loading}) {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(()=>{
        fetch('http://localhost:3000/questions?_embed=comments')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
            setIsLoaded(true)
        })
        .catch(err=>console.log(err.message))
    },[])


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
