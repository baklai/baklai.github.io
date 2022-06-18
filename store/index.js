export const state = () => ({
  flat: false,

  author: 'Dmitrii Baklai',
  copyright: `Copyright © ${new Date().getFullYear()} Dmitrii Baklai. All rights reserved.`,
  links: [
    {
      title: 'Facebook',
      icon: 'mdi-facebook',
      href: 'https://www.facebook.com/dmitrii.baklai/'
    },
    {
      title: 'Twitter',
      icon: 'mdi-twitter',
      href: 'https://twitter.com/baklaiDi'
    },
    {
      title: 'Github',
      icon: 'mdi-github',
      href: 'https://github.com/baklai'
    },
    {
      title: 'Linkedin',
      icon: 'mdi-linkedin',
      href: 'https://www.linkedin.com/in/dmitrii-baklai-1370a3170/'
    },
    {
      title: 'Instagram',
      icon: 'mdi-instagram',
      href: 'https://www.instagram.com/baklai.di'
    }
  ]
});

export const actions = {};

export const mutations = {
  flat(state, val) {
    state.flat = val;
  }
};

export const getters = {};
