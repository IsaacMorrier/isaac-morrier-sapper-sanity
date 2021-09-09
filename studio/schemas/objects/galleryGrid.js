export default {
  name: 'galleryGrid',
  type: 'object',
  title: 'Gallery Grid',
  fields: [
    {
      name: 'gallery',
      type: 'reference',
      to: [
        {
          type: 'gallery'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'gallery.name',
      media: 'gallery.imagesGallery.0'
    }
  }
}
