// ================= LOADER =================

window.addEventListener("load", function(){

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(function(){

            loader.style.opacity = "0";

            loader.style.transition = "0.8s ease";

            setTimeout(function(){

                loader.style.display = "none";

            },800);


        },1000);

    }

});









// ================= CUSTOM CURSOR =================


const cursor = document.querySelector(".cursor");

const cursorGlow = document.querySelector(".cursor-glow");



document.addEventListener("mousemove", function(e){


    if(cursor){

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    }



    if(cursorGlow){

        cursorGlow.style.left = e.clientX + "px";

        cursorGlow.style.top = e.clientY + "px";

    }


});









// ================= CURSOR HOVER =================


const hoverItems = document.querySelectorAll(
"a, .primary-btn, .secondary-btn, .contact-btn, .project-card"
);



hoverItems.forEach(function(item){


    item.addEventListener("mouseenter",function(){


        if(cursor){

            cursor.style.width = "55px";

            cursor.style.height = "55px";

            cursor.style.background =
            "rgba(199,0,57,0.35)";

        }


    });





    item.addEventListener("mouseleave",function(){


        if(cursor){

            cursor.style.width = "25px";

            cursor.style.height = "25px";

            cursor.style.background =
            "rgba(255,255,255,0.1)";

        }


    });


});









// ================= SCROLL REVEAL =================


const revealElements = document.querySelectorAll(
"section h2, section p, .project-card"
);





revealElements.forEach(function(element){


    element.style.opacity = "0";

    element.style.transform = "translateY(50px)";

    element.style.transition = "1s ease";


});







function revealOnScroll(){


    revealElements.forEach(function(element){


        const position =
        element.getBoundingClientRect().top;



        if(position < window.innerHeight - 100){


            element.style.opacity = "1";

            element.style.transform = "translateY(0)";


        }


    });


}





window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();









// ================= SMOOTH SCROLL =================


const links = document.querySelectorAll(
'a[href^="#"]'
);



links.forEach(function(link){


    link.addEventListener("click",function(e){


        const target =
        document.querySelector(
        link.getAttribute("href")
        );



        if(target){


            e.preventDefault();



            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});