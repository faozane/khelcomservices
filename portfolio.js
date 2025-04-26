// Configuration du menu de navigation
const navbarContent = `
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="Images/Logo K2S 1.png" alt="Logo" class="logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#apropos">À Propos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link contact" href="index.html#contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <button id="theme-toggle" class="nav-link theme-toggle" title="Changer le thème">
                            <i class="fas fa-moon"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

// Injection du menu dans le DOM
$('#navbar-container').html(navbarContent);


// Configuration des items du portfolio
const portfolioItems = [
    {
        category: 'forage',
        image: 'IMG_20230526_171611(1).jpg',
        title: 'Forage profond',
        description: 'Developpement par Air Lift'
    },
    {
        category: 'forage',
        image: 'Screenshot_20250304-234054.jpg',
        title: 'Mini-forage agricole',
        description: 'Système d\'irrigation pour exploitation'
    },
    {
        category: 'forage', 
        image: 'cfa1985b-8e8d-41ff-9755-ccc120e7c183.jpg',
        title: 'Forage industriel',
        description: 'Foration Rotary'
    },
    {
        category: 'forage',
        image: 'IMG_20230207_185245.jpg',
        title: 'Forage Semi-Profond',
        description:  'Essais de pompage forage'
    },
    {
        category: 'solaire',
        image: '20200519_142606.jpg',
        title: 'Panneaux solaires',
        description: 'Installation pour un domaine agricole'
    },
    {
        category: 'solaire',
        image: 'bf673855-c2b2-451c-a062-928b88b67177.jpg',
        title: 'Panneaux solaires',
        description: 'Installation pour pompe solaire'
    },
    {
        category: 'solaire', // img a modifier
        image: 'IMG_20231021_171058.jpg',
        title: 'Pompage solaire',
        description: 'Installation hydro-agricole'
    },
    {
        category: 'hydro', // img a modifier
        image: 'IMG_20220630_152140.jpg',
        title: 'Irrigation goutte-à-goutte',
        description: 'Système d\'irrigation moderne'
    },
    {
        category: 'hydro',
        image: 'IMG_20241105_162211_174.jpg',
        title: 'Resau d\'irigation',
        description: 'System d\'arrosage agricole'
    },
    {
        category: 'sondage',
        image: 'IMG_20221026_171151.jpg',
        title: 'Étude géophysique',
        description: 'Analyse du terrain'
    },
    {
        category: 'sondage',
        image: 'IMG_20220615_124726(1).jpg',
        title: 'Étude géophysique',
        description: 'Analyse du terrain'
    },
    {
        category: 'sondage', 
        image: '1698685371780.png',
        title: 'Sondage géophysique',
        description: 'Scanner des nappes souterraines'
    },
    {
        category: 'fourniture', 
        image: '1709646661493.png',
        title: 'PH-metre',
        description: 'Testeur d\'eau à plusieurs parametres'
    },
    {
        category: 'fourniture', 
        image: '1709664702492.png',
        title: 'Sonde piézometrique',
        description: 'Mesure de niveau d\'eau'
    },
    {
        category: 'fourniture', 
        image: '1707761753888.png',
        title: 'Appareil de sondagge géophysique',
        description: 'Détection de nappes d\'eau'
    },
    
];

function renderPortfolio(items) {
    const grid = $('.portfolio-grid');
    grid.empty();
    
    items.forEach(item => {
        grid.append(`
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="portfolio-item" data-category="${item.category}">
                    <img src="Images/${item.image}" class="img-fluid" alt="${item.title}">
                    <div class="portfolio-overlay">
                        <div class="text-white text-center">
                            <h5>${item.title}</h5>
                            <p>${item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}

// Initial portfolio render
renderPortfolio(portfolioItems);

// Portfolio filter handling
$('.portfolio-filters .btn').on('click', function() {
    const filter = $(this).data('filter');
    
    $('.portfolio-filters .btn').removeClass('active');
    $(this).addClass('active');
    
    const filteredItems = filter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === filter);
    
    renderPortfolio(filteredItems);
});