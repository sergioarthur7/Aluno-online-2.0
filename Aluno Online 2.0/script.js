const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const activityForm = document.getElementById("activityForm");
const studentNameInput = document.getElementById("studentName");
const teacherNameInput = document.getElementById("teacherName");
const subjectNameInput = document.getElementById("subjectName");
const dueDateInput = document.getElementById("dueDate");
const activityFileInput = document.getElementById("activityFile");
const loginSection = document.querySelector(".login-section");
const activitySection = document.querySelector(".activity-section");

// Inicialmente, oculte a seção de atividades
activitySection.style.display = "none";

// Ao enviar o formulário de login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Verificar as credenciais (usuário "Sérgio Arthur S7" e senha "12345")
    if (username === "Sérgio Arthur S7" && password === "12345") {
        // Exibir a seção de envio de atividade
        activitySection.style.display = "block";

        // Ocultar a seção de login
        loginSection.style.display = "none";

        alert("Login bem-sucedido!");
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }

    // Limpar campos de login
    usernameInput.value = "";
    passwordInput.value = "";
});

// Lógica de envio de atividade (você precisa implementar isso)
