import React from 'react'
import './masthead.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


export function Masthead() {
  return <div>
    <header class="masthead" id="masthead">
            <div class="container">
                <div class="masthead-subheading">Welcome To Our Studio!</div>
                <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
                
                <Button variant="warning" size='lg' href="#Services" className='btn1'>TELL ME MORE</Button>
            </div>
        </header>
    </div>
}
