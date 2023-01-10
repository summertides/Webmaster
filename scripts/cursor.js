var a = document.querySelectorAll('a');
const cursorInner = document.getElementById("cursorB")

const cursorMove = (e)=> {
    const coordinateX = e.clientX;
    const coordinateY = e.clientY;

    cursorInner.style.transform = `translate3d(${coordinateX}px, ${coordinateY}px, 0)`;
}

window.addEventListener('mousemove', cursorMove)

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursorInner.classList.add('cursorHover');
    })

    item.addEventListener('mouseleave', () => {
        cursorInner.classList.remove('cursorHover');
    })
})
