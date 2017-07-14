
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
        createEntryTools()
      }
    } else {
      entryDate = ''
      entryDateElement.innerText = entryDate
    }
  }

  function createEntryTools () {
    entryOptions = document.createElement('div')
    entryOptions.className = 'entry-options'

    var clearLink = document.createElement('a')
    clearLink.innerText = 'clear'
    clearLink.addEventListener('click', (e) => {
      e.preventDefault()
      currentEntryInput.value = ''
      currentEntryInput.focus()
    })

    var doneLink = document.createElement('a')
    doneLink.innerText = 'done'
    doneLink.addEventListener('click', (e) => {
      e.preventDefault()
      console.log('f')
      currentEntryInput.focus()
    })

    entryOptions.appendChild(clearLink)
    entryOptions.appendChild(document.createTextNode(' | '))
    entryOptions.appendChild(doneLink)

    entryContainer.appendChild(entryOptions)
  }
}
