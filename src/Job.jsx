const Job = (Props) => {

	return (
	<div>
	    <h2>I used to work as {Props.jobName}.</h2>
        <h2>I am currently working as a {Props.newJobName}.</h2>
	</div>
	)
}

export default Job
