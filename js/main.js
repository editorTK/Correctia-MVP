document.addEventListener('DOMContentLoaded', () => {

    // --- PROMPTS ---
    const PROMPTS = {
        correct: {
            title: 'Texto Corregido',
            prompt: 'Actúa como un experto corrector de textos. Revisa el siguiente texto, corrige cualquier error de ortografía, gramática y puntuación. Mejora la redacción para que sea más clara y fluida, pero sin cambiar el significado. Devuelve únicamente el texto corregido, sin explicaciones.'
        },
        formal: {
            title: 'Texto Formalizado',
            prompt: 'Actúa como un asistente de redacción profesional. Transforma el siguiente texto a un tono estrictamente formal, profesional y elocuente, adecuado para un entorno corporativo o académico. Devuelve únicamente el texto transformado, sin explicaciones.'
        },
        casual: {
            title: 'Texto Casual',
            prompt: 'Actúa como un redactor creativo y amigable. Convierte el siguiente texto a un tono casual, relajado y cercano, como si se lo estuvieras contando a un amigo. Puedes usar un lenguaje más coloquial si es apropiado. Devuelve únicamente el texto transformado, sin explicaciones.'
        },
        simplify: {
            title: 'Texto Simplificado',
            prompt: 'Actúa como un experto en comunicación clara. Simplifica el siguiente texto para que sea muy fácil de entender para cualquier persona, incluso si no conoce el tema. Usa palabras sencillas y frases cortas. Devuelve únicamente el texto simplificado.'
        },
        summarize: {
            title: 'Resumen Generado',
            prompt: 'Actúa como un analista experto. Genera un resumen conciso y claro del siguiente texto, extrayendo las ideas principales y los puntos clave. El resumen debe ser breve y directo al grano. Devuelve únicamente el resumen.'
        },
        expand: {
            title: 'Texto Expandido',
            prompt: 'Actúa como un escritor experto. Toma la siguiente idea o texto y desarróllalo con más detalle. Añade información relevante, ejemplos, o explicaciones para enriquecer el contenido original de forma coherente. Devuelve únicamente el texto expandido.'
        }
    };

    // --- DOM REFERENCES ---
    const userAuthArea = document.getElementById('user-auth-area');
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsBtn = document.getElementById('close-settings');
    const themeToggle = document.getElementById('theme-toggle');
    const textInput = document.getElementById('text-to-correct');
    const actionButtons = document.querySelectorAll('.action-btn');
    const resultSection = document.getElementById('result-section');
    const resultTitle = document.getElementById('result-title');
    const resultContainer = document.getElementById('result-text-container');
    const copyButton = document.getElementById('copy-button');
    const historyPanel = document.getElementById('history-panel');
    const historyToggle = document.getElementById('history-toggle');
    const historyList = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const loginRequiredModal = document.getElementById('login-required-modal');
    const confirmLoginBtn = document.getElementById('confirm-login-btn');
    const cancelLoginBtn = document.getElementById('cancel-login-btn');

    // --- AUTH, MODALS & SETTINGS LOGIC ---
    const showLoginModal = () => loginRequiredModal.classList.remove('hidden');
    const hideLoginModal = () => loginRequiredModal.classList.add('hidden');

    const updateAuthStateUI = async () => {
        if (puter.auth.isSignedIn()) {
            const user = await puter.auth.getUser();
            userAuthArea.innerHTML = `
                <span class="text-sm font-medium text-gray-800 dark:text-gray-200">Hola, ${user.username}</span>
                <button id="logout-btn" class="bg-red-600 text-white text-sm py-2 px-3 rounded-lg hover:bg-red-700">Salir</button>
            `;
            document.getElementById('logout-btn').addEventListener('click', handleSignOut);
        } else {
            userAuthArea.innerHTML = `
                <button id="sign-in-btn" class="bg-green-600 text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-green-700">Iniciar Sesión</button>
            `;
            document.getElementById('sign-in-btn').addEventListener('click', handleSignIn);
        }
    };

    const handleSignIn = async () => {
        try {
            await puter.auth.signIn();
            await updateAuthStateUI();
        } catch (error) {
            console.error("Proceso de login cancelado.", error);
        }
    };

    const handleSignOut = async () => {
        await puter.auth.signOut();
        await updateAuthStateUI();
    };

    const applyTheme = (theme) => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        themeToggle.innerText = theme === 'dark' ? 'Cambiar a Tema Claro' : 'Cambiar a Tema Oscuro';
        localStorage.setItem('theme', theme);
    };

    // --- MAIN APP LOGIC ---
    const handleActionClick = async (event) => {
        event.preventDefault();

        if (!puter.auth.isSignedIn()) {
            showLoginModal();
            return;
        }

        const button = event.currentTarget;
        const action = button.dataset.action;
        const userText = textInput.value;
        if (!userText.trim()) return alert('Por favor, escribe algo de texto.');

        const originalButtonText = button.innerHTML;
        button.disabled = true;
        button.innerHTML = '🧠 Pensando...';

        try {
            const config = PROMPTS[action];
            const finalPrompt = `${config.prompt}\n\n---\n\n${userText}`;
            const response = await puter.ai.chat(finalPrompt, { model: 'gpt-4.1-nano' });
console.log("Puter response raw:", response);  // para ver la estructura real

const resultText = response?.message?.content
  ? response.message.content
  : "No se pudo obtener una respuesta.";
            resultTitle.innerText = config.title;
            resultContainer.innerText = resultText;
            resultSection.classList.remove('hidden');

            addToHistory({
                title: config.title,
                original_text: userText,
                result_text: resultText
            });
            renderHistory();

        } catch (error) {
            console.error('Error al procesar la acción:', error);
            alert('Hubo un error al procesar tu petición. Revisa la consola para más detalles.');
        } finally {
            button.disabled = false;
            button.innerHTML = originalButtonText;
        }
    };

    // --- HISTORY LOGIC ---
    const MAX_HISTORY_ITEMS = 10;
    const getHistory = () => JSON.parse(localStorage.getItem('correctiaHistory')) || [];
    const saveHistory = (history) => localStorage.setItem('correctiaHistory', JSON.stringify(history));

    const addToHistory = (item) => {
        let history = getHistory();
        history.unshift(item);
        if (history.length > MAX_HISTORY_ITEMS) history.pop();
        saveHistory(history);
    };

    const renderHistory = () => {
        const history = getHistory();
        historyList.innerHTML = '';
        clearHistoryBtn.classList.toggle('hidden', history.length === 0);

        if (history.length === 0) {
            historyList.innerHTML = '<p class="text-gray-400 text-sm text-center mt-4">No hay historial.</p>';
            return;
        }

        history.forEach(item => {
            const div = document.createElement('div');
            div.className = 'bg-gray-700 p-2 rounded-lg cursor-pointer hover:bg-gray-600';
            div.innerHTML = `<p class="text-white font-bold text-sm truncate">${item.title}</p><p class="text-gray-300 text-xs truncate">${item.original_text}</p>`;
            div.addEventListener('click', () => {
                textInput.value = item.original_text;
                resultTitle.innerText = item.title;
                resultContainer.innerText = item.result_text;
                resultSection.classList.remove('hidden');
                historyPanel.classList.add('hidden', 'translate-x-full');
            });
            historyList.appendChild(div);
        });
    };

    const clearHistory = () => {
        if (confirm('¿Estás seguro de que quieres borrar todo el historial?')) {
            localStorage.removeItem('correctiaHistory');
            renderHistory();
        }
    };

    // --- APP INITIALIZATION ---
    async function initializeApp() {
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(savedTheme);
        await updateAuthStateUI();
        
        actionButtons.forEach(button => button.addEventListener('click', handleActionClick));
        
        settingsToggle.addEventListener('click', () => settingsModal.classList.remove('hidden'));
        closeSettingsBtn.addEventListener('click', () => settingsModal.classList.add('hidden'));
        
        themeToggle.addEventListener('click', () => {
            const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
            applyTheme(newTheme);
        });
        
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(resultContainer.innerText).then(() => {
                copyButton.innerText = '¡Copiado!';
                setTimeout(() => { copyButton.innerText = 'Copiar'; }, 2000);
            });
        });

        historyToggle.addEventListener('click', () => {
            historyPanel.classList.toggle('hidden');
            historyPanel.classList.toggle('translate-x-full');
        });

        clearHistoryBtn.addEventListener('click', clearHistory);
        
        cancelLoginBtn.addEventListener('click', hideLoginModal);
        confirmLoginBtn.addEventListener('click', () => {
            hideLoginModal();
            handleSignIn();
        });
        
        renderHistory();
    }

    initializeApp();
});
