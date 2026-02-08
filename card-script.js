// Create floating hearts background
function initHearts() {
    const container = document.getElementById('heartsBg');
    const hearts = ['❤️', '💕', '💖', '💗', '💓'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 8 + 8) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        container.appendChild(heart);
    }
}

// Create heart burst
function createBurst() {
    const container = document.getElementById('heartsBg');
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = '85%';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.fontSize = (Math.random() * 15 + 20) + 'px';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }
}

// Generate proposal words
function generateWords() {
    const name = document.getElementById('name').value.trim();
    const quality = document.getElementById('quality').value.trim();
    const dream = document.getElementById('dream').value.trim();
    
    if (!name || !quality || !dream) {
        alert('Please fill in all fields! 💕');
        return;
    }
    
    const templates = [
        `${name}, you are the love of my life. ${quality} makes me fall for you more each day. I want to ${dream} with you, forever. Will you marry me?`,
        
        `My dearest ${name}, from the moment we met, you've been my everything. ${quality} fills my heart with joy. Let's ${dream} together as husband and wife. Will you say yes?`,
        
        `${name}, every day with you is a blessing. ${quality} reminds me why I'm the luckiest person alive. I dream of ${dream} with you by my side forever. Marry me?`,
        
        `To my beloved ${name}, you've changed my life in the most beautiful way. ${quality} is just one reason I adore you. Together, let's ${dream} and build our forever. Will you be mine?`,
        
        `${name}, you're my best friend and my soulmate. ${quality} makes my heart sing. I can't imagine ${dream} without you. Will you marry me and make me the happiest person alive?`
    ];
    
    const proposal = templates[Math.floor(Math.random() * templates.length)];
    
    document.getElementById('outputText').textContent = proposal;
    document.getElementById('outputCard').classList.add('show');
    
    // Scroll to output
    setTimeout(() => {
        document.getElementById('outputCard').scrollIntoView({ 
            behavior: 'smooth',
            block: 'nearest'
        });
    }, 100);
}

// Copy text to clipboard
function copyText() {
    const text = document.getElementById('outputText').textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.copy-btn');
        const original = btn.textContent;
        btn.textContent = 'Copied! ✓';
        btn.style.background = '#4caf50';
        
        setTimeout(() => {
            btn.textContent = original;
            btn.style.background = '';
        }, 2000);
    }).catch(() => {
        alert('Please copy manually');
    });
}

// Initialize on load
window.addEventListener('load', initHearts);

// Add scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.idea-card, .generator-card, .quote-card, .footer-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
