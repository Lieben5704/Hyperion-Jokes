import Layout from "../components/Layout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

let programming = (props) => (
  <Layout>
    {/* The Layout component wraps the content of the page */}
    <div className="page">
      {/* The page container */}
      <h1 className="heading">Programming Jokes</h1>
      {/* Heading */}
      <hr></hr>
      <div className="jokes">
        {/* Jokes container */}
        {props.items.jokes.map((value) => (
          /* Iterate through each joke item */
          <div key={value.id} className="joke">
            <Link as={`/p/${value.id}`} href={`/post?id=${value.id}`}>
              {/* Link to the joke post */}
              <span>{value.setup}</span>
      
            </Link>
          </div>
        ))}
      </div>
      {/* End of jokes container */}
    </div>
    {/* End of page container */}
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
      /* CSS styles for the description paragraph */
      .jokes {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      /* CSS styles for the jokes container */
      .joke {
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }
      /* CSS styles for each joke item */
    `}</style>
  </Layout>
);

programming.getInitialProps = async function () {
  // Fetch programming jokes data
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?type=twopart&format=json&lang=en&amount=5&blacklistFlags=nsfw,racist,sexist,explicit"
  );
  let data = await res.json();

  return {
    items: data,
  };
};

export default programming;
