import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Service from '../services/Service';
const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [images,setImages]= useState([])

  useEffect(() => {
    const getProductData = async () => {
      try {
       await Service.getSingleProduct(productId).then((res) => {
          setProduct(res.data);
          setImages (res.data.images)
        }
        );  

      } catch (error) {
        console.error(error);
      }
    };



    getProductData();
  }, [productId]);


  if (productId>30) {
    
    return (
      <div>
        <h2>No such product</h2>
        
      </div>
    );
  }



  return (
    <div>
          <div key={product.id} className="w-full grid grid-cols-2  mt-8 bg-white border border-gray-200 rounded-lg shadow ">
                        <div className='m-8' >

                            <img className="  max-h-96 rounded-t-lg"  src={images[0]} alt="product image" />
                          </div>
                          
                        
                        <div className=" grid grid-cols-1  ">
                        <div className=' text-center'>
                                <h5 className="text-3xl font-bold tracking-tight text-gray-900 mt-10 ">{product.title}</h5>
                           
                                <h5 className="text-xl  tracking-tight text-gray-900  mt-10 ">{product.description}</h5>
                            
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900  mt-10 ">${product.price}</h5>

                                </div>
                            </div>
                    </div>
    </div> 
  );
  
};

export default SingleProduct;
