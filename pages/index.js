import React from "react";
import Container from "../components/Container";
import Entries from "../components/Entries";
import { contentfulConnect } from "../utils/contentful.js";

export const getStaticProps = async () => {
 
  const client = await contentfulConnect();
  const res = await client.getEntries({ limit: 6 });
  const planets = res.items;

  return {
    props: {
      planets,
    },
   
    revalidate: 1,
  }
}

const Index = (props) => {
  return (
    <>
      <Container>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3"> Last Exoplanets Discovered (Not really)  </h1>
            <p>
             The most marvelous Exoplanets gallery
            </p>
            <p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Go to gallery »
              </a>
            </p>
          </div>
        </div>
        <Entries planets={props.planets} />
      </Container>
    </>
  );
};

export default Index;
