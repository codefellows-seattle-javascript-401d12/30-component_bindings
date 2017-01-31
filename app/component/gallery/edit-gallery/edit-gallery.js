'use strict';

module.exports = {
  tamplate: require('./edit-gallery.html'),
  controller: ['$log', 'galleryService', EditGalleryController],
  controllerAs: 'editGalleryCtrl',
  bindings:{
    gallery: '<'
  }
};

function EditGalleryController($log, galleryService){
  $log.debug('EditGalleryController');

  this.updateGallery = function(){
    galleryService.updateGallery(this.gallery._id, this.gallery);
  };
}
