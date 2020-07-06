const mainBlock = document.querySelector('.main-board');
function drawChess() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const block = document.createElement('div');
            mainBlock.append(block);
            if ((i+j)%2) {
                block.classList.add('black');
            } else {
                block.classList.add('white');
            }
        }
    }
}
drawChess();
