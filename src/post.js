'use strict';

export function post(array){
    const div=document.querySelector('div');
    console.log(array);  

    for(let i=0; i<array.length; i++){
        const list=document.createElement('li');
        div.append(list);
        
        for (let key in array[i]){
            if(key==='img'){
                list.innerHTML=`<img src="${array[i].img}" alt="" style="width: 210px"><br>`; 
            } else{
                list.innerHTML+=`${[key]}: ${array[i][key]}<br>`;  
            }
        }  
    }    
}
