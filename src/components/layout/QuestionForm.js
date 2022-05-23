import React, {useState} from 'react'

function QuestionForm() {
    const [formData, setFormData] = useState({
        title: "",
        question: "",
    })

    function handleNewQuestion(e){
        // console.log(e.target.value);
        setFormData({...formData, [e.target.id]:e.target.value})
    }

    function handleSubmitQuestion(e){
        e.preventDefault()
        // console.log(formData);
        fetch('http://localhost:3000/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error.message))

        // setFormData({...formData, [e.target.id]:""})
    }

  return (
    <div>
        <h2 className='text-2xl font-semibold flex justify-center my-3'>Post  a Public Question</h2>
        <div className="shadow-md m-3 flex justify-center">
            <form onSubmit={handleSubmitQuestion} className='space-y-2 p-3'>
                <div>
                    <label htmlFor="title" className='text-xl font-medium'>Title</label>
                    <p className='italic text-gray-500'>Be specific here</p>
                    <input type="text" id='title' placeholder='' value={formData.title} onChange={handleNewQuestion} className='ring-1 ring-gray-300 rounded-md focus:ring-2 outline-none focus:ring-slate-primary w-full'/>
                </div>
                <div>
                    <label htmlFor="question" className='text-xl font-medium'>Body</label>
                    <p className='italic text-gray-500'>Include in-depth information about your question</p>
                    <textarea name="" id="question" cols="30" rows="8" value={formData.question} onChange={handleNewQuestion} className='ring-1 ring-gray-300 rounded-md focus:ring-2 outline-none focus:ring-slate-primary w-full'></textarea>
                </div>
                <div>
                    <label htmlFor="tags" className='text-xl font-medium'>Tags</label>
                    <p className='italic text-gray-500'>Enter tags separated by space</p>
                    <input type="text" id='tags' placeholder='e.g. js url api' className='ring-1 ring-gray-300 rounded-md focus:ring-2 outline-none focus:ring-slate-primary w-full'/>
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