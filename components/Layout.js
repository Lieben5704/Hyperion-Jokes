//Layout component helps in organizing and structuring the pages, ensuring a consistent layout and visual style across the entire application.
import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
  margin: 0,
  padding: 0,
  backgroundColor: "#f5f5f5",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh", // Set the layout to take up the full viewport height
};

const contentStyle = {
  flex: 1, // Allow the content to grow and fill the remaining vertical space
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <div style={contentStyle}>
      {props.children}
    </div>
    <Footer />
    <style global jsx>{`
      body {
        font-size: 16px;
        font-family: "Open Sans", Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      
      li {
        line-height: 2rem;
      }
      
      a {
        text-decoration: none;
        color: #333;
      }
      
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default Layout;
