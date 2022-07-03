let title = document.querySelector(".title");
let divs = document.querySelectorAll(".square");
let turn = "x";
let squares = [];


function reload() {
    title.innerHTML = "Reload";
        title.style.color = "#fa0";
        setInterval(() => {
            title.innerHTML += `.`;
        }, 1000);
        setTimeout(() => {
            location.reload();
        }, 3000);
}

function end(num1, num2, num3) {
    title.innerHTML = `${squares[num1]} IS WIN`;
    title.style.color = "#fa0";
    document.getElementById('item' + num1).style.background = "green";
    document.getElementById('item' + num2).style.background = "green";
    document.getElementById('item' + num3).style.background = "green";

    setInterval(() => {
        title.innerHTML += `.`;
    }, 1000);
    setTimeout(() => {
        location.reload();
    }, 3000);
}

function winner() {
    for (let i = 1; i < 10; i++) {

        squares[i] = document.getElementById(`item${i}`).innerHTML;
    }

    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != "") {
        end(1, 2, 3);

    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != "") {
        end(4, 5, 6);

    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != "") {
        end(7, 8, 9);

    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != "") {
        end(1, 5, 9);

    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != "") {
        end(3, 5, 7);

    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != "") {
        end(1, 4, 7);

    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != "") {
        end(2, 5, 8);

    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != "") {
        end(3, 6, 9);

    } else if (squares[1] != "" && squares[2] != "" && squares[3] != "" && squares[4] != "" && squares[5] != "" && squares[6] != "" && squares[7] != "" && squares[8] != "" && squares[9] != "") {
        reload();   
    }
}

divs.forEach((e) => {
    e.addEventListener('click', () => {
        if (turn === "x" && e.innerHTML === "") {
            e.innerHTML = "X";
            turn = 'o';
            title.innerHTML = "O";
        } else if (turn === "o" && e.innerHTML === "") {
            e.innerHTML = "O";
            turn = 'x';
            title.innerHTML = "X";
        }
        winner();
    });
});

