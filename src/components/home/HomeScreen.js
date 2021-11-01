import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Container,
  Button
} from 'semantic-ui-react'
import {Navbar} from './Navbar';


export const HomeScreen =()=>{
    return (
      <div>
        <Navbar />
        <Container text>
          This is home...
          <br />
          <br />
          <Button as={Link} to='/about-us'>ABOUT US</Button>
        </Container>
      </div>
     
    )    
}