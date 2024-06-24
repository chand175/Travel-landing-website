// function reversess(sen){
//     let word= sen.split(" ");
//     if(word[0]){
//         word[0]=word[0].split("").reverse().join("");
//     } return word.join(" ");
// }
// console.log(reversess("hello world"))

















// let sen= "javascript is fun";
// let words= sen.split(" ");

// let newstr=" ";

// for(let item of words){
//  let sentence= item.charAt(0).toUpperCase()+ item.slice(1);
//  newstr+=sentence+" ";
 

// }


// console.log(newstr); 




function showSidebar(){
  let  sidebar= document.querySelector('.sidebar');
  sidebar.style.display="flex"
}

function hideSidebar(){
    let  sidebar= document.getElementById('closeBtn');
    sidebar.style.display="none"
  }

