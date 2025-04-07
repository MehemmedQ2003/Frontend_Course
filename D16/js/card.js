// 1) Create Card Element Class

class CardElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="css/card.css">
            <script src="https://kit.fontawesome.com/98ce4f3177.js" crossorigin="anonymous"></script>
            <div class="card-element">
                <div class="card__header">
                    <img src="${this.getAttribute("img")}" alt="">
                    <div class="card__info">
                        <h3 class="card__title">${this.getAttribute("name")}</h3>
                        <p class="card__subtitle">
                            ${this.getAttribute("joined")}
                        </p>
                        <div class="card__social-media">
                            <a href="#"><i><i class="fab fa-facebook-f"></i></i></a> 
                            <a href="#"><i><i class="fab fa-twitter"></i></i></a>
                            <a href="#"><i><i class="fab fa-linkedin-in"></i></i></a>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="card__footer">
                    <div class="card__follows">
                        <p>Following</p>
                        <p>${this.getAttribute("follows")}</p>
                    </div>
                    <div class="card__projects">
                        <p>Projects</p>
                        <p>${this.getAttribute("projects")}</p>
                    </div>
                    <div class="card__completion">
                        <p>Completion</p>
                        <p>${this.getAttribute("completion")}</p>
                    </div>
                </div>
                <button class="card__btn">View Profile</button>
            </div>
        `;

        this.shadowRoot.querySelector(".card__btn").addEventListener("click", () => {
            this.shadowRoot.querySelector(".card__footer").classList.toggle("hidden");
        });
    }
}


window.customElements.define("card-element", CardElement);