import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter, reset } from "./redux/actions/counter.actions";


function App() {

  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <>
      <h1 style={{textAlign:'center'}}>COUNTER USING REDUX</h1> 
      <div
        style={{
          width: "50%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          marginBottom:'20px'
        }}
      >
        <button onClick={()=> dispatch(increaseCounter())}>+</button>
        <span style={{ margin: "0 20px",fontWeight:'bold',alignSelf:'center'}}>{counter}</span>
        <button onClick={()=> dispatch(decreaseCounter())} >-</button>
      </div>
      <button style={{textAlign:'center',margin:'0 auto',display:'flex',justifyContent:'center',marginTop:'20px'}} onClick={()=> dispatch(reset())} >RESET</button>
    </>
  );
}

export default App;
