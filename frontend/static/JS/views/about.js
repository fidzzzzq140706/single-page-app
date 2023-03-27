import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("about");
    }

    async getHtml() {
        return `  <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Single page app</title>
        </head>
        <body>

        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">

        <div class="container">
            <a class="navbar-brand" href="#">
                <img src=" https://smkn1cianjur.sch.id/wp-content/uploads/2021/02/favicon.png" alt="" width="50" height="50">
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"></a>
                     </li>

                </ul>
                
            </div>
        </div>
      
    </nav>

      
        <div class="container-about">

        <main class="content">
            <article class="article">
                <h2>Tentang Kami</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices massa ut augue vestibulum tristique. Donec malesuada nisl nec orci consectetur, eget varius nisl commodo. Fusce auctor felis felis, vitae bibendum velit egestas ut.</p>
            </article>

            <article class="article">
                <h2>Guru dan Staf</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices massa ut augue vestibulum tristique. Donec malesuada nisl nec orci consectetur, eget varius nisl commodo. Fusce auctor felis felis, vitae bibendum velit egestas ut.</p>
            </article>
        </main>

       
    </div>

    <h1 class="section-title">SMKN <span>1 CIANJUR</span></h1>
    <h2>Visi dan Misi</h2>
    <p>Sekolah Menengah Kejuruan (SMK) Negeri 1 Cianjur merupakan sekolah kejuruan di bidang Bisnis Manajemen dan Teknik Informatika.
    Visi SMKN 1 Cianjur adalah menghasilkan lulusan yang juara lahir batin, mandiri, serta berakhlakul karimah.</p>
    <h2>Berita Terkini</h2>
    <img src="https://i.postimg.cc/t4k0bcMV/berita2.jpg" alt="berita">
    
       
      
       
        </body>
        </html>
        
             `;
    }
}