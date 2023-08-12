import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { useRouter } from "next/router";

const Post = (props) => {
  const router = useRouter();


  // Handle the back button click by using the router's back() function
  const handleBack = () => {
    router.back();
  };

  return (
    <Layout>
      {/* The Layout component wraps the content of the page */}
      <div className="both">
        {/* The container for both setup and delivery */}
        <div className="left">
          {/* The left section */}
          <div className="setup">{props.joke.setup}</div>
          {/* Joke setup */}
          <div className="delivery">{props.joke.delivery}</div>
          {/* Joke delivery */}
          <br />
          <Link href="/">
            {/* Link to the homepage */}
            <span className="back-button" onClick={handleBack}>
              {/* Back button */}
              Back to jokes
            </span>
          </Link>
        </div>
      </div>
      {/* End of both container */}
      <style jsx>{`
        .both {
          display: flex;
          flex-direction: row;
          padding-top: 1rem;
          border-left: 1px solid #dedede;
          border-right: 1px solid #dedede;
        }
        /* CSS styles for the both container */
        .left {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          padding: 1rem;
        }
        /* CSS styles for the left section */
        .setup {
          font-size: 1.5rem;
          text-align: center;
        }
        /* CSS styles for the joke setup */
        .delivery {
          font-weight: bold;
          margin-top: 2rem;
          font-size: 1.5rem;
          color: green;
          text-align: center;
        }
        /* CSS styles for the joke delivery */
        .back-button {
          margin-top: 2rem;
          font-size: 1.2rem;
          color: #333;
          text-decoration: none;
        }
        /* CSS styles for the back button */
      `}</style>
    </Layout>
  );
};

Post.getInitialProps = async function (context) {
  // Fetch joke data based on the id from the query parameter
  const { id } = context.query;
  const res = await fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`);
  const joke = await res.json();

  return { joke };
};

export default Post;
