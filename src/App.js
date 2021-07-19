import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [value, setValue] = useState(0);
	const fetchJobs = async () => {
		const response = await fetch(url);
		const newJobs = await response.json();
		setJobs(newJobs);
		setIsLoading(false);
	}
	useEffect(() => {
		fetchJobs();
	}, []);
	
	if(isLoading) {
		return (
			<React.Fragment>
				<section className="loading section">
					<h1>Loading ...</h1>
				</section>
			</React.Fragment>
		);
	}
	const {company, dates, duties, title} = jobs[value];
	return (
		<React.Fragment>
			<section className="section">
				<div className="title">
					<h2>Experience</h2>
					<div className="underline"></div>
				</div>
				<div className="jobs-center">
					<div className="btn-container">
						{
							jobs.map((job, index) => {
								return (
									<button className={`job-btn ${index === value && 'active-btn'}`} type="button" key={index} onClick={() => setValue(index)}>
										{job.company}
									</button>
								);
							})
						}
					</div>
					<article className="job-info">
						<h3>{title}</h3>
						<h4>{company}</h4>
						<p className="job-date">{dates}</p>
						{
							duties.map((duty, index) => {
								return (
									<div className="job-desc" key={index}>
										<FaAngleDoubleRight className="job-icon" />
										<p>{duty}</p>
									</div>
								);
							})
						}
					</article>
				</div>
			</section>
		</React.Fragment>
	);
}

export default App
