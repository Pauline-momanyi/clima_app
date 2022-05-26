import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../mqlogo.png'
import Button from './Button'
import Modal from './modal/Modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars, faXmark, faHouse, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FaRegUser } from 'react-icons/fa'



function Nav({user, search, setSearch}) {
    let [open, setOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);

//     const avatar = ()=>{if(user){
//         return <FaRegUser />
//     }else{
//         return user.email.substr(0,1).toUpperCase()
//     }
// }
    
    
    return (
    <div className="shadow-md flex items-center justify-between">
        <div className="font-bold cursor-pointer flex items-center ">
            <span><img className='h-15 w-10' src={logo} alt="LOGO"/></span>
            <h3 className='leading-3'>Moringa <br/> Quer</h3> 
            <div className='inline-block justify-between w-max border ml-2'>
                <input type='text' id='search' placeholder='search question' value={search} onChange={e=>setSearch(e.target.value)}/>
                <FontAwesomeIcon icon={faSearch} className='text-slate-primary'></FontAwesomeIcon>
            </div>           
        </div>
        <div className='sm:hidden mr-1' onClick={()=>setOpen(!open)}>
            <FontAwesomeIcon icon={open? faXmark:faBars}></FontAwesomeIcon>
        </div>
        <div onClick={() => {
          setModalOpen(true);
          console.log('clicked');
        }}></div>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}  
        <ul className={`${open? "":"hidden" } sm:flex sm:items-center sm:z-auto z-[-1] sm:w-auto sm:pl-0 text-slate-primary mr-1`}>           
            <li><Link to='/' className='px-2'><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link></li> 
            <li><Link to='/users' className='px-2'><FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon></Link></li>  
            <Link to='/post'><Button/></Link> 
        </ul>        
    </div>   
)
    }

export default Nav