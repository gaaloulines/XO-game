var turn = 'x'
var title=document.querySelector(".title")

function gameF(id) {
    var square = document.getElementById(id)
    if (turn === 'x' && square.innerHTML == '') {
        square.innerHTML = 'X';
        turn='o'
        title.innerHTML="O is next"
    } else if (turn === 'o' && square.innerHTML == ''){
        square.innerHTML = 'O';
        turn='x'
        title.innerHTML="X is next"
    }
playing()

}

function playing(){
    var squares=[]
    for(i=1; i<=9 ; i++){
        squares[i]=document.getElementById("item"+i).innerHTML
}
if(squares[1]==squares[2] && squares[2]==squares[3] && squares[2] !=''){
    winner(1,2,3)
}else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4] !=''){
    winner(4,5,6)
}else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[7] !=''){
    winner(1,2,3)
}else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[7] !=''){
    winner(1,4,7)
}else if(squares[5]==squares[2] && squares[2]==squares[8] && squares[2] !=''){
    winner(5,2,8)
}else if(squares[9]==squares[6] && squares[6]==squares[3] && squares[3] !=''){
    winner(9,6,3)
}else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1] !=''){
    winner(1,5,9)
}else if(squares[7]==squares[5] && squares[5]==squares[3] && squares[3] !=''){
    winner(7,5,3)
}


}

function winner(num1,num2,num3){
document.getElementById("item"+num1).style.background="rgb(69, 66, 66)"
document.getElementById("item"+num2).style.background="rgb(69, 66, 66)"
document.getElementById("item"+num3).style.background="rgb(69, 66, 66)"
title.innerHTML="THE WINNER IS "+document.getElementById("item"+num1).innerHTML
setInterval(function(){title.innerHTML+='.'},1000)
setTimeout(function(){location.reload()},4000)
}