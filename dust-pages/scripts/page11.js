let para = document.getElementsByClassName('para');

//Clicks on para
Array.from(para).forEach((x) => {
    x.addEventListener("click", function run(){
        console.log('Mouse Clicked')
    })
})
//Mouseover on para
Array.from(para).forEach((x) => {
    x.addEventListener("mouseover", function run(){
        console.log('Mouse Over')
    })
})
//Mouseout on para
Array.from(para).forEach((x) => {
    x.addEventListener("mouseout", function run(){
        console.log('Mouse Out')
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