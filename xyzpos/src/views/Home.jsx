import React from 'react'
import homeImg from '../Assets/hero-section-illustration.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { setRegisterStatus } from '../store/action';

export default function Home() {

  let dispatch = useDispatch()
  let history = useHistory()

  return (
    <div className="container">
      <div style={styles.homeCol}>
        <div>
          <h1>Solusi terbaik untuk</h1>
          <h1>mengelola usaha</h1>
          <h1>Kamu!</h1>
          <button type="button" className="btn-lg btn-danger btn-rounded" 
          onClick={() => dispatch(setRegisterStatus(true))} 
          style={styles.redButton}>Daftar Sekarang</button>
          <br></br>
          <button type="button" className="btn-lg btn-outline btn-rounded" 
          onClick={() => history.push('/subs')}
          style={styles.whiteButton}>Pelajari Dulu!</button>
        </div>
        <div>
          <img src={homeImg} style={{width: 600, height: 500}}/>
        </div>
      </div>
    </div>
  )
}

const styles = {
  homeCol: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '100px'
  },
  redButton: {
    borderRadius: 20,
    margin: 10
  },
  whiteButton: {
    borderRadius: 20,
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'red'
  }
}