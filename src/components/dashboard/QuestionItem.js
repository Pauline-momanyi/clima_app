import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"

function QuestionItem() {
  return (
    <>
        <div className="bg-gray-primary my-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, labore? <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, mollitia!
        </div>
        <div>
            <FontAwesomeIcon icon={faComments} className='mx-3'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faThumbsUp} className='mx-3'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faThumbsDown} className='mx-3'></FontAwesomeIcon>
        </div>
        
    </>
  )
}

export default QuestionItem