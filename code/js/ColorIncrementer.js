class ColorIncrementer {
    colors = ['red', 'orange', 'green', 'blue', 'yellow'];
    id = 1;

    constructor () {
        this.number = 0;
        this.color = 'red';
        this.observers = [];
        this.buttonEl = this.createButton();
    }

    createButton () {
        var buttonEl = document.createElement('button');

        buttonEl.type = 'button';
        buttonEl.id = 'button-colorIncrementer-' + (this.id++);
        buttonEl.innerText = 'Increment';
        buttonEl.onclick = this.increment.bind(this);

        return buttonEl;
    }

    increment () {
        this.number++;
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];

        this.notifyObservers();
    }

    addObserver (o) {
        this.observers.push(o);
    }

    notifyObservers () {
        for (let o of this.observers) {
            o.notify(this);
        }
    }
}