//const ratio = .1
//const options = {
//  root: null,
//  rootMargin: '0px',
//  threshold: ratio
//}
//
//const handleIntersect = function (entries, observer) {
//  entries.forEach(function (entry) {
//    if (entry.intersectionRatio > ratio) {
//
//      observer.unobserve(entry.target)
//    }
//
//    })
//}
//
//const observer = new IntersectionObserver(handleIntersect, options)
//observer.observe(document.querySelector('.reveal'))
//
const sr = ScrollReveal();

sr.reveal('.scroll', {
  origin:'left',
  distance:'200px',
  duration:2000,
  reset:true,

});
