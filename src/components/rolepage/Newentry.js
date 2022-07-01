import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';

function Newentry() {
    const [newData, setNewData] = useState({
        doctor_id: "",
        patient_id: "",
        temperature: "",
        pressure: "",
        heartrate: "",
        SPO2: "",
        Doctor_Remarks: ""
      });

  
    function handleNewentry(e){
        e.preventDefault()
        console.log(newData);
        // console.log(docid);
        fetch('https://climarubyapi.herokuapp.com/newentry', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    function handleChange(e){
        setNewData({ ...newData, [e.target.id]: e.target.value });
    }
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleNewentry}>
                <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="doctor_id" className="block text-sm font-medium text-gray-700">Doctor id</label>
                            <input type="number" name="doctor_id" id="doctor_id" value={newData.doctor_id} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="patient_id" className="block text-sm font-medium text-gray-700">Patient id</label>
                            <input type="number" name="patient_id" id="patient_id" value={newData.patient_id} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="temperature" className="block text-sm font-medium text-gray-700">Temperature</label>
                            <input type="number" name="temperature" id="temperature" value={newData.temperature} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="heartrate" className="block text-sm font-medium text-gray-700">heartrate</label>
                            <input type="number" name="heartrate" id="heartrate" value={newData.heartrate} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="pressure" className="block text-sm font-medium text-gray-700">Pressure</label>
                            <input type="number" name="pressure" id="pressure" value={newData.pressure} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="SPO2" className="block text-sm font-medium text-gray-700">SPO2</label>
                            <input type="number" name="SPO2" id="SPO2" value={newData.SPO2} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="Doctor_Remarks" className="block text-sm font-medium text-gray-700">Remarks</label>
                        <textarea type="text" name="Doctor_Remarks" id="Doctor_Remarks" value={newData.Doctor_Remarks} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea> 
                    </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                    </button>
                </div>
                </div>
            </form>
    </div>
  </div>
  )
}

export default Newentry
