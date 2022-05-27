import React from 'react'
import QuestionItem from './QuestionItem'

function QuestionList({questionData, isLoaded, setOnQuestId, reaction}) {
    if (!isLoaded) return <h3>Loading...</h3>;
  return (
    <div className='p-2 my-2 ml-4'>
        {questionData.map(question=>(
             <QuestionItem questionData={question} key={question.id} setOnQuestId={setOnQuestId} reaction={reaction}/>
        ))}
    </div>
  )
}

export default QuestionList