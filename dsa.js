// // two sum with hap map 

// function twosum(arr , target) {
//     let map = new Map();
//     let count = 0;

//     for(let num of arr){
//         let find = target - num ; // 4,2.  3,3. 

//         if(map.has(find)){
//             return [map.get(find), count]; //[0,2]
//         }
//         map.set(num, count); //2,0.   3,1
//         count++
//     }
//     return [];


// }

// console.log(twosum([2,3,4,2], 6))

// group of anagrams

function groupAnagrams(strs) {
    let sorted = strs.map((s)=> s.split('').sort().join(''));
    let map = {};

    for(let i = 0 ; i < strs.length; i++){
        if(!map[sorted[i]]){
            map[sorted[i]] = [strs[i]];

        }else{
            map[sorted[i]].push(strs[i]);
        }

    }
 return Object.values(map);
}

console.log(groupAnagrams(["lip", "pil", "tin", "int", "n", "ba"])); 
