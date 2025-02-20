// scripts.js
function learnMore() {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

// Chart.js setup for smaller doughnut charts
const biodegradabilityChart = new Chart(document.getElementById('biodegradabilityChart'), {
    type: 'pie',
    data: {
        labels: ['Cassava Gloves', 'Plastic Gloves'],
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#2ecc71', '#e74c3c'], // Vibrant Green and Red
            borderColor: '#ffffff',
            borderWidth: 2,
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        cutout: '85%', // More hollow effect
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Biodegradability Comparison'
            },
            datalabels: {
                formatter: (value, context) => {
                    let sum = 0;
                    let dataArr = context.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    return percentage;
                },
                color: '#fff',
            }
        }
    }
});

const environmentalImpactChart = new Chart(document.getElementById('environmentalImpactChart'), {
    type: 'pie',
    data: {
        labels: ['CO₂ Reduction', 'Plastic Waste Reduction'],
        datasets: [{
            data: [60, 40],
            backgroundColor: ['#3498db', '#f1c40f'], // Vibrant Blue and Yellow
            borderColor: '#ffffff',
            borderWidth: 2,
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        cutout: '85%', // More hollow effect
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Environmental Impact'
            },
            datalabels: {
                formatter: (value, context) => {
                    let sum = 0;
                    let dataArr = context.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    return percentage;
                },
                color: '#fff',
            }
        }
    }
});

// Smooth scroll to contact section in footer
document.querySelector('nav ul li a[href="#contact"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#contact-footer').scrollIntoView({ behavior: 'smooth' });
});

function initializeSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 2500);
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    // Toggle view functionality
    const viewToggle = document.getElementById('viewToggle');
    const container = document.querySelector('.slider-container');
    
    viewToggle.addEventListener('click', () => {
        if (container.className === 'slider-container') {
            container.className = 'grid-view';
            stopSlideshow();
        } else {
            container.className = 'slider-container';
            startSlideshow();
        }
    });

    // Start with slideshow
    startSlideshow();
}

// Add this to your existing window.onload or call it directly
window.addEventListener('load', initializeSlider);

// ... existing code ...
