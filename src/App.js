import Controls from "./components/Controls";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Controls />
      </div>
    </Provider>
  );
}

export default App;
