import React, { useEffect }  from 'react'
import axios from 'axios'
import { useState } from 'react'

function Secound() {

    const [data, setData] = useState([])

    const getData = () => {
        axios.get('https://dummyjson.com/products')
        .then((res) => {
            setData(res.data.products)
            console.log(res.data.products)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData()
    }, []) 




  return (
    <div>

      
      {

        data.map((item) => {
            return (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <img src={item.images[0]} alt='image' />
                
                </div>
            )
        }
        )

      }

        
    </div>
  )
}

export default Secound