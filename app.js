// Select counters and sidebar
const copyCountEl = document.getElementById("CopyCount");
const coinCountEl = document.getElementById("CoinCount");
const heartCountEl = document.getElementById("HeartCount");
const callHistoryText = document.getElementById("callHistoryText");
const sidebar = document.getElementById("sidebar");

// Initialize counts
let copyCount = parseInt(copyCountEl.textContent);
let coinCount = parseInt(coinCountEl.textContent);
let heartCount = parseInt(heartCountEl.textContent);

// Copy number 
function copyNumber(numberId) {
    const number = document.getElementById(numberId).textContent;
    navigator.clipboard.writeText(number).then(() => {
        copyCount++;
        copyCountEl.textContent = copyCount;
        alert("Copied: " + number);
    });
}

// Call number 

// Call number 
function callNumber(numberId, serviceName) {
    const number = document.getElementById(numberId).textContent;

    if (coinCount < 20) {
        alert("Insufficient coins!");
        return;
    }

    coinCount -= 20;
    coinCountEl.textContent = coinCount;

    alert("Calling " + serviceName + " (" + number + ")");

    // Add to call history
    const time = new Date().toLocaleTimeString();
    const historyContainer = document.getElementById("historyContainer");
    const callHistoryText = document.getElementById("callHistoryText");

    // Remove "empty history" text if it exists
    if (callHistoryText) callHistoryText.remove();

    const entry = document.createElement("div");
    entry.className = "flex justify-between items-center p-1 text-xs bg-gray-100 rounded-xl my-2";
    entry.innerHTML = `
    <div class="">
      <p class="font-semibold text-black">${serviceName}</p>
      <p class="text-gray-600 text-xs">${number}</p>
    </div>
    <p class="text-gray-500 text-xs">${time}</p>
  `;
    historyContainer.appendChild(entry);
}

// Clear history function
function clearHistory() {
    const historyContainer = document.getElementById("historyContainer");
    historyContainer.innerHTML = `
    <p id="callHistoryText">Your call history is empty.</p>
  `;
}


document.querySelector("#sidebar button").addEventListener("click", clearHistory);

// Heart click
function increaseHeart() {
    heartCount++;
    heartCountEl.textContent = heartCount;
}

// Attach copy events
document.getElementById("NationalCopy").addEventListener("click", function () {
    copyNumber("NationalNumber");
});
document.getElementById("PoliceCopy").addEventListener("click", function () {
    copyNumber("PoliceNumber");
});
document.getElementById("FireCopy").addEventListener("click", function () {
    copyNumber("FireNumber");
});
document.getElementById("AmbulanceCopy").addEventListener("click", function () {
    copyNumber("AmbulanceNumber");
});
document.getElementById("WomenCopy").addEventListener("click", function () {
    copyNumber("WomenNumber");
});
document.getElementById("CorruptionCopy").addEventListener("click", function () {
    copyNumber("CorruptionNumber");
});
document.getElementById("ElectricityCopy").addEventListener("click", function () {
    copyNumber("ElectricityNumber");
});
document.getElementById("BracCopy").addEventListener("click", function () {
    copyNumber("BracNumber");
});
document.getElementById("RailCopy").addEventListener("click", function () {
    copyNumber("RailNumber");
});

// Attach call events
document.getElementById("NationalCall").addEventListener("click", function () {
    callNumber("NationalNumber", "National Emergency Number");
});
document.getElementById("PoliceCall").addEventListener("click", function () {
    callNumber("PoliceNumber", "Police Helpline Number");
});
document.getElementById("FireCall").addEventListener("click", function () {
    callNumber("FireNumber", "Fire Service Number");
});
document.getElementById("AmbulanceCall").addEventListener("click", function () {
    callNumber("AmbulanceNumber", "Ambulance Service");
});
document.getElementById("WomenCall").addEventListener("click", function () {
    callNumber("WomenNumber", "Women & Child Helpline");
});
document.getElementById("CorruptionCall").addEventListener("click", function () {
    callNumber("CorruptionNumber", "Anti-Corruption Helpline");
});
document.getElementById("ElectricityCAll").addEventListener("click", function () {
    callNumber("ElectricityNumber", "Electricity Helpline");
});
document.getElementById("BracCall").addEventListener("click", function () {
    callNumber("BracNumber", "Brac Helpline");
});
document.getElementById("RailCall").addEventListener("click", function () {
    callNumber("RailNumber", "Bangladesh Railway Helpline");
});

// Attach hearts
document.querySelectorAll(".heart").forEach(function (heart) {
    heart.addEventListener("click", increaseHeart);
});
