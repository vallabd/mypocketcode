import React from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { main, section,i, Container, Row, Col} from 'react-bootstrap';
import emailjs from 'emailjs-com';




export  function Contact() {
  
    function fnClick() {
        var name=document.getElementById("name")
        var res1="Thank you for your response"
        var resRef=document.getElementById("res")
        resRef.innerText=res1
    }

    /*function fnSubmit(e){

      e.preventDefault();

      emailjs.sendForm('service_ishjxz3','template_35d5txg', e.target,"pBkNk4xVorxysUMm8").then(res=>{console.log(res);
      }).catch(err=>console.log(err));

    }*/


  return (
  <div className=''> 
    <Container>
      <div className='h1 mh contact rounded' id="Contact">
      
      <Row>
                <Col className=''>
                <h2>Contact Us</h2>
                <form className='row'>
                    <div>
                    <input class="form-control form" id="name" name='name' type="text" placeholder="Your Name *" data-sb-validations="required" />
                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                    </div>
                    <div>
                    <input class="form-control form" id="email" name='email' type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                    </div>
                    <div>
                    <input class="form-control form" id="phone" name='phone' type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                    </div>
                    <div>
                    <textarea class="form-control form" id="message" name='message' rows='6'placeholder="Your Message *" data-sb-validations="required"></textarea>
                    </div>
                    <div class=" ">
                    <button class="btn btn-warning btn-xl text-uppercase" id="submitButton" type="submit" onClick={fnClick} >Send Message</button>
                    <div>
                      <h1 id="res" className='contact-subheading'></h1>
                    </div>
                      
                    </div>
                </form> 
                </Col>
      </Row>
      
      </div>
     </Container>         
      
            
</div>
  )
}
