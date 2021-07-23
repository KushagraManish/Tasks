import React from 'react'
import styled from 'styled-components'

function Cta() {
    return (
        <CtaContainer>
            <div class="cta-main">
                <h2>Master Catalogue</h2>
                <button>Add Product</button>
            </div>
            <p>Manage all your products at one place</p>
           
        </CtaContainer>
    )
}

export default Cta


const CtaContainer = styled.div`

padding-right:108px;
padding-left:108px;
padding-top:20px;
text-align:left;
line-height:0.7;

>.cta-main{
    display:flex;
    >h2{
        padding-right:900px;
    }
    >button{
        background:green;
        border:green;
        color:white;
        border-radius:10px;
        padding-left:50px;
        padding-right:50px;
    }
}

`;