import "./App.css";

import Form from "./components/Form";
import Result from "./components/Result";

const App = () => {
	return (
		<div className="container flex-center">
			<Form />
			<Result />
		</div>
	);
};

export default App;
