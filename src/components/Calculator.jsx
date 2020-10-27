import React,{useState} from "react";
import { connect } from "react-redux";
import { subtract, sum } from "../store/Calculator/Calculator.actions";


const Calculator = ({ result, dispatch }) => {
  const [a,setA] = useState(0);
  const [b,setB] = useState(0)


  return (
    <>
      <input type="text" placeholder="a" value = {a} onChange={e=>setA(Number(e.target.value))}/>
      <input type="text" placeholder="b" value = {b} onChange={e=>setB(Number(e.target.value))}/>
      <button onClick={e=>dispatch(sum(a,b))}>Somar</button>
      <button onClick={e=>dispatch(subtract((a,b)))}>Subtrair</button>
      <div>
        <h2>Resultado: {result}</h2>
      </div>
    </>
  );
};

// passa os estados para o connect
function mapStateToProps(state) {
  return {
    result: state.calculator,
  };
}
//passa os estados para o provider
export default connect(mapStateToProps)(Calculator);
