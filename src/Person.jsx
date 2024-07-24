const Person = (Props) => {

	return (
	<div>
	    <h2>My name is {Props.name} and my age is {Props.age}.</h2>
        <Pet />
	</div>
	)
}

export default Person