document.getElementById('url').addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        getInput();
    }
});


function getInput(){
    var urlVal = document.getElementById('url').value;
}


