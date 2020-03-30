import React from 'react';
import { Row , Container } from 'react-bootstrap'
import './style.css'

function Footer() {
  return (
    <>    
      <footer class="page-footer font-small pt-4">
        <div class="container-fluid text-center text-md-left">
          <Container>
            <Row>
              <div class="col-md-6 mt-md-0 mt-4">
                <h5 class="text-uppercase">Info</h5>
                <p>WebSite template created by Carlos A.</p>
                <a href="https://github.com/magc7x">Veja meu github</a>
              </div>
              <br />
            
              <div class="col-md-3 mb-md-0 mb-3 ">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#">Option1</a>
                  </li>
                  <li>
                    <a href="#">Option2</a>
                  </li>
                  <li>
                    <a href="#">Option3</a>
                  </li>
                  <li>
                    <a href="#">Option4</a>
                  </li>
                </ul>
              </div>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default Footer;