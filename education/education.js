function startIntro() {
    var intro = introJs();
    intro.setOptions({
        steps: [
            {
                element: document.querySelector('.intro-op-sum-1'),
                intro: "This is a tooltip."
            },
            {
                element: document.querySelectorAll('.intro-op-sum-2')[0],
                intro: "Ok, wasn't that fun?",
                position: 'right'
            },
            {
                element: '.intro-op-sum-3',
                intro: 'More features, more fun.',
                position: 'left'
            },
            {
                element: '.intro-op-sum-4',
                intro: "Another step.",
                position: 'bottom'
            },
            {
                element: '.intro-op-sum-5',
                intro: 'Get it, use it.',
                skipLabel: 'Exit'
            }
        ]
    });
    intro.start();
}