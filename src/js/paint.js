import Menu from "./menu";
import Contact from "./contact";

export default class Paint{
    static main(data){
        this.hidePortfolioSection();
        this.hideContactSection();
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
            document.querySelector('.main.main-container').setAttribute('data-section', 'home');

        }
        Menu.loading();
    }
    static portfolio(data){
        this.hideHomeSection();
        this.hideContactSection();
        const portfolioContainerElement = Menu.element(data.html);
        if(document.querySelector('.portfolio-container') == null){
            document.querySelector('.main.main-container').classList.add('portfolio');
            document.querySelector('.main.main-container').appendChild(portfolioContainerElement);
            document.querySelector('.main.main-container').setAttribute('data-section', 'home');
        }
        Menu.loading();
    }
    static alertBox(){
        const html = `
        <div class="notification-box">
            <h1 class="message" >Thanks!</h1>
            <div class="happy-face"></div>

            <div class="floating-message">
                <div class="arrow"></div>
                <p>Feel free to hover over it</p>
            </div>

            <div class="options">
                <div class="option accept">Ok</div>
                <div class="option close">close</div>
            </div>
        </div>`;
        const element =  Contact.createElement(html);

        element.querySelector('.accept').addEventListener('click',()=>{
            Contact.closeAlertBox();
        });

        element.querySelector('.close').addEventListener('click',()=>{
            Contact.closeAlertBox();
        })
        Contact.darkLayer();
        document.querySelector('.main').appendChild(element);
    }
    static contact(data){
        this.hideHomeSection();
        this.hidePortfolioSection();
        const mainContainer = document.querySelector('.main-container');
        mainContainer.classList.add('contact');
        mainContainer.setAttribute('data-section', 'contact');
        if(document.querySelector('.main-section') == null){
            const mainSectionHTML = `
                <div class="main-section">
                    <form action="" class="contact-form">
                        <div class="input-container">
                            <label class="contact-message">Feel free to talk me!</label>
                            <input type="submit" value="Talk me!">
                        </div>
                        <div class="input-container text-container">
                            <input type="email" id="email" placeholder="@ Email">
                            <label for="email">@ Email</label>
                        </div>
                        <div class="input-container text-container">
                            <input type="text" id="name"  placeholder="@ Name">
                            <label for="name">@ Name</label>
                        </div>
                        <div class="input-container text-container">
                            <textarea type="message" id="message"  placeholder="@ Message"></textarea>
                            <label for="message">@ Message</label>
                        </div>
                    
                    </form>
            
                    <div class="links-menu">
                        <a class="contact-button" target="_blank" href="https://www.linkedin.com/in/edwin-linares-20b133140/"><i class="fab fa-linkedin-in"></i></a>
                        <a class="contact-button" target="_blank" href="https://github.com/edlingao"><i class="fab fa-github"></i></a>
                        <a class="contact-button email" href="mailto:sonido244@gmail.com"><i class="fas fa-at"></i><span class="hover-message">Click to copy email address</span></a>
                        <a class="contact-button" target="_blank" href="#"><i class="fas fa-file-pdf"></i></a>
                    </div>
                </div>`
            const mainSection = Menu.element(mainSectionHTML);
            mainContainer.appendChild(mainSection);
            const footerHTML = `
            <footer class="footer">
                <p>Made with lots of <i class="fas fa-heart"></i> and LOTS more of JS <secret>( and a little bit of php but don't tell anybody )</secret></p>
            </footer>`;
            const footerElement = Menu.element(footerHTML);
            mainContainer.appendChild(footerElement);
            mainContainer.appendChild(Menu.element('<div class="svg-robot"></div>'));
        }
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
    static hideContactSection () {
        document.querySelector('.main-section') != null ? document.querySelector('.footer').remove() : null;
        document.querySelector('.main-section') != null ? document.querySelector('.svg-robot').remove() : null;
        document.querySelector('.main-section') != null ? document.querySelector('.main-section').remove() : null;
        document.querySelector('.main.main-container').classList.remove('home');
        document.querySelector('.main.main-container').classList.remove('portfolio');
        document.querySelector('.main.main-container').classList.remove('contact');
    }
}