import React from 'react';
import { Container , Carousel } from 'react-bootstrap';
import './style.css';


function Area3() {
  return (
    <>
      <div id="area3">
        <Container>
          <hr />
          <br />
          <Carousel id="caroul">
            <Carousel.Item>
              <img 
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img 
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img 
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
          <br />
          <hr />
        </Container>


      </div>
    </>
  );
}



export default Area3;
