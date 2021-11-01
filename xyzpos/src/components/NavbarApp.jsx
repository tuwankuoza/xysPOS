import React from 'react'
import { Link } from "react-router-dom";
import '../styles/navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginStatus } from '../store/action';


export default function NavbarApp() {

	let dispatch = useDispatch()
	const modalIsOpen = useSelector(state => state.loginIsOpen)

  return (
		<div className="topnav">
			<div>
				<Link to="/">xyzPOS</Link>
			</div>
			<div>
				<Link to="/">Fitur</Link>
				<Link to="/subs">Berlangganan</Link>
				{
					!modalIsOpen ?
					<button onClick={() => dispatch(setLoginStatus(true))} 
					className="btn-lg btn-outline btn-rounded"
					style={styles.whiteButton}
					>Masuk</button>
					: <></>
				}
			</div>
		</div>
  )
}

const styles = {
  whiteButton: {
    borderRadius: 20,
    margin: 10,
		color: 'white',
    backgroundColor: 'transparent',
    borderColor: 'white'
  }
}