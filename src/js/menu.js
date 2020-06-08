import REQUEST from "./REQUEST";
import Paint from "./paint";

export default class Menu{
    static moveLine(){
        const line = document.querySelector('.selected-line');
        const selected = document.querySelector('.selected');
        const selectedCoordenates = selected.getBoundingClientRect();
        line.style.bottom = `${selectedCoordenates.y}px`;
        line.style.left = `${selectedCoordenates.x}px`;
        line.style.width = `${selectedCoordenates.width}px`;
    }
    static loading(err = true){
        const loadingBar = document.querySelector('.loading-bar');
        if(loadingBar.classList.contains('medium') && !err){
            loadingBar.classList.remove('medium');
            loadingBar.classList.add('complete');
        }else if(!loadingBar.classList.contains('medium')){
            loadingBar.classList.add('medium');
        }else if(loadingBar.classList.contains('medium') && err){
            loadingBar.classList.remove('medium');
        }
    }
    static changeViewAction(button) {
        if(document.querySelector('.selected') != null)
            document.querySelector('.selected').classList.remove('selected');
        button.classList.add('selected');
        this.moveLine();
        this.loading();
        REQUEST.post({view: button.getAttribute('data-section')})
        .then( data => {
            switch(data.view){
                case 'main':
                    Paint.main(data);
                break;
                case 'portfolio':
                    Paint.portfolio(data);
                break;
                default:
                break;
            }
        })
    }
    static events(){
        const menuButtons = document.querySelector('.nav-menu').querySelectorAll('.menu-button');
        menuButtons.forEach( button => {
            button.addEventListener('click', ()=>{
                this.changeViewAction(button);
            })
        })
        setTimeout(() => {
            this.moveLine();
        }, 400);
    }

    
    static element(html){
        const div  = document.createElement('div');
        div.innerHTML = html;
        return div.firstElementChild;
    }
}