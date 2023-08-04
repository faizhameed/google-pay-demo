import { useRef } from "react";
import "./App.css";
import PaymentPage from "./PaymentPage";

function App() {
  const amountInput = useRef();
  const onChange = () => {
    console.log(amountInput.current.value);
  };
  return (
    <div className="App">
      <header className="App-header">Google Pay App</header>
      <input type="number" ref={amountInput} onChange={onChange} />
      <PaymentPage amount={amountInput.current?.value || 0} />
    </div>
  );
}

export default App;
