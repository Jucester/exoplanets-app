import { useRouter } from "next/router";
import Container from "../../components/Container";
import { contentfulConnect  } from "../../utils/contentful.ts";

// This function gets called at build time
export const getStaticPaths = async () => {
  // Fetch existing posts from the database
  const client = await contentfulConnect();
  const res = await client.getEntries();
  const planets = res.items;

  // Get the paths we want to pre-render based on posts
  const paths = planets.map(planet => ({
    params: { id: String(planet.sys.id) },
  }))

  return {
    paths,
    // If an ID is requested that isn't defined here, fallback will incrementally generate the page
    fallback: true,
  }
}

// This also gets called at build time
export const getStaticProps = async ({ params }) => {

	const client = await contentfulConnect();
	const res = await client.getEntry(params.id);
	
	return {
		props: {
			planet: res,
		},
		revalidate: 1,
	}
}

const Post = (props) => {
	const router = useRouter();
	const object = router.query;

	return (
		<Container>
			{/* <h1> HOLA </h1>
			<h2> {props.planet.fields.planetName} </h2>

			<p> {props.planet.body} </p> */}

			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<div className="project-info-box mt-0 mb-4">
							<h5> <b> Planet name:  </b>  {props.planet.fields.planetName}  </h5>
							<p className="mb-0">Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel imperdiet est. Pellentesque condimentum, dui et blandit laoreet, quam nisi tincidunt tortor.</p>
						</div>

						<div className="project-info-box">
							<p><b>Orbital Period Days:</b>  {props.planet.fields.orbitalPeriodDays} </p>
							<p><b>Orbital Semi-major Axis:</b> {props.planet.fields.orbitSemiMajorAxis} </p>
							<p><b>Mass:</b> {props.planet.fields.mass}  </p>
							<p><b>Eccentricity:</b> {props.planet.fields.eccentricity}  </p>
							<p><b>Spectral Type:</b> {props.planet.fields.spectralType} </p>
							<p><b>Stellar Radius:</b> {props.planet.fields.spectralRadius} </p>
							<p><b>Stellar Mass:</b> {props.planet.fields.stellarMass} </p>
							<p><b>Stellar Effective Temp:</b> {props.planet.fields.stellarEffectiveTemperature} </p>
							<p><b>Stellar Metallicity</b> {props.planet.fields.stellarMetallicity}</p>
							<p><b>Stellar Metallictty Radius:</b> {props.planet.fields.stellarMetallicityRatio} </p>
							<p><b>Stellar Surface Gravity:</b> {props.planet.fields.stellarSurfaceGravity}</p>
							<p><b>Distance:</b> {props.planet.fields.distance}</p>
							<p><b>Gaia Magnitude:</b> {props.planet.fields.gaiaMagnitude}</p>
						</div>

					</div>

					<div className="col-md-7">
						  <img
          src={props.planet.fields.image?.fields.file.url || "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15sn9h-b91d0d97-8378-4b8c-b943-dd1b39a21a84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE1c245aC1iOTFkMGQ5Ny04Mzc4LTRiOGMtYjk0My1kZDFiMzlhMjFhODQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbpQRH5usavAhtJl_KJ7Tg7eyJBgiVM7fwz7iddfc_4"}
          alt="Planet"
          class="card-img-top img-fluid"
        />
						<div className="project-info-box">
							<p><b>Discovery Method:</b> { props.planet.fields.discoveryMethod } </p>
							<p><b>Discovery Year:</b> { props.planet.fields.discoveryYear } </p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Post;
