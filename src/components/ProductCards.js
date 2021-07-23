import React from 'react'
import Product from './Product'
import styled from 'styled-components'

function ProductCards() {
    return (
        <div>
            <ProductCardsContainer><>
                <div className = "product-nav">
                    <p className="option">Cateogaries</p>
                    <p className="option">All Products</p>
                    
                </div>
               
                <hr style={{ width:"100%" ,marginTop:0}}></hr>
                <Product/>
                    
                </>
            </ProductCardsContainer>
        </div>
    )
}

export default ProductCards

const ProductCardsContainer = styled.div`
    padding-left: 100px;
    padding-right:100px;
    
    padding-bottom:30px;
   
    >.product-nav{
       
        display:flex;
        font-size:15px;
        >p.option{
            padding-left:10px;
            padding-right:8px;
        }

        
    
    }

    

`;