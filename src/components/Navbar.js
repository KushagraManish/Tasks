import React from 'react'
import styled from 'styled-components';

function Navbar() {
    return (
        <NavbarContainer>

        <nav>
            <a> <h3>Sourcewiz</h3></a>
            <ul>
                <li>Recent Activity</li>
                <li>Help</li>
                <li>Pic</li>
            </ul>
            
            
       
        
           

        </nav>

        <hr style={{ width:"100%" ,marginTop:"0px", color:"lightgrey"}}></hr>
            <p style = {{fontSize:"10px"}}>Dashboard > Master Catalogue</p>
        </NavbarContainer>
    )
}

export default Navbar


const NavbarContainer = styled.nav`
    >p{
        padding-right:108px;
        padding-left:108px;
        padding-top:20px;
        display:flex;
    }

    >nav{
        padding-right:108px;
        padding-left:108px;
        padding-top:20px;
        
        p{
            display:flex;
        }
       display:flex;
       flex-wrap:wrap;
       align-items:right;
       justify-content:end;
       >a{
            padding-right:900px;
       }
       >ul{
           flex:1;
           list-style:none;
           display:flex;
           justify-content:right;
           position:relative;
           float:right;
           text-align:right;
           align-items:right;
           >li{
               position:relative;
                padding-left:10px;
                padding-right:10px;
                padding-top:0;
                padding-bottom:0;
                align-items:right;
           }
       }
    }

    
    

`;
