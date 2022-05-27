// https://www.hackerrank.com/challenges/2d-array/problem

function hourglassSum(arr) {
  let maxHourglass = Number.MIN_SAFE_INTEGER;
  let pos = [];
  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
      let hourGlassSize = arr[i][j] + arr[i][j + 1] + arr[i][j+2];
      hourGlassSize += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j+2];
      hourGlassSize += arr[i + 1][j + 1];
      if(hourGlassSize > maxHourglass){
        maxHourglass = hourGlassSize;
        pos.push({"i":i, "j":j});
      }
    } 
  }
  return maxHourglass;
}