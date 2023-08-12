import Layout from "../components/Layout.js";

const Index = () => (
  <Layout>
    {/* The Layout component wraps the content of the page */}
    <div className="page">
      {/* The page container */}
      <h1 className="heading">Welcome to the Joke App</h1>
      {/* Heading */}
      <br></br>
     
      <p className="description">
        Get ready to tickle your funny bone with our collection of hilarious jokes! From witty one-liners to silly puns, we've got it all. Laugh until your cheeks hurt and share the joy with your friends and family.
      </p>
     
      <p className="description">
        Our joke library covers a wide range of categories, including programming jokes, pun jokes, holiday jokes, and more. Discover your favorite category or explore them all. Guaranteed to bring a smile to your face and brighten your day!
      </p>
      
    </div>
    {/* End of page container */}
    {/* CSS styles for the page container */}
    <style jsx>{`
      .page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        margin: 0 300px;
      }
      /* CSS styles for the page container */
      .heading {
        text-align: center;
        margin-bottom: 0;
      }
      /* CSS styles for the heading */
      .description {
        text-align: center;
        margin-bottom: 1rem;
      }
      /* CSS styles for the description paragraphs */
    `}</style>
  </Layout>
);

export default Index;
