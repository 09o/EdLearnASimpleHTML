const textEl = document.querySelector('#text')
const texts = JSON.parse(textEl.getAttribute('data-text'))

// 数组索引
let index = 0

// 每串字符中的每一个字符索引
let charIndex = 0

// 间隔时间 ms
let delta = 500

// 动画开始执行的时间
let start = null
// 每次执行一次动画返回true 对内容进行删除
let isDeleting = false

function type(time) {
  window.requestAnimationFrame(type)
  if (!start) start = time
  let progress = time - start

  if (progress > delta) {
    let text = texts[index]
    if (!isDeleting) {
      textEl.innerHTML = text.slice(0, ++charIndex)
      delta = 500 - Math.random() * 400
    } else {
      textEl.innerHTML = text.slice(0, charIndex--)
    }

    start = time

    if (charIndex === text.length) {
      isDeleting = true
      delta = 200
      start = time + 1200
    }

    if (charIndex < 0) {
      isDeleting = false
      start = time + 200
      index = ++index % texts.length
    }
    
  }
}

window.requestAnimationFrame(type)