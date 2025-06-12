document.addEventListener('DOMContentLoaded', () => {

    // --- I18N STRINGS ---
    const TRANSLATIONS = {
        es: {
            settings: 'Ajustes',
            closeSettings: 'Cerrar',
            languageLabel: 'Idioma',
            loginRequiredTitle: 'Inicio de Sesión Requerido',
            loginRequiredText: 'Para usar esta función, necesitas iniciar sesión. Serás redirigido a Puter para autenticarte de forma segura.',
            loginRequiredQuestion: '¿Deseas continuar?',
            loginConfirm: 'Sí, iniciar sesión',
            loginCancel: 'Cancelar',
            termsTitle: 'Términos de Uso',
            termsText: 'Debes aceptar nuestros Términos de Uso antes de continuar.',
            termsAccept: 'Aceptar',
            termsCancel: 'Cancelar',
            customPromptTitle: 'Prompt Personalizado',
            savePrompt: 'Guardar para después',
            customPromptPlaceholder: 'Escribe tu prompt...',
            customPromptUse: 'Usar',
            customPromptCancel: 'Cancelar',
            noSavedPrompts: 'No hay prompts guardados.',
            historyTitle: 'Historial',
            clearHistory: 'Limpiar Historial',
            noHistory: 'No hay historial.',
            headerSubtitle: 'Tu navaja suiza de redacción con IA.',
            placeholder: 'Escribe o pega tu texto aquí...',
            actionCorrect: '✨ Corregir Ortografía y Estilo',
            otherActions: 'Otras acciones:',
            actionFormal: 'Formal',
            actionCasual: 'Casual',
            actionSimplify: 'Simplificar',
            actionSummarize: 'Resumir',
            actionExpand: 'Expandir',
            actionCustom: 'Personalizado',
            feedback: 'Ofrecer comentarios',
            feedbackTitle: 'Tus comentarios',
            sendFeedback: 'Enviar',
            cancelFeedback: 'Cancelar',
            copy: 'Copiar',
            copied: '¡Copiado!',
            signIn: 'Iniciar Sesión',
            signOut: 'Salir',
            hello: 'Hola,',
            noResponse: 'No se pudo obtener una respuesta.',
            textRequired: 'Por favor, escribe algo de texto.',
            responseTime: 'Tiempo de respuesta',
            deleteHistoryConfirm: '¿Estás seguro de que quieres borrar todo el historial?',
            writePrompt: 'Escribe un prompt.',
            errorProcessing: 'Hubo un error al procesar tu petición. Revisa la consola para más detalles.',
            resultTitles: {
                correct: 'Texto Corregido',
                formal: 'Texto Formalizado',
                casual: 'Texto Casual',
                simplify: 'Texto Simplificado',
                summarize: 'Resumen Generado',
                expand: 'Texto Expandido',
                custom: 'Resultado Personalizado'
            }
        },
        en: {
            settings: 'Settings',
            closeSettings: 'Close',
            languageLabel: 'Language',
            loginRequiredTitle: 'Login Required',
            loginRequiredText: 'To use this feature you must sign in. You will be redirected to Puter for secure authentication.',
            loginRequiredQuestion: 'Continue?',
            loginConfirm: 'Yes, sign in',
            loginCancel: 'Cancel',
            termsTitle: 'Terms of Use',
            termsText: 'You must accept our Terms of Use before continuing.',
            termsAccept: 'Accept',
            termsCancel: 'Cancel',
            customPromptTitle: 'Custom Prompt',
            savePrompt: 'Save for later',
            customPromptPlaceholder: 'Write your prompt...',
            customPromptUse: 'Use',
            customPromptCancel: 'Cancel',
            noSavedPrompts: 'No saved prompts.',
            historyTitle: 'History',
            clearHistory: 'Clear History',
            noHistory: 'No history.',
            headerSubtitle: 'Your AI-powered writing Swiss knife.',
            placeholder: 'Write or paste your text here...',
            actionCorrect: '✨ Correct Spelling and Style',
            otherActions: 'Other actions:',
            actionFormal: 'Formal',
            actionCasual: 'Casual',
            actionSimplify: 'Simplify',
            actionSummarize: 'Summarize',
            actionExpand: 'Expand',
            actionCustom: 'Custom',
            feedback: 'Give Feedback',
            feedbackTitle: 'Your feedback',
            sendFeedback: 'Send',
            cancelFeedback: 'Cancel',
            copy: 'Copy',
            copied: 'Copied!',
            signIn: 'Sign In',
            signOut: 'Sign Out',
            hello: 'Hi,',
            noResponse: 'Could not get a response.',
            textRequired: 'Please write some text.',
            responseTime: 'Response time',
            deleteHistoryConfirm: 'Are you sure you want to clear all history?',
            writePrompt: 'Write a prompt.',
            errorProcessing: 'There was an error processing your request. Check console for details.',
            resultTitles: {
                correct: 'Corrected Text',
                formal: 'Formal Text',
                casual: 'Casual Text',
                simplify: 'Simplified Text',
                summarize: 'Generated Summary',
                expand: 'Expanded Text',
                custom: 'Custom Result'
            }
        }
    };

    let currentLang = localStorage.getItem('lang');
    if (!currentLang) {
        const browserLang = navigator.language || (navigator.languages && navigator.languages[0]) || 'es';
        const detected = typeof franc === 'function' ? franc(browserLang) : '';
        if (detected === 'eng') currentLang = 'en';
        else if (detected === 'spa') currentLang = 'es';
        else currentLang = browserLang.startsWith('en') ? 'en' : 'es';
    }

    const getT = (key) => TRANSLATIONS[currentLang][key];

    const applyTranslations = () => {
        const t = TRANSLATIONS[currentLang];
        document.documentElement.lang = currentLang;
        document.getElementById('settings-title').innerText = t.settings;
        document.getElementById('close-settings').innerText = t.closeSettings;
        document.getElementById('language-label').innerText = t.languageLabel;
        document.getElementById('login-required-title').innerText = t.loginRequiredTitle;
        document.getElementById('login-required-text').innerText = t.loginRequiredText;
        document.getElementById('login-required-question').innerText = t.loginRequiredQuestion;
        document.getElementById('cancel-login-btn').innerText = t.loginCancel;
        document.getElementById('confirm-login-btn').innerText = t.loginConfirm;
        document.getElementById('terms-title').innerText = t.termsTitle;
        document.getElementById('terms-text').innerText = t.termsText;
        document.getElementById('cancel-terms-btn').innerText = t.termsCancel;
        document.getElementById('accept-terms-btn').innerText = t.termsAccept;
        document.getElementById('custom-prompt-title').innerText = t.customPromptTitle;
        document.getElementById('save-custom-prompt-label').innerText = t.savePrompt;
        document.getElementById('cancel-custom-prompt').innerText = t.customPromptCancel;
        document.getElementById('confirm-custom-prompt').innerText = t.customPromptUse;
        document.getElementById('history-title').innerText = t.historyTitle;
        document.getElementById('clear-history-btn').innerText = t.clearHistory;
        document.getElementById('header-subtitle').innerText = t.headerSubtitle;
        textInput.placeholder = t.placeholder;
        customPromptInput.placeholder = t.customPromptPlaceholder || '';
        document.getElementById('main-action-btn').innerHTML = t.actionCorrect;
        document.getElementById('other-actions-label').innerText = t.otherActions;
        document.getElementById('btn-formal').innerText = t.actionFormal;
        document.getElementById('btn-casual').innerText = t.actionCasual;
        document.getElementById('btn-simplify').innerText = t.actionSimplify;
        document.getElementById('btn-summarize').innerText = t.actionSummarize;
        document.getElementById('btn-expand').innerText = t.actionExpand;
        document.getElementById('btn-custom').innerText = t.actionCustom;
        document.getElementById('feedback-btn').innerText = t.feedback;
        document.getElementById('feedback-title').innerText = t.feedbackTitle;
        document.getElementById('cancel-feedback').innerText = t.cancelFeedback;
        document.getElementById('submit-feedback').innerText = t.sendFeedback;
        logoutBtnSettings.innerText = t.signOut;
        copyButton.innerText = t.copy;
        document.getElementById('privacy-link').innerText = t.privacy || 'Política de Privacidad';
        document.getElementById('terms-link').innerText = t.legalTerms || 'Términos de Uso';

        // update prompt titles
        Object.keys(PROMPTS).forEach(k => {
            PROMPTS[k].title = t.resultTitles[k];
        });
    };

    // --- PROMPTS ---
    const PROMPTS = {
        correct: {
            title: 'Texto Corregido',
            prompt: 'Actúa como un experto corrector de textos. Revisa el siguiente texto, corrige cualquier error de ortografía, gramática y puntuación y mejora la redacción sin alterar el significado. Entrega únicamente el texto corregido: no incluyas explicaciones ni frases de cortesía como \"Claro, aquí tienes\". Responde en el idioma en que esté el texto a mejorar.'
        },
        formal: {
            title: 'Texto Formalizado',
            prompt: 'Actúa como un asistente de redacción profesional. Transforma el siguiente texto a un tono estrictamente formal y elocuente, apto para un entorno académico o corporativo. Entrega únicamente el texto transformado, sin explicaciones ni frases iniciales. Responde en el idioma en que esté el texto a mejorar.'
        },
        casual: {
            title: 'Texto Casual',
            prompt: 'Actúa como un redactor creativo y amigable. Convierte el siguiente texto a un tono casual y cercano. Usa un lenguaje coloquial cuando sea apropiado y devuelve solo el texto resultante, sin explicaciones ni introducciones. Responde en el idioma en que esté el texto a mejorar.'
        },
        simplify: {
            title: 'Texto Simplificado',
            prompt: 'Actúa como un experto en comunicación clara. Simplifica el siguiente texto con palabras sencillas y frases cortas. Devuelve únicamente el texto simplificado, sin explicaciones ni frases de cortesía. Responde en el idioma en que esté el texto a mejorar.'
        },
        summarize: {
            title: 'Resumen Generado',
            prompt: 'Actúa como un analista experto. Resume el siguiente texto de forma breve y directa al grano. Entrega únicamente el resumen, sin explicaciones ni introducciones. Responde en el idioma en que esté el texto a mejorar.'
        },
        expand: {
            title: 'Texto Expandido',
            prompt: 'Actúa como un escritor experto. Toma la siguiente idea o texto y desarróllala con más detalle y ejemplos relevantes. Devuelve únicamente el texto expandido, sin explicaciones ni frases de introducción. Responde en el idioma en que esté el texto a mejorar.'
        }
    };

    // --- DOM REFERENCES ---
    const userAuthArea = document.getElementById('user-auth-area');
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsBtn = document.getElementById('close-settings');
    const textInput = document.getElementById('text-to-correct');
    const actionButtons = document.querySelectorAll('.action-btn');
    const resultSection = document.getElementById('result-section');
    const resultTitle = document.getElementById('result-title');
    const resultContainer = document.getElementById('result-text-container');
    const copyButton = document.getElementById('copy-button');
    const responseInfo = document.getElementById('response-info');
    const responseTimeEl = document.getElementById('response-time');
    const responseIndicator = document.getElementById('response-indicator');
    const historyPanel = document.getElementById('history-panel');
    const historyToggle = document.getElementById('history-toggle');
    const historyList = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const loginRequiredModal = document.getElementById('login-required-modal');
    const confirmLoginBtn = document.getElementById('confirm-login-btn');
    const cancelLoginBtn = document.getElementById('cancel-login-btn');
    const acceptTermsModal = document.getElementById('accept-terms-modal');
    const acceptTermsBtn = document.getElementById('accept-terms-btn');
    const cancelTermsBtn = document.getElementById('cancel-terms-btn');
    const customPromptModal = document.getElementById('custom-prompt-modal');
    const customPromptInput = document.getElementById('custom-prompt-input');
    const saveCustomPromptChk = document.getElementById('save-custom-prompt');
    const savedPromptsList = document.getElementById('saved-prompts-list');
    const confirmCustomPromptBtn = document.getElementById('confirm-custom-prompt');
    const cancelCustomPromptBtn = document.getElementById('cancel-custom-prompt');
    const feedbackBtn = document.getElementById('feedback-btn');
    const logoutBtnSettings = document.getElementById('logout-btn-settings');
    const feedbackModal = document.getElementById('feedback-modal');
    const feedbackText = document.getElementById('feedback-text');
    const submitFeedbackBtn = document.getElementById('submit-feedback');
    const cancelFeedbackBtn = document.getElementById('cancel-feedback');
    const historyOverlay = document.getElementById('history-overlay');

    // --- AUTH, MODALS & SETTINGS LOGIC ---
    const showLoginModal = () => loginRequiredModal.classList.remove('hidden');
    const hideLoginModal = () => loginRequiredModal.classList.add('hidden');

    const updateAuthStateUI = async () => {
        if (puter.auth.isSignedIn()) {
            const user = await puter.auth.getUser();
            userAuthArea.innerHTML = `<span class="text-sm font-medium text-gray-800 dark:text-gray-200">${getT('hello')} ${user.username}</span>`;
            logoutBtnSettings.classList.remove('hidden');
        } else {
            userAuthArea.innerHTML = `<button id="sign-in-btn" class="bg-green-600 text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-green-700">${getT('signIn')}</button>`;
            document.getElementById('sign-in-btn').addEventListener('click', handleSignIn);
            logoutBtnSettings.classList.add('hidden');
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


    // --- MAIN APP LOGIC ---
    let pendingAction = null;

    const hasAcceptedTerms = () => localStorage.getItem('acceptedLegal') === 'true';
    const showTermsModal = () => acceptTermsModal.classList.remove('hidden');
    const hideTermsModal = () => acceptTermsModal.classList.add('hidden');

    const showCustomPromptModal = () => {
        renderSavedPrompts();
        customPromptInput.value = '';
        saveCustomPromptChk.checked = false;
        customPromptModal.classList.remove('hidden');
    };
    const hideCustomPromptModal = () => customPromptModal.classList.add('hidden');

    const runPrompt = async (title, prompt, userText, button) => {
        const originalButtonText = button.innerHTML;
        button.disabled = true;
        button.innerHTML = '🧠 ...';
        const startTime = performance.now();

        try {
            const response = await puter.ai.chat(`${prompt}\n\n---\n\n${userText}`, { model: 'gpt-4.1-nano' });
            console.log('Puter response raw:', response);
            const resultText = response?.message?.content ? response.message.content : getT('noResponse');
            resultTitle.innerText = title;
            resultContainer.innerText = resultText;
            resultSection.classList.remove('hidden');
            addToHistory({ title, original_text: userText, result_text: resultText });
            renderHistory();
        } catch (error) {
            console.error('Error processing action:', error);
            alert(getT('errorProcessing'));
        } finally {
            const diff = performance.now() - startTime;
            const seconds = (diff / 1000).toFixed(1);
            let color = 'bg-purple-500';
            if (diff > 8000) color = 'bg-red-500';
            else if (diff > 4000) color = 'bg-yellow-500';
            else if (diff > 2000) color = 'bg-green-500';
            responseTimeEl.innerText = `${getT('responseTime')}: ${seconds}s`;
            responseIndicator.className = `w-3 h-3 rounded-full ${color}`;
            responseInfo.classList.remove('hidden');
            button.disabled = false;
            button.innerHTML = originalButtonText;
        }
    };

    const handleActionClick = async (event) => {
        event.preventDefault();

        responseInfo.classList.add('hidden');

        if (!puter.auth.isSignedIn()) {
            showLoginModal();
            return;
        }

        const button = event.currentTarget;
        const action = button.dataset.action;
        const userText = textInput.value;
        if (!userText.trim()) return alert(getT('textRequired'));

        if (!hasAcceptedTerms()) {
            pendingAction = { action, button, userText };
            showTermsModal();
            return;
        }

        if (action === 'custom') {
            pendingAction = { action, button, userText };
            showCustomPromptModal();
            return;
        }

        const config = PROMPTS[action];
        await runPrompt(config.title, config.prompt, userText, button);
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
            historyList.innerHTML = `<p class="text-gray-400 text-sm text-center mt-4">${getT('noHistory')}</p>`;
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
        if (confirm(getT('deleteHistoryConfirm'))) {
            localStorage.removeItem('correctiaHistory');
            renderHistory();
        }
    };

    // --- CUSTOM PROMPTS LOGIC ---
    const MAX_CUSTOM_PROMPTS = 2;
    const getCustomPrompts = () => JSON.parse(localStorage.getItem('customPrompts')) || [];
    const saveCustomPrompts = (prompts) => localStorage.setItem('customPrompts', JSON.stringify(prompts));

    const addCustomPrompt = (prompt) => {
        let prompts = getCustomPrompts();
        prompts.push(prompt);
        if (prompts.length > MAX_CUSTOM_PROMPTS) prompts = prompts.slice(-MAX_CUSTOM_PROMPTS);
        saveCustomPrompts(prompts);
    };

    const renderSavedPrompts = () => {
        const prompts = getCustomPrompts();
        savedPromptsList.innerHTML = '';
        if (prompts.length === 0) {
            savedPromptsList.innerHTML = `<p class="text-sm text-gray-500">${getT('noSavedPrompts')}</p>`;
            return;
        }
        prompts.forEach((p, idx) => {
            const btn = document.createElement('button');
            btn.className = 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm px-2 py-1 rounded mr-2';
            btn.innerText = `Usar #${idx + 1}`;
            btn.addEventListener('click', () => { customPromptInput.value = p; });
            savedPromptsList.appendChild(btn);
        });
    };

    // --- APP INITIALIZATION ---
    async function initializeApp() {
        applyTranslations();
        const languageSelect = document.getElementById('language-select');
        languageSelect.value = currentLang;
        languageSelect.addEventListener('change', () => {
            currentLang = languageSelect.value;
            localStorage.setItem('lang', currentLang);
            applyTranslations();
            updateAuthStateUI();
        });
        await updateAuthStateUI();
        
        actionButtons.forEach(button => button.addEventListener('click', handleActionClick));
        
        settingsToggle.addEventListener('click', () => settingsModal.classList.remove('hidden'));
        closeSettingsBtn.addEventListener('click', () => settingsModal.classList.add('hidden'));
        logoutBtnSettings.addEventListener('click', () => {
            settingsModal.classList.add('hidden');
            handleSignOut();
        });
        settingsModal.addEventListener('click', (e) => { if (e.target === settingsModal) settingsModal.classList.add('hidden'); });
        loginRequiredModal.addEventListener('click', (e) => { if (e.target === loginRequiredModal) hideLoginModal(); });
        acceptTermsModal.addEventListener('click', (e) => { if (e.target === acceptTermsModal) hideTermsModal(); });
        customPromptModal.addEventListener('click', (e) => { if (e.target === customPromptModal) hideCustomPromptModal(); });

        
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(resultContainer.innerText).then(() => {
                copyButton.innerText = getT('copied');
                setTimeout(() => { copyButton.innerText = getT('copy'); }, 2000);
            });
        });

        historyToggle.addEventListener('click', () => {
            historyPanel.classList.toggle('hidden');
            historyPanel.classList.toggle('translate-x-full');
            historyOverlay.classList.toggle('hidden');
            userAuthArea.classList.toggle('hidden');
        });
        historyOverlay.addEventListener('click', () => {
            historyPanel.classList.add('hidden', 'translate-x-full');
            historyOverlay.classList.add('hidden');
            userAuthArea.classList.remove('hidden');
        });

        clearHistoryBtn.addEventListener('click', clearHistory);

        cancelLoginBtn.addEventListener('click', hideLoginModal);
        confirmLoginBtn.addEventListener('click', () => {
            hideLoginModal();
            handleSignIn();
        });
        
        acceptTermsBtn.addEventListener('click', () => {
            localStorage.setItem('acceptedLegal', 'true');
            hideTermsModal();
            if (pendingAction) {
                const { action, button, userText } = pendingAction;
                pendingAction = null;
                if (action === 'custom') {
                    showCustomPromptModal();
                } else {
                    const config = PROMPTS[action];
                    runPrompt(config.title, config.prompt, userText, button);
                }
            }
        });

        cancelTermsBtn.addEventListener('click', () => { hideTermsModal(); pendingAction = null; });

        confirmCustomPromptBtn.addEventListener('click', () => {
            const prompt = customPromptInput.value.trim();
            if (!prompt) { alert(getT('writePrompt')); return; }
            if (saveCustomPromptChk.checked) addCustomPrompt(prompt);
            hideCustomPromptModal();
            if (pendingAction) {
                const { button, userText } = pendingAction;
                pendingAction = null;
                runPrompt(getT('resultTitles').custom, `${prompt}\n\nEres un agente que ayuda a las personas a corregir, cambiar de tono, eliminar faltas de ortografía, etc., a las personas. Mejora el siguiente texto del usuario siguiendo sus indicaciones (p.j., si dice "chistoso", quiere un tono chistoso para el texto). Responde únicamente con el texto mejorado. No utilices formato Markdown. Responde en el idioma que está el texto a mejorar (no este prompt).`, userText, button);
            }
        });

        cancelCustomPromptBtn.addEventListener('click', () => { hideCustomPromptModal(); pendingAction = null; });

        feedbackBtn.addEventListener('click', () => { feedbackText.value = ''; feedbackModal.classList.remove('hidden'); });
        cancelFeedbackBtn.addEventListener('click', () => feedbackModal.classList.add('hidden'));
        feedbackModal.addEventListener('click', (e) => { if (e.target === feedbackModal) feedbackModal.classList.add('hidden'); });
        submitFeedbackBtn.addEventListener('click', () => {
            const comment = feedbackText.value.trim();
            const mailto = `mailto:service.correctia@gmail.com?subject=Correctia%20Feedback&body=${encodeURIComponent(comment)}`;
            window.location.href = mailto;
            feedbackModal.classList.add('hidden');
        });

        renderHistory();
    }

    initializeApp();
});
