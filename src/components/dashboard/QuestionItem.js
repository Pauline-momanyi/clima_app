import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"

function QuestionItem() {
  return (
    <>
        <div className="bg-gray-primary my-2">
            <h3>Lorem ipsum question</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, labore? <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, mollitia!</p>
        </div>
        <div>
            <p className='bg-orange-50 max-w-fit px-1 italic text-xs'>#python</p>
            <FontAwesomeIcon icon={faComments} className='mx-3'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faThumbsUp} className='mx-3'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faThumbsDown} className='mx-3'></FontAwesomeIcon>
        </div>
        
    </>
  )
}

export default QuestionItem