const btnToggleModal = document.querySelectorAll('[data-modal-open]')

btnToggleModal.forEach(element => {
    element.addEventListener('click', () => {
        let btn = element.getAttribute('data-modal-open')
        document.getElementById(btn).classList.toggle('hidden')
    })
});

