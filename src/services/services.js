import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './services.css'




export function Services() {
    return <div>
        <Container>
            <div className='h1 mh' id="Services">Services</div>
            <div className='h2 subh'>Our lens capture your moments in all their flavor and fancies</div>
            <Row>
                <Col>
                    <div className='h5'>PRODUCT PHOTOGRAPHY</div>
                    <img src='./img/Services/product.png' alt='product.png' className='img-fluid' />
                    <div>Even a great product will fail on the internet if it is not represented properly. At wonderlust, we deeply understand, that e-commerce product photography is the foundation for success for a product. With us, you just have to hand over the products or your existing images and we will convert it into a rich, compliant, aesthetic catalogue that will make your product standout on Amazon, Flipkart, Myntra, etc.</div>

                </Col>
                <Col>
                    <div className='h5'>WEDDING PHOTOGRAPHY</div>
                    <img src='./img/Services/wedding.jpg' alt='wedding.jpg' className='img-fluid' />
                    <div>
                        We are specialize in wedding photography family and senior portraits, often traveling to your destination to capture the perfect moment in the perfect place. From the shores here in Lake Pangong Tso to the beaches of Lake Vembanad in Kerala and beyond. We will be there with you every step of the way to guarantee your special moments are captured for all time.
                    </div>
                </Col>

                <Col>
                    <div className='h5'>MODELING PHOTOGRAPHY</div>
                    <img src='./img/Services/model.jpg' alt='coffeemug.jpg' className='img-fluid' />
                    <div>We believe that high-end fashion photography shouldn't be exclusive to high-end fashion models.we are equipped with an efficient team of photographers, fashion stylists, makeup artists, and in-house post-production teams. We design a need-based customized plan to meet your specific expectations.Ultimately our mission is to help people to see beauty in themselves while creating wonderful works of art that will be passed down through generations.</div>
                </Col>
            </Row>
        </Container>
    </div>
}

