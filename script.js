let tl = gsap.timeline();

tl.to('.img2',{
    width: '400px',height:'500px', duration:2 
})

tl.to('.translate',{
    y:'0%', opacity:1, duration: 1 
})

tl.to('.img1',{
    opacity:1,  rotate: -10, duration: 1 
})
tl.to('.img3',{
    opacity:1,  rotate: 10, duration: 1 
},"-=1")

tl.to('.wrapper p',{
    opacity:1,top:'50%', duration: 1 
})

