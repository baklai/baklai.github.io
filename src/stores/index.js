import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import FacebookIcon from '@/components/icons/FacebookIcon.vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';
import TwitterIcon from '@/components/icons/TwitterIcon.vue';
import TelegramIcon from '@/components/icons/TelegramIcon.vue';
import GithubIcon from '@/components/icons/GithubIcon.vue';
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue';

export const useAppStore = defineStore('application', () => {
  const author = ref('Dmitrii Baklai');

  const copyright = computed(
    () => `Copyright © ${new Date().getFullYear()} Dmitrii Baklai. All rights reserved.`
  );

  const socialLinks = ref([
    {
      title: 'Facebook',
      component: FacebookIcon,
      href: 'https://www.facebook.com/dmitrii.baklai/'
    },
    {
      title: 'Instagram',
      component: InstagramIcon,
      href: 'https://www.instagram.com/baklai.di/'
    },
    {
      title: 'Twitter',
      component: TwitterIcon,
      href: 'https://twitter.com/baklaiDi/'
    },
    {
      title: 'Github',
      component: GithubIcon,
      href: 'https://github.com/baklai/'
    },
    {
      title: 'Linkedin',
      component: LinkedinIcon,
      href: 'https://www.linkedin.com/in/dmitrii-baklai-1370a3170/'
    },
    {
      title: 'Telegram',
      component: TelegramIcon,
      href: 'https://t.me/baklai/'
    }
  ]);

  return { author, copyright, socialLinks };
});
