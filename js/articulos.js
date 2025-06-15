document.addEventListener('DOMContentLoaded', () => {
    const STRINGS = {
        es: {
            pageTitle: 'Crear Artículos - Correctia',
            header: 'Crear Artículos',
            topicLabel: 'Tema o descripción',
            topicPlaceholder: 'Escribe el tema de tu artículo...',
            toneLabel: 'Tono (opcional)',
            noPref: 'Sin preferencia',
            toneFormal: 'Formal',
            toneInformal: 'Informal',
            toneCasual: 'Casual',
            toneCustom: 'Personalizado...',
            customTonePlaceholder: 'Escribe el tono deseado',
            sizeLabel: 'Tamaño (opcional)',
            sizeSmall: 'Pequeño',
            sizeMedium: 'Mediano',
            sizeLarge: 'Grande',
            keywordsLabel: 'Palabras clave (opcional)',
            keywordsPlaceholder: 'SEO, marketing, IA...',
            languageLabel: 'Idioma',
            langSpanish: 'Español',
            langEnglish: 'Inglés',
            langOther: 'Otro...',
            customLangPlaceholder: 'Especifica el idioma',
            advSettings: 'Configuración avanzada',
            audienceLabel: 'Rango de edad del público objetivo',
            audiencePlaceholder: '18-35, por ejemplo',
            markdownLabel: 'Formato Markdown',
            yes: 'Sí',
            no: 'No',
            readingLabel: 'Nivel de lectura',
            readingBasic: 'Básico',
            readingIntermediate: 'Intermedio',
            readingProfessional: 'Profesional',
            personLabel: 'Persona gramatical',
            firstPerson: '1ra persona',
            secondPerson: '2da persona',
            thirdPerson: '3ra persona',
            htmlLabel: 'Formato HTML',
            submitBtn: 'Generar Artículo',
            resultTitle: 'Artículo Generado',
            copyBtn: 'Copiar',
            copied: '¡Copiado!',
            convertBtn: 'Convertir a HTML',
            swipeHint: 'Desliza a la derecha o izquierda para alternar entre HTML y formato normal',
            generating: 'Generando...',
            error: 'Hubo un error al generar el articulo.',
            noMarkdownHtml: 'No puedes seleccionar Markdown y HTML a la vez.'
        },
        en: {
            pageTitle: 'Create Articles - Correctia',
            header: 'Create Articles',
            topicLabel: 'Topic or description',
            topicPlaceholder: 'Write the topic of your article...',
            toneLabel: 'Tone (optional)',
            noPref: 'No preference',
            toneFormal: 'Formal',
            toneInformal: 'Informal',
            toneCasual: 'Casual',
            toneCustom: 'Custom...',
            customTonePlaceholder: 'Write the desired tone',
            sizeLabel: 'Length (optional)',
            sizeSmall: 'Short',
            sizeMedium: 'Medium',
            sizeLarge: 'Long',
            keywordsLabel: 'Keywords (optional)',
            keywordsPlaceholder: 'SEO, marketing, AI...',
            languageLabel: 'Language',
            langSpanish: 'Spanish',
            langEnglish: 'English',
            langOther: 'Other...',
            customLangPlaceholder: 'Specify language',
            advSettings: 'Advanced settings',
            audienceLabel: 'Target audience age range',
            audiencePlaceholder: '18-35, for example',
            markdownLabel: 'Markdown format',
            yes: 'Yes',
            no: 'No',
            readingLabel: 'Reading level',
            readingBasic: 'Basic',
            readingIntermediate: 'Intermediate',
            readingProfessional: 'Professional',
            personLabel: 'Grammatical person',
            firstPerson: '1st person',
            secondPerson: '2nd person',
            thirdPerson: '3rd person',
            htmlLabel: 'HTML format',
            submitBtn: 'Generate Article',
            resultTitle: 'Generated Article',
            copyBtn: 'Copy',
            copied: 'Copied!',
            convertBtn: 'Convert to HTML',
            swipeHint: 'Swipe right or left to toggle between HTML and normal format',
            generating: 'Generating...',
            error: 'There was an error generating the article.',
            noMarkdownHtml: 'You cannot select both Markdown and HTML.'
        }
    };

    let currentLang = localStorage.getItem('lang') || 'es';
    const t = (k) => STRINGS[currentLang][k];

    const form = document.getElementById('article-form');
    const topicInput = document.getElementById('article-topic');
    const toneSelect = document.getElementById('article-tone');
    const customToneInput = document.getElementById('custom-tone');
    const sizeSelect = document.getElementById('article-size');
    const keywordsInput = document.getElementById('article-keywords');
    const languageSelect = document.getElementById('article-language');
    const customLanguageInput = document.getElementById('custom-language');
    const toggleAdvancedBtn = document.getElementById('toggle-advanced');
    const advancedSection = document.getElementById('advanced-section');
    const audienceAgeInput = document.getElementById('audience-age');
    const markdownSelect = document.getElementById('markdown-format');
    const readingLevelSelect = document.getElementById('reading-level');
    const personGrammarSelect = document.getElementById('person-grammar');
    const resultSection = document.getElementById('article-result-section');
    const result = document.getElementById('article-result');
    const copyArticleBtn = document.getElementById('copy-article');
    const convertHtmlBtn = document.getElementById('convert-html');
    const htmlSelect = document.getElementById('html-format');
    const swipeHint = document.getElementById('swipe-hint');
    let lastLanguage = 'español';
    let plainContent = '';
    let htmlContent = '';
    let showingHtml = false;
    let touchStartX = null;

    const applyTranslations = () => {
        document.documentElement.lang = currentLang;
        document.title = t('pageTitle');
        document.getElementById('page-header').innerText = t('header');
        document.querySelector('label[for="article-topic"]').innerText = t('topicLabel');
        topicInput.placeholder = t('topicPlaceholder');
        document.querySelector('label[for="article-tone"]').innerText = t('toneLabel');
        toneSelect.options[0].text = t('noPref');
        toneSelect.options[1].text = t('toneFormal');
        toneSelect.options[2].text = t('toneInformal');
        toneSelect.options[3].text = t('toneCasual');
        toneSelect.options[4].text = t('toneCustom');
        customToneInput.placeholder = t('customTonePlaceholder');
        document.querySelector('label[for="article-size"]').innerText = t('sizeLabel');
        sizeSelect.options[0].text = t('noPref');
        sizeSelect.options[1].text = t('sizeSmall');
        sizeSelect.options[2].text = t('sizeMedium');
        sizeSelect.options[3].text = t('sizeLarge');
        document.querySelector('label[for="article-keywords"]').innerText = t('keywordsLabel');
        keywordsInput.placeholder = t('keywordsPlaceholder');
        document.querySelector('label[for="article-language"]').innerText = t('languageLabel');
        languageSelect.options[0].text = t('langSpanish');
        languageSelect.options[1].text = t('langEnglish');
        languageSelect.options[2].text = t('langOther');
        customLanguageInput.placeholder = t('customLangPlaceholder');
        toggleAdvancedBtn.innerText = t('advSettings');
        document.querySelector('label[for="audience-age"]').innerText = t('audienceLabel');
        audienceAgeInput.placeholder = t('audiencePlaceholder');
        document.querySelector('label[for="markdown-format"]').innerText = t('markdownLabel');
        markdownSelect.options[0].text = t('no');
        markdownSelect.options[1].text = t('yes');
        document.querySelector('label[for="reading-level"]').innerText = t('readingLabel');
        readingLevelSelect.options[0].text = t('readingBasic');
        readingLevelSelect.options[1].text = t('readingIntermediate');
        readingLevelSelect.options[2].text = t('readingProfessional');
        document.querySelector('label[for="person-grammar"]').innerText = t('personLabel');
        personGrammarSelect.options[0].text = t('noPref');
        personGrammarSelect.options[1].text = t('firstPerson');
        personGrammarSelect.options[2].text = t('secondPerson');
        personGrammarSelect.options[3].text = t('thirdPerson');
        document.querySelector('label[for="html-format"]').innerText = t('htmlLabel');
        htmlSelect.options[0].text = t('no');
        htmlSelect.options[1].text = t('yes');
        form.querySelector('button[type="submit"]').innerText = t('submitBtn');
        document.querySelector('#article-result-section h2').innerText = t('resultTitle');
        copyArticleBtn.innerText = t('copyBtn');
        convertHtmlBtn.innerText = t('convertBtn');
        swipeHint.innerText = t('swipeHint');
    };

    applyTranslations();

    toneSelect.addEventListener('change', () => {
        if (toneSelect.value === 'custom') {
            customToneInput.classList.remove('hidden');
        } else {
            customToneInput.classList.add('hidden');
            customToneInput.value = '';
        }
    });

    languageSelect.addEventListener('change', () => {
        if (languageSelect.value === 'otro') {
            customLanguageInput.classList.remove('hidden');
        } else {
            customLanguageInput.classList.add('hidden');
            customLanguageInput.value = '';
        }
    });

    toggleAdvancedBtn.addEventListener('click', () => {
        advancedSection.classList.toggle('hidden');
    });

    htmlSelect.addEventListener('change', () => {
        if (htmlSelect.value === 'si') {
            convertHtmlBtn.classList.add('hidden');
        } else {
            convertHtmlBtn.classList.remove('hidden');
        }
    });
    // Ejecutar una vez al cargar
    if (htmlSelect.value === 'si') {
        convertHtmlBtn.classList.add('hidden');
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const topic = topicInput.value.trim();
        if (!topic) return;

        const tone = toneSelect.value;
        const customTone = customToneInput.value.trim();
        const size = sizeSelect.value;
        const keywords = keywordsInput.value.trim();
        const language = languageSelect.value === 'otro' ? customLanguageInput.value.trim() : languageSelect.value;
        const audienceAge = audienceAgeInput.value.trim();
        const markdown = markdownSelect.value;
        const htmlFormat = htmlSelect.value;
        const readingLevel = readingLevelSelect.value;
        const personGrammar = personGrammarSelect.value;

        if (markdown === 'si' && htmlFormat === 'si') {
            alert(t('noMarkdownHtml'));
            return;
        }

        let prompt = `Redacta un articulo detallado en ${language} sobre: ${topic}`;

        if (tone === 'custom' && customTone) {
            prompt += `. Tono: ${customTone}`;
        } else if (tone) {
            prompt += `. Tono: ${tone}`;
        }
        if (size) prompt += `. Tama\u00f1o: ${size}`;
        if (keywords) prompt += `. Incluye las palabras clave: ${keywords}`;
        if (audienceAge) prompt += `. Público objetivo de edad ${audienceAge}`;
        if (readingLevel) prompt += `. Nivel de lectura: ${readingLevel}`;
        if (personGrammar) prompt += `. Persona gramatical: ${personGrammar}`;
        if (markdown === 'si') {
            prompt += `. Formatea el resultado en Markdown`;
        } else {
            prompt += `. No uses formato Markdown en el resultado`;
        }
        if (htmlFormat === 'si') {
            prompt += `. Devuelve el artículo en formato HTML en ${language}`;
        }
        prompt += `. Devuelve únicamente el artículo sin explicaciones.`;

        lastLanguage = language;
        resultSection.classList.remove('hidden');
        result.textContent = t('generating');
        try {
            const res = await puter.ai.chat(prompt, { model: 'gpt-4.1-nano' });
            plainContent = res?.message?.content || 'Sin respuesta';
            htmlContent = '';
            showingHtml = false;
            result.textContent = plainContent;
        } catch (err) {
            console.error('Error generando articulo:', err);
            result.textContent = t('error');
        }
    });

    copyArticleBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(result.innerText).then(() => {
            copyArticleBtn.innerText = t('copied');
            setTimeout(() => { copyArticleBtn.innerText = t('copyBtn'); }, 2000);
        });
    });

    const isMarkdown = (text) => /(^#|\*\*|\*|`|\-|\d+\. )/m.test(text);

    const toggleView = () => {
        if (!htmlContent) return;
        if (showingHtml) {
            result.textContent = plainContent;
            showingHtml = false;
        } else {
            result.textContent = htmlContent;
            showingHtml = true;
        }
    };

    result.addEventListener('click', toggleView);

    result.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    result.addEventListener('touchend', (e) => {
        if (touchStartX === null) return;
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 30) toggleView();
        touchStartX = null;
    });

    convertHtmlBtn.addEventListener('click', async () => {
        const article = result.innerText.trim();
        if (!article) return;
        plainContent = article;
        if (!localStorage.getItem('swipeHintShown')) {
            swipeHint.classList.remove('hidden');
            swipeHint.classList.add('animate-bounce');
            setTimeout(() => { swipeHint.classList.add('hidden'); }, 4000);
            localStorage.setItem('swipeHintShown', '1');
        }

        let htmlPrompt = `Eres un experto en transformar formato texto a HTML. Transforma este artículo en formato HTML. Devuelve únicamente el código, sin explicaciones ni nada extra, y responde en ${lastLanguage}. No agregues código JavaScript, solo HTML y un poco de CSS para mostrar el texto de manera visualmente atractiva.`;
        if (isMarkdown(article)) {
            htmlPrompt += ' Sigue la estructura del formato Markdown para transformarlo en HTML.';
        }
        convertHtmlBtn.disabled = true;
        const originalText = convertHtmlBtn.innerText;
        convertHtmlBtn.innerText = '🧠 ...';
        try {
            const res = await puter.ai.chat(`${htmlPrompt}\n\n---\n\n${article}`, { model: 'gpt-4.1-nano' });
            htmlContent = res?.message?.content || 'Sin respuesta';
            result.textContent = htmlContent;
            showingHtml = true;
        } catch (err) {
            console.error('Error convirtiendo a HTML:', err);
        } finally {
            convertHtmlBtn.disabled = false;
            convertHtmlBtn.innerText = originalText;
        }
    });
});
