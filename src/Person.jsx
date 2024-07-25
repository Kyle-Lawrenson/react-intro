const Person = (props) => {

	return (
	<div>
	    <h2>My name is {props.name} and my age is {props.age}.</h2>
        
		
	</div>
	)
}
const Pet = (petsName, type) => {

	return (
	<div>
	    <h2>My {type} is called {petsName}.</h2>
		<Pet petsName={'Dave The Magical Cheese Wizard'} type={'cat'} />
	</div>
	)
}

export default Person