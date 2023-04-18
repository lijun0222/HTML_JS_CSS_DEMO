const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// addEventListener 第三个参数默认值为false，支持事件冒泡  为true则使用事件捕获


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}