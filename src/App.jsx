import { Provider } from "react-redux";
import ChildComponent from "./Components/ChildComponent";
import { reduxStore } from "./store/store";

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <h1>Hello world!</h1>
        <ChildComponent />
      </div>
    </Provider>
  );
}

export default App;
