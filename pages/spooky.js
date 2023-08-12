import Layout from "../components/Layout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

let spooky = (props) => (
  <Layout>
    <div className="page">
      <h1 className="heading">Spooky Jokes</h1>
      <p className="description"></p>
      <hr></hr>

      {/* Jokes container */}
      <div className="jokes">
        {props.items.jokes.map((value) => (
          <div key={value.id} className="joke">
            {/* Iterate through each joke item */}
            <Link as={`/p/${value.id}`} href={`/post?id=${value.id}`}>
              <span>{value.setup}</span>
            </Link>
          </div>
        ))}
      </div>
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
        border-left: 1px solid #dedede;
        border-right: 1px solid #dedede;
        margin: 0 50px; /* Added left and right margin of 50px */
      }
      .heading {
        text-align: center;
        margin-bottom: 0;
      }
      .description {
        text-align: center;
        margin-bottom: 1rem;
      }
      .jokes {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .joke {
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }
    `}</style>
  </Layout>
);

// Fetch the jokes data from the API server
spooky.getInitialProps = async function () {
  // Fetch the data using an async function called getInitialProps
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Spooky?type=twopart&format=json&lang=en&amount=5&blacklistFlags=nsfw,racist,sexist,explicit"
  );
  let data = await res.json();
  // Return the jokes data as an object
  return {
    items: data,
  };
};

export default spooky;
