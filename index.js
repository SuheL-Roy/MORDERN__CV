

$(document).ready(function(){

    $('#profile_ripple').ripples({
        resolution:512,
        dropRadius:10

    });
    const bars=document.querySelectorAll('.progress__bar');
    bars.forEach(function(bar){
        let percentage=bar.dataset.percent;
        let tooltip=bar.children[0];
        tooltip.innerText=percentage + '%';
        bar.style.width=percentage + '%';


    });

    const counter=document.querySelectorAll('.counter');
    //console.log(counter);
    function runCounter(){
        counter.forEach(counter=>{
            counter.innerText=0;
            let target=counter.dataset.count;
            let step=target/100;
           
            let countit=function(){
               let displayed=+counter.innerText;
               if(displayed<target){
                   counter.innerText=Math.ceil(displayed + step);
                  // console.log(displayed);
                   setTimeout(countit,1);
               }else{
                   counter.innerText=target;
               }
            }
            countit();

        });
    }
   
    let counterSection=document.querySelector('.counter__wraper');
    let options={
        rootMargin:'0px 0px -200px 0px'
    }
    let done=0;

    const sectionObserver=new IntersectionObserver(function (entries) {
        if(entries[0].isIntersecting && done !==1){
            done=1;
            runCounter();

        }
        sectionObserver.observe(counterSection);
    },options);

    sectionObserver.observe(counterSection);

   

    var $wrapper=$('.portfolio__wrapper');


    $wrapper.isotope({
        filter:'*',
        layoutmode:'masonry',
        animationOptions:{
            duration:750,
            easing:'linear'

        }

    });

    var links =document.querySelectorAll('.tab a');

    links.forEach(link=>{
        let selector=link.dataset.filter;
        //console.log(selector);

        link.addEventListener('click', function(e){

            e.preventDefault();
            $wrapper.isotope({
                filter: selector,
                layoutmode:'masonry',
                animationOptions:{
                    duration:750,
                    easing:'linear'
        
                }
        
            });
            
            links.forEach(link=>{
                link.classList.remove('active');


            });
            e.target.classList.add('active');
        });

    });

    $('.magnify').magnificPopup({
        type:'image',
        gallery:{
            enabled:true

        },
        zoom:{
            enabled:true
        }
    });
    
    $('.slider').slick({
        arrows:false,
        autoplay:true
        

    });
    
   
});