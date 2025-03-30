import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import author from './author'
import imageGalleryType from './imageGallery'
import category from './category'
import blockContent from './blockContent'
import pageType from './pageType'
import sectionImageOverlay from './sectionImageOverlay'
import textWithIllustrationType from './textWithIllu'
import { videoType } from './videoType'
import { formType } from './formType'
import { heroType } from './heroType'
import { promotionType } from './promotionType'
import projectType from './projectType'
import expertisesType from './expertiseType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    imageGalleryType,
    category,
    blockContent,
    pageType,
    sectionImageOverlay,
    textWithIllustrationType,
    videoType,
    formType,
    heroType,
    expertisesType,
    promotionType,
    projectType,
  ],
}
