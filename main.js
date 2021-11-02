let COLORS = ['rgb(153, 0, 51)', 'rgb(153, 51, 51)', 'rgb(179, 0, 0)', 'rgb(255, 0, 0)', 'rgb(204, 41, 0)', 'rgb(179, 89, 0)', 'rgb(204, 163, 0)', 'rgb(204, 204, 0)', 'rgb(153, 153, 0)', 'rgb(85, 128, 0)', 'rgb(179, 0, 89)', 'rgb(179, 0, 0)', 'rgb(255, 119, 51)', 'rgb(255, 102, 0)', 'rgb(255, 153, 51)', 'rgb(255, 214, 51)', 'rgb(255, 204, 0)', 'rgb(230, 230, 0)', 'rgb(153, 204, 0)', 'rgb(102, 102, 51)', 'rgb(204, 0, 102)', 'rgb(255, 51, 51)', 'rgb(255, 148, 77)', 'rgb(255, 153, 51)', 'rgb(255, 204, 0)', 'rgb(255, 255, 0)', 'rgb(255, 255, 102)', 'rgb(204, 255, 51)', 'rgb(102, 153, 0)', 'rgb(51, 102, 0)', 'rgb(255, 0, 102)', 'rgb(255, 80, 80)', 'rgb(255, 102, 102)', 'rgb(255, 153, 102)', 'rgb(255, 204, 102)', 'rgb(255, 255, 153)', 'rgb(204, 255, 102)', 'rgb(153, 255, 102)', 'rgb(51, 204, 51)', 'rgb(51, 153, 51)', 'rgb(204, 51, 153)', 'rgb(255, 51, 153)', 'rgb(255, 102, 153)', 'rgb(255, 153, 153)', 'rgb(255, 204, 153)', 'rgb(255, 255, 204)', 'rgb(204, 255, 153)', 'rgb(153, 255, 153)', 'rgb(102, 255, 102)', 'rgb(0, 204, 102)', 'rgb(204, 0, 204)', 'rgb(255, 102, 255)', 'rgb(255, 153, 255)', 'rgb(255, 179, 209)', 'rgb(255, 230, 240)', 'rgb(255, 255, 255)', 'rgb(204, 255, 204)', 'rgb(153, 255, 204)', 'rgb(0, 255, 153)', 'rgb(51, 153, 102)', 'rgb(153, 51, 153)', 'rgb(179, 0, 179)', 'rgb(217, 102, 255)', 'rgb(230, 204, 255)', 'rgb(242, 230, 255)', 'rgb(230, 242, 255)', 'rgb(230, 255, 255)', 'rgb(102, 255, 255)', 'rgb(0, 204, 153)', 'rgb(0, 153, 153)', 'rgb(153, 0, 204)', 'rgb(204, 51, 255)', 'rgb(204, 102, 255)', 'rgb(204, 153, 255)', 'rgb(230, 204, 255)', 'rgb(179, 215, 255)', 'rgb(179, 255, 255)', 'rgb(0, 230, 230)', 'rgb(0, 179, 179)', 'rgb(51, 102, 153)', 'rgb(102, 0, 204)', 'rgb(153, 51, 255)', 'rgb(153, 102, 255)', 'rgb(153, 153, 255)', 'rgb(179, 179, 255)', 'rgb(144, 192, 240)', 'rgb(128, 204, 255)', 'rgb(115, 180, 250)', 'rgb(77, 77, 255)', 'rgb(0, 61, 153)', 'rgb(77, 0, 153)', 'rgb(122, 0, 204)', 'rgb(163, 102, 255)', 'rgb(102, 102, 255)', 'rgb(128, 128, 255)', 'rgb(0, 123, 255)', 'rgb(0, 153, 255)', 'rgb(0, 122, 204)', 'rgb(0, 0, 204)', 'rgb(0, 0, 128)']

let body = document.querySelector('body');
// body.style['background-color'] = randomColor();
// body.style['background-color'] = 'rgb(255, 204, 0)';

let wearbyProject = document.querySelector('#wearby-project');
let wearbyBody = document.querySelector('.wearby-project-body');
let wearbyImageCont = document.querySelector('.wearby-image-cont');
let wearbyImage = document.querySelector('.wearby-image');
let wearbyDesc = document.querySelector('#wearby-desc');
let wearbyList = document.querySelector('#wearby-tech');

let dullProject = document.querySelector('#dull-project');
let dullBody = document.querySelector('.dull-project-body');
let dullImageCont = document.querySelector('.dull-image-cont');
let dullImage = document.querySelector('.dull-image');
let dullDesc = document.querySelector('#dull-desc');
let dullList = document.querySelector('#dull-tech');

let fluxProject = document.querySelector('#flux-project');
let fluxBody = document.querySelector('.flux-project-body');
let fluxImageCont = document.querySelector('.flux-image-cont');
let fluxImage = document.querySelector('.flux-image');
let fluxDesc = document.querySelector('#flux-desc');
let fluxList = document.querySelector('#flux-tech');

let jessImage = document.querySelector('.about-circle');
let jessResume = document.querySelector('.resume-image');

function randomColor() {
  let num = Math.floor(Math.random() * 100);
  let color = COLORS[num];
  return color;
}

function addProject(project, projectBody, list, desc, image, imageClass, imageCont = false) {

  return () => {

    project.classList.toggle('clicked-project');
    projectBody.classList.toggle('clicked-project-body');
    image.classList.toggle(imageClass);
    desc.classList.toggle('project-desc-clicked');
    list.classList.toggle('clicked-list');
    if (imageCont) imageCont.classList.toggle('clicked-image');
  }
}

wearbyProject.addEventListener('click', addProject(wearbyProject, wearbyBody, wearbyList, wearbyDesc, wearbyImage, 'wearby-clicked-image', wearbyImageCont));
dullProject.addEventListener('click', addProject(dullProject, dullBody, dullList, dullDesc, dullImage, 'dull-clicked-image', dullImageCont));
fluxProject.addEventListener('click', addProject(fluxProject, fluxBody, fluxList, fluxDesc, fluxImage, 'flux-clicked-image', fluxImageCont));
jessImage.addEventListener('click', () => {
  jessImage.classList.toggle('jess-image-clicked');
  jessResume.classList.toggle('jess-clicked');
});