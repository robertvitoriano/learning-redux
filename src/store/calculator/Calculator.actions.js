//action creator
export function sum (a,b){
  // action
  return {
    type:'SUM',
    payload:[a,b]
  }
}