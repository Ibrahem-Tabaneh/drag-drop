
var btn=document.getElementById('btn');
var inputt=document.getElementById('inputt');
var boxs=document.querySelectorAll('.box');
var drag=null;


btn.onclick=function(){
    if(inputt.value!='')
    {
       boxs[0].innerHTML+=
       `<p  draggable="true" class="element">${inputt.value}</p>` ; 
       inputt.value='';

       aa();
   
    }  
}


function aa(){
var elements=document.querySelectorAll('.element');

elements.forEach(i=>{

    i.addEventListener('dragstart',function(){
        i.style.opacity='0.5';
        drag=i;
       });

       
   i.addEventListener('dragend',function(){
    i.style.opacity='1';
    drag=null;
   });
    
     boxs.forEach(itemm=>{
        itemm.addEventListener('dragover',function(e){
            e.preventDefault();
            itemm.style.background='green';
            itemm.style.color='#fff';
        })

        itemm.addEventListener('dragleave',function(){
            itemm.style.background='#fff';
            itemm.style.color='#000';
        })
        itemm.addEventListener('drop',function(){
           
        itemm.append(drag); 
        itemm.style.background='#fff';
        itemm.style.color='#000';
        })
     })
    

})

}
