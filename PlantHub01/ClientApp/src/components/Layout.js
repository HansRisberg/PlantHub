import { useState } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export const Layout = ({ children }) => {
    //const [user, setUser] = useState(isLoggedIn ? localStorage.getItem("username") : "");
    //const isLoggedIn = localStorage.getItem("username")?.length > 0;

    return (
        <div>
        <NavMenu />
        <Container tag="main" className="content">
          {children}
        </Container>
      </div>
    );
}
