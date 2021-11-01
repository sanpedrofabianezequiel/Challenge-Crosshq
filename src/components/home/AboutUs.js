import React from 'react';
import {
    Container
  } from 'semantic-ui-react'
import { Navbar } from './Navbar';

export const AboutUs = ()=>{
    return(
      <div>
        <Navbar/>
          <Container text>
            This is about us
        </Container>
      </div>
       
    )
}