// Application State
const AppState = {
    currentView: 'home',
    currentSession: null,
    participants: [],
    questions: [],
    currentQuestionIndex: 0,
    currentParticipant: null,
    timer: null,
    timerValue: 15,
    isAdminAuthenticated: false,
    charts: {}
};

// Données des questions et objectifs
const QUESTIONS_DATA = [
    {
        id: 1, objective: 1,
        question: "Comment fonctionne principalement une IA générative ?",
        options: [
            "Elle copie exactement des textes existants",
            "Elle prédit le prochain mot le plus probable selon son entraînement", 
            "Elle se connecte à Internet pour chercher des réponses",
            "Elle utilise des règles programmées manuellement"
        ],
        correct: 1
    },
    {
        id: 2, objective: 1,
        question: "Qu'est-ce qu'un 'token' en IA générative ?",
        options: [
            "Une unité monétaire pour payer l'IA",
            "Un mot de passe pour accéder à l'IA", 
            "Une unité de texte traitée par l'IA (mot, partie de mot, ponctuation)",
            "Un type de fichier spécifique"
        ],
        correct: 2
    },
    {
        id: 3, objective: 1,
        question: "Que signifie 'température' dans les paramètres d'une IA générative ?",
        options: [
            "La vitesse de génération des réponses",
            "Le niveau de créativité/aléatoire dans les réponses",
            "La qualité de la réponse générée",
            "Le nombre de mots dans la réponse"
        ],
        correct: 1
    },
    {
        id: 4, objective: 1, 
        question: "Les IA génératives actuelles sont principalement basées sur :",
        options: [
            "Des bases de données classiques",
            "Des réseaux de neurones transformeurs",
            "Des algorithmes de recherche Google", 
            "Des systèmes experts traditionnels"
        ],
        correct: 1
    },
    {
        id: 5, objective: 1,
        question: "Une 'hallucination' en IA générative désigne :",
        options: [
            "Une erreur de programmation",
            "Une information inventée présentée comme vraie",
            "Un bug dans l'interface utilisateur",
            "Une limitation de mémoire du système"
        ],
        correct: 1
    },
    {
        id: 6, objective: 2,
        question: "Pour la création de contenu pédagogique textuel, l'outil le plus adapté est :",
        options: [
            "ChatGPT",
            "DALL-E", 
            "Midjourney",
            "RunwayML"
        ],
        correct: 0
    },
    {
        id: 7, objective: 2,
        question: "Quel outil est spécialisé dans la génération d'images ?",
        options: [
            "Claude",
            "Gemini",
            "DALL-E",
            "Perplexity"
        ],
        correct: 2
    },
    {
        id: 8, objective: 2,
        question: "Pour une utilisation en entreprise avec confidentialité, il vaut mieux choisir :",
        options: [
            "ChatGPT gratuit",
            "Une version entreprise avec garanties de confidentialité",
            "N'importe quel outil gratuit",
            "Aucune précaution n'est nécessaire"
        ],
        correct: 1
    },
    {
        id: 9, objective: 2,
        question: "Claude d'Anthropic se distingue par :",
        options: [
            "Sa capacité à traiter de très longs documents",
            "Sa génération d'images",
            "Sa gratuité totale", 
            "Sa connexion Internet"
        ],
        correct: 0
    },
    {
        id: 10, objective: 2,
        question: "Pour intégrer l'IA dans Google Workspace, l'outil approprié est :",
        options: [
            "ChatGPT",
            "Gemini",
            "Claude",
            "Mistral"
        ],
        correct: 1
    },
    {
        id: 11, objective: 3,
        question: "Un prompt efficace doit contenir :",
        options: [
            "Seulement la question",
            "Le rôle, le contexte, la tâche et le format souhaité",
            "Le maximum de mots possibles",
            "Des termes techniques complexes"
        ],
        correct: 1  
    },
    {
        id: 12, objective: 3,
        question: "Pour obtenir une réponse structurée, il faut :",
        options: [
            "Demander une réponse longue",
            "Spécifier le format de sortie souhaité", 
            "Utiliser des mots compliqués",
            "Poser plusieurs questions à la fois"
        ],
        correct: 1
    },
    {
        id: 13, objective: 3,
        question: "Un bon prompt commence souvent par :",
        options: [
            "Peux-tu...",
            "Tu es un expert en...",
            "Donne-moi...",
            "Écris..."
        ],
        correct: 1
    },
    {
        id: 14, objective: 3,
        question: "Pour améliorer un prompt, on peut :",
        options: [
            "Le raccourcir au maximum",
            "Ajouter des exemples concrets",
            "Utiliser uniquement des questions fermées",
            "Éviter de donner du contexte"
        ],
        correct: 1
    },
    {
        id: 15, objective: 3,
        question: "Le 'few-shot prompting' consiste à :",
        options: [
            "Poser peu de questions",
            "Donner quelques exemples dans le prompt",
            "Utiliser peu de mots",
            "Limiter le temps de réponse"
        ],
        correct: 1
    },
    {
        id: 16, objective: 4,
        question: "Pour créer un exercice pédagogique avec l'IA, le prompt doit inclure :",
        options: [
            "Seulement le sujet du cours",
            "Le niveau des apprenants, les objectifs et le format souhaité",
            "Uniquement la durée de l'exercice", 
            "Seulement les consignes générales"
        ],
        correct: 1
    },
    {
        id: 17, objective: 4,
        question: "Un prompt pour générer une évaluation doit préciser :",
        options: [
            "Seulement les questions",
            "Le type d'évaluation, le niveau, les compétences évaluées",
            "Uniquement la note sur 20",
            "Seulement la durée de l'évaluation"
        ],
        correct: 1
    },
    {
        id: 18, objective: 4,
        question: "Pour adapter un contenu au niveau des apprenants :",
        options: [
            "Il faut préciser leur niveau et leurs prérequis",
            "Il suffit de demander 'niveau facile'",
            "Il faut utiliser des mots simples",
            "Il faut éviter les exemples"
        ],
        correct: 0
    },
    {
        id: 19, objective: 4,
        question: "Un prompt pour créer un scénario pédagogique doit inclure :",
        options: [
            "Seulement l'objectif d'apprentissage",
            "Les objectifs, la durée, les méthodes et le public cible",
            "Seulement la méthode pédagogique",
            "Uniquement le nombre de participants"
        ],
        correct: 1
    },
    {
        id: 20, objective: 4,
        question: "Pour générer des questions de réflexion critique :",
        options: [
            "Demander des questions fermées", 
            "Spécifier le niveau de taxonomie de Bloom souhaité",
            "Éviter les questions ouvertes",
            "Limiter aux questions factuelles"
        ],
        correct: 1
    }
];

const OBJECTIVES = [
    { id: 1, title: "Fonctionnement de l'IA générative" },
    { id: 2, title: "Choix d'outils d'IA générative" },
    { id: 3, title: "Illustration de prompts de base" },
    { id: 4, title: "Réalisation de prompts adaptés en formation" }
];

const RECOMMENDATIONS = {
    1: [
        "Approfondir les concepts techniques de l'IA générative",
        "Comprendre les différents types de modèles (GPT, BERT, etc.)",
        "Étudier les principes de l'apprentissage automatique"
    ],
    2: [
        "Explorer et tester différents outils d'IA générative",
        "Comparer les avantages/inconvénients de chaque outil",
        "Évaluer les aspects de sécurité et confidentialité"
    ],
    3: [
        "Pratiquer l'écriture de prompts avec des exemples",
        "Apprendre les techniques de prompt engineering",
        "Étudier des cas d'usage réussis de prompting"
    ],
    4: [
        "Se former aux techniques pédagogiques avec l'IA",
        "Créer des scénarios d'apprentissage avec l'IA",
        "Intégrer l'IA dans les méthodes d'évaluation"
    ]
};

// Attendre que le DOM soit chargé
window.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé, initialisation application TBS Education');
    
    // Petite pause pour s'assurer que tout est chargé
    setTimeout(() => {
        initializeApp();
        setupEventListeners();
    }, 100);
});

function initializeApp() {
    console.log('Initialisation de l\'application...');
    
    // Initialiser les questions
    shuffleQuestions();
    
    // Afficher la vue d'accueil
    showView('home');
    
    // Initialiser l'état des sections
    resetViews();
    
    console.log('Application initialisée');
}

function resetViews() {
    // Reset participant view
    const participantConnect = document.getElementById('participant-connect');
    const participantQuiz = document.getElementById('participant-quiz');
    const participantResult = document.getElementById('participant-result');
    
    if (participantConnect) participantConnect.style.display = 'block';
    if (participantQuiz) participantQuiz.style.display = 'none';
    if (participantResult) participantResult.style.display = 'none';
    
    // Reset admin view
    const adminAuth = document.getElementById('admin-auth');
    const adminDashboard = document.getElementById('admin-dashboard');
    
    if (adminAuth) adminAuth.style.display = 'block';
    if (adminDashboard) adminDashboard.style.display = 'none';
    
    // Reset session info
    const sessionInfo = document.getElementById('session-info');
    if (sessionInfo) sessionInfo.style.display = 'none';
}

function setupEventListeners() {
    console.log('Configuration des événements...');
    
    // Supprimer tous les anciens listeners pour éviter les doublons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
    });
    
    // Navigation principale
    document.getElementById('home-btn').onclick = function() {
        console.log('Clic accueil');
        showView('home');
        return false;
    };
    
    document.getElementById('admin-btn').onclick = function() {
        console.log('Clic admin');
        showView('admin');
        return false;
    };
    
    document.getElementById('participant-access-btn').onclick = function() {
        console.log('Clic participant');
        showView('participant');
        return false;
    };

    // Page d'accueil
    document.getElementById('new-session-btn').onclick = function() {
        console.log('Clic nouvelle session');
        createNewSession();
        return false;
    };
    
    document.getElementById('import-btn').onclick = function() {
        console.log('Clic import');
        document.getElementById('import-file').click();
        return false;
    };
    
    // File input pour import
    const importFile = document.getElementById('import-file');
    if (importFile) {
        importFile.onchange = importSession;
    }

    // Page participant
    document.getElementById('connect-btn').onclick = function() {
        console.log('Clic connexion participant');
        connectParticipant();
        return false;
    };

    // Page admin
    document.getElementById('admin-login-btn').onclick = function() {
        console.log('Clic login admin');
        authenticateAdmin();
        return false;
    };
    
    // Boutons admin dashboard
    const exportJsonBtn = document.getElementById('export-json-btn');
    if (exportJsonBtn) {
        exportJsonBtn.onclick = function() {
            exportJSON();
            return false;
        };
    }
    
    const exportCsvBtn = document.getElementById('export-csv-btn');
    if (exportCsvBtn) {
        exportCsvBtn.onclick = function() {
            exportCSV();
            return false;
        };
    }
    
    const resetSessionBtn = document.getElementById('reset-session-btn');
    if (resetSessionBtn) {
        resetSessionBtn.onclick = function() {
            resetSession();
            return false;
        };
    }
    
    const closeDetailsBtn = document.getElementById('close-details-btn');
    if (closeDetailsBtn) {
        closeDetailsBtn.onclick = function() {
            document.getElementById('participant-details').style.display = 'none';
            return false;
        };
    }

    // Modal
    document.getElementById('modal-ok-btn').onclick = function() {
        closeModal();
        return false;
    };
    
    // Gestion des touches Enter
    const sessionCodeInput = document.getElementById('session-code-input');
    const participantNameInput = document.getElementById('participant-name');
    const adminPasswordInput = document.getElementById('admin-password');
    
    if (sessionCodeInput) {
        sessionCodeInput.onkeypress = function(e) {
            if (e.key === 'Enter') {
                connectParticipant();
                return false;
            }
        };
    }
    
    if (participantNameInput) {
        participantNameInput.onkeypress = function(e) {
            if (e.key === 'Enter') {
                connectParticipant();
                return false;
            }
        };
    }
    
    if (adminPasswordInput) {
        adminPasswordInput.onkeypress = function(e) {
            if (e.key === 'Enter') {
                authenticateAdmin();
                return false;
            }
        };
    }
    
    console.log('Événements configurés');
}

// Navigation
function showView(viewName) {
    console.log('Affichage vue:', viewName);
    
    // Masquer toutes les vues
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Afficher la vue demandée
    const targetView = document.getElementById(viewName + '-view');
    if (targetView) {
        targetView.classList.add('active');
        AppState.currentView = viewName;
        
        // Gérer l'état d'authentification admin
        if (viewName === 'admin' && !AppState.isAdminAuthenticated) {
            document.getElementById('admin-auth').style.display = 'block';
            document.getElementById('admin-dashboard').style.display = 'none';
        }
    }
}

// Session Management
function generateSessionCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function createNewSession() {
    console.log('Création nouvelle session...');
    
    AppState.currentSession = {
        code: generateSessionCode(),
        createdAt: new Date(),
        participants: []
    };
    AppState.participants = [];
    
    console.log('Session créée:', AppState.currentSession.code);
    
    updateSessionDisplay();
    generateQRCode();
    showMessage('Nouvelle session créée avec succès !');
}

function updateSessionDisplay() {
    if (!AppState.currentSession) return;
    
    const sessionInfo = document.getElementById('session-info');
    const sessionCode = document.getElementById('session-code');
    const connectionCode = document.getElementById('connection-code');
    const participantCount = document.getElementById('participant-count');
    
    if (sessionInfo) sessionInfo.style.display = 'block';
    if (sessionCode) sessionCode.textContent = AppState.currentSession.code;
    if (connectionCode) connectionCode.textContent = AppState.currentSession.code;
    if (participantCount) participantCount.textContent = AppState.participants.length;
    
    console.log('Affichage session mis à jour:', AppState.currentSession.code);
}

function generateQRCode() {
    console.log('Génération QR Code...');
    
    const qrContainer = document.getElementById('qr-code');
    if (!qrContainer) return;
    
    const url = window.location.origin + window.location.pathname + '?session=' + AppState.currentSession.code + '&view=participant';
    
    // Créer un QR code simple en texte si la librairie n'est pas disponible
    if (typeof QRCode !== 'undefined') {
        qrContainer.innerHTML = '';
        QRCode.toCanvas(qrContainer, url, {
            width: 200,
            margin: 1,
            color: {
                dark: '#ff3a52',
                light: '#FFFFFF'
            }
        }, function (error) {
            if (error) {
                console.error('Erreur QR Code:', error);
                createSimpleQRCode(qrContainer, url);
            } else {
                console.log('QR Code généré');
            }
        });
    } else {
        createSimpleQRCode(qrContainer, url);
    }
}

function createSimpleQRCode(container, url) {
    container.innerHTML = `
        <div style="width: 200px; height: 200px; background: #f0f0f0; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 8px; border: 2px solid #ff3a52;">
            <div style="font-size: 14px; font-weight: bold; color: #ff3a52; margin-bottom: 10px;">QR CODE</div>
            <div style="font-size: 12px; text-align: center; padding: 10px;">Scannez pour accéder</div>
            <div style="font-size: 10px; color: #666; text-align: center; word-break: break-all; padding: 5px;">${url}</div>
        </div>
    `;
}

// Questions Management
function shuffleQuestions() {
    AppState.questions = [...QUESTIONS_DATA].sort(() => Math.random() - 0.5);
    console.log('Questions mélangées:', AppState.questions.length);
}

// Participant Management
function connectParticipant() {
    console.log('Connexion participant...');
    
    const sessionCode = document.getElementById('session-code-input').value.trim().toUpperCase();
    const participantName = document.getElementById('participant-name').value.trim();

    if (!sessionCode || !participantName) {
        showMessage('Veuillez remplir tous les champs');
        return;
    }

    if (!AppState.currentSession || AppState.currentSession.code !== sessionCode) {
        showMessage('Code de session invalide. Veuillez créer une session depuis l\'accueil.');
        return;
    }

    if (AppState.participants.find(p => p.name.toLowerCase() === participantName.toLowerCase())) {
        showMessage('Ce nom est déjà utilisé');
        return;
    }

    AppState.currentParticipant = {
        name: participantName,
        answers: [],
        scores: { total: 0, objectives: [0, 0, 0, 0] },
        startTime: new Date(),
        completed: false
    };

    AppState.participants.push(AppState.currentParticipant);
    updateSessionDisplay();
    startQuiz();
}

function startQuiz() {
    console.log('Démarrage quiz');
    
    document.getElementById('participant-connect').style.display = 'none';
    document.getElementById('participant-quiz').style.display = 'block';
    
    AppState.currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    if (AppState.currentQuestionIndex >= 20) {
        completeQuiz();
        return;
    }

    const question = AppState.questions[AppState.currentQuestionIndex];
    console.log('Question', AppState.currentQuestionIndex + 1, ':', question.question);
    
    document.getElementById('question-title').textContent = question.question;
    document.getElementById('progress-text').textContent = `Question ${AppState.currentQuestionIndex + 1}/20`;
    document.getElementById('progress-fill').style.width = `${((AppState.currentQuestionIndex + 1) / 20) * 100}%`;

    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.textContent = option;
        answerDiv.onclick = function() {
            selectAnswer(index);
        };
        answersContainer.appendChild(answerDiv);
    });

    startTimer();
}

function selectAnswer(answerIndex) {
    console.log('Réponse sélectionnée:', answerIndex);
    
    document.querySelectorAll('.answer-option').forEach((option, index) => {
        option.classList.remove('selected');
        if (index === answerIndex) {
            option.classList.add('selected');
        }
    });

    setTimeout(() => {
        submitAnswer(answerIndex);
    }, 500);
}

function startTimer() {
    AppState.timerValue = 15;
    const timerElement = document.getElementById('timer');
    timerElement.textContent = AppState.timerValue;
    timerElement.classList.remove('warning');

    if (AppState.timer) {
        clearInterval(AppState.timer);
    }

    AppState.timer = setInterval(() => {
        AppState.timerValue--;
        timerElement.textContent = AppState.timerValue;

        if (AppState.timerValue <= 5) {
            timerElement.classList.add('warning');
        }

        if (AppState.timerValue <= 0) {
            clearInterval(AppState.timer);
            submitAnswer(-1); // Temps écoulé
        }
    }, 1000);
}

function submitAnswer(answerIndex) {
    if (AppState.timer) {
        clearInterval(AppState.timer);
    }
    
    const question = AppState.questions[AppState.currentQuestionIndex];
    const isCorrect = answerIndex === question.correct;
    
    AppState.currentParticipant.answers.push({
        questionId: question.id,
        selectedAnswer: answerIndex,
        correct: isCorrect,
        objective: question.objective
    });

    // Afficher la bonne réponse
    document.querySelectorAll('.answer-option').forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === answerIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
    });

    setTimeout(() => {
        AppState.currentQuestionIndex++;
        showQuestion();
    }, 2000);
}

function completeQuiz() {
    console.log('Quiz terminé');
    
    calculateScores();
    AppState.currentParticipant.completed = true;
    AppState.currentParticipant.endTime = new Date();

    document.getElementById('participant-quiz').style.display = 'none';
    document.getElementById('participant-result').style.display = 'block';
    
    document.getElementById('result-name').textContent = AppState.currentParticipant.name;
    document.getElementById('final-score').textContent = `${AppState.currentParticipant.scores.total}/20`;
    
    const level = getLevel(AppState.currentParticipant.scores.total);
    const levelBadge = document.getElementById('level-badge');
    levelBadge.textContent = level.name;
    levelBadge.className = `level-badge ${level.class}`;

    updateDashboard();
}

function calculateScores() {
    const participant = AppState.currentParticipant;
    participant.scores.total = 0;
    participant.scores.objectives = [0, 0, 0, 0];

    participant.answers.forEach(answer => {
        if (answer.correct) {
            participant.scores.total++;
            participant.scores.objectives[answer.objective - 1]++;
        }
    });
}

function getLevel(score) {
    if (score <= 6) return { name: 'Débutant', class: 'debutant' };
    if (score <= 13) return { name: 'Intermédiaire', class: 'intermediaire' };
    return { name: 'Avancé', class: 'avance' };
}

// Admin Management
function authenticateAdmin() {
    const password = document.getElementById('admin-password').value;
    console.log('Tentative authentification admin');
    
    if (password === 'admin2024') {
        AppState.isAdminAuthenticated = true;
        document.getElementById('admin-auth').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        updateDashboard();
        console.log('Authentification réussie');
    } else {
        showMessage('Mot de passe incorrect');
    }
}

function updateDashboard() {
    if (!AppState.isAdminAuthenticated) return;
    
    console.log('Mise à jour dashboard');
    updateStats();
    updateParticipantsTable();
    updateCharts();
}

function updateStats() {
    const completedParticipants = AppState.participants.filter(p => p.completed);
    const totalScore = completedParticipants.reduce((sum, p) => sum + p.scores.total, 0);
    const avgScore = completedParticipants.length > 0 ? (totalScore / completedParticipants.length).toFixed(1) : '-';

    document.getElementById('total-participants').textContent = AppState.participants.length;
    document.getElementById('avg-score').textContent = avgScore;
    document.getElementById('completion-rate').textContent = 
        AppState.participants.length > 0 ? 
        Math.round((completedParticipants.length / AppState.participants.length) * 100) + '%' : '0%';
}

function updateParticipantsTable() {
    const tbody = document.getElementById('participants-tbody');
    tbody.innerHTML = '';

    AppState.participants.forEach(participant => {
        const row = document.createElement('tr');
        const level = getLevel(participant.scores.total);
        
        row.innerHTML = `
            <td>${participant.name}</td>
            <td class="score-cell ${getScoreClass(participant.scores.total, 20)}">${participant.scores.total}/20</td>
            <td class="score-cell ${getScoreClass(participant.scores.objectives[0], 5)}">${participant.scores.objectives[0]}/5</td>
            <td class="score-cell ${getScoreClass(participant.scores.objectives[1], 5)}">${participant.scores.objectives[1]}/5</td>
            <td class="score-cell ${getScoreClass(participant.scores.objectives[2], 5)}">${participant.scores.objectives[2]}/5</td>
            <td class="score-cell ${getScoreClass(participant.scores.objectives[3], 5)}">${participant.scores.objectives[3]}/5</td>
            <td><span class="level-badge ${level.class}">${level.name}</span></td>
            <td><button class="btn btn--outline btn--sm" onclick="showParticipantDetails('${participant.name}')">Détails</button></td>
        `;
        tbody.appendChild(row);
    });
}

function getScoreClass(score, max) {
    const percentage = (score / max) * 100;
    if (percentage >= 70) return 'good';
    if (percentage >= 40) return 'average';
    return 'poor';
}

// Fonction globale pour les détails
window.showParticipantDetails = function(participantName) {
    const participant = AppState.participants.find(p => p.name === participantName);
    if (!participant) return;

    document.getElementById('detail-name').textContent = participant.name;
    
    const scoreDetails = document.getElementById('score-details');
    scoreDetails.innerHTML = '';
    
    const scoreItems = [
        { label: 'Score Total', score: participant.scores.total, max: 20 },
        { label: 'Fonctionnement IA', score: participant.scores.objectives[0], max: 5 },
        { label: 'Choix d\'outils', score: participant.scores.objectives[1], max: 5 },
        { label: 'Prompts de base', score: participant.scores.objectives[2], max: 5 },
        { label: 'Prompts formation', score: participant.scores.objectives[3], max: 5 }
    ];

    scoreItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'score-item';
        div.innerHTML = `
            <span>${item.label}</span>
            <span class="score-cell ${getScoreClass(item.score, item.max)}">${item.score}/${item.max}</span>
        `;
        scoreDetails.appendChild(div);
    });

    const recommendationsDiv = document.getElementById('participant-recommendations');
    recommendationsDiv.innerHTML = '';
    
    participant.scores.objectives.forEach((score, index) => {
        if (score < 3) {
            const recommendations = RECOMMENDATIONS[index + 1];
            recommendations.forEach(rec => {
                const div = document.createElement('div');
                div.className = 'recommendation-item';
                div.textContent = rec;
                recommendationsDiv.appendChild(div);
            });
        }
    });

    if (recommendationsDiv.children.length === 0) {
        const div = document.createElement('div');
        div.className = 'recommendation-item';
        div.textContent = 'Excellente maîtrise ! Continuez à vous perfectionner et partagez vos connaissances.';
        recommendationsDiv.appendChild(div);
    }

    document.getElementById('participant-details').style.display = 'block';
}

function updateCharts() {
    if (typeof Chart !== 'undefined') {
        updateScoresChart();
        updateObjectivesChart();
    }
}

function updateScoresChart() {
    const ctx = document.getElementById('scores-chart').getContext('2d');
    
    if (AppState.charts.scores) {
        AppState.charts.scores.destroy();
    }

    const completedParticipants = AppState.participants.filter(p => p.completed);
    const scoreRanges = [
        { label: '0-6 (Débutant)', count: 0 },
        { label: '7-13 (Intermédiaire)', count: 0 },
        { label: '14-20 (Avancé)', count: 0 }
    ];

    completedParticipants.forEach(p => {
        if (p.scores.total <= 6) scoreRanges[0].count++;
        else if (p.scores.total <= 13) scoreRanges[1].count++;
        else scoreRanges[2].count++;
    });

    AppState.charts.scores = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: scoreRanges.map(r => r.label),
            datasets: [{
                label: 'Nombre de participants',
                data: scoreRanges.map(r => r.count),
                backgroundColor: ['#FF6B9D', '#FFC185', '#1FB8CD']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });
}

function updateObjectivesChart() {
    const ctx = document.getElementById('objectives-chart').getContext('2d');
    
    if (AppState.charts.objectives) {
        AppState.charts.objectives.destroy();
    }

    const completedParticipants = AppState.participants.filter(p => p.completed);
    const avgObjectives = [0, 0, 0, 0];

    if (completedParticipants.length > 0) {
        completedParticipants.forEach(p => {
            p.scores.objectives.forEach((score, index) => {
                avgObjectives[index] += score;
            });
        });
        
        avgObjectives.forEach((sum, index) => {
            avgObjectives[index] = (sum / completedParticipants.length).toFixed(1);
        });
    }

    AppState.charts.objectives = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: OBJECTIVES.map(o => o.title),
            datasets: [{
                label: 'Score moyen (/5)',
                data: avgObjectives,
                backgroundColor: 'rgba(255, 58, 82, 0.2)',
                borderColor: '#ff3a52',
                pointBackgroundColor: '#ff3a52'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 5,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });
}

// Export/Import
function exportJSON() {
    const data = {
        session: AppState.currentSession,
        participants: AppState.participants,
        exportDate: new Date(),
        appVersion: '1.0'
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tbs-evaluation-${AppState.currentSession?.code || 'export'}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showMessage('Export JSON réalisé');
}

function exportCSV() {
    const completedParticipants = AppState.participants.filter(p => p.completed);
    
    let csv = 'Nom,Score Total,Fonctionnement IA,Choix Outils,Prompts Base,Prompts Formation,Niveau\n';
    
    completedParticipants.forEach(p => {
        const level = getLevel(p.scores.total);
        csv += `${p.name},${p.scores.total}/20,${p.scores.objectives[0]}/5,${p.scores.objectives[1]}/5,${p.scores.objectives[2]}/5,${p.scores.objectives[3]}/5,${level.name}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tbs-evaluation-${AppState.currentSession?.code || 'export'}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    
    showMessage('Export CSV réalisé');
}

function importSession(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            AppState.currentSession = data.session;
            AppState.participants = data.participants || [];
            
            updateSessionDisplay();
            generateQRCode();
            updateDashboard();
            
            showMessage('Session importée avec succès !');
        } catch (error) {
            showMessage('Erreur lors de l\'import');
        }
    };
    reader.readAsText(file);
}

function resetSession() {
    if (confirm('Réinitialiser la session ? Toutes les données seront perdues.')) {
        AppState.currentSession = null;
        AppState.participants = [];
        AppState.isAdminAuthenticated = false;
        
        document.getElementById('session-info').style.display = 'none';
        document.getElementById('qr-code').innerHTML = '';
        document.getElementById('connection-code').textContent = '-';
        
        showView('home');
        showMessage('Session réinitialisée');
    }
}

// Utility Functions
function showMessage(message) {
    document.getElementById('modal-message').textContent = message;
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

// Auto-connect depuis URL
window.addEventListener('load', function() {
    const params = new URLSearchParams(window.location.search);
    const sessionCode = params.get('session');
    const view = params.get('view');
    
    if (sessionCode && view === 'participant') {
        document.getElementById('session-code-input').value = sessionCode;
        showView('participant');
    }
});

console.log('Script TBS Education chargé');