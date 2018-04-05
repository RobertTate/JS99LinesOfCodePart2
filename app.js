
let friends = ['THOMAS', 'IVES', 'JUSTIN', 'CHRIS', 'KENNY'];

let button = document.getElementsByTagName('button')[0];


button.addEventListener('click', function () {

     for (let f = 0; f < friends.length; f++) {
         let div = document.createElement("div");
         div.className = "friend";
         let h3 = document.createElement("h3");
         let friendsName = document.createTextNode(`${friends[f]}`);
         h3.appendChild(friendsName);
         div.appendChild(h3);
         document.body.appendChild(div);
         
        for (let i = 10; i >= 1; i--) {

            let p = document.createElement('p');
            let pTextLast = document.createTextNode(`${(i)} line of code in the file, ${(i)} line of code; ${friends[0]} strikes one out, clears it all out, 0 lines of code in the file`);
            let pTextFirst = document.createTextNode(`${(i)} lines of code in the file, ${(i)} lines of code; ${friends[0]} strikes one out, clears it all out, ${(i - 1)} lines of code in the file`);

            if (i == 1) {
                p.appendChild(pTextLast);
                document.body.appendChild(p);
            } else {
                p.appendChild(pTextFirst);
                document.body.appendChild(p);
            }
        }

     };
})





