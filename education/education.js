function startIntro() {
    var intro = introJs();
    intro.setOptions({
        steps: [{
                intro: "Hello world!"
            },
            {
                element: document.querySelector('.step1'),
                intro: "This is a tooltip."
            },
            {
                element: '.step2',
                intro: 'More features, more fun.',
                position: 'left'
            },
            {
                element: '.step3',
                intro: "Another step.",
                position: 'bottom'
            },
            {
                element: '.step4',
                intro: 'Get it, use it.'
            },
            {
                element: '.step5',
                intro: 'Finally'
            }
        ]
    });

    intro.start();
}