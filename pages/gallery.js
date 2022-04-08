import Container from "../components/Container";
import Entries from "../components/Entries";
import { contentfulConnect } from "../utils/contentful.js";

export const getStaticProps = async () => {
 
  const client = await contentfulConnect();
  const res = await client.getEntries({ limit: 100 });
  const planets = res.items;

  return {
    props: {
      planets,
    },
    revalidate: 1,
  }
}

const Gallery = (props) => {
	return (
		<>
			<Container>
				<h1> Gallery </h1>
				  <Entries planets={props.planets} />
			</Container>
		</>
	);
};

export default Gallery;
