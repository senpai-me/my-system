// Initialization
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const main = document.getElementById('main-content');

    // Wait 3 seconds for splash then reveal main page
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
            main.classList.remove('hidden');
            main.classList.add('reveal');
        }, 1500);
    }, 3000);
});

// History Content Data
const historyData = {
    '1': {
        title: "The Singularity Theory",
        text: "The universe began as a point of infinite density. Space and time were created in a single moment of expansion. Your theory starts here."
    },
    '2': {
        title: "Event Horizon Chronicles",
        text: "At the edge of a black hole, time stands still. What lies beyond is unknown, but your research suggests a bridge to another dimension."
    },
    '3': {
        title: "Nebula Evolution",
        text: "Gas and dust collapsing under gravity create stars. This process is the cosmic cycle of life that drives the galaxy's growth."
    },
    '4': {
        title: "The Mystery of Dark Matter",
        text: "It makes up most of the universe yet remains invisible. Understanding dark matter is the final key to unlocking the cosmos."
    }
};

function showHistory(id) {
    const modal = document.getElementById('history-modal');
    document.getElementById('history-title').innerText = historyData[id].title;
    document.getElementById('history-text').innerText = historyData[id].text;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('history-modal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('history-modal');
    if (event.target == modal) {
        closeModal();
    }
}
