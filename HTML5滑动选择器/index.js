const sliderEl = document.querySelector('#slider-input')

const selectedEl = document.querySelector('.selected')

// input 事件 当滑动按钮触发
sliderEl.addEventListener('input', () => {
  selectedEl.innerHTML = sliderEl.value
})
