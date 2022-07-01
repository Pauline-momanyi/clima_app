import React, { useEffect, useState } from "react";
import { FaHeartbeat, FaTemperatureHigh } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { SiOxygen } from "react-icons/si";
import patientpagelogo from "../../patientpage.jpg";
import userav from "../../userav.png";

function Patient() {
  const [patient, setPatient] = useState([]);
  let lastEntry;


  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('uid'))  
    
    
    fetch(`https://climarubyapi.herokuapp.com/personal_details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPatient(() => data);
        console.log(data);
      });
  }, []);
  if (Object.keys(patient).length > 0) {
    lastEntry = patient[patient.length - 1];
    console.log(lastEntry);
  }
  
  return (
      <div className="bg-gray-backg">
        {typeof lastEntry !== "undefined" ? (
          <div>
            <div className="flex justify-around">
              <div>
                <div className="bg-white rounded-md shadow-md my-3 flex justify-between mx-6 mt-4 px-5">
                  <div>
                    <p>Hello, {lastEntry.patient.name}</p>
                    <p>
                      Have a nice day and don't forget to take care <br /> of your
                      health!
                    </p>
                  </div>

                  <span>
                    <img className="h-15 w-10" src={patientpagelogo} alt="LOGO" />
                  </span>
                </div>
                <div className="flex justify-around">
                  <div className="px-4 py-4 shadow-md rounded-md bg-white">
                    <div className="font-bold text-xl mb-2 flex space-x-2">
                      <FaHeartbeat />
                      {lastEntry.heartrate} bpm
                    </div>
                    <p className="text-gray-700 text-sm">
                      Pulse is a very important <br />
                      physiological indicator
                    </p>
                  </div>
                  <div className="px-4 py-4 shadow-md rounded-md bg-white">
                    <div className="font-bold text-xl mb-2 flex space-x-2">
                      <FaTemperatureHigh />
                      {lastEntry.temperature}&#8451;
                    </div>
                    <p className="text-gray-700 text-sm">
                      Temperature below 35 &#8451; <br />
                      indicate serious illness
                    </p>
                  </div>
                  <div className="px-4 py-4 shadow-md rounded-md bg-white">
                    <div className="font-bold text-xl mb-2 flex space-x-2">
                      <SiOxygen />
                      {lastEntry.SPO2}%
                    </div>
                    <p className="text-gray-700 text-sm">
                      Know your blood's actual <br />
                      oxygen level
                    </p>
                  </div>
                  <div className="px-4 py-4 shadow-md rounded-md bg-white">
                    <div className="font-bold text-xl mb-2 flex space-x-2">
                      <MdBloodtype />
                      {lastEntry.pressure}/120
                    </div>
                    <p className="text-gray-700 text-sm">
                      Blood pressure can rise and <br />
                      fall several times a day
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-primary text-white">
                  <span>
                    <img className="h-15 w-10 align-center" src={userav} alt="avatar" />
                  </span>
                  <p>{lastEntry.patient.name}</p>
                  <p>{lastEntry.patient.sex}</p>
                  <p>{lastEntry.patient.age}</p>
              </div>             
            </div>
                      
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Date
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
                  </tr>
                </thead>
                {patient.map(pat=>(
                <tbody key={pat.id}>
                  <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {pat.created_at}
                    </th>
                    <td className="px-6 py-4">{pat.heartrate}</td>
                    <td className="px-6 py-4">{pat.temperature}</td>
                    <td className="px-6 py-4">{pat.pressure}</td>
                    <td className="px-6 py-4">{pat.Doctor_Remarks}</td>
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

  );
}

export default Patient;
