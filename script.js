(function (window, document) {
  'use strict';

  const $modal = document.querySelector('.modal-overlay');
  const $newTrans = document.querySelector('#newTrans');
  const $closeModal = document.querySelector('#closeModal');

  const toogleModal = () => {
    if ($modal.classList.contains('active'))
      $modal.classList.remove('active');
    else
      $modal.classList.add('active');
  }

  $newTrans.addEventListener('click', toogleModal);
  $closeModal.addEventListener('click', toogleModal);

})(window, document);