import imageUrlBuilder from '@sanity/image-url'
import myConfiguredSanityClient from './sanityClient'

const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
	return builder.image(source)
}

export default urlFor