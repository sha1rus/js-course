const arr = ['!','JS','люблю','Я'];
const outArr= [];
for (let i = arr.length-1; i>=0; i--){
	outArr.push(arr[i]);

}

console.log(outArr);

let outStr='';

outStr = outArr.join(' ');

console.log(outStr);