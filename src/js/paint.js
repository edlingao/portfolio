import Menu from "./menu";

export default class Paint{
    static main(data){
        this.hidePortfolioSection();
        const mainHTML = `
        <div class="main-message">
            <p>Im a frontend vanilla <js-message>JS</js-message> developer that just loves simplicity and always wants to push forward on his knowledge</p>
        </div>`;
        const moonElement = Menu.element(`<div class ="moon"></div>`);
        const rocketELement = Menu.element(`<div class ="spaceship"></div>`);

        const mainElement = Menu.element(mainHTML);
        if(document.querySelector('.main-message') == null){
            document.querySelector('.main.main-container').appendChild(mainElement);
            document.querySelector('.main.main-container').classList.add('home');
            document.body.appendChild(moonElement);
            document.body.appendChild(rocketELement);
        }
        Menu.loading();
    }
    static portfolio(data){
        this.hideHomeSection();
        const portfolioContainerElement = Menu.element(data.html);
        if(document.querySelector('.portfolio-container') == null){
            document.querySelector('.main.main-container').classList.add('portfolio');
            document.querySelector('.main.main-container').appendChild(portfolioContainerElement);
        }
        Menu.loading();
    }
    static contact(data){
        Menu.loading();
    }
    static emptyProjectDiv(){
        return Menu.element(`<div class="project empty-project">
                                <div class="coming-soon-banner">Comming soon...</div>
                            </div>`);
    }
    static hideHomeSection(){
        document.querySelector('.main-message') != null ? document.querySelector('.main-message').remove() : null;
        document.querySelector('.spaceship')!= null ? document.querySelector('.spaceship').remove() : null;
        document.querySelector('.moon') != null ? document.querySelector('.moon').remove() : null;
        document.querySelector('.main.main-container').classList.remove('home');
        document.querySelector('.main.main-container').classList.remove('contact');
        document.querySelector('.main.main-container').classList.remove('portfolio');
    }

    static hidePortfolioSection(){
        document.querySelector('.portfolio-container') != null ? document.querySelector('.portfolio-container').remove() : null;
        document.querySelector('.main.main-container').classList.remove('home');
        document.querySelector('.main.main-container').classList.remove('portfolio');
        document.querySelector('.main.main-container').classList.remove('contact');
    }
}