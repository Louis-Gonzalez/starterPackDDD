import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';

vi.mock('../../assets/icons/home.svg', () => ({
  default: { template: '<svg class="mock-home"/>' },
}));
vi.mock('../../assets/icons/microsoft.svg', () => ({
  default: { template: '<svg class="mock-microsoft"/>' },
}));

import MyPage from '../../pages/index.vue';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      home: 'Homepage',
    },
  },
});

describe('Homepage Test', () => {
  it('devrait afficher le bon titre', () => {
    const wrapper = mount(MyPage, {
      global: {
        plugins: [i18n],
      },
    });
    expect(wrapper.find('h1').text()).toBe('Homepage');
  });

  it("devrait afficher l'URL correcte", () => {
    expect(window.location.pathname).toBe('/');
  });
});
