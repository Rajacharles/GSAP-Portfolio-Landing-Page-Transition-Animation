const navLink = document.querySelectorAll('.nav_link');
function linkAct() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}

navLink.forEach(n => n.addEventListener('click', linkAct));

//Left-Menu
TweenMax.from('.left_menu', 1, {
    delay:2.5,
    opacity:0,
    x:-50,
    ease:Expo.easeInOut
})

//Nav - Links
TweenMax.from('.nav_links_content ul li', 1, {
    delay:3.5,
    opacity:0,
    x:100,
    ease:Expo.easeInOut
}, 0.08)

//Search Icon
TweenMax.from('.search_icon', 1, {
    delay:2.5,
    opacity:0,
    x:-50,
    ease:Expo.easeInOut
})

//Large Text
TweenMax.from('.larger_text_content', 1, {
    delay:4,
    opacity:0,
    y:-100,
    ease:Expo.easeInOut
})

//Description Content
TweenMax.from('.desc_content', 1, {
    delay:4.5,
    opacity:0,
    x:100,
    ease:Expo.easeInOut
})

//Overlay
TweenMax.to('.overlay', 2, {
    delay:1,
    top:"-100%",
    ease:Expo.easeInOut
})