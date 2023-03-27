import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("major");
    }

    async getHtml() {
        return `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   
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
                
                   
                        <a class="nav-link" href="#"></a>
                     </li>

                </ul>
                
            </div>
        </div>
      
    </nav>
    <div class="about-area">
    <div class="area-container">
    </div>
    <div class="text">
        <p class="white">Jurusan</p>
        <p class="white">smk negeri 1 cianjur
        </p>
    </div>
</div>

            <section id="content-container">
            <div class="major">
                <img src="https://ppdb.smkn1cianjur.sch.id/assets/img/speakers/rpl.jpg" alt="RPL " />
                <div class="major-body ">
                    <h2>RPL</h2>
                    <p>(Rekayasa Perangkat Lunak) consectetur adipisicing elit. Blanditiis similique repellat nisi eaque error impedit eius adipisci culpa, deleniti atque. Labore hic quod qui officia quis debitis nam perferendis ipsum?</p>
                </div>
                <div class="major-footer "></div>
            </div>
    
    
            <div class="major">
                <img src="https://ppdb.smkn1cianjur.sch.id/assets/img/speakers/akkul.jpg" alt="AKKUL" />
                <div class="major-body">
                    <h2>AKULL</h2>
                    <p><span>(Akuntasi dan Keuangan Lembaga)</span> consectetur adipisicing elit. Blanditiis similique repellat nisi eaque error impedit eius adipisci culpa, deleniti atque. Labore hic quod qui officia quis debitis nam perferendis ipsum?</p>
                </div>
                <div class="major-footer"></div>
            </div>
    
    
    
            <div class="major">
                <img src="https://ppdb.smkn1cianjur.sch.id/assets/img/speakers/tkj.jpg
                    " alt="TKJ " />
                <div class="major-body ">
                    <h2>TKJ</h2>
                    <p>(Teknik Komputer dan Jaringan) consectetur adipisicing elit. Blanditiis similique repellat nisi eaque error impedit eius adipisci culpa, deleniti atque. Labore hic quod qui officia quis debitis nawm perferendis ipsum?</p>
                </div>
                <div class="major-footer"></div>
            </div>
    
    
            <div class="major">
                <img src="https://ppdb.smkn1cianjur.sch.id/assets/img/speakers/otkp.jpg " alt="OTKP " />
                <div class="major-body ">
                    <h2>OTKP</h2>
                    <p>(Otomatisasi dan Tata Kelola Perkantoran) adipisicing elit. Blanditiis similique repellat nisi eaque error impedit eius adipisci culpa, deleniti atque. Labore hic quod qui officia quis debitis nam perferendis ipsum?</p>
                </div>
                <div class="major-footer "></div>
            </div>
    
    
            <div class="major">
                <img src="https://ppdb.smkn1cianjur.sch.id/assets/img/speakers/bdps.jpg" alt="PS" />
                <div class="major-body">
                    <h2>PS</h2>
                    <p><span>(Pemasaran)</span> consectetur adipisicing elit. Blanditiis similique repellat nisi eaque error impedit eius adipisci culpa, deleniti atque. Labore hic quod qui officia quis debitis nam perferendis ipsum?</p>
                </div>
                <div class="major-footer"></div>
            </div>
        </section>

</body>

</html>
        
       
        
    
    
             `;
    }
}