import React, {useState} from "react";
import { Redirect } from 'react-router-dom'
import "./Modal.css";
import { signOut } from 'firebase/auth'
import { auth } from '../../../config/fbConfig'

function Modal({ setOpenModal }) {
    const [loggedout, setLoggedout] = useState()


    const handleLogout = async(e)=>{
        console.log('logged out');
        setOpenModal(false);
        await signOut(auth);
        setLoggedout(true)        
    }

    if (loggedout) {
        return <Redirect to="/signin" />;
      }

  return (   
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        {/* <div className="title">
          <h5>Email: </h5>
        </div>
        <div className="body">
          <h5>Your Posts</h5>
        </div> */}
        <div className="footer">
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button> */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
  );
}

export default Modal;