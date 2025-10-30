import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Row from "./ui/Row";

function App() {
	return (
		<>
			<GlobalStyles />
			<Row type="horizontal">
				<Button variation="primary" size="medium">
					Test
				</Button>
				<Button variation="secondary" size="small">
					test2
				</Button>
			</Row>
			<Row></Row>
			<div>Hello world</div>
		</>
	);
}

export default App;
