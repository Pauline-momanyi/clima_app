import React from 'react'

function Categories({data}) {
  // console.log(data);
  const tagArray = data.map(data=> data.tags)
  const tags = tagArray.map(tag=>tag)
  console.log(tags);
  

  return (
    <div className='border border-orange-primary mr-4 p-3 h-full'>
        <h2 className='font-semibold'>Popular Tags</h2>      
        
          {tags.map(tag=>(
            <ul>{tag.map(itag=>(
              <li>{itag}</li>
              ))}
            </ul>
          
          )
          )}          
         
        
    </div>
  )
}

export default Categories