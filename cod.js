//función para guardar img-fondos
window.onload = function() {

    const Imagenes_fondos = [
        'img/Back 4 Blood/thumb-1920-1120383.jpg',
        'img/Battlefield 2042/1151173.jpg',
        'img/Deathloop/deathloop_01.jpg',
        'img/Far Cry 6/far-cry-6-heroBanner.jpg',
        'img/Forza Horizon 5/forza-motorsport-5-mclaren-p1-papel-pintado-2560x1600_7.jpg',
        'img/Halo Infinite/5c1c941594608-wallpaper-preview.jpg',
        'img/Kena_ Bridge of Spirits/wallpaper_kena_bridge_of_spirits_01_1920x1080.jpg',
        'img/Lost Judgment/Lost-Judgment-parece-un-gran-paso-adelante-desde-el-primer.jpg',
        'img/Metroid Dread/metroid-dread-kraid.jpg',
        'img/NEO_ The World Ends With You/neo-the-world-ends-with-you.jpgk_.jpg',
        'img/No More Heroes 3/4997699.jpg',
        'img/Rainbow Six Extraction/se_revelan_detalles_de_tom_clancyxs_rainbow_six_extraction-sistemas_de_juegox_progresixn_de_operadores_y_mxs_crop1629754262372.jpg_1817315402.jpg',
        'img/Sable/71f362b2-ab72-4c33-bc7e-a42debfa3f6a.jpg',
        'img/The Great Ace Attorney Chronicles_/6900d84d85.jpg',
        'img/The Legend of Zelda Skyward Sword HD/cc964c02941514bd4222b7b7ee53e19a.jpg',
        'img/Twelve Minutes_/TwelveMinutes_Tribeca-scaled.jpg'
    ];
    const Imagenes_caratulas = [
        'img/Back 4 Blood/1628337369_524958_1628412122_noticia_normal.jpg',
        'img/Battlefield 2042/EGS_Battlefield2042_DICE_S1_2560x1440-36f16374c9c29a18a46872795b483d72.jpeg',
        'img/Deathloop/155332-games-news-everything-you-need-to-know-about-deathloop-release-date-trailers-and-more-image4-7oy0pdjqfa.jpg',
        'img/Far Cry 6/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Landscape_2560x1440-2560x1440-827a9d1823ad230a0ea5a2efc7936370.jpg',
        'img/Forza Horizon 5/forzahorizon5_gc21_0011-2560x1440-1.jpg',
        'img/Halo Infinite/Halo-Infinite.jpg',
        'img/Kena_ Bridge of Spirits/1159892.jpg',
        'img/Lost Judgment/og_img.jpg',
        'img/Metroid Dread/hero.jpeg',
        'img/NEO_ The World Ends With You/3RPRQ76PUNG7LHZ5HA5OCBLQSA.jpg',
        'img/No More Heroes 3/no-more-heroes-3-switch-hero.jpg',
        'img/Rainbow Six Extraction/EN_R6E_STD_EPIC_Store Landscape_2560x1440_UK_2560x1440-b7c3e5d9f7443f7f4a33a6b5d128a832.png',
        'img/Sable/header.jpg',
        'img/The Great Ace Attorney Chronicles_/H2x1_NSwitchDS_TheGreatAceAttorneyChronicles_image1600w.jpg',
        'img/The Legend of Zelda Skyward Sword HD/H2x1_NSwitch_TheLegendOfZeldaSkywardSwordHD_image1600w.jpg',
        'img/Twelve Minutes_/twelveminutes-keyart-horizontal-640x360-q75-27e6b.jpg'
    ];
    const Imagenes_personaje = [
        'img/Back 4 Blood/pre-order-bonus-banner.png',
        'img/Battlefield 2042/uploads_battlefield_battlefield_PNG55.png',
        'img/Deathloop/1318c640b67608408cb565819728aee6.png',
        'img/Far Cry 6/Far-Cry-6-2-e1622372732888.png',
        'img/Forza Horizon 5/zp29a2v1nv571.png',
        'img/Halo Infinite/MasterChief.png',
        'img/Kena_ Bridge of Spirits/render_004___kena_by_cecbmal_ddzlg0p-fullview.png',
        'img/Lost Judgment/Takayuki_Yagami.png',
        'img/Metroid Dread/M5_art_Samus_01.png',
        'img/NEO_ The World Ends With You/E6aO_8lWQAIg3K0.png',
        'img/No More Heroes 3/de3nfwm-4fffcfe1-7b03-472e-b07b-cbfab7d76783.png',
        'img/Rainbow Six Extraction/R6E_Operator_HP_Ela_480x480.webp',
        'img/Sable/Asset+1.png',
        'img/The Great Ace Attorney Chronicles_/1410507540_507540_000001_album_normal.png',
        'img/The Legend of Zelda Skyward Sword HD/Link-Skyward-Sword-Figura-01.png',
        'img/Twelve Minutes_/12_Minutes_Logo.png'
    ];
    const videos = [
        'https://www.youtube.com/embed/tKlFJbyUsoo?autoplay=1',
        'https://www.youtube.com/embed/ASzOzrB-a9E?autoplay=1',
        'https://www.youtube.com/embed/mc2hz3LJhTY?autoplay=1',
        'https://www.youtube.com/embed/tSDMwngdkF4?autoplay=1',
        'https://www.youtube.com/embed/FYH9n37B7Yw?autoplay=1',
        'https://www.youtube.com/embed/Fmdb-KmlzD8?autoplay=1',
        'https://www.youtube.com/embed/pWh5388AEHw?autoplay=1',
        'https://www.youtube.com/embed/Y8nWMBqT5_c?autoplay=1',
        'https://www.youtube.com/embed/bbSdDDp9CNQ?autoplay=1',
        'https://www.youtube.com/embed/PBmiN_HqXjU?autoplay=1',
        'https://www.youtube.com/embed/wXCPc0PQ6qs?autoplay=1',
        'https://www.youtube.com/embed/bEWmMMsOnf8?autoplay=1',
        'https://www.youtube.com/embed/a0evJUp7-aw?autoplay=1',
        'https://www.youtube.com/embed/68dOTCiez5I?autoplay=1',
        'https://www.youtube.com/embed/rFjffJb-4ls?autoplay=1',
        'https://www.youtube.com/embed/1JxkLYU2zh4?autoplay=1'


    ];

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 9000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#icon_back');
    let $botonAvanzar = document.querySelector('#icon_next');
    let $botonPlay = document.querySelector('#play')
    let $fondo = document.querySelector('#caratula');
    let intervalo;

    //Funciones
    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function reproducirVideo() {
        document.getElementById("trailer-video").style.visibility = 'visible'
        document.getElementById("play").style.visibility = 'hidden'
    }

    function pasarFoto() {
        if (posicionActual >= Imagenes_fondos.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
            document.getElementById("play").style.visibility = 'visible';
            document.getElementById("trailer-video").style.visibility = 'hidden'
        }
        renderizarImagen_icon();
    }
    /**
     * Funcion que cambia la foto menos una posicion
     */
    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = Imagenes_fondos.length - 1;
            document.getElementById("trailer-video").style.visibility = 'hidden'
            document.getElementById("play").style.visibility = 'visible';
        } else {
            posicionActual--;
            document.getElementById("trailer-video").style.visibility = 'hidden'
            document.getElementById("play").style.visibility = 'visible';
        }
        renderizarImagen_icon();
    }




    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen_icon() {
        document.getElementById("fondo").src = Imagenes_fondos[posicionActual];
        document.getElementById("caratula").src = Imagenes_caratulas[posicionActual];
        document.getElementById("personaje").src = Imagenes_personaje[posicionActual];
        document.getElementById("trailer-video").src = videos[posicionActual];
    }



    /**
     * Activa el autoplay de la imagen
     *     intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);

     */
    // Desactivamos los botones de control

    // Eventos
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonPlay.addEventListener('click', reproducirVideo);

    // Iniciar
    renderizarImagen_icon();
}