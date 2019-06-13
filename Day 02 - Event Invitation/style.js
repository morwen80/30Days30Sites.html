const submitBtn = document.querySelector("#submit")

const confirmBooking = () => {
  const username = document.querySelector("#name").value
  alert(`Thanks, ${username}. We're looking forward to have you!`)
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  confirmBooking()
})
