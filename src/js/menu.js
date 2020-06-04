export default class Menu{
    static moveLine(){
        debugger;
        const line = document.querySelector('.selected-line');
        const selected = document.querySelector('.selected');
        const selectedCoordenates = selected.getBoundingClientRect();
        line.style.bottom = `${selectedCoordenates.y}px`;
        line.style.left = `${selectedCoordenates.x}px`;
        line.style.width = `${selectedCoordenates.width}px`;
    }
    static events(){
        const menuButtons = document.querySelector('.nav-menu').querySelectorAll('.menu-button');
        menuButtons.forEach( button => {
            button.addEventListener('click', ()=>{
                debugger;
                if(document.querySelector('.selected') != null)
                    document.querySelector('.selected').classList.remove('selected');
                button.classList.add('selected');
                this.moveLine();
            })
        })
        setTimeout(() => {
            menuButtons[0].click();
        }, 400);
    }
}