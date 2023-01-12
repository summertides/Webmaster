var a = document.querySelectorAll('a');
const cursorInner = document.getElementById("cursorB")
const cursorOuter = document.getElementById("cursorA")

const cursorMove = (e)=> {
    const coordinateX = e.clientX;
    const coordinateY = e.clientY;

    cursorInner.style.transform = `translate3d(${coordinateX}px, ${coordinateY}px, 0)`;
    cursorOuter.style.transform = `translate3d(${coordinateX}px, ${coordinateY}px, 0)`;
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

a.forEach(item => {
    item.addEventListener('mousedown', () => {
        cursorInner.classList.add('cursorDown');
    })

    item.addEventListener('mouseup', () => {
        cursorInner.classList.remove('cursorDown')
    })
})