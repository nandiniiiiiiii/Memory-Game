//merge two sorted array in asending order and remove duplicates

// let arr1 = [1,3,4,5,5];
// let arr2 = [2,4,4,6,8];
//output: [1,2,3,4,5,6,8];

// let arr3 = [...arr1,...arr2];
// arr3.sort((a,b)=> a- b);         //use to sort array in ascending order
// arr3 = [...new Set(arr3)];       //to remove duplicates
// console.log("array after sort: ",arr3);


//FISHER-YATES shuffle algorithm
// 1- loop from the last to the first ele
// 2- for each ele at i generate a random index b/w 0 and i
// 3- swap ele at i with j


//Code for memory game

//sort the array in randome order
let arr = ["1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6"];
for (let i = arr.length - 1; i >= 0; i--) {
    let r = Math.floor(Math.random() * i + 1);
    // console.log(r);    
    let temp = arr[i];
    arr[i] = arr[r];
    arr[r] = temp;
}
// console.log(arr);

//creating ele in the items container for these ele
for (let i = 0; i < arr.length; i++) {
    let box = document.createElement('div');
    box.classList.add('item');         //or box.className = 'item';
    box.innerHTML = arr[i];

    box.onclick = function () {
        box.classList.add('openbox');
        box.style.backfaceVisibility = "hidden";
        let boxarr = document.querySelectorAll('.openbox');
        let openbox = document.querySelectorAll('.boxmatch');
        // console.log(abox.length);
        setTimeout(() => {
            if (boxarr.length >= 2) {
                if (boxarr[0].innerHTML == boxarr[1].innerHTML) {
                    boxarr[0].classList.add('boxmatch');
                    boxarr[1].classList.add('boxmatch');
                    boxarr[0].classList.remove('openbox');
                    // boxarr[0].style.backfaceVisibility = "hidden";
                    boxarr[1].classList.remove('openbox');
                    // boxarr[1].style.backfaceVisibility = "hidden";
                    if (openbox.length+2 == arr.length) {
                        console.log(openbox.length);
                        alert("win");
                    }
                } else {
                    boxarr[0].classList.remove('openbox');
                    boxarr[0].style.backfaceVisibility = "visible";
                    boxarr[1].classList.remove('openbox');
                    boxarr[1].style.backfaceVisibility = "visible";
                }
            }
        }, 500);
    }

    document.querySelector('.items').appendChild(box);
}

