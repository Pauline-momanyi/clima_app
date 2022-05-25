import React from 'react'
import { useParams } from 'react-router-dom'

function QuestionDetails() {
    const { id } = useParams();
  return (
    <div>QuestionDetails {id}</div>
  )
}

export default QuestionDetails