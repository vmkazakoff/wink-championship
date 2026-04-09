// Массив заданий для генерации карточек и модалок
const ASSIGNMENTS = [
  {
    id: "1",
    cardTitle: "Придумали название и&nbsp;девиз команды",
    modalTitle: "Задание 1: Название и девиз команды",
    modalDescription:
      "Придумайте креативное название для вашей команды и напишите девиз, который отражает её дух. Отправьте промпт, не само название,",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>`,
  },
  {
    id: "2",
    cardTitle: "Проанализировали интересы ЦА",
    modalTitle: "Задание 2: Анализ целевой аудитории",
    modalDescription:
      "Проанализируйте интересы, потребности и боли вашей целевой аудитории. Отправьте промпт.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>`,
  },
  {
    id: "3",
    cardTitle: "Создали лог-лайн и&nbsp;синопсис",
    modalTitle: "Задание 3: Лог-лайн и синопсис",
    modalDescription:
      "Создайте лог-лайн (краткое описание в паре предложений) и синопсис вашего проекта. Отправьте промпт.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
  },
  {
    id: "4",
    cardTitle: "Придумали сценарий мини-драмы",
    modalTitle: "Задание 4: Сценарий мини-драмы",
    modalDescription:
      "Напишите сценарий для короткой мини-драмы, которая привлечёт внимание к вашему проекту. Отправьте промпт.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>`,
  },
  {
    id: "5",
    cardTitle: "Сгенерировали постер для своего проекта",
    modalTitle: "Задание 5: Постер проекта",
    modalDescription:
      "Создайте с помощью ИИ рекламный постер для вашего проекта. Отправьте промпт.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>`,
  },
  {
    id: "6",
    cardTitle: "Создали рекламный пост для соцсетей",
    modalTitle: "Задание 6: Рекламный пост для соцсетей",
    modalDescription:
      "Напишите рекламный пост для социальных сетей с использованием ИИ. Отправьте промпт.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.944-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.944.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.944 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.944 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.944.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.944-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.944 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.944 3.42 3.42 0 013.138-3.138z"></path>`,
  },
];

const API_URL =
  "https://script.google.com/macros/s/AKfycbxuYMtncpNej1EsI-k-rVEPklOB3OxJcymBcp31iaz13Tgov3iqyxeQQ6cdnka1jWGn/exec";

// Добавляем элемент для анимации обновления
const refreshIcon = document
  .getElementById("refreshButton")
  .querySelector("svg");

async function loadRealData() {
  try {
    // Показываем анимацию обновления
    refreshIcon.classList.add("rotate");

    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Обновляем статистику
    elements.totalTeams.textContent = data.statistics.totalTeams;
    elements.completed1.textContent = data.statistics.completedAssignment1;
    elements.completed2.textContent = data.statistics.completedAssignment2;
    elements.completed3.textContent = data.statistics.completedAssignment3;
    elements.completed4.textContent = data.statistics.completedAssignment4;
    elements.completed5.textContent = data.statistics.completedAssignment5;
    elements.completed6.textContent = data.statistics.completedAssignment6;

    // Обновляем прогресс бар
    updateProgressBar(data.statistics);

    // Обновляем рейтинг
    updateLeaderboard(data.teams);

    // Обновляем статус отправленных заданий для текущей команды
    if (appState.userRole === "captain" && appState.teamName) {
      updateTeamSubmissionStatus(data.teams);
    }
  } catch (error) {
    console.error("Error loading data:", error);
  } finally {
    // Убираем анимацию обновления
    refreshIcon.classList.remove("rotate");
  }
}

// Функция для отправки запросов к API
async function apiRequest(endpoint, data) {
  try {
    // Показываем анимацию на кнопке отправки
    const originalText = elements.submitAnswerButton.innerHTML;
    elements.submitAnswerButton.innerHTML = `
      <svg class="w-5 h-5 inline animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
      </svg>
      Отправка...
    `;
    elements.submitAnswerButton.disabled = true;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  } finally {
    // Восстанавливаем кнопку
    if (elements.submitAnswerButton) {
      elements.submitAnswerButton.innerHTML = "Отправить";
      elements.submitAnswerButton.disabled = false;
    }
  }
}

// Application state
let appState = {
  userRole: null,
  teamName: null,
  currentAssignment: null,
  submittedAnswers: new Set(),
};

// DOM elements
const elements = {
  authModal: document.getElementById("authModal"),
  authButton: document.getElementById("authButton"),
  loginButton: document.getElementById("loginButton"),
  cancelButton: document.getElementById("cancelButton"),
  teamNameInput: document.getElementById("teamNameInput"),
  teamNameField: document.getElementById("teamNameField"),
  captainPanel: document.getElementById("captainPanel"),
  teamName: document.getElementById("teamName"),
  answerModal: document.getElementById("answerModal"),
  answerModalTitle: document.getElementById("answerModalTitle"),
  answerModalDescription: document.getElementById("answerModalDescription"),
  answerText: document.getElementById("answerText"),
  submitAnswerButton: document.getElementById("submitAnswerButton"),
  cancelAnswerButton: document.getElementById("cancelAnswerButton"),
  linksModal: document.getElementById("linksModal"),
  qrButton: document.getElementById("qrButton"),
  closeLinksModal: document.getElementById("closeLinksModal"),
  refreshButton: document.getElementById("refreshButton"),
  leaderboard: document.getElementById("leaderboard"),
  totalTeams: document.getElementById("totalTeams"),
  completed1: document.getElementById("completed1"),
  completed2: document.getElementById("completed2"),
  completed3: document.getElementById("completed3"),
  completed4: document.getElementById("completed4"),
  completed5: document.getElementById("completed5"),
  completed6: document.getElementById("completed6"),
};

// Initialize application
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
  setupEventListeners();
  loadRealData();
});

// Функция генерации карточек заданий из массива ASSIGNMENTS
function renderAssignmentsGrid() {
  const grid = document.getElementById("assignmentsGrid");
  if (!grid) return;

  grid.innerHTML = ASSIGNMENTS.map(
    (assignment) => `
        <div class="flex flex-col">
            <div class="bg-gradient-to-br from-championship-dark-blue to-championship-blue rounded-championship-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-grow flex flex-col">
                <div class="w-12 h-12 bg-championship-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 mt-6">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${assignment.icon}
                    </svg>
                </div>
                <div id="completed${assignment.id}" class="text-3xl font-bold mb-2">0</div>
                <div class="text-sm font-medium text-opacity-90 mb-4 flex-grow">${assignment.cardTitle}</div>
            </div>
            <!-- Кнопка для капитана -->
            <button id="btn${assignment.id}" class="assignment-btn hidden w-full mt-2 py-2 px-4 rounded-championship font-medium text-gray-500 bg-gray-200 bg-opacity-0 hover:text-white hover:bg-opacity-20 transition-colors" data-assignment="${assignment.id}">
                Отправить
            </button>
        </div>
    `,
  ).join("");

  // Обновляем ссылки на динамически созданные элементы
  elements.completed1 = document.getElementById("completed1");
  elements.completed2 = document.getElementById("completed2");
  elements.completed3 = document.getElementById("completed3");
  elements.completed4 = document.getElementById("completed4");
  elements.completed5 = document.getElementById("completed5");
  elements.completed6 = document.getElementById("completed6");
}

function initializeApp() {
  // Генерируем карточки заданий
  renderAssignmentsGrid();

  // Check if user is already logged in
  const savedRole = localStorage.getItem("userRole");
  const savedTeamName = localStorage.getItem("teamName");

  if (savedRole && savedTeamName) {
    appState.userRole = savedRole;
    appState.teamName = savedTeamName;
    updateUI();
    // Загружаем актуальные данные чтобы обновить статусы ответов
    loadRealData();
  } else {
    // Show auth modal on first visit
    showAuthModal();
  }
}

function setupEventListeners() {
  // Auth modal events
  elements.authButton.addEventListener("click", showAuthModal);
  elements.cancelButton.addEventListener("click", hideAuthModal);
  elements.loginButton.addEventListener("click", handleLogin);

  // Role selection
  document.querySelectorAll('input[name="role"]').forEach((radio) => {
    radio.addEventListener("change", handleRoleChange);
  });

  // Assignment buttons
  document.querySelectorAll(".assignment-btn").forEach((btn) => {
    btn.addEventListener("click", handleAssignmentClick);
  });

  // Answer modal events
  elements.cancelAnswerButton.addEventListener("click", hideAnswerModal);
  elements.submitAnswerButton.addEventListener("click", function (e) {
    e.preventDefault();
    handleSubmitAnswer();
  });

  // Links modal events
  elements.qrButton.addEventListener("click", showLinksModal);
  elements.closeLinksModal.addEventListener("click", hideLinksModal);
  document
    .getElementById("closeLinksModalTop")
    .addEventListener("click", hideLinksModal);

  // Refresh button
  elements.refreshButton.addEventListener("click", function () {
    refreshIcon.classList.add("rotate");
    loadRealData();
  });

  // Close modals on outside click
  elements.authModal.addEventListener("click", function (e) {
    if (e.target === elements.authModal) hideAuthModal();
  });

  elements.answerModal.addEventListener("click", function (e) {
    if (e.target === elements.answerModal) hideAnswerModal();
  });

  elements.linksModal.addEventListener("click", function (e) {
    if (e.target === elements.linksModal) hideLinksModal();
  });
}

function showAuthModal() {
  elements.authModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function hideAuthModal() {
  elements.authModal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

function handleRoleChange(e) {
  const role = e.target.value;
  if (role === "captain") {
    elements.teamNameInput.classList.remove("hidden");
    elements.teamNameField.required = true;
  } else {
    elements.teamNameInput.classList.add("hidden");
    elements.teamNameField.required = false;
  }
}

// Обновленная функция handleLogin
async function handleLogin() {
  const selectedRole = document.querySelector('input[name="role"]:checked');
  if (!selectedRole) {
    alert("Пожалуйста, выберите роль");
    return;
  }

  const role = selectedRole.value;
  let teamName = null;

  // Показываем анимацию загрузки
  elements.loginButton.innerHTML = `
    <svg class="w-5 h-5 inline animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
    </svg>
    Вход...
  `;
  elements.loginButton.disabled = true;

  if (role === "captain") {
    teamName = elements.teamNameField.value.trim();
    if (!teamName) {
      alert("Пожалуйста, введите название команды");
      elements.loginButton.innerHTML = "Войти";
      elements.loginButton.disabled = false;
      return;
    }

    teamName = String(teamName);

    try {
      // Регистрируем команду или проверяем существование
      const result = await apiRequest("register", {
        action: "register",
        teamName: teamName,
      });

      if (!result.success) {
        alert("Ошибка регистрации: " + (result.error || "Неизвестная ошибка"));
        elements.loginButton.innerHTML = "Войти";
        elements.loginButton.disabled = false;
        return;
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Ошибка соединения с сервером. Попробуйте позже.");
      elements.loginButton.innerHTML = "Войти";
      elements.loginButton.disabled = false;
      return;
    }
  }

  // Save to state and localStorage
  appState.userRole = role;
  appState.teamName = teamName;

  localStorage.setItem("userRole", role);
  if (teamName) {
    localStorage.setItem("teamName", teamName);
  }

  hideAuthModal();
  updateUI();

  // Восстанавливаем кнопку входа
  elements.loginButton.innerHTML = "Войти";
  elements.loginButton.disabled = false;

  // Загружаем актуальные данные
  loadRealData();
}

function updateUI() {
  if (appState.userRole === "captain") {
    // Показываем все кнопки отправки
    document.querySelectorAll(".assignment-btn").forEach((btn) => {
      btn.classList.remove("hidden");
    });
    elements.teamName.textContent = `(команда: ${appState.teamName})`;
    updateAssignmentButtons();
  } else {
    // Скрываем все кнопки отправки
    document.querySelectorAll(".assignment-btn").forEach((btn) => {
      btn.classList.add("hidden");
    });
  }
}

function updateAssignmentButtons() {
  document.querySelectorAll(".assignment-btn").forEach((btn) => {
    const assignment = btn.dataset.assignment;
    const isSubmitted = appState.submittedAnswers.has(assignment);

    if (isSubmitted) {
      btn.classList.remove(
        "text-gray-500",
        "hover:bg-gray-200",
        "hover:bg-opacity-20",
      );
      btn.classList.add("text-gray-300", "hover:text-gray-700");
      btn.innerHTML = `ОТПРАВЛЕНО`;
      btn.disabled = false;
    } else {
      btn.innerHTML = `ОТПРАВИТЬ`;
      btn.disabled = false;
    }
  });
}

function handleAssignmentClick(e) {
  const assignment = e.target.dataset.assignment;
  appState.currentAssignment = assignment;

  // Находим задание в массиве
  const assignmentData = ASSIGNMENTS.find((a) => a.id === assignment);

  // Обновляем заголовок и описание в модалке
  elements.answerModalTitle.textContent = assignmentData
    ? assignmentData.modalTitle
    : `Задание ${assignment}`;
  elements.answerModalDescription.textContent = assignmentData
    ? assignmentData.modalDescription
    : "";

  // Проверяем, было ли задание уже отправлено
  const isSubmitted = appState.submittedAnswers.has(assignment);
  if (isSubmitted) {
    // Показываем информацию об отправленном ответе
    elements.answerText.value = "Ответ уже отправлен и не может быть изменен.";
    elements.answerText.disabled = true;
    elements.submitAnswerButton.textContent = "Закрыть";
    elements.submitAnswerButton.disabled = false;
    elements.submitAnswerButton.classList.remove(
      "bg-gpb-orange",
      "hover:bg-opacity-90",
    );
    elements.submitAnswerButton.classList.add(
      "bg-gray-500",
      "hover:bg-gray-600",
    );
  } else {
    // Новое задание
    elements.answerText.value = "";
    elements.answerText.disabled = false;
    elements.submitAnswerButton.textContent = "Отправить";
    elements.submitAnswerButton.disabled = false;
    elements.submitAnswerButton.classList.remove(
      "bg-gray-500",
      "hover:bg-gray-600",
    );
    elements.submitAnswerButton.classList.add(
      "bg-gpb-orange",
      "hover:bg-opacity-90",
    );
  }

  showAnswerModal();
}

function showAnswerModal() {
  elements.answerModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  elements.answerText.focus();
}

function hideAnswerModal() {
  elements.answerModal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

async function handleSubmitAnswer() {
  if (appState.submittedAnswers.has(appState.currentAssignment)) {
    hideAnswerModal();
    return;
  }

  const answer = elements.answerText.value.trim();
  if (!answer) {
    alert("Пожалуйста, введите ответ");
    return;
  }

  try {
    // Отправляем ответ на сервер
    const result = await apiRequest("submit-answer", {
      action: "submit-answer",
      teamName: appState.teamName,
      assignmentNumber: appState.currentAssignment,
      answer: answer,
    });

    if (!result.success) {
      alert(
        "Ошибка отправки ответа: " + (result.error || "Неизвестная ошибка"),
      );
      return;
    }

    // Mark as submitted
    appState.submittedAnswers.add(appState.currentAssignment);

    // Update UI
    updateAssignmentButtons();
    hideAnswerModal();

    // Показываем уведомление об успехе
    showNotification("Ответ успешно отправлен!", "success");

    // Обновляем данные
    loadRealData();
  } catch (error) {
    console.error("Submit answer error:", error);
    alert("Ошибка отправки ответа. Попробуйте позже.");
  }
}

function updateTeamSubmissionStatus(teams) {
  const currentTeam = teams.find((team) => {
    // Нормализуем сравнение - приводим оба значения к строкам
    const teamNameFromState = String(appState.teamName).trim().toLowerCase();
    const teamNameFromData = String(team.teamName).trim().toLowerCase();
    return teamNameFromData === teamNameFromState;
  });

  if (currentTeam) {
    // Очищаем предыдущие статусы
    appState.submittedAnswers.clear();

    // Добавляем отправленные задания (проверяем любые значения, включая числа)
    const hasAnswer1 =
      currentTeam.assignment1 !== null &&
      currentTeam.assignment1 !== undefined &&
      currentTeam.assignment1 !== "" &&
      !(
        typeof currentTeam.assignment1 === "number" &&
        isNaN(currentTeam.assignment1)
      );

    const hasAnswer2 =
      currentTeam.assignment2 !== null &&
      currentTeam.assignment2 !== undefined &&
      currentTeam.assignment2 !== "" &&
      !(
        typeof currentTeam.assignment2 === "number" &&
        isNaN(currentTeam.assignment2)
      );

    const hasAnswer3 =
      currentTeam.assignment3 !== null &&
      currentTeam.assignment3 !== undefined &&
      currentTeam.assignment3 !== "" &&
      !(
        typeof currentTeam.assignment3 === "number" &&
        isNaN(currentTeam.assignment3)
      );

    const hasAnswer4 =
      currentTeam.assignment4 !== null &&
      currentTeam.assignment4 !== undefined &&
      currentTeam.assignment4 !== "" &&
      !(
        typeof currentTeam.assignment4 === "number" &&
        isNaN(currentTeam.assignment4)
      );

    const hasAnswer5 =
      currentTeam.assignment5 !== null &&
      currentTeam.assignment5 !== undefined &&
      currentTeam.assignment5 !== "" &&
      !(
        typeof currentTeam.assignment5 === "number" &&
        isNaN(currentTeam.assignment5)
      );

    const hasAnswer6 =
      currentTeam.assignment6 !== null &&
      currentTeam.assignment6 !== undefined &&
      currentTeam.assignment6 !== "" &&
      !(
        typeof currentTeam.assignment6 === "number" &&
        isNaN(currentTeam.assignment6)
      );

    if (hasAnswer1) appState.submittedAnswers.add("1");
    if (hasAnswer2) appState.submittedAnswers.add("2");
    if (hasAnswer3) appState.submittedAnswers.add("3");
    if (hasAnswer4) appState.submittedAnswers.add("4");
    if (hasAnswer5) appState.submittedAnswers.add("5");
    if (hasAnswer6) appState.submittedAnswers.add("6");

    updateAssignmentButtons();
  } else {
    console.log("Команда не найдена в данных:", appState.teamName);
    console.log(
      "Доступные команды:",
      teams.map((t) => t.teamName),
    );
  }
}

// Функция для показа уведомлений
function showNotification(message, type = "info") {
  // Создаем элемент уведомления
  const notification = document.createElement("div");
  notification.className = `fixed top-4 right-4 p-4 rounded-gpb shadow-lg z-50 transform transition-all duration-300 ${
    type === "success"
      ? "bg-green-500 text-white"
      : type === "error"
        ? "bg-red-500 text-white"
        : "bg-blue-500 text-white"
  }`;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Автоматически скрываем через 3 секунды
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

function showLinksModal() {
  elements.linksModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function hideLinksModal() {
  elements.linksModal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

function updateProgressBar(statistics) {
  const totalTeams = statistics.totalTeams;
  const totalAssignments =
    statistics.completedAssignment1 +
    statistics.completedAssignment2 +
    statistics.completedAssignment3 +
    statistics.completedAssignment4 +
    statistics.completedAssignment5 +
    statistics.completedAssignment6;
  const maxPossibleAssignments = totalTeams * 6;
  const progressPercentage =
    maxPossibleAssignments > 0
      ? Math.round((totalAssignments / maxPossibleAssignments) * 100)
      : 0;

  // Update progress bar
  const progressBar = document.getElementById("progressBar");
  const progressPercentageElement =
    document.getElementById("progressPercentage");
  const totalAssignmentsElement = document.getElementById("totalAssignments");

  if (progressBar) {
    progressBar.style.width = `${progressPercentage}%`;
  }

  if (progressPercentageElement) {
    progressPercentageElement.textContent = `${progressPercentage}%`;
  }

  if (totalAssignmentsElement) {
    totalAssignmentsElement.textContent = `${totalAssignments} из ${maxPossibleAssignments} возможных`;
  }
}

function updateLeaderboard(teams) {
  if (!teams || teams.length === 0) {
    elements.leaderboard.innerHTML = `
            <div class="text-center text-gpb-text-light py-8">
                <svg class="w-12 h-12 mx-auto mb-4 text-gpb-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p>Пока нет ни одной команды</p>
            </div>
        `;
    return;
  }

  // Sort teams by score, then by completed assignments, then by last answer time
  const sortedTeams = [...teams].sort((a, b) => {
    if (b.totalScore !== a.totalScore) return b.totalScore - a.totalScore;
    if (b.completedAssignments !== a.completedAssignments)
      return b.completedAssignments - a.completedAssignments;
    if (a.lastAnswerTime && b.lastAnswerTime)
      return new Date(a.lastAnswerTime) - new Date(b.lastAnswerTime);
    return new Date(a.registrationTime) - new Date(b.registrationTime);
  });

  elements.leaderboard.innerHTML = sortedTeams
    .map(
      (team, index) => `
        <div class="flex items-center justify-between py-3 px-4 hover:bg-gray-800 rounded-xl transition-colors duration-200">
            <div class="flex items-center">
                <div class="text-2xl font-bold text-white mr-6 w-8">${index + 1}</div>
                <div>
                    <div class="font-bold text-white text-lg">${team.teamName}</div>
                    <div class="text-sm text-white">
                        Выполнено заданий: ${team.completedAssignments}
                    </div>
                </div>
            </div>
            <div class="text-right">
                <div class="text-xl font-bold text-gpb-blue">${team.totalScore}</div>
                <div class="text-sm text-gpb-text-light">баллов</div>
            </div>
        </div>
    `,
    )
    .join("");
}

// Auto-refresh every {x} seconds
setInterval(loadRealData, 30000);
