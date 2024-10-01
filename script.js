document.addEventListener('DOMContentLoaded', () => {
    fetch('review_form.xml')
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
        .then(data => {
            // Extract and set data from XML
            document.querySelector('input[name="name"]').value = data.querySelector('customerDetails name').textContent;
            document.querySelector('input[name="id"]').value = data.querySelector('customerDetails id').textContent;
            document.querySelector('input[name="productName"]').value = data.querySelector('productDetails productName').textContent;
            document.querySelector('input[name="purchaseDate"]').value = data.querySelector('productDetails purchaseDate').textContent;
            document.querySelector(`select[name="ease"] option[value="${data.querySelector('productDetails purchaseEase').textContent}"]`).selected = true;
            document.querySelector(`input[name="productRating"][value="${data.querySelector('productDetails productRating').textContent}"]`).checked = true;
            document.querySelector('input[name="sellerName"]').value = data.querySelector('sellerDetails sellerName').textContent;
            document.querySelector('input[name="sellerId"]').value = data.querySelector('sellerDetails sellerId').textContent;
            document.querySelector(`input[name="sellerRating"][value="${data.querySelector('sellerDetails sellerRating').textContent}"]`).checked = true;
            document.querySelector('textarea[name="comments"]').value = data.querySelector('reviewDetails description').textContent;
            document.querySelector('input[name="uploadPhotos"]').value = data.querySelector('reviewDetails uploadedPhotos').textContent;
            document.querySelector('input[name="anonymous"]').checked = data.querySelector('reviewDetails anonymous').textContent === 'true';
        })
        .catch(error => console.error('Error loading XML:', error));
});
