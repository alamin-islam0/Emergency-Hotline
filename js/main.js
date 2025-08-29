// For heart icon click count functionality

let heartCount = 0;

const heartNumber = document.getElementById("heart-count");
const heartIcon = document.querySelectorAll(".heart-icon");

heartIcon.forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartNumber.textContent = heartCount;
  });
});

// For calling functionality

let coins = 100;

const coinsCount = document.getElementById("coins");
const callHistoryList = document.getElementById("call-history");

function makeCall(serviceName, serviceNumber) {
  if (coins < 20) {
    alert("Not enough coins to make a call!");
    return;
  }

  coins -= 20;

  coinsCount.textContent = coins;
  alert("📞 " + "Calling " + serviceName + " " + serviceNumber);

  const now = new Date();
  const time = now.toLocaleTimeString();

  const div = document.createElement("div");
  div.className = "pt-3";

  div.innerHTML = `
  <div class="max-w-sm bg-[#FAFAFB] rounded-lg  px-4 py-3 flex justify-between items-center">
      <div>
        <h2 class="text-sm font-medium text-gray-900">${serviceName}</h2>
        <p class="text-xs text-gray-500">${serviceNumber}</p>
      </div>
      <div class="text-xs text-gray-500">${time}</div>
    </div>
      `;

  callHistoryList.appendChild(div);
}

function clearHistory() {
  callHistoryList.innerHTML = ""; 
}

// Copy text functionality

let copies = 0;

const copyCounts = document.getElementById('copy-count');

function updateCopy () {
  copyCounts.textContent = copies;
}

  function copyNumber(serviceName, serviceNumber) {
    navigator.clipboard.writeText(serviceNumber).then(() => {
      copies++;
      updateCopy();
      alert(`Copied ${serviceName}: ${serviceNumber}`);
    }).catch(err => {
      console.error("Clipboard copy failed:", err);
    });
  }

    document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      copyNumber(btn.dataset.name, btn.dataset.number);
    });
  });

  updateCopy ();