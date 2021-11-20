import Card from "./components/card/Card";
import Header from "./components/header/Header";
import data from "./data";

function App() {
	const cardElements = data.map((item) => {
		return <Card key={item.id} {...item} />;
	});
	return (
		<div className="App">
			<Header />
			{cardElements}
		</div>
	);
}

export default App;
