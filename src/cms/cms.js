import React from 'react'
import CMS from 'netlify-cms-app'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { WhatCameraTemplate } from '../templates/WhatCamera'
import { WhatFunTemplate } from '../templates/WhatFun'
import { WhatTemplate } from '../templates/What'
import { PostHomeTemplate } from '../templates/PostHome'
import { PostCamTemplate } from '../templates/PostCam'
import { PostFunTemplate } from '../templates/PostFun'
import { PostWhatTemplate } from '../templates/PostWhat'
import uploadcare from 'netlify-cms-media-library-uploadcare'

CMS.registerMediaLibrary(uploadcare)

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('whatcamera', ({ entry }) => (
  <WhatCameraTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('whatfun', ({ entry }) => (
  <WhatFunTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('what', ({ entry }) => (
  <WhatTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('postHome', ({ entry }) => (
  <PostHomeTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('postCam', ({ entry }) => (
  <PostCamTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('postFun', ({ entry }) => (
  <PostFunTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('postWhat', ({ entry }) => (
  <PostWhatTemplate {...entry.toJS().data} />
))