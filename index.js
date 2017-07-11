
window.onload = () => {
  const entryContainer = document.getElementById('container')
  const currentEntryInput = document.getElementById('current-entry')
  const entryDateElement = document.getElementById('entry-date')
  currentEntryInput.addEventListener('input', addEntryTools)

  var entryDate
  var entryOptions
  function addEntryTools (e) {
    if (e.target.value) {
      if (!entryDate) {
        entryDate = new Date()
        entryDateElement.innerText = entryDate.toLocaleString()
      }
      if (!entryOptions) {
        entryOptions = document.createElement('p')
        entryOptions.className = 'entry-options'
        entryOptions.innerHTML = '<a>clear</a> | <a>done</a>'
        entryContainer.appendChild(entryOptions)
      }
    } else {
      entryDate = ''
      entryDateElement.innerText = entryDate
    }
  }
}
