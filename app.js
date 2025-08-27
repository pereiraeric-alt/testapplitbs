// State principal
let quizQuestions = [
    // Objectif 1 : Fonctionnement IA générative (5 Q)
    { q:"Comment fonctionne principalement une IA générative ?", o:["Elle copie exactement des textes existants","Elle prédit le prochain mot le plus probable selon son entraînement","Elle se connecte à Internet pour chercher des réponses","Elle utilise des règles programmées manuellement"], a:1, obj:1 },
    { q:"Qu'est-ce qu'un 'token' en IA générative ?", o:["Une unité monétaire pour payer l'IA","Un mot de passe pour accéder à l'IA","Une unité de texte traitée par l'IA (mot, partie de mot, ponctuation)","Un type de fichier spécifique"], a:2, obj:1 },
    { q:"Que signifie 'température' dans les paramètres d'une IA générative ?", o:["La vitesse de génération des réponses","Le niveau de créativité/aléatoire dans les réponses","La qualité de la réponse générée","Le nombre de mots dans la réponse"], a:1, obj:1 },
    { q:"Les IA génératives actuelles sont principalement basées sur :", o:["Des bases de données classiques","Des réseaux de neurones transformeurs","Des algorithmes de recherche Google","Des systèmes experts traditionnels"], a:1, obj:1 },
    { q:"Une 'hallucination' en IA générative désigne :", o:["Une erreur de programmation","Une information inventée présentée comme vraie","Un bug dans l'interface utilisateur","Une limitation de mémoire du système"], a:1, obj:1 },

    // Objectif 2 : Outils IA générative (5 Q)
    { q:"Pour la création de contenu pédagogique textuel, l'outil le plus adapté est :", o:["ChatGPT","DALL-E","Midjourney","RunwayML"], a:0, obj:2 },
    { q:"Quel outil est spécialisé dans la génération d'images ?", o:["Claude","Gemini","DALL-E","Perplexity"], a:2, obj:2 },
    { q:"Pour une utilisation en entreprise avec confidentialité, il vaut mieux choisir :", o:["ChatGPT gratuit","Une version entreprise avec garanties de confidentialité","N'importe quel outil gratuit","Aucune précaution n'est nécessaire"], a:1, obj:2 },
    { q:"Claude d'Anthropic se distingue par :", o:["Sa capacité à traiter de très longs documents","Sa génération d'images","Sa gratuité totale","Sa connexion Internet"], a:0, obj:2 },
    { q:"Pour intégrer l'IA dans Google Workspace, l'outil approprié est :", o:["ChatGPT","Gemini","Claude","Mistral"], a:1, obj:2 },

    // Objectif 3 : Prompts de base (5 Q)
    { q:"Un prompt efficace doit contenir :", o:["Seulement la question","Le rôle, le contexte, la tâche et le format souhaité","Le maximum de mots possibles","Des termes techniques complexes"], a:1, obj:3 },
    { q:"Pour obtenir une réponse structurée, il faut :", o:["Demander une réponse longue","Spécifier le format de sortie souhaité","Utiliser des mots compliqués","Poser plusieurs questions à la fois"], a:1, obj:3 },
    { q:"Un bon prompt commence souvent par :", o:["Peux-tu...","Tu es un expert en...","Donne-moi...","Écris..."], a:1, obj:3 },
    { q:"Pour améliorer un prompt, on peut :", o:["Le raccourcir au maximum","Ajouter des exemples concrets","Utiliser uniquement des questions fermées","Éviter de donner du contexte"], a:1, obj:3 },
    { q:"Le 'few-shot prompting' consiste à :", o:["Poser peu de questions","Donner quelques exemples dans le prompt","Utiliser peu de mots","Limiter le temps de réponse"], a:1, obj:3 },

    // Objectif 4 : Prompts adaptés formation (5 Q)
    { q:"Pour créer un exercice pédagogique avec l'IA, le prompt doit inclure :", o:["Seulement le sujet du cours","Le niveau des apprenants, les objectifs et le format souhaité","Uniquement la durée de l'exercice","Seulement les consignes générales"], a:1, obj:4 },
    { q:"Un prompt pour générer une évaluation doit préciser :", o:["Seulement les questions","Le type d'évaluation, le niveau, les compétences évaluées","Uniquement la note sur 20","Seulement la durée de l'évaluation"], a:1, obj:4 },
    { q:"Pour adapter un contenu au niveau des apprenants :", o:["Il faut préciser leur niveau et leurs prérequis","Il suffit de demander 'niveau facile'","Il faut utiliser des mots simples","Il faut éviter les exemples"], a:0, obj:4 },
    { q:"Un prompt pour créer un scénario pédagogique doit inclure :", o:["Seulement l'objectif d'apprentissage","Les objectifs, la durée, les méthodes et le public cible","Seulement la méthode pédagogique","Uniquement le nombre de participants"], a:1, obj:4 },
    { q:"Pour générer des questions de réflexion critique :", o:["Demander des questions fermées","Spécifier le niveau de taxonomie de Bloom souhaité","Éviter les questions ouvertes","Limiter aux questions factuelles"], a:1, obj:4 },
];
// Niveau et recommandations
const levels = [
    { name:"Débutant", min:0, max:6, desc:"Découverte nécessaire des concepts fondamentaux.", rec:["Suivre une formation d'initiation à l'IA générative.","Pratiquer avec des outils simples comme ChatGPT.","Lire des ressources pédagogiques sur les bases de l'IA."] },
    { name:"Intermédiaire", min:7, max:13, desc:"Bonnes bases, perfectionnement recommandé.", rec:["Approfondir la maîtrise des techniques de prompting.","Expérimenter avec différents outils d'IA générative.","Créer des cas d'usage concrets en formation."] },
    { name:"Avancé", min:14, max:20, desc:"Excellente maîtrise, peut devenir formateur.", rec:["Devenir référent IA générative dans votre organisation.","Former d'autres formateurs aux techniques avancées.","Contribuer au développement de bonnes pratiques."] }
];
const objRec = {
    1:["Approfondir les concepts techniques de l'IA générative.","Comprendre les différents types de modèles (GPT, BERT, etc.).","Étudier les principes de l'apprentissage automatique."],
    2:["Explorer et tester différents outils d'IA générative.","Comparer les avantages/inconvénients de chaque outil.","Évaluer les aspects de sécurité et confidentialité."],
    3:["Pratiquer l'écriture de prompts avec des exemples.","Apprendre les techniques de prompt engineering.","Étudier des cas d'usage réussis de prompting."],
    4:["Se former aux techniques pédagogiques avec l'IA.","Créer des scénarios d'apprentissage avec l'IA.","Intégrer l'IA dans les méthodes d'évaluation."]
};
let sessionResults = []; // Liste {name, answers, score, details}
let quizOrder = [...Array(quizQuestions.length).keys()];
let quizIndex = 0;
let timer = null;
let timerLeft = 15;
let participant = null;
let adminMode = false;

/* Fonctions d’affichage */
function showParticipantLogin() {
    hideAll(); document.getElementById('participant-login').classList.remove('hidden');
}
function showAdminLogin() {
    hideAll(); document.getElementById('admin-login').classList.remove('hidden');
}
function returnToLanding() {
    hideAll(); document.getElementById('landing').classList.remove('hidden');
    adminMode = false; document.getElementById('adminPass').value = '';
}
function hideAll() {
    [...document.querySelectorAll('main section')].forEach(s => s.classList.add('hidden'));
}
function startQuiz() {
    let name = document.getElementById('participantName').value.trim();
    if (!name) { alert("Merci d'entrer votre nom."); return; }
    participant = name;
    quizOrder = [...Array(quizQuestions.length).keys()];
    // Mélanger les questions (toujours le même ordre par session, ici non sessionné)
    quizIndex = 0;
    showQuestion(quizOrder[quizIndex]);
    document.getElementById('participantDisplay').innerText = participant;
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('participant-login').classList.add('hidden');
    setTimer(15);
    updateProgress();
}
function showQuestion(idx) {
    let q = quizQuestions[idx];
    let html = `<h4>${q.q}</h4>`;
    for (let i=0; i<q.o.length; i++) {
        html += `<div><label><input type="radio" name="option" value="${i}"> ${q.o[i]}</label></div>`;
    }
    html += `<button onclick="submitAnswer()">Soumettre</button>`;
    document.getElementById('question-container').innerHTML = html;
}
function submitAnswer() {
    let radios = document.querySelectorAll('#question-container input[type="radio"]');
    let val = null;
    for(let r of radios) if(r.checked) val = Number(r.value);
    if(val==null){ alert("Sélectionnez une option."); return;}
    storeAnswer(val);
}
function setTimer(secs) {
    timerLeft = secs;
    document.getElementById('timer').innerText = '🕓 ' + timerLeft + " s";
    clearInterval(timer);
    timer = setInterval(()=>{
        timerLeft -= 1;
        document.getElementById('timer').innerText = '🕓 ' + timerLeft + " s";
        if(timerLeft<=0){
            clearInterval(timer);
            storeAnswer(null); // Pas de réponse en temps
        }
    },1000);
}
function updateProgress() {
    document.getElementById('progress').innerText = `Question ${quizIndex+1}/20`;
}

/* Gestion Quiz */
let answers = [];
function storeAnswer(val) {
    answers.push(val);
    quizIndex++;
    clearInterval(timer);
    if(quizIndex<quizQuestions.length) {
        showQuestion(quizOrder[quizIndex]);
        setTimer(15);
        updateProgress();
    } else {
        showResult();
    }
}
function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    let score = 0, details=[0,0,0,0]; // Score par objectif
    for(let i=0; i<quizQuestions.length; i++){
        let a = answers[i];
        if(a!==null && a==quizQuestions[i].a){
            score++;
            details[quizQuestions[i].obj-1]++;
        }
    }
    sessionResults.push({name:participant, answers:[...answers], score, details});
    let level = levels.find(l=>score>=l.min && score<=l.max);
    let html = `<b>${participant}</b>, score <b>${score}/20</b><br>`;
    html += `<b>Niveau :</b> ${level.name} <br><i>${level.desc}</i><br><ul>`;
    for(let r of level.rec) html += `<li>${r}</li>`;
    html += `</ul><hr><b>Scores par axe :</b><ul>`;
    for(let i=0;i<details.length;i++)
        html += `<li>Objectif ${i+1} : ${details[i]}/5</li>`;
    html += `</ul>`;
    html += `<b>Axes d'amélioration :</b><ul>`;
    for(let i=0;i<details.length;i++) 
        if(details[i]<3) for(let rec of objRec[i+1]) html += `<li>${rec}</li>`;
    html += `</ul>`;
    document.getElementById('score-summary').innerHTML = html;
    document.getElementById('recommendations').innerHTML = "";
    hideAll(); document.getElementById('result').classList.remove('hidden');
    answers = [];
}

/* Admin */
function validateAdmin() {
    let pass = document.getElementById('adminPass').value;
    if(pass !== "admin2024"){ document.getElementById('admin-error').innerText="Mot de passe incorrect."; return;}
    adminMode = true;
    showAdmin();
}
function showAdmin() {
    hideAll();
    document.getElementById('admin-dashboard').classList.remove('hidden');
    let html = '';
    if(sessionResults.length===0) html = "Aucun participant n'a complété le quiz.";
    else {
        html += `<table border="1" style="width:100%;margin-bottom:16px;"><tr><th>Nom</th><th>Score</th><th>Niveau</th><th>Détails</th></tr>`;
        for(let res of sessionResults){
            let level = levels.find(l=>res.score>=l.min && res.score<=l.max);
            html += `<tr><td>${res.name}</td>
            <td>${res.score}/20</td>
            <td>${level.name}</td>
            <td>${res.details.map((d,i)=>`Objectif ${i+1}:${d}/5`).join(", ")}</td></tr>`;
        }
        html += `</table>`;
    }
    document.getElementById('admin-results').innerHTML = html;
    updateChart();
}
/* Chart admin */
function updateChart(){
    let canvas = document.getElementById('scoreChart');
    if(!canvas)return;
    let labels = sessionResults.map(r=>r.name);
    let scores = sessionResults.map(r=>r.score);
    new Chart(canvas, {
        type:'bar',
        data:{ labels,scores,
            datasets:[{label:'Score global', data:scores, backgroundColor:'#ff3a52'}]
        },
        options:{ scales:{ y:{max:20,beginAtZero:true}} }
    });
}
/* Export/Import */
function exportJSON(){
    let data = JSON.stringify(sessionResults,null,2);
    let a = document.createElement('a'); let blob = new Blob([data],{type:'application/json'});
    a.href = URL.createObjectURL(blob); a.download = "resultats_ia_tbs.json"; a.click();
}
function exportCSV(){
    let header="Nom,Score,Niveau,Objectif1,Objectif2,Objectif3,Objectif4\n";
    let rows = sessionResults.map(r=>{
        let l = levels.find(lv=>r.score>=lv.min && r.score<=lv.max).name;
        return `"${r.name}",${r.score},"${l}",${r.details.join(",")}`;
    });
    let content = header+rows.join("\n");
    let a = document.createElement('a'); let blob = new Blob([content],{type:'text/csv'});
    a.href = URL.createObjectURL(blob); a.download = "resultats_ia_tbs.csv"; a.click();
}
function importJSON(){
    document.getElementById('importFile').click();
}
function handleImport(evt){
    let file = evt.target.files[0]; if(!file) return;
    let reader = new FileReader();
    reader.onload = (e)=>{
        let data = JSON.parse(e.target.result);
        if(Array.isArray(data)) sessionResults = data;
        showAdmin();
    };
    reader.readAsText(file);
}
