import Loadable from 'react-loadable';
import { Loading } from './Loading';

import mapJson from '../../core/util/json-mapper';

import { blogPostPropsMapping } from '../../pages/BlogPost/transformations/blogpost.entry-to-props.mapper';
import { blogListingPropsMapping } from '../../pages/BlogListing/transformations/bloglisting.entry-to-props.mapper';

export default [
  {
    contentTypeID: 'homepage',
    component: Loadable({
      loader: () => {
        return import('~/pages/Home/home.page.js');
      },
      loading: Loading,
    }),
  },
  {
    contentTypeID: 'blogListing',
    component: Loadable({
      loader: () => {
        return import('~/pages/BlogListing/BlogListing.page');
      },
      loading: Loading,
    }),
    linkDepth: 1,
    entryMapper: ({ entry }) => mapJson(entry, blogListingPropsMapping),
  },
  {
    contentTypeID: 'blogPost',
    component: Loadable({
      loader: () => {
        return import('~/pages/BlogPost/BlogPost.page');
      },
      loading: Loading,
    }),
    linkDepth: 1,
    entryMapper: ({ entry }) => mapJson(entry, blogPostPropsMapping),
  },
];
