// ======================
// Counter Animation
// ======================

const counters = document.querySelectorAll(".card h2");

counters.forEach(counter => {

    const target = parseInt(
        counter.innerText.replace(/[^0-9]/g, "")
    );

    let count = 0;

    const updateCounter = () => {

        count += Math.ceil(target / 50);

        if (count >= target) {
            counter.innerText = target;
        } else {
            counter.innerText = count;
            requestAnimationFrame(updateCounter);
        }

    };

    updateCounter();

});

// ======================
// Book Flight Button
// ======================

const bookBtn = document.querySelector(".book-flight");

if (bookBtn) {

    bookBtn.addEventListener("click", () => {

        const bookingSection =
            document.getElementById("booking-section");

        if (bookingSection) {

            bookingSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}

// ======================
// Destination Buttons
// ======================

const destinationBtns =
document.querySelectorAll(".destination-card button");

destinationBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        alert("Destination Selected Successfully!");

        const bookingSection =
            document.getElementById("booking-section");

        if (bookingSection) {

            bookingSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ======================
// Offer Buttons
// ======================

const offerBtns =
document.querySelectorAll(".offer-card button");

offerBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        alert("Offer Selected Successfully!");

        const bookingSection =
            document.getElementById("booking-section");

        if (bookingSection) {

            bookingSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ======================
// Booking Form
// ======================

const bookingForm =
document.querySelector("#booking-section form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Flight Booked Successfully!");

        this.reset();

    });

}

// ======================
// Contact Form
// ======================

const contactForm =
document.querySelector(".contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Message Sent Successfully!");

        this.reset();

    });

}

// ======================
// Sidebar Navigation
// ======================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ======================
// Logout
// ======================

const logoutBtn =
document.querySelector(".logout-btn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        localStorage.clear();

        alert("Logged Out Successfully!");

        window.location.href = "login.html";

    });

}