
// function to queryelements
function qEl(el, all){
  if(all){
    return document.querySelectorAll(`.${el}`)
  } else {
    return document.querySelector(`.${el}`)
  }
}

// elements that needs to be resized
export function resizeElements() {
  return {
    main_container: qEl('main-container', 0),
    navbar_container: qEl('navbar-container', 0),
    menu_container: qEl('menu-container', 0),
    menu_wrapper: qEl('menu-wrapper', 0),
    menu_runner: qEl('menu-runner', 0),
    top_container: qEl('top-container', 0)
  }
}

// elements for the menu items
export function navHoverElements() {
  return {
    middle: qEl('middle-span', 0),
    close_paths: qEl('menu-close path', 0),
    back: qEl('back-span', 0),
    front: qEl('front-text', 0)
  }
}

// logo element animation
export function logoElements() {
  return {
    t: qEl('navbar-logo .top-line', 0),
    r: qEl('navbar-logo .right-line', 0),
    b: qEl('navbar-logo .bottom-line', 0),
    l: qEl('navbar-logo .left-line', 0),
  }
}

// menu click animation elements
export function menuClickElements () {
  return {
    container: qEl('container', 0),
    menu_runners: qEl('menu-runners', 1),
    square_img: qEl('square-img', 0),
    right_icons: qEl('right-icons', 0),
    menu_list_container: qEl('menu-list-container', 1),
    copyright_runner: qEl('copyright-runner', 0),
    social_navicons: qEl('social-navicons', 0),
    menu_container: qEl('menu-container', 0),
    text_active: qEl('active .menu-list-text', 0),
    backer_active: qEl('active .menu-list-backer', 0),
    section_block: qEl('section-block-container', 0),
    short_project: qEl('short-project-container', 0)
  }
}


export function topLayoverElements() {
  return {
    svg: qEl('top-layover-logo svg', 0),
    text: qEl('top-loading', 0),
    runner: qEl('top-runner', 0),
    top: qEl('top-layover', 0),
    container: qEl('container', 0)
  }
}

export function projectResizeEl() {
  return {
    img_desc: qEl('project-img-desc', 1),
    project_img: qEl('project-image', 1),
    img_backer: qEl('img-backer', 1),
    project_text_desc: qEl('project-text-desc', 1),
  }
}

export function hoverProjectEl (el) {
  let parent = el.closest('.projects-wrapper')
  return {
    img : parent.querySelector('.project-img'),
    img_backer : parent.querySelector('.img-backer'),
    title : parent.querySelector('.p-reveal'),
    desc : parent.querySelector('.p-desc-content'),
    button : parent.querySelector('.button-wrapper')
  }
}
