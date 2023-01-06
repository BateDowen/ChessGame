function pressToPlay() {
    let pressBtn = document.querySelector('.press');
    let mainDiv = document.querySelector('.main');

    pressBtn.addEventListener('click',(e)=>{
        e.currentTarget.classList.add('hidden');
        let table = document.querySelector('table');
        table.classList.remove('hidden');
        mainDiv.appendChild(table);
        document.querySelector('.O').disabled = false;
        document.querySelector('.X').disabled = false;


    });

}
pressToPlay()

function buttonEvent() {
    let tdElements = document.querySelectorAll('td');
    let xBtn = document.querySelector('.X');
    let oBtn = document.querySelector('.O');
    let isX = Boolean;

    
    xBtn.addEventListener('click', (e) => {
        e.currentTarget.disabled = true;
        e.currentTarget.style.backgroundColor = 'bisque';
        isX = true
       
    });
    oBtn.addEventListener('click', (e)=> {
        e.currentTarget.disabled = true;
        e.currentTarget.style.backgroundColor = 'bisque';
        isX = false;
       
    });

    function createDiv() {
        let div = document.createElement('div');
        div.classList.add('peshka');

        return div
    };

        
    tdElements.forEach(x => {
        let divOfPeshki = createDiv();
        
        x.addEventListener('click', (element) =>{
            
            
            if ((element.target.children).length < 1) {
                element.target.appendChild(divOfPeshki)
            };
           
            if (isX) {
                divOfPeshki.innerText = xBtn.innerText; 
                isX = false;
        
            } else {
                divOfPeshki.innerText = oBtn.innerText;
                isX = true;
        
            };
            
        });
        
        
        });


}
buttonEvent()