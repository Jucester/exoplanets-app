import Container from "../components/Container";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { contentfulManagement, contentfulConnect } from '../utils/contentful.js';

async function createJournal(journal) {
	const env = await contentfulManagement();


	const obj = {
		fields: {
			title: {
				'en-US': journal.title
			},
			body: {
				'en-US': journal.body
			}
		}
	};

	const newJournal = await env.createEntry('journal', {
		...obj
	});

	await newJournal.publish();
}

export const getServerSideProps = async ({ params }) => {
	const client = await contentfulConnect();
	const res = await client.getEntries({
		content_type: 'journal'
	});

  return {
    props: {
      journals: res.items,
    },
  }
}


const Journal = (props) => {
	const [journal, setJournal] = useState({
		title: "",
		body: ""
	});

	const router = useRouter();

	const refreshData = () => {
		router.replace(router.asPath);
	}

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setJournal(values => ({...values, [name]: value}))
	}
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		await createJournal(journal);
		refreshData();
	}

	return (
		<>
			<Container>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Title </label>
						<input 
							type="text" 
							className="form-control" 
							name="title" 
							placeholder="Enter title" 
							value={journal.name}
							onChange={ handleChange }
						/>
					</div>
					<div className="form-group">
						<label htmlFor="text">Text</label>
						<textarea className="form-control" name="body" id="text" rows="3" 	value={journal.body}
							onChange={ handleChange }></textarea>
					</div>	
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>	


				<table className="table table-dark mt-4">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Title</th>
							<th scope="col">Text</th>
						</tr>
					</thead>
					<tbody>
						{
							props.journals.map((entry) => {
								return (
									<tr>
									<th scope="row">1</th>
									<td>{ entry.fields.title }</td>
									<td>{ entry.fields.body }</td>
									</tr>
								)
							})
						}
					</tbody>
					</table>
			</Container>
		</>
	);
};


export default Journal;
