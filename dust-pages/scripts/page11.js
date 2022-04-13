let para = document.getElementsByClassName('para');

Array.from(para).forEach((x) => {
    x.addEventListener("click", function run(){
        console.log('Mouse Clicked')
    })
})

function toggleHide(){
    
    let para = document.getElementsByClassName('para');
    
    Array.from(para).forEach((x) => {
        if(x.style.display != 'none'){
            x.style.display = 'none';
        }
        else{
            x.style.display = 'block';
        }
    })
}