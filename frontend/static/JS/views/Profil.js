import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Profil");
  }

  async getHtml() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Single page app</title>
            <link rel="stylesheet" href="/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer"
            />
        
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
                        <a class="nav-link active" aria-current="page" href="/frontend/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/profil">Profil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">Tentang Kami</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/major">Jurusan</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Kontak</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"></a>
                     </li>

                </ul>
                
            </div>
        </div>
      
    </nav> 

     
        <header class="header">
        <h1>Profil Sekolah</h1>
    </header>
    <div class="container">
        <aside class="sidebar">
            <h2>Visi dan Misi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices massa ut augue vestibulum tristique.</p>
        </aside>

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

        <aside class="sidebar">
            <h2>Fasilitas</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices massa ut augue vestibulum tristique.</p>
        </aside>
    </div>

   
 
  
          </div> 
        </body>
        </html>
             `;
  }
}
