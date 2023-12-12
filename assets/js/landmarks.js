/* jshint esversion: 11 */

let landmarkQuestions = [
    {
        imageSrc: 'assets/images/landmarks/arc-de-triomphe.webp',
        answers: [
            { text: 'Arc De Triomphe', correct: true },
            { text: 'London Bridge', correct: false },
            { text: 'Wellington Arch', correct: false },
            { text: 'Gateway Arch', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/bellagio.webp',
        answers: [
            { text: 'Plaza Hotel', correct: false },
            { text: 'Caesars Palace', correct: false },
            { text: 'The Bellagio', correct: true },
            { text: 'The Luxor', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/big-ben.webp',
        answers: [
            { text: 'Blackpool Tower', correct: false },
            { text: 'Big Ben', correct: true },
            { text: 'Eiffel Tower', correct: false },
            { text: 'Peace Tower', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/brooklyn-bridge.webp',
        answers: [
            { text: 'Golden Gate Bridge', correct: false },
            { text: 'Manhattan Bridge', correct: false },
            { text: 'Williamsburg Bridge', correct: false },
            { text: 'Brooklyn Bridge', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/buckingham-palace.webp',
        answers: [
            { text: 'Buckingham Palace', correct: true },
            { text: 'The Vatican', correct: false },
            { text: 'Versailles Palace', correct: false },
            { text: 'The White House', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/burj-khalifa.webp',
        answers: [
            { text: 'Empire State Building', correct: false },
            { text: 'Space Needle', correct: false },
            { text: 'Burj Khalifa', correct: true },
            { text: 'Eiffel Tower', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/central-park.webp',
        answers: [
            { text: 'Machu Pichu', correct: false },
            { text: 'Central Park', correct: true },
            { text: 'Stone Henge', correct: false },
            { text: 'Snowden', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/chichen-itsa.webp',
        answers: [
            { text: 'The Great Pyramid', correct: false },
            { text: 'Pyramid Of The Sun', correct: false },
            { text: 'Tikal Pyramid', correct: false },
            { text: 'Chichen Itsa', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/christ-redeemer.webp',
        answers: [
            { text: 'Christ The Redeemer', correct: true },
            { text: 'Statue Of Liberty', correct: false },
            { text: 'Spring Temple Buddha', correct: false },
            { text: 'The Little Mermaid', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/colosseum.webp',
        answers: [
            { text: 'Verona Arena', correct: false },
            { text: 'Pula Arena', correct: false },
            { text: 'Rome Colosseum', correct: true },
            { text: 'Nimes Amphitheatre', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/eiffel-tower.webp',
        answers: [
            { text: 'Blackpool Tower', correct: false },
            { text: 'Eiffel Tower', correct: true },
            { text: 'Tashkent Tower', correct: false },
            { text: 'Avala Tower', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/golden-gate-bridge.webp',
        answers: [
            { text: 'Brooklyn Bridge', correct: false },
            { text: 'London Bridge', correct: false },
            { text: 'Iron Bridge', correct: false },
            { text: 'Golden Gate Bridge', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/great-wall.webp',
        answers: [
            { text: 'Great Wall Of China', correct: true },
            { text: 'Hadrian`s Wall', correct: false },
            { text: 'Berlin Wall', correct: false },
            { text: 'Wall Of Jericho', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/hollywood-sign.webp',
        answers: [
            { text: 'Machu Pichu', correct: false },
            { text: 'Snowden', correct: false },
            { text: 'Hollywood Hill', correct: true },
            { text: 'Mount Fuji', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/london-bridge.webp',
        answers: [
            { text: 'Golden Gate Bridge', correct: false },
            { text: 'London Bridge', correct: true },
            { text: 'Chapel Bridge', correct: false },
            { text: 'Brooklyn Bridge', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/london-eye.webp',
        answers: [
            { text: 'Singapore Flyer', correct: false },
            { text: 'Seattle Great Wheel', correct: false },
            { text: 'Wheel Of Liverpool', correct: false },
            { text: 'London Eye', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/machu-pichu.webp',
        answers: [
            { text: 'Machu Pichu', correct: true },
            { text: 'Hollywood Hill', correct: false },
            { text: 'Mount Fuji', correct: false },
            { text: 'Himalayas', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/mount-everest.webp',
        answers: [
            { text: 'Mount Fuji', correct: false },
            { text: 'Kilimanjaro', correct: false },
            { text: 'Mount Everest', correct: true },
            { text: 'Mount Etna', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/mount-fuji.webp',
        answers: [
            { text: 'Mount Everest', correct: false },
            { text: 'Mount Fuji', correct: true },
            { text: 'Mount Olympus', correct: false },
            { text: 'Ben Nevis', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/opera-house.webp',
        answers: [
            { text: 'Teatro Colon', correct: false },
            { text: 'Opera Bastille', correct: false },
            { text: 'Teatro La Fenice', correct: false },
            { text: 'Sydney Opera House', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/petra.webp',
        answers: [
            { text: 'Petra', correct: true },
            { text: 'The Great Pyramid', correct: false },
            { text: 'The Sphinx', correct: false },
            { text: 'The Grand Canyon', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/statue-of-liberty.webp',
        answers: [
            { text: 'Christ The Redeemer', correct: false },
            { text: 'Venus De Milo', correct: false },
            { text: 'Statue Of Liberty', correct: true },
            { text: 'Discobolus', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/taj-mahal.webp',
        answers: [
            { text: 'Al-Aqsa Mosque', correct: false },
            { text: 'Taj Mahal', correct: true },
            { text: 'Shah Mosque', correct: false },
            { text: 'Mecca Mosque', correct: false }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/times-square.webp',
        answers: [
            { text: 'Piccadilly Circus', correct: false },
            { text: 'Shibuya', correct: false },
            { text: 'Sunset Strip', correct: false },
            { text: 'Times Square', correct: true }
        ]
    },
    {
        imageSrc: 'assets/images/landmarks/vegas-sign.webp',
        answers: [
            { text: 'Las Vegas Sign', correct: true },
            { text: 'NY Subway Sign', correct: false },
            { text: 'Radio City Sign', correct: false },
            { text: 'Kings Cross Sign', correct: false }
        ]
    }
];
