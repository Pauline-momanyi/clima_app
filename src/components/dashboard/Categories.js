import React from 'react'

function Categories({data}) {
  // console.log(data);
 
  const tags = data.map(data=> data.tags)


  return (
    <div className='border border-orange-primary mr-4 p-3 h-full'>
        <h2 className='font-semibold'>Popular Tags</h2>   
        
          {tags.map((tag, index)=>(
            <ul key={index}>{tag.map(itag=>(
              <li key={itag}>{itag}</li>
              ))}
            </ul>
          
          )
          )}          
         
        
    </div>
  )
}

export default Categories