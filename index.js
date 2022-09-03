document.lastscrollposition = 0;
document.lastcentered = 0;
document.onwayto = null;
document.addEventListener('scroll',() => {
    const direction = window.pageYOffset - document.lastscrollposition > 0 ? 'down' : 'up' ;
    const sections = [...document.querySelectorAll('section')];

    if (document.onwayto === null) {
        const destindex = direction === 'up' ? document.lastcentered - 1 : document.lastcentered + 1;

        if (destindex >= 0 && destindex < sections.length) {

            console.log({destindex,direction});
            document.onwayto = destindex;
            window.scroll(0,sections[destindex].offsetTop);
        }
    }

   

    sections.forEach((section,index) => {
        if (window.pageYOffset === section.offsetTop) {
            document.lastcentered = index;
            section.className = 'active';
            if (document.onwayto === index) {
                document.onwayto = null;
            }
        }
    })

    document.lastscrollposition = window.pageYOffset;
});