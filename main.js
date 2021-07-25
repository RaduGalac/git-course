const  dragAndDrop = () =>{
    const card = document.querySelector('.js-card');
    const cell = document.querySelectorAll('.js-cell');
    const dragstart = function (){
        setTimeout(()=>{
            let id_name = `card_${randomn()}`;
            this.dataset.id = id_name;
            this.parentNode.id = id_name;

        },0);
    }
    const dragend = function (){
        this.classList.remove('hide');
    }
    const dragOver = function (evt){
        evt.preventDefault();
    }
    const dragEnter = function (evt){
        evt.preventDefault();
        document.querySelectorAll('.js-cell').forEach(function (e){
            e.removeAttribute('id');
            e.classList.remove('hovered');
        })
        this.classList.add('hovered');
    }
    const dragLeave = function (){
        this.classList.remove('hovered');
    }
    const dragDrop = function (){
        let name_element = `elemet${randomn()}`;
        this.id = name_element;
        let element_move = document.getElementById(card.getAttribute('data-id'));
        let nameElement_run = document.getElementById(name_element);
        nameElement_run.insertAdjacentElement('afterend',element_move)
    }

    cell.forEach((cell)=>{
        cell.addEventListener('dragover',dragOver);
        cell.addEventListener('dragenter',dragEnter);
        cell.addEventListener('dragleave',dragLeave);
        cell.addEventListener('drop',dragDrop);
    });

    card.addEventListener('dragstart',dragstart);
    card.addEventListener('dragend',dragend);
}
dragAndDrop();