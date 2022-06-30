import React, {useEffect} from "react";
import { FaUserNurse} from 'react-icons/fa'
import { BiDollarCircle } from 'react-icons/bi'
import { TiThumbsOk} from 'react-icons/ti'
import Stats from './Stats'

function About() {
//   useEffect(()=>{
//     fetch('http://localhost:9292/personal_details')
//     .then(res=>res.json())
//     .then(data=>console.log(data))
// },[])
  return (
    <div >
      <div className="font-bold bg-main-img bg-cover w-full h-screen bg-center flex justify-center pt-32 text-4xl">WE OFFER QUALITY <br/> HOME CARE FOR <br/>YOUR LOVED ONES</div>
      <div className="flex bg-slate-primary text-white space-x-4 justify-center text-center py-8">
        <div>
          <TiThumbsOk />        
          <h1 className="font-bold text-lg">Satisfaction Guarantee</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            commodi.
          </p>
        </div>
        <div>
            <FaUserNurse/>
          <h1 className="font-bold text-lg">Professional Nurse</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            commodi.
          </p>
        </div>
        <div>
            <BiDollarCircle/>
          <h1 className="font-bold text-lg">Low Cost Service</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            commodi.
          </p>
        </div>
      </div>
      <div>
        <h2>About CLIMA..</h2>
        <p>We take good care of the elderly</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium rerum fuga!</p>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
        <button className="rounded-full bg-orange-primary">More About Us ..</button>
      </div>
      <Stats/>
    </div>
  );
}

export default About;