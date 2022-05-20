import React from 'react'
import QuestionItem from './QuestionItem'

function QuestionList({questonData, isLoaded}) {
    if (!isLoaded) return <h3>Loading...</h3>;
  return (
    <div className='shadow-md p-2 my-2 ml-4'>
        <QuestionItem/>
    </div>
  )
}

export default QuestionList