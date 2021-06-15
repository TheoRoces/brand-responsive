
// SCROLL MAGIC

$(document).ready(function(){

    var controller = new ScrollMagic.Controller();


    var ourScene = new ScrollMagic.Scene({

        triggerElement: '.cadrebox1',
        reverse: true

    })


        .setClassToggle('.cadrebox1', 'show')
        .addTo(controller);


    var ourScene2 = new ScrollMagic.Scene({

        triggerElement: '.cadrebox2',
        reverse: true

    })


        .setClassToggle('.cadrebox2', 'show')
        .addTo(controller);


    var ourScene3 = new ScrollMagic.Scene({

        triggerElement: '.cadrebox3',
        reverse: true

    })


        .setClassToggle('.cadrebox3', 'show')
        .addTo(controller);
})

// // BackGround Effet Souris

// let balls = document.getElementsByClassName("eyecircle");

// document.onmousemove = function () {

//     let x = event.clientX * 100 / window.innerWidth + "%";
//     let y = event.clientY * 100 / window.innerHeight + "%";


//     for (let i = 0; i < 2; i++) {
//         balls[i].style.left = x;
//         balls[i].style.top = y;
//         balls[i].style.transform = "translate(+" + x + ",+" + y + ")";
//     }

//     console.log("x =" + x);
//     console.log("y = " + y);
// }
