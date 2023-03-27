import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("contact");
    }

    async getHtml() {
        return `

      
    <section class="contact-2">
                <div class="wrapper">
                <form action="">
                    <h2>Contact Us</h2>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="person"></ion-icon>
                        </span>
                        <input type="text" placeholder="Username" required>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="key"></ion-icon>
                        </span>
                        <input type="password" placeholder="Password" required>
                    </div>
                    <div class="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div class="registration-link">
                        <p>Don't have an account? <a href="#">Signup</a></p>
                    </div>
                </form>
            </div>
        
        
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
</section>
    
      
             `;
    }
}