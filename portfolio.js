// Configuration du menu de navigation
const navbarContent = `
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="Logo K2S 1.png" alt="Logo" class="logo">
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
        image: 'fora 1.jpg',
        title: 'Forage profond',
        description: 'Installation de forage pour village'
    },
    {
        category: 'forage',
        image: 'fora 2.jpg',
        title: 'Mini-forage agricole',
        description: 'Système d\'irrigation pour exploitation'
    },
    {
        category: 'forage',
        image: 'fora 3.jpg',
        title: 'Mini-forage agricole',
        description: 'Système d\'irrigation pour exploitation'
    },
    {
        category: 'forage',
        image: 'fora 4.jpg',
        title: 'Mini-forage agricole',
        description: 'Système d\'irrigation pour exploitation'
    },
    {
        category: 'solaire',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
        title: 'Panneaux solaires',
        description: 'Installation pour entreprise'
    },
    {
        category: 'solaire',
        image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d',
        title: 'Éclairage solaire',
        description: 'Système d\'éclairage rural'
    },
    {
        category: 'hydro',
        image: 'IMG-8995-scaled.jpg',
        title: 'Irrigation goutte-à-goutte',
        description: 'Système d\'irrigation moderne'
    },
    {
        category: 'hydro',
        image: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea',
        title: 'Pompage solaire',
        description: 'Installation hydro-agricole'
    },
    {
        category: 'sondage',
        image: 'hydr1.jpg',
        title: 'Étude géophysique',
        description: 'Analyse du terrain'
    },
    {
        category: 'sondage',
        image: 'hydr1.webp',
        title: 'Cartographie',
        description: 'Étude hydrogéologique'
    }
];

function renderPortfolio(items) {
    const grid = $('.portfolio-grid');
    grid.empty();
    
    items.forEach(item => {
        grid.append(`
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="portfolio-item" data-category="${item.category}">
                    <img src="${item.image}" class="img-fluid" alt="${item.title}">
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