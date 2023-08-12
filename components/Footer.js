// The Footer component represents the footer section of the website.
const Footer = () => {
    return (
      <footer className="footer">
        <div className="content">
          <p>&copy; 2023 Hilarius Jokes. All rights reserved.</p>
        </div>
        <style jsx>{`
          .footer {
            background-color: #f5f5f5;
            padding: 1rem;
            margin-top: auto; /* push the footer to the bottom */
          }
          .content {
            max-width: 960px;
            margin: 0 auto;
            text-align: center;
          }
          html,
          body,
          #__next {
            height: 100%; /* make sure the layout takes full height */
          }
          body {
            display: flex;
            flex-direction: column; /* enable flexbox layout */
          }
        `}</style>
      </footer>
    );
  };
  
  export default Footer;
  