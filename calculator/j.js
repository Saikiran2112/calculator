let string=''
let btn=document.querySelectorAll('.btn')
let write=document.getElementById('write')
Array.from(btn).forEach(function(element){
    element.addEventListener('click',function(e){
        if(e.currentTarget.innerText=='='){
            string=eval(string)
            write.value=string
        }
        else if(e.currentTarget.innerText=='C') {
            write.value=''
            string=''
        
        }
        else{
            string=string+e.currentTarget.innerText
            console.log(string)
            write.value=string
        }
        
    })
})