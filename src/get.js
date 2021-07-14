'use strict';

export async function get(){
    let  content= await fetch('db.json');    
    content=await content.json(); 
    return content;
}
