//action creator
export function sum (a,b){
  // action
  return {
    type:'SUM',
    payload:[a,b]
  }
}

export function subtract (a,b){
  // action
  return {
    type:'SUBTRACT',
    payload:[a,b]
  }
}