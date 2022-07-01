import React, {useState, useEffect} from 'react'
import Newentry from './Newentry';

function Nurse() {
    const [patients, setPatients] = useState([]);
    const [showEntry, setShowEntry] = useState(false)
    useEffect(() => {
      const id = JSON.parse(localStorage.getItem('nid'))
        fetch(`https://climarubyapi.herokuapp.com/nurse_scope/${id}`)
        .then((res) => res.json())
        .then((data) => {
        setPatients(() => data);
        console.log(data);
    });
}, []);

function handleDelete(id){
    console.log(id);
    fetch(`https://climarubyapi.herokuapp.com/details/${id}`,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        
    })    
}

  function handleNewEntry(){
    console.log('new');
    setShowEntry(current => !current);
  }

  return (
    

    <div className="bg-gray-backg">
       <button onClick={handleNewEntry} className="bg-slate-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline items-center">NEW ENTRY</button>
       <br/>
       <hr/> 

       {showEntry === true && <Newentry />}
       
    {typeof patients !== "undefined" && patients.length>0 ? (    
     
      <div> 
        {/* <Newentry docid = {patients[0].doctor_id}/> */}
        {/* {showEntry === true && <Newentry docid={patients[0].doctor_id}/>}        */}
        <div className='flex justify-between ml-5'>
            <h2>Recent Entries</h2>
        </div>                     
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Patient_name
                </th>
                <th scope="col" className="px-6 py-3">
                  Heart Rate
                </th>
                <th scope="col" className="px-6 py-3">
                  Temperature
                </th>
                <th scope="col" className="px-6 py-3">
                  Pressure
                </th>
                <th scope="col" className="px-6 py-3">
                  Doctor Review
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {patients.map(pat=>(
            <tbody key={pat.id}>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {pat.created_at}
                </th>
                <td className="px-6 py-4">{pat.patient.name}</td>
                <td className="px-6 py-4">{pat.heartrate}</td>
                <td className="px-6 py-4">{pat.temperature}</td>
                <td className="px-6 py-4">{pat.pressure}</td>
                <td className="px-6 py-4">{pat.Doctor_Remarks}</td>
                <td className="px-6 py-4"><button onClick = {()=>handleDelete(pat.id)} className="bg-slate-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">DELETE</button></td>
              </tr>
            </tbody>
            ))}
          </table>
        </div>           
      </div>
    ) : (
      "No details for this user!"
    )}
    
  </div>

  )
}

export default Nurse