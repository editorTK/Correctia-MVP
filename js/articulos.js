document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('article-form');
    const topicInput = document.getElementById('article-topic');
    const resultSection = document.getElementById('article-result');
    const resultText = document.getElementById('article-text');
    const button = document.getElementById('article-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const topic = topicInput.value.trim();
        if (!topic) return;
        button.disabled = true;
        const original = button.innerText;
        button.innerText = '🧠 ...';
        try {
            const response = await puter.ai.chat(`Redacta un artículo breve sobre: ${topic}`, { model: 'gpt-4.1-nano' });
            resultText.innerText = response?.message?.content || '';
            resultSection.classList.remove('hidden');
        } catch (err) {
            console.error('Error generando artículo', err);
        } finally {
            button.disabled = false;
            button.innerText = original;
        }
    });
});
