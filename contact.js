document.addEventListener('DOMContentLoaded', () => {
    // Text animation
    let text = document.querySelector('.bio-text');
    let sentences = text.innerText.split('.');
    text.innerHTML = "";
    sentences.forEach(sentence => {
        let span = document.createElement('span');
        span.textContent = sentence.trim() + '. ';
        span.style.opacity = '0';
        text.appendChild(span);
    });

    let spans = text.querySelectorAll('span');
    let char = 0;

    function onTick() {
        spans[char].style.opacity = '1';
        spans[char].style.transition = 'opacity 0.6s ease-in-out';
        char++;
        if (char === spans.length) {
            complete();
            return;
        }
    }

    let timer = setInterval(onTick, 800);

    function complete() {
        clearInterval(timer);
        timer = null;
    }

    // Modal interactions
    document.querySelectorAll('.see-more').forEach(button => {
        button.addEventListener('click', function() {
            const modal = document.querySelector('.modal-overlay');
            const content = this.nextElementSibling.innerHTML;
            document.querySelector('.modal-body').innerHTML = content;
            modal.style.display = 'flex';
        });
    });

    document.querySelector('.close-modal').addEventListener('click', function() {
        document.querySelector('.modal-overlay').style.display = 'none';
    });
});
