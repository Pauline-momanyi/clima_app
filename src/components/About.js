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
          A 100% satisfaction guarantee not only guarantees that the customer will be happy, but also guarantees that you'll get another chance.
          </p>
        </div>
        <div>
            <FaUserNurse/>
          <h1 className="font-bold text-lg">Professional Nurse</h1>
          <p>
          Professionalism reflects the act of providing quality patient care while honoring the values of respect, advocacy, and responsibility
          </p>
        </div>
        <div>
            <BiDollarCircle/>
          <h1 className="font-bold text-lg">Low Cost Service</h1>
          <p>
          A low-cost Service Provider is well positioned to use its low cost structure to induce its customers not to switch
          </p>
        </div>
      </div>
      <div>
        <h2>About CLIMA..</h2>
        <p>We take good care of the elderly</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium rerum fuga!</p>
        <ul>
            <li>Service guarantee</li>
            <li>Flexible working hours</li>
            <li>Experienced nurses</li>
        </ul>
        <button className="rounded-full bg-orange-primary">More About Us ..</button>
      </div>
      <Stats/>
    </div>
  );
}

export default About;