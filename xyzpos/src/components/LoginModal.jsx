import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal';
import { setLoginStatus, userLogin } from '../store/action';
import loginImage from '../Assets/login-illustration.svg'

export default function LoginModal() {

  let dispatch = useDispatch()
  const modalIsOpen = useSelector(state => state.loginIsOpen)

  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  
  const loginUser = (event) => {
    event.preventDefault()
    dispatch(userLogin({
      username: username,
      password: password
    }))
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => dispatch(setLoginStatus(false))}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2 style={{textAlign:'center'}}>Masuk</h2>
        <div className="container">
          <div style={styles.homeCol}>
            <div>
              <img src={loginImage} style={{width: 400, height: 300}}/>
            </div>
            <div>
              <form onSubmit={loginUser}>
                <label>username</label>
                <br></br>
                <input value={username} onChange={(event) => setusername(event.target.value)}/>
                <br></br>
                <label>passsword</label>
                <br></br>
                <input value={password} onChange={(event) => setpassword(event.target.value)}/>
                <br></br>
                <button type="submit" className="btn-lg btn-danger btn-rounded" style={styles.redButton}>Masuk</button>
              </form>
            </div>
          </div>
        </div>

      </Modal>
    </div>
  )
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const styles = {
  homeCol: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '30px'
  },
  redButton: {
    borderRadius: 20,
    margin: 10,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  whiteButton: {
    borderRadius: 20,
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'red'
  }
}