const tableBody = document.getElementById('table-body')

let flights = [
  {
    time: "10:00",
    destination: "FRANKFURT",
    flight: "OX 203",
    gate: "31",
    remarks: "ON TIME"
   },
  {
    time: "11:10",
    destination: "WIEDEŃ",
    flight: "OS 626",
    gate: "28",
    remarks: "BOARDING"
   },
   {
    time: "13:30",
    destination: "SOFIA",
    flight: "LO 631",
    gate: "23N",
    remarks: "CANCELLED"
  },
  {
    time: "14:01",
    destination: "PRAGA",
    flight: "LO 523",
    gate: "6",
    remarks: "ON TIME"
  },
  {
    time: "15:22",
    destination: "BANGKOK",
    flight: "LO 783",
    gate: "36",
    remarks: "DELAYED"
  }
]
const destinations = ["BANGKOK", "PRAGA", "SOFIA", "WIEDEŃ", "FRANKFURT", "RZYM"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15

function populateTable() {
    for (const flight of flights) {
      const tableRow = document.createElement("tr")
      const tableIcon = document.createElement("td")
      tableIcon.textContent = "✈"
      tableRow.append(tableIcon)
  
      for (const flightDetail in flight) {
        const tableCell = document.createElement("td")
        const word = Array.from(flight[flightDetail])
  
        for (const [index, letter] of word.entries()) {
          const letterElement = document.createElement("div")
          setTimeout(() => {
            letterElement.classList.add('flip')
            letterElement.textContent = letter
            tableCell.append(letterElement)
          }, 100 * index)
  
  
        }
        tableRow.append(tableCell)
      }
      tableBody.append(tableRow)
    }
  }
  populateTable() 
  
  function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  }
  
  function generateRandomNumber(maxNumber) {
    const numbers = "0123456789"
    if (maxNumber) {
      const newNumbers = numbers.slice(0, maxNumber)
      return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    } else {
      return numbers.charAt(Math.floor(Math.random() * numbers.length))
    }
  }
  
  function generateTime() {
    let displayHour = hour
    if (hour < 24) {
      hour++
    }
    if (hour >= 24) {
      hour = 1
      displayHour = hour
    }
    if (hour < 10) {
      displayHour = "0" + hour
    }
    return displayHour +  ":" + generateRandomNumber(5) + generateRandomNumber()
  }
  
  function shuffleUp() {
    flights.shift()
    flights.push({
      time: generateTime(),
      destination: destinations[Math.floor(Math.random() * destinations.length)],
      flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
      gate: generateRandomLetter() + " " + generateRandomLetter() + generateRandomLetter(),
      remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = ""
    populateTable()
  }
  
  
  setInterval(shuffleUp, 5000)