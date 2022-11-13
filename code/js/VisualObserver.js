class VisualObserver {
    id = 1;
    constructor () {
        this.element = this.createElement();
    }

    createElement () {
        var el = document.createElement('div');
        
        el.className = 'square';
        el.id = this.id++;

        return el;
    }

    notify(colorIncrementer) {
        this.element.innerHTML = colorIncrementer.number;
        this.element.style.backgroundColor = colorIncrementer.color;
    }
}