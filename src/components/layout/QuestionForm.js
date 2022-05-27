import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../../config/fbConfig'

function QuestionForm() {
    const postCollection = collection(db, "posts")
  
    const[title, setTitle] = useState("")
    const[question, setQuestion] = useState("")
    const[tags, setTags] = useState([]) 
    const[upvotes, setUpvotes] = useState(0)
    const[downvotes, setDownvotes] = useState(0)
    const[comments, setComments] = useState([])

    const createPost = async(e)=>{
        e.preventDefault()
        await addDoc(postCollection, {
            title: title, 
            question: question, 
            tags:tags,
            upvotes: upvotes,
            downvotes: downvotes,
            comments: comments
        })
        console.log('hey');

    }

  return (
    <div>
        <h2 className='text-2xl font-semibold flex justify-center my-3'>Post  a Public Question</h2>
        <div className="shadow-md m-3 flex justify-center">
            <form onSubmit={createPost} className='space-y-2 p-3'>
                <div>
                    <label htmlFor="title" className='text-xl font-medium'>Title</label>
                    <p className='italic text-gray-500'>Be specific here</p>
                    <input type="text" id='title' placeholder='' value={title} onChange={e=>setTitle(e.target.value)} className='ring-1 ring-gray-300 rounded-md focus:ring-2 outline-none focus:ring-slate-primary w-full'/>
                </div>
                <div>
                    <label htmlFor="question" className='text-xl font-medium'>Body</label>
                    <p className='italic text-gray-500'>Include in-depth information about your question</p>
                    <textarea name="" id="question" cols="30" rows="8" value={question} onChange={e=>setQuestion(e.target.value)}  className='ring-1 ring-gray-300 rounded-md focus:ring-2 outline-none focus:ring-slate-primary w-full'></textarea>
                </div>
                <div>
                    <label htmlFor="tags" className='text-xl font-medium'>Tags</label>
                    <p className='italic text-gray-500'>Enter tags separated by space</p>
                    <input type="text" id='tags' placeholder='e.g. js url api' className='ring-1 ring-gray-300 rounded-md focus:ring-2 outline-none focus:ring-slate-primary w-full' value={tags} onChange={e=>setTags(e.target.value.split(" "))} />
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className='bg-slate-primary text-white mb-1 rounded p-2'>POST</button>
                </div>          
            </form>
        </div>
    </div>
  )
}

export default QuestionForm
