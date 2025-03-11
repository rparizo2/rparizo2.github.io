function startQuiz() {
    document.getElementById('beginButton').classList.add('hidden');
    document.getElementById('quizForm').classList.remove('hidden');
	nextQuestion(currentQuestion);
}

function nextQuestion(currentQuestion) {
    const currentQuestionElement = document.getElementById(`question${currentQuestion}`);
    const inputs = currentQuestionElement.querySelectorAll('input');
    let answered = false;

    inputs.forEach(input => {
        if ((input.type === 'radio' || input.type === 'checkbox') && input.checked) {
            answered = true;
        } else if (input.type === 'text' && input.value.trim() !== '') {
            answered = true;
        }
    });

    if (!answered) {
        alert('Please select an answer before proceeding.');
        return;
    }

    currentQuestionElement.classList.add('hidden');
    const nextQuestion = currentQuestion + 1;
    const nextQuestionElement = document.getElementById(`question${nextQuestion}`);
    if (nextQuestionElement) {
        nextQuestionElement.classList.remove('hidden');
    } else {
        // If no more questions, submit the quiz
        submitQuiz();
    }
}

function submitQuiz() {
    const form = document.getElementById('quizForm');
    const results = document.getElementById('results');
    const scoreElement = document.getElementById('score');
    const answersElement = document.getElementById('answers');
    const passFailElement = document.getElementById('passFail');

    let score = 0;
    const totalQuestions = 10; // Update this based on the total number of questions
    const correctAnswers = {
        q1: 'c',
        q2: ['c'],
        q3: 'seo',
        q4: 'b',
        q5: ['a', 'b', 'd'],
		q6: 'visibility',
		q7: 'b',
		q8: ['a', 'b'],
		q9: 'off-page',
		q10: 'd'
    };

    const userAnswers = {
        q1: form.q1.value,
        q2: Array.from(form.q2).filter(input => input.checked).map(input => input.value),
        q3: form.q3.value.trim(),
        q4: form.q4.value,
        q5: Array.from(form.q5).filter(input => input.checked).map(input => input.value),
		q6: form.q6.value.trim(),
		q7: form.q7.value,
		q8: Array.from(form.q8).filter(input => input.checked).map(input => input.value),
		q9: form.q9.value.trim(),
		q10: form.q10.value
    };

    if (userAnswers.q1 === correctAnswers.q1) score++;
    if (JSON.stringify(userAnswers.q2.sort()) === JSON.stringify(correctAnswers.q2.sort())) score++;
    if (userAnswers.q3.toLowerCase() === correctAnswers.q3.toLowerCase()) score++;
	
    if (userAnswers.q4 === correctAnswers.q4) score++;
    if (JSON.stringify(userAnswers.q5.sort()) === JSON.stringify(correctAnswers.q5.sort())) score++;
	if (userAnswers.q6.toLowerCase() === correctAnswers.q6.toLowerCase()) score++;

    if (userAnswers.q7 === correctAnswers.q7) score++;
    if (JSON.stringify(userAnswers.q8.sort()) === JSON.stringify(correctAnswers.q8.sort())) score++;
	if (userAnswers.q9.toLowerCase() === correctAnswers.q9.toLowerCase()) score++;

    if (userAnswers.q10 === correctAnswers.q10) score++;

    scoreElement.textContent = `Total Score: ${score}/${totalQuestions}`;
    answersElement.innerHTML = `
        <p>1. Correct Answer: Attract visitors to a specific website</p>
        <p>2. Correct Answers: Better User Experience on All Devices</p>
        <p>3. Correct Answer: SEO</p>
        <p>4. Correct Answer: Attracting local customers</p>
        <p>5. Correct Answers: Using Descriptive File Names, Providing Alt Text, Compressing Images for Faster Load Times</p>
		<p>6. Correct Answers: visibility</p>
		<p>7. Correct Answers: Writing unique product descriptions</p>
		<p>8. Correct Answers: Ensuring Responsive Design, Optimizing Page Speed</p>
		<p>9. Correct Answers: Off-Page</p>
		<p>10. Correct Answers: To provide descriptive information for search engines and users with visual impairments</p>
    `;
    passFailElement.textContent = score >= 7 ? 'Pass' : 'Fail';

    results.classList.remove('hidden');
}

function restartQuiz() {
    document.getElementById('quizForm').reset();
    document.getElementById('results').classList.add('hidden');
    document.getElementById('question1').classList.remove('hidden');
    // Hide all other questions
    for (let i = 2; i <= 10; i++) {
        const questionElement = document.getElementById(`question${i}`);
        if (questionElement) {
            questionElement.classList.add('hidden');
        }
    }
}