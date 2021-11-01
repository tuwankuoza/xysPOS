import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { Card, Button } from 'react-bootstrap'
import { fetchData } from '../store/action';
import ClipLoader from "react-spinners/ClipLoader";

export default function Subscription() {
  
  let dispatch = useDispatch()
  let isLoading = useSelector(state => state.isLoading)
  let data = useSelector(state => state.data)

  useEffect(() => {
    dispatch(fetchData())
  }, [])


  if(isLoading) {
    return <ClipLoader />
  }

  return (
    <div className="container">
      <div style={styles.homeCol}>
        <div>
          <Card style={{ width: '24rem' }}>
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Text style={styles.title}>Basic</Card.Text>
              <Card.Text style={styles.price}>Rp 45.000</Card.Text>
              <Card.Text style={styles.month}>/ bulan</Card.Text>
              <Card.Text>Kelola Stok Produk Dengan Mudah</Card.Text>
              <Card.Text>Laporan Penjualan</Card.Text>
              <Card.Text>Jual Produk Digital</Card.Text>
              <button type="submit" className="btn-lg btn-danger btn-rounded" style={styles.redButton}>Berlangganan</button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '24rem' }}>
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Text style={styles.title}>Premium</Card.Text>
              <Card.Text style={styles.price}>Rp 50.000</Card.Text>
              <Card.Text style={styles.month}>/ bulan</Card.Text>
              <Card.Text>Kelola Stok Produk Dengan Mudah</Card.Text>
              <Card.Text>Laporan Penjualan</Card.Text>
              <Card.Text>Jual Produk Digital</Card.Text>
              <button type="submit" className="btn-lg btn-danger btn-rounded" style={styles.redButton}>Berlangganan</button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '24rem' }}>
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Text style={styles.title}>Super POS!</Card.Text>
              <Card.Text style={styles.price}>Rp 70.000</Card.Text>
              <Card.Text style={styles.month}>/ bulan</Card.Text>
              <Card.Text>Kelola Stok Produk Dengan Mudah</Card.Text>
              <Card.Text>Laporan Penjualan</Card.Text>
              <Card.Text>Jual Produk Digital</Card.Text>
              <button type="submit" className="btn-lg btn-danger btn-rounded" style={styles.redButton}>Berlangganan</button>
            </Card.Body>
          </Card>
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
    alignItems: 'center',
    paddingTop: '30px'
  },
  redButton: {
    borderRadius: 20,
    margin: 10,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: 'red'
  },
  price: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'black'
  },
  month: {
    fontSize: '18px',
    color: 'grey'
  }
}