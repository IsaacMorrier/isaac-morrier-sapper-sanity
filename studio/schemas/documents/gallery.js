export default {
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'imagesGallery',
      title: 'Images',
      type: 'array',
      of: [{ type: 'galleryImage' }]
     }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'imagesGallery.0'
    }
  }
}
