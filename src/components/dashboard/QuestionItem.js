import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

function QuestionItem({questionData}) {
    const tags = questionData.tags.map(tag=>(`#${tag} `))
    const comments =  questionData.comments.map(acomment=>(acomment.comment))

    // function handleQuestion(data){
    //   console.log(data.comments);
    //   {data.comments.map(comment=>{
    //     console.log(comment.comment);
    //   })}
    // }
    // onClick={()=>handleQuestion(questionData)}

  return (
    <div className='shadow-md p-2'>
        <div className="bg-gray-primary my-2 p-1 rounded">
          <Link to={`/question/${questionData.id}`}>
            <h3 className='font-bold'>{questionData.title}</h3>
          </Link>
           
            <p className='text-sm'>{questionData.question}</p>
        </div>
        <div>
            <p className='bg-orange-50 max-w-fit px-1 italic text-xs text-orange-primary'>{tags}</p>
            {questionData.comments.length}<FontAwesomeIcon icon={faComments} className='mr-3'></FontAwesomeIcon>
            {questionData.upvotes}<FontAwesomeIcon icon={faThumbsUp} className='mr-3'></FontAwesomeIcon>
            {questionData.downvotes}<FontAwesomeIcon icon={faThumbsDown} className=''></FontAwesomeIcon>
            
            
        </div>   
    </div>
  )
}

export default QuestionItem