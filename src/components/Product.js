import React from 'react'
import styled from 'styled-components'

function Product() {
    return (
        <ProductContainer>
            

           
            <div className="card-container">
                <div className = "card">
                    <h5>Pillows</h5>
                    <p>32 products</p>
                    <div className ="img-container">
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className = "card">
                    <h5>Pillows</h5>
                    <p>32 products</p>
                    <div className ="img-container">
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className = "card">
                    <h5>Pillows</h5>
                    <p>32 products</p>
                    <div className ="img-container">
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className = "card">
                    <h5>Pillows</h5>
                    <p>32 products</p>
                    <div className ="img-container">
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                    </div>
                </div>
            </div>


            <div className="card-container">
                <div className = "card">
                    <h5>Pillows</h5>
                    <p>32 products</p>
                    <div className ="img-container">
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className = "card">
                    <h5>Pillows</h5>
                    <p>32 products</p>
                    <div className ="img-container">
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className = "card">
                    <h5>Pillows</h5>
                    <p>32 products</p>
                    <div className ="img-container">
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className = "card">
                    <h5>Pillows</h5>
                    <p>32 products</p>
                    <div className ="img-container">
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                        <img src = "./images/product.png" className ="thumbnail"/>
                    </div>
                </div>
            </div>

           
        </ProductContainer>
    )
}

export default Product


const ProductContainer = styled.div`
   
    
    display:flex;
    flex-direction:row;
    display: flex;
    flex-wrap: wrap;

    div.card-container{
        padding:8px;
        flex: 1 0 5%; 
    }
    div.card{
        text-align:left;
       
        line-height:1px;
        background-color : lightgrey;
        border-radius: 10px;
        >h5{
            padding-top:20px;
            padding-left: 10px;
        }
        >p{
            font-size: 10px;
            padding-left:10px;
        }

        >.img-container{

            display:flex;
            padding: 10px;
            
            
            >.thumbnail{
             
                height:70px;
                width:80px;
                border-radius:10px;
                padding:5px;
            }
        }

    }


   
`;
