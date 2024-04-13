const cell=document.getElementsByClassName("cell");
const start=document.getElementById("start");
const reset=document.getElementById("reset");
let player="";

// reset matrix
function create(){
    let count=1;
    for(let item=0;item<9;item++){
       cell[item].innerHTML= count;
       count++;
    }
}
// reset event
reset.addEventListener("click",(r)=>{
    create();
});

// checkmatrix
function checkmat(){
    let flag=false;
    for( let item of cell){
        if(Number.isInteger(item)){
            flag=true;
            break;
        }
    }
    return flag;
}
// update matrix
Array.from(cell).addEventListener("click",(c)=>{
  if(Number.isInteger(c.innerHTML)){
    c.innerHTML=player;
  }
})
function checkresult(player){

    if(
        (cell[0].innerHTML==player ||cell[1].innerHTML==player || cell[2].innerHTML==player) &&
    
        (cell[3].innerHTML==player ||cell[4].innerHTML==player || cell[5].innerHTML==player) &&
        

        (cell[6].innerHTML==player ||cell[7].innerHTML==player || cell[8].innerHTML==player) &&
        
        (cell[0].innerHTML==player ||cell[3].innerHTML==player || cell[6].innerHTML==player) &&
        
        (cell[1].innerHTML==player ||cell[4].innerHTML==player || cell[7].innerHTML==player) &&
        
        (cell[2].innerHTML==player ||cell[5].innerHTML==player || cell[8].innerHTML==player) &&
        
        (cell[0].innerHTML==player ||cell[4].innerHTML==player || cell[7].innerHTML==player) &&
        
        (cell[2].innerHTML==player ||cell[4].innerHTML==player || cell[6].innerHTML==player)){
            return true;}
            else{
                return false;
            }

}
