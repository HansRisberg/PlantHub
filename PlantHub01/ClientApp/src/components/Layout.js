import { useState } from 'react';
import { Container } from 'reactstrap';
import { Footer } from './Footer';
import { NavMenu } from './NavMenu';


export const Layout = ({ children }) => {

    return (
        <div>
          <NavMenu />
        <Container tag="main" className="content">
          {children}
        </Container>
            <Footer />
      </div>
    );
}
