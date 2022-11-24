// select el 
//const myInput = document.getElementById('exampleFormControlInput1')
//console.log(myInput);
//return HTML element //! one el

//const myInput = document.getElementsByTagName('input')
//console.log(myInput)
//returns HTMLCollection

//const myInput = document.getElementsByClassName('form-control')
//console.log(myInput);
//returns HTMLCollection

//const myInput = document.querySelector('div')
//console.log(myInput);
//return HTML ELEment ! one el

//const myInput = document.querySelector('.container')
//console.log(myInput);
//querySelector works on selectors !!
//returns HTML el


//const container = document.querySelectorAll('div')
//works on selectors
//returns NodeList

//difference between HTMLCollection and NodeList
//const container = document.getElementsByTagName('div')
//const container = document.querySelectorAll('div')
//container[0].remove()
//HTMLCollection ==> live ==> update for the modification
//console.log(container);
// NodeList ==> static ==> we don't see the modification

//change  the class Name
//1)
//const container2 = document.getElementById('container2')
//container2.className = 'section'
//console.log(container2);
// property className change the value of class

//2)
//container2.classList.add('section2')
// add another class

//3)
//container2.setAttribute('class','section3')
//console.log(container2);
//change the value of class

//add eventListen
//const myBtn = document.getElementById('myBtn')
//const text = document.getElementById('para')
//myBtn.addEventListener('click',function(){
  //  text.style.color= 'red'
//})

// select all el
const myBtn = document.getElementById('myBtn')
myBtn.addEventListener('click',function(){
    //create elements
    const row = document.createElement('div')
    row.className='row'
    const text = document.createElement('h3')
    let myInput = document.getElementById('exampleFormControlInput1')
    text.innerHTML = myInput.value 

    //create a btn
    const DeleteBtn = document.createElement('button')
    DeleteBtn.innerHTML = 'Delete'
    DeleteBtn.className = 'btn btn-danger'
    

    const DoneBtn = document.createElement('button')
    DoneBtn.innerHTML = 'Done'
    DoneBtn.className = 'btn btn-secondary'
    console.log(DoneBtn);

    const line = document.createElement('hr')
  
    //append el with div container
    const container = document.querySelector('.container')
    console.log(container);

    row.appendChild(text)
    row.appendChild(DeleteBtn)
    row.appendChild(DoneBtn)
    row.appendChild(line)
    container.appendChild(row)
    console.log(row);
 
    myInput.value = ''

   //Delete todo
   DeleteBtn.addEventListener('click',function(){
      row.remove()
   })

   //toggle al done btn
   //method1
   DoneBtn.addEventListener('click',function(){
    text.classList.toggle('toggle_red')
    //method2
  /*  if(text.style.color='black'){

    return text.style.color='red'
   }
   else {
    return text.style.color='red'
   } */
   })
   




})











