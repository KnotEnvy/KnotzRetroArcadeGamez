document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.querySelector('.game-container');
    if (gameContainer) {
        gameContainer.classList.add('fade-in');
    } else {
        document.body.classList.add('fade-in');
    }
});

        function navigateToGame(url) {
            const arcadeContainer = document.querySelector('.arcade-container');
            arcadeContainer.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = url;
            }, 500);  // 500ms matches the duration of the fade-out animation
        }
