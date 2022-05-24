import React, { useEffect, useState } from 'react'

function Fetch() {

    const [data, setData] = useState([])
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'stack-overflow.p.rapidapi.com',
                'X-RapidAPI-Key': 'a37da41679msh85c390529de135dp134b22jsn8fe66d12cf5d'
            }
        };
        
        fetch('https://stack-overflow.p.rapidapi.com/?q=react&size=5', options)
            .then(response => response.json())
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })

            .catch(err => console.error(err));
    },[])

  return (
    <div>
        {data.map(quest=>{
            let doc = new DOMParser().parseFromString(quest.bod, "application/xhtml+xml");
            // let res = quest.body.slice(1,quest.body.length - 1)
            return <p>{doc.firstChild.innerHTML}</p>
})}
    </div>
  )
}

export default Fetch