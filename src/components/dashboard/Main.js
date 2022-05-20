import React, {useState, useEffect} from "react";
import Nav from "../layout/Nav";
import Categories from "./Categories";
import Header from "./Header";
import QuestionList from "./QuestionList";

function Main() {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'stack-overflow.p.rapidapi.com',
                'X-RapidAPI-Key': 'a37da41679msh85c390529de135dp134b22jsn8fe66d12cf5d'
            }
        };
        
        fetch('https://stack-overflow.p.rapidapi.com/?q=Javascript&size=5', options)
            .then(response => response.json())
            .then(response => {
                setData(response.data)
                setIsLoaded(true)
            })
                
            .catch(err => console.error(err.message));
    },[])

  return (
    <main>
      <div className="sm:mx-10">
        <Nav />
        <div className="flex mt-2 mx-2">
          <Categories />
          <div>
            <Header />
            <QuestionList questonData={data} isLoaded={isLoaded}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
