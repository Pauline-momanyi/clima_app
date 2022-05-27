import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import QuestionDetails from './QuestionDetails'

export const QuestContext = React.createContext()


// const handleCurrQuest = (questionData)=>{
//   return questionData;
//   console.log(questionData);
// }

function QuestionItem({questionData, setOnQuestId, reaction}) {
    const tags = questionData.tags.map(tag=>(`#${tag} `))
    const comments =  questionData.comments.map(acomment=>(acomment.comment))

  //  const updateReaction = async(id, reaction)=>{
  //    console.log(id);

  //  }

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
            {questionData.upvotes}<FontAwesomeIcon icon={faThumbsUp} className='mr-3' onClick={()=>reaction(questionData.id, questionData.upvotes)}></FontAwesomeIcon>
            {questionData.downvotes}<FontAwesomeIcon icon={faThumbsDown} className='' onClick={()=>reaction(questionData.id, questionData.downvotes)}></FontAwesomeIcon>
            
            
        </div>   
    </div>
    
  )
}

export default QuestionItem