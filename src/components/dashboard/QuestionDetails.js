import React, {useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'
import { auth, db} from '../../config/fbConfig'
import {arrayUnion, doc, onSnapshot, updateDoc} from 'firebase/firestore'

function QuestionDetails({data, questionData}) {
  
    const { id } = useParams();
    const [comment, setComment] = useState("")
    // const [comments, setComments] = useState([])
    const commentRef = doc(db, "posts", id)


    const currentQuestion = data.filter(question=>question.id === id) 
    console.log(currentQuestion);

    // useEffect(() => {
    //   const docRef = doc(db, "posts", id);
    //   onSnapshot(docRef, (snapshot) => {
    //     setComments(snapshot.data().comments);
    //   });
    // }, []);

   
    function handleNewComment(e){
      e.preventDefault()
      console.log(comment);

          updateDoc(commentRef, {
            comments: arrayUnion({
              comment: comment,
              upvotes: 0,
              downvotes: 0,
            }),
          }).then(() => {
            setComment("");
          });
        }
  

    let comm = currentQuestion.map(ques=>ques.comments)
    console.log(currentQuestion[0].comments);
    // console.log(comm);
    // setnew()
    
  return (
    <div className="bg-gray-primary my-2 p-4 rounded">
      {/* QuestionDetails {id}     */}

      <p className='font-bold'>{currentQuestion[0].title} </p>  
      <p className='text-sm'><span className='font-bold text-2xl mx-2'>Q</span>{currentQuestion[0].question} </p>  
      <p className='font-bold flex justify-center text-orange-primary'>Comments</p>

      {currentQuestion[0].comments.map((comm,index)=>(
        <div key={index} className='text-sm p-2 outline m-2'>
        <p>{comm.comment}</p>
        <div className='flex space-x-2 ml-4'>
        <p className='flex'>{comm.upvotes}<FaThumbsUp/></p>
        <p className='flex'>{comm.downvotes}<FaThumbsDown/></p>
        </div>
        </div>
        
      ))}  
       
      <form  className='flex flex-col justify-center items-center' onSubmit={handleNewComment}>
        <p className='font-bold'>Have a different Answer?</p>
        <textarea name="" id="newComment" cols="30" rows="5" className='w-5/6' value={comment} onChange={(e)=>
          {setComment(e.target.value)
            console.log(comment);
          }}></textarea>
        <button className="bg-slate-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2" type='submit'>SUBMIT</button>
      </form>
    </div>    
  )
}

export default QuestionDetails