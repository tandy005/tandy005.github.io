const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const scrollSpy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollSpy, {
    scrollOffset: 70,
    throttle: 5000
});
