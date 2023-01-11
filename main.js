function pressToPlay() {
    let pressBtn = document.querySelector('.press');
    let mainDiv = document.querySelector('.main');

    pressBtn.addEventListener('click',(e)=>{
        e.currentTarget.classList.add('hidden');
        let table = document.querySelector('table');
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
    let table = document.querySelector('table');
    
//Choose X or O
    
    xBtn.addEventListener('click', (e) => {
        e.currentTarget.disabled = true;
        oBtn.disabled = true;
        e.currentTarget.style.backgroundColor = 'bisque';
        oBtn.style.backgroundColor = 'bisque';
        table.classList.remove('hidden');

        isX = true
       
    });
    oBtn.addEventListener('click', (e)=> {
        e.currentTarget.disabled = true;
        xBtn.disabled = true;
        e.currentTarget.style.backgroundColor = 'bisque';
        xBtn.style.backgroundColor = 'bisque';
        table.classList.remove('hidden');

        isX = false;
       
    });

    function createDiv() {
        let div = document.createElement('div');
        div.classList.add('peshka');

        return div
    };

        
    tdElements.forEach(x => {
        let divOfPeshki = createDiv();

        let firstRow = document.getElementsByClassName('firstRow');
            let firstRoowArr = []
            for(let child of firstRow[0].children){
                firstRoowArr.push(child)
            };
        let secondRow = document.getElementsByClassName('secondRow');
            let secondRowArr = []
            for(let child of secondRow[0].children){
                secondRowArr.push(child)
            };
        let thirdRow = document.getElementsByClassName('thirdRow');
            let thirdRowArr = []
            for(let child of thirdRow[0].children){
                thirdRowArr.push(child)
            };
        x.addEventListener('click', (element) =>{
            
            if ((element.target.children).length < 1) {
                element.target.appendChild(divOfPeshki);
            };
           
            if (isX) {
                
                divOfPeshki.innerText = xBtn.innerText; 
                isX = false;
        
            } else {
                divOfPeshki.innerText = oBtn.innerText;
                isX = true;
        
            };
            let isEmpty1 = isEmptyString(firstRoowArr[0],firstRoowArr[1],firstRoowArr[2])
            if (isEmpty1 != true) {
                if (detectCollision(firstRoowArr[0],firstRoowArr[1],firstRoowArr[2])) {
                    console.log('Win FirstRow');
                    document.querySelector('.table').remove();
                    document.querySelector('.press').classList.remove('hidden');
                    document.querySelector('.press').innerText = `${divOfPeshki.innerText} Win`;
   
                };
            }
            let isEmpty2 = isEmptyString(secondRowArr[0],secondRowArr[1],secondRowArr[2])
            if (isEmpty2 != true) {
                if (detectCollision(secondRowArr[0],secondRowArr[1],secondRowArr[2])) {
                    console.log('Win SecondRow');
                    document.querySelector('.table').remove();
                    document.querySelector('.press').classList.remove('hidden');
                    document.querySelector('.press').innerText = `${divOfPeshki.innerText} Win`;
                };
            }
            let isEmpty3 = isEmptyString(thirdRowArr[0],thirdRowArr[1],thirdRowArr[2])
            if (isEmpty3 != true) {
                if (detectCollision(thirdRowArr[0],thirdRowArr[1],thirdRowArr[2])) {
                    console.log('Win ThirdRow');
                    document.querySelector('.table').remove();
                    document.querySelector('.press').classList.remove('hidden');
                    document.querySelector('.press').innerText = `${divOfPeshki.innerText} Win`;
                };
            };
            let isEmpty4 = isEmptyString(firstRoowArr[0],secondRowArr[1],thirdRowArr[2])
            if (isEmpty4 != true) {
                if (detectCollision(firstRoowArr[0],secondRowArr[1],thirdRowArr[2])) {
                    console.log('Win CrossRow');
                    document.querySelector('.table').remove();
                    document.querySelector('.press').classList.remove('hidden');
                    document.querySelector('.press').innerText = `${divOfPeshki.innerText} Win`;
                };
            }; 
            let isEmpty5 = isEmptyString(thirdRowArr[0],secondRowArr[1],firstRoowArr[2])
            if (isEmpty5 != true) {
                if (detectCollision(thirdRowArr[0],secondRowArr[1],firstRoowArr[2])) {
                    console.log('Win CrossRow2');
                    document.querySelector('.table').remove();
                    document.querySelector('.press').classList.remove('hidden');
                    document.querySelector('.press').innerText = `${divOfPeshki.innerText} Win`;
                };
            };
            let isEmpty6 = isEmptyString(thirdRowArr[0],secondRowArr[0],firstRoowArr[0])
            if (isEmpty6 != true) {
                if (detectCollision(thirdRowArr[0],secondRowArr[0],firstRoowArr[0])) {
                    console.log('Win FirsrRows1');
                    document.querySelector('.table').remove();
                    document.querySelector('.press').classList.remove('hidden');
                    document.querySelector('.press').innerText = `${divOfPeshki.innerText} Win`;
                };
            };
            let isEmpty7 = isEmptyString(thirdRowArr[1],secondRowArr[1],firstRoowArr[1])
            if (isEmpty7 != true) {
                if (detectCollision(thirdRowArr[1],secondRowArr[1],firstRoowArr[1])) {
                    console.log('Win FirsrRows2');
                    document.querySelector('.table').remove();
                    document.querySelector('.press').classList.remove('hidden');
                    document.querySelector('.press').innerText = `${divOfPeshki.innerText} Win`;
                };
            };
            let isEmpty8 = isEmptyString(thirdRowArr[2],secondRowArr[2],firstRoowArr[2])
            if (isEmpty8 != true) {
                if (detectCollision(thirdRowArr[2],secondRowArr[2],firstRoowArr[2])) {
                    console.log('Win FirsrRows3');
                    document.querySelector('.table').remove();
                    document.querySelector('.press').classList.remove('hidden');
                    document.querySelector('.press').innerText = `${divOfPeshki.innerText} Win`;
                };
            };
        });
        
        
    });
 
}
buttonEvent();
function detectCollision(objectA,objectB,objectC) {
    let first = objectA;
    let second = objectB;
    let third = objectC;
    

    let hasCollision = (((first.innerText == second.innerText) && (second.innerText == first.innerText) && (third.innerText == second.innerText)))

    return hasCollision
};

function isEmptyString(objectA,objectB,objectC) {
    let first = objectA;
    let second = objectB;
    let third = objectC;

    let isEmpty = ((first.innerText == '') && (second.innerText == '') && (third.innerText == ''));

    return isEmpty
};
