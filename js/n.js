const scriptURL = 'https://script.google.com/macros/s/AKfycbzVbRTQtFgXIfTR04TcOYBUJLIPgtZYGlG2PBqksSQdFVwrdv-df68TRQvPCWLlLrGdBw/exec';
        const form = document.forms['contactForm'];
        const btnKirim = document.querySelector('.btn-kirim');
        const btnLoading = document.querySelector('.btn-loading');
        const alert = document.querySelector('.alert');
        form.addEventListener('submit', e => {
            e.preventDefault();
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                btnLoading.classList.toggle('d-none');
                btnKirim.classList.toggle('d-none');
                console.log('Success!', response);
                alert.classList.toggle('d-none');
                form.reset();
                })
            .catch(error => {                
                console.error('Error!', error.message)
            })
        })