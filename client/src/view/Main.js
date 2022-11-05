import React, { useState, useEffect } from "react";
import ProductForm from "../components/ProdForm";
import AllProducts from "../components/AllProd";

const Main = (props) => {
    const [productList, setProductList] = useState([]);

    const removeFromDom = productId => {
        setProductList(productList.filter(productList => productList._id != productId));
    }

    return(
        <div>
            <ProductForm productList={productList} setProductList={setProductList}/>
            <AllProducts productList={productList} setProductList={setProductList} removeFromDom=
            {removeFromDom}/>
        </div>
    )
}

export default Main;