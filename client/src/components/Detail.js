import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const Detail = (props) => {
    const [  oneProduct, setOneProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then( res => {
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch( err => console.log(err));
    }, []);
    return (
        <div>
            {/* <p> hey</p> */}
            <p>Title: {oneProduct.title}</p>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <button onClick={deleteProduct}> Delete</button>

            <Link to={'/'}>Go Home</Link>
        </div>
        
    );
}

export default Detail;