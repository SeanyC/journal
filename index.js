
window.onload = () => {
  const currentEntryInput = document.getElementById('current-entry')
  const entryDateElement = document.getElementById('entry-date')
  currentEntryInput.addEventListener('input', addDateToEntry)

  var entryDate
  function addDateToEntry (e) {
    if (e.target.value) {
      if (!entryDate) {
        entryDate = new Date()
        entryDateElement.innerText = entryDate.toLocaleString()
      }
    } else {
      entryDate = ''
      entryDateElement.innerText = entryDate
    }
  }
}
