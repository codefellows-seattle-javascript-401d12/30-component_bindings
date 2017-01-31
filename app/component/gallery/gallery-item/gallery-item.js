'use strict';


module.exports = {
  tamplate: require('./gallery-item.html'),
  controller: ['$log', 'galleryService', GalleryItemController],
  controllerAs: 'GalleryItemCtrl',
  bindings:{
    gallery: '<'
  }
};

function GalleryItemController($log, galleryService){
  $log.debug('GalleryItemController');

  this.showEditGallery = false;

  this.deleteGallery = function(){
    galleryService.deleteGallery(this.gallery._id);
  };
}
