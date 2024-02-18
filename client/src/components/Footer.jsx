import React from 'react';
import '../css/footer.css';

const Footer = props => {
    return (
      <footer className="text-muted bg-dark custom-footer">
        <div className="container text-center">
          <p className="float-right">
            <a href="/#">Back to top</a>
          </p>
          <p>Camera Master, &copy; Camera Master</p>
          <p> <a href="/#">Visit the homepage</a> or read our <a href="/about">About</a>.</p>
        </div>
      </footer>
    );
}
 
export default Footer;