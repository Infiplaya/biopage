window.addEventListener('DOMContentLoaded', () => {
    VANTA.FOG({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xf20574,
        midtoneColor: 0x05f2f2,
        lowlightColor: 0x014040,
        baseColor: 0x014040,
        blurFactor: 0.50,
        speed: 1,
        })

    setTimeout(() => {
        const main = document.querySelector('main')
        main.style.opacity = 1
        main.style.filter = 'blur(0px)'
    }, 200)
})