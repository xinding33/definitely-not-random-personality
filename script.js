document.getElementById('personalityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const personalities = {
        "The Strategist": "Known for their long-term planning and analytical approach.",
        "The Leader": "Charismatic and decisive, adept at motivating teams.",
        "The Innovator": "Constantly generates new ideas and solutions.",
        "The Problem-Solver": "Thrives on tackling complex challenges.",
        "The Communicator": "Excellent at conveying ideas and building relationships.",
        "The Organizer": "Masters of logistics and efficient task management.",
        "The Diplomat": "Handles conflicts with tact and diplomacy.",
        "The Visionary": "Sees future trends and opportunities others miss.",
        "The Team Player": "Collaborates seamlessly and supports team goals.",
        "The Specialist": "Deep knowledge and expertise in a specific area.",
        "The Executor": "Turns plans into action with precision and focus.",
        "The Mentor": "Guides and develops others, nurturing talent.",
        "The Negotiator": "Skilled at reaching beneficial agreements.",
        "The Analyst": "Delivers thorough insights through data and research.",
        "The Creative": "Brings fresh and original perspectives to projects.",
        "The Motivator": "Inspires and energizes teams during challenges.",
        "The Risk-Taker": "Courageous in exploring new opportunities.",
        "The Adaptive": "Quickly adjusts to changing environments and demands.",
        "The Collaborator": "Builds alliances and fosters teamwork across departments.",
        "The Ethicist": "Driven by strong principles and ethical standards in decision-making."
    };

    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const eye_color = document.getElementById('eye_color').value;
    const tshirt_size = document.getElementById('tshirt_size').value;
    const age_period = document.getElementById('age_period').value;

    const personalityKeys = Object.keys(personalities);
    const randomPersonalityKey = personalityKeys[Math.floor(Math.random() * personalityKeys.length)];
    const description = personalities[randomPersonalityKey];

    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h2>Your Definitely Not Random Personality</h2>
        <p><strong>Personality:</strong> ${randomPersonalityKey}</p>
        <p><strong>Description:</strong> ${description}</p>
        <h3>Your Details</h3>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country of Birth:</strong> ${country}</p>
        <p><strong>Eye Color:</strong> ${eye_color}</p>
        <p><strong>T-Shirt Size:</strong> ${tshirt_size}</p>
        <p><strong>Age at First Period:</strong> ${age_period}</p>
    `;
});
