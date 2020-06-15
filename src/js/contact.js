import Paint from "./paint";
import REQUEST from "./REQUEST";

export default class Contact {
    static copyEmailToClipboard(){
        const input = document.createElement("input");
        document.body.appendChild(input);
        input.setAttribute('value', 'sonido244@gmail.com');
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    }
    static createElement ( html ) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.firstElementChild;
    }
    static darkLayer(){
        const darkLayer = document.querySelector('.darkLayer');
        if(darkLayer.classList.contains('hide-item'))
            darkLayer.classList.remove('hide-item');
        else
            darkLayer.classList.add('hide-item');
        
    }
    static closeAlertBox(){
        this.darkLayer();
        document.querySelector('.notification-box').remove();
    }
    static events () {
        const emailButton = document.querySelector('.email');
        const submit = document.querySelector('.input-container').querySelector('input');
        submit.addEventListener('click', (e)=>{
            e.preventDefault();
            this.sendContact();
        });
        emailButton.addEventListener('click', (e)=>{
            e.preventDefault();
            this.copyEmailToClipboard();
        })
    }
    static sendContact() {
        const params ={
            email: document.querySelector('#email').value,
            name: document.querySelector('#name').value,
            message: document.querySelector('#message').value
        }
        REQUEST.post({action: 'mail', params })
        .then( data => {
            Paint.alertBox();
        })
    }
}