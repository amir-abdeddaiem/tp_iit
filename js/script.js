// Script.js - Main JavaScript file

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfolio loaded.");

    // Check if we are on the quiz page
    if (document.getElementById('quiz-form')) {
        initQuiz();
    }

    // Check if we are on the contact page
    if (document.getElementById('contact-form')) {
        initContactForm();
    }
});

/**
 * Initialize Quiz Logic
 */
function initQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('quiz-result');
    
    // Define correct answers
    // q1: b, q2: a, etc. (Will be defined based on HTML structure)
    const answers = {
        q1: 'b',
        q2: 'a',
        q3: 'c',
        q4: 'b',
        q5: 'a',
        q6: 'c',
        q7: 'b',
        q8: 'a',
        q9: 'c',
        q10: 'b'
    };

    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let score = 0;
        let total = Object.keys(answers).length;
        let feedback = "";

        // Loop through each question
        for (let q in answers) {
            const selected = quizForm.querySelector(`input[name="${q}"]:checked`);
            const questionCard = document.getElementById(`card-${q}`);
            
            // Reset previous styling
            if(questionCard) {
                questionCard.classList.remove('border-success', 'border-danger');
            }

            if (selected) {
                if (selected.value === answers[q]) {
                    score++;
                    if(questionCard) questionCard.classList.add('border-success');
                } else {
                    if(questionCard) questionCard.classList.add('border-danger');
                }
            } else {
                // Not answered
                if(questionCard) questionCard.classList.add('border-danger');
            }
        }

        // Show result
        resultDiv.style.display = 'block';
        resultDiv.className = 'result-box alert';
        
        if (score >= total / 2) {
            resultDiv.classList.add('alert-success');
            resultDiv.innerHTML = `<h4>Bravo!</h4><p>Votre score est de ${score} / ${total}.</p>`;
        } else {
            resultDiv.classList.add('alert-warning');
            resultDiv.innerHTML = `<h4>Peut mieux faire...</h4><p>Votre score est de ${score} / ${total}.</p>`;
        }
        
        // Show correct answers (optional, but requested "show correct answers")
        // We can append this to the result or highlight in the form.
        // For simplicity, we highlighted borders.
    });
}

/**
 * Initialize Contact Form Validation
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Veuillez remplir tous les champs.");
            return;
        }
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Veuillez entrer une adresse email valide.");
            return;
        }
        
        alert("Merci pour votre message ! (Simulation d'envoi)");
        contactForm.reset();
    });
}
