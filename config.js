var config = {
    style: 'mapbox://styles/ethoreau23/cm41e4gtw006k01s61fnpbbz9',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZXRob3JlYXUyMyIsImEiOiJjbTN6cGxzZG8wano2MmpzNWMxbWtka2ZkIn0.YJRBNK-L3rkMrs8DjaJOfg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Datajournalisme - Risque inondation et amménagement',
    subtitle: 'The Storytelling Template helps you create an awesome animated map story with ease.',
    byline: 'Par Maxence Debens et Emile Thoreau',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'belgium-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Belgique',
            image: './assets/belgium.jpg', // Vous pouvez utiliser une image ici
            description: 'vue large belgique',
            location: {
                center: [4.4699, 50.5039], // Coordonnées de la Belgique
                zoom: 7, // Vue nationale
                pitch: 45, // Inclinaison pour un effet 3D
                bearing: 0 // Orientation vers le nord
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'belgique-central',
            alignment: 'left',
            hidden: false,
            title: 'Centre de la Belgique',
            description: 'test2',
            location: {
                center: [4.469936, 50.503887], // Coordonnées pour centrer sur la Belgique
                zoom: 12, // Zoom adapté à la vue générale de la Belgique
                pitch: 45, // Inclinaison de la caméra
                bearing: 0 // Orientation
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: 'liege-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Zoom sur Liège',
            description: 'Ce chapitre présente la ville de Liège, un point stratégique en Belgique pour observer les risques d’inondation et les aménagements urbains.',
            location: {
                center: [5.575433, 50.633732], // Coordonnées pour centrer sur Liège
                zoom: 13,                     // Niveau de zoom pour montrer les détails
                pitch: 45,                    // Inclinaison de la caméra pour une vue en perspective
                bearing: 0                    // Orientation de la caméra
            },
            mapAnimation: 'flyTo',            // Animation pour se déplacer vers cette vue
            rotateAnimation: false,           // Pas d’animation de rotation
            callback: '',
            onChapterEnter: [
                // Exemple : Montrer une couche spécifique
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // Exemple : Cacher une couche spécifique
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'vise-traveling',
            alignment: 'left',
            hidden: false,
            title: 'Vue circulaire de Visé',
            description: 'Ce chapitre offre une vue aérienne dynamique du village de Visé, tournant autour de ses paysages pour une perspective unique.',
            location: {
                center: [5.6990700, 50.7376000], // Coordonnées de Visé
                zoom: 13.5,                      // Zoom adapté pour voir le village
                pitch: 60,                     // Inclinaison pour une vue 3D
                bearing: 0                     // Orientation initiale
            },
            mapAnimation: 'flyTo',             // Animation de vol initiale
            rotateAnimation: true,             // Activation de l'animation circulaire
            callback: '',
            onChapterEnter: [
                {
                    layer: '', // Ajouter une couche spécifique si nécessaire
                    opacity: 1,
                    duration: 3000 // Temps pour animer l'entrée (en ms)
                }
            ],
            onChapterExit: [
                {
                    layer: '', // Ajouter une transition si nécessaire
                    opacity: 0,
                    duration: 3000
                }
            ]
        }
        
            
    ]
};
