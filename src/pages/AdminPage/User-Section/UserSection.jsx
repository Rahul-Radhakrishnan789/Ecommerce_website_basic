import React from 'react'
import './usersection.css'
import { useContext } from 'react'
import { ShopContext} from '../../../context/shop-context'
import { user } from '../../../Products'

export const UserSection = () => {

    const data = useContext(ShopContext)
  const {formValues } = data


    
  return (
    <div className='adminpage' >
    <div  >
        <div><h1>Hello Admin</h1></div>
    </div>
    <div className='lists'>
      {console.log(user)}
      {user.map((items) =>{
        return(
            <div className='list'>
              <p>USERNAME:{items.username}</p>
                <p>EMAIL:{items.email}</p>
                <p>PASSWORD:{items.pass}</p>
              
            </div>
            
        )
      })}
    </div>
     </div>
  )
}
