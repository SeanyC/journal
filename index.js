
window.onload = () => {
  const entryContainer = document.getElementById('container')
  const currentEntryInput = document.getElementById('current-entry')
  const entryDateElement = document.getElementById('entry-date')
  const entryOptionsElement = document.getElementById('entry-options')
  currentEntryInput.addEventListener('input', addEntryTools)

  var entryDate
  var entryOptions = false

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
      clearTheTable()
    }
  }

  function createEntryTools () {
    entryOptions = true

    var clearLink = document.createElement('a')
    clearLink.innerText = 'clear'
    clearLink.addEventListener('click', (e) => {
      e.preventDefault()
      currentEntryInput.value = ''
      clearTheTable()
      currentEntryInput.focus()
    })

    var doneLink = document.createElement('a')
    doneLink.innerText = 'done'
    doneLink.addEventListener('click', (e) => {
      e.preventDefault()
      console.log('done -- save')
      currentEntryInput.focus()
    })

    entryOptionsElement.appendChild(clearLink)
    entryOptionsElement.appendChild(document.createTextNode(' | '))
    entryOptionsElement.appendChild(doneLink)
  }

  function clearTheTable() {
    clearEntryTools()
    clearEntryDate()
  }

  function clearEntryTools () {
    entryOptions = ''
    entryOptionsElement.innerText = entryOptions
  }

  function clearEntryDate () {
    entryDate = ''
    entryDateElement.innerText = entryDate
  }

}
