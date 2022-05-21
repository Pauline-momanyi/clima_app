import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"

function QuestionItem({questionData}) {
    const tags = questionData.tags.map(ntag=>(`#${ntag.tag}`))

  return (
    <div className='shadow-md p-2'>
        <div className="bg-gray-primary my-2 p-1 rounded">
            <h3 className='font-bold'>{questionData.title}</h3>
            <p className='text-sm'>{questionData.question}</p>
        </div>
        <div>
            <p className='bg-orange-50 max-w-fit px-1 italic text-xs text-orange-primary'>{tags}</p>
            <FontAwesomeIcon icon={faComments} className='mx-3'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faThumbsUp} className='mx-3'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faThumbsDown} className='mx-3'></FontAwesomeIcon>
            
        </div>   
    </div>
  )
}

export default QuestionItem