function loadChapter(chapterFile) {
    fetch(chapterFile)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(err => {
            console.error('Failed to load chapter', err);
        });
}

