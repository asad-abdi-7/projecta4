const nexts=document.querySelector("#next")
const preve=document.querySelector("#prev")
const image=document.querySelector("#imag")
const imges=["ima/asad copy.jpg",
    "ima/ol.jpg",
    "ima/asad2 copy.jpg",
    "ima/l1.jpg",
    "ima/44.jpg",
    "ima/55.jpg",
]
let currentnumber=document.querySelector("#hq")


let indexnumber=0
image.src=imges[indexnumber]
nexts.addEventListener("click", function(){
    indexnumber++
    if(indexnumber<imges.length -0){
        image.src=imges[indexnumber]
        
        currentnumber.innerHTML=indexnumber
        
    }

    if(indexnumber==imges.length ){
        currentnumber.innerHTML="dhaamad"
    }
    
})

preve.addEventListener("click", function(){
    indexnumber--
    if(indexnumber>0){
        
        image.src=imges[indexnumber]
        currentnumber.innerHTML=indexnumber
    }
    if(indexnumber==imges.length ){
        currentnumber.innerHTML="dhaamad"
    }
})


