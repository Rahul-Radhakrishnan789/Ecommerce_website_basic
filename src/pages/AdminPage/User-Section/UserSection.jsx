import React from 'react'
import './usersection.css'
import { useContext } from 'react'
import { ShopContext} from '../../../context/shop-context'
import { user } from '../../../Products'
import {CaretCircleRight } from 'phosphor-react'
import { Link } from 'react-router-dom'



export const UserSection = () => {

    const data = useContext(ShopContext)
  const {setSelectedUser,products } = data

 

const handleClick = (item) => {
  setSelectedUser(item)
}

    
  return (
    <div className='adminpage' >
      <div className='sidenav'>
       
        <ul className='li'>
          <br />
          <li><b><Link to="/admin">Users</Link></b></li>
          <br />
          <li><b><Link to='/productManagement'>Products</Link></b></li>
          <br />
          <li><b><Link to='/addproduct'>Add product</Link></b>
          </li>
        </ul>
      </div>
    <div  >
        <div><h1>Hello Admin</h1></div>
    </div>
    <div className='lists'>
     
      {user.map((item,index) =>{
        return(
            <div className='list'>
              <p>{index + 1}</p>
              <p><b>{item.username.toUpperCase()}</b></p>
                <p>{item.email}</p>
                <Link to='/user'onClick={handleClick(item)}  ><CaretCircleRight size={32} /></Link>
              
            </div>
            
        )
      })}
    </div>
  
     </div>
  )
}
