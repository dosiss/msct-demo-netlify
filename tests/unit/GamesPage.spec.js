import { shallowMount } from '@vue/test-utils';
import GamesPage from '@/pages/games.vue';

const NuxtLinkStub = {
  name: 'NuxtLink',
  props: ['to'],
  render(h) {
    return h('a', { attrs: { 'data-to': this.to } }, this.$slots.default);
  }
};

const createWrapper = ({ isMobile = false } = {}) => {
  return shallowMount(GamesPage, {
    stubs: {
      NuxtLink: NuxtLinkStub,
      MainHeader: true,
      SharingButtons: true,
      AdBanner: true,
      MainFooter: true,
      VLazyImage: true,
      VueLazyLoad: true,
      TransitionGroup: true
    },
    mocks: {
      $t: (s) => s,
      $i18n: { locale: 'en' },
      $device: { isMobile },
      $router: { push: jest.fn() },
      $route: { path: '/games', query: {} },
      $nuxt: {
        context: {
          from: { name: 'some-previous-route' }
        }
      }
    }
  });
};

describe('pages/games.vue - buttons and links', () => {
  const sampleGame = {
    name: 'Demo Game',
    slug: 'demo-game',
    linkToDemo: 'demo.example.com',
    theme: 'video slot',
    type: 'traffic',
    mgacertified: false,
    mganotice: false,
    risknbuy: false,
    comingSoon: false,
    featured: false,
    topGame: false,
    branded: false,
    custom: false,
    descr: 'desc',
    thumbUrl: 'game_demo.jpeg',
    heroUrl: 'hero_demo.jpg',
    category: ['adventure'], // used by the "adventures" filter
    stats: {},
  };

  it('renders correct links on desktop for an adventures-filtered game', async () => {
    const wrapper = createWrapper({ isMobile: false });

    // Inject a small list and switch to "adventures" to avoid using the allGames constant-based filters
    await wrapper.setData({
      gamesList: [sampleGame],
      gameFilterKey: 'adventures',
      demoUrl: 'https://play.mascot.games', // default in component
      locPath: '' // will be set by mounted (for en), make explicit
    });

    await wrapper.vm.$nextTick();

    // "Learn more" link to /<slug> via NuxtLink stub
    const learnMoreLink = wrapper.find('.game-content__buttns.bb a[data-to]');
    expect(learnMoreLink.exists()).toBe(true);
    expect(learnMoreLink.attributes('data-to')).toBe('/demo-game');

    // "Play demo" link on desktop is `${demoUrl}${locPath}/${game.slug}`
    const playDemoLink = wrapper.find('.game-content__buttns.bb a.buttn-colored');
    expect(playDemoLink.exists()).toBe(true);
    expect(playDemoLink.attributes('href')).toBe('https://play.mascot.games/demo-game');
  });

  it('renders correct links on mobile for an adventures-filtered game', async () => {
    const wrapper = createWrapper({ isMobile: true });

    await wrapper.setData({
      gamesList: [sampleGame],
      gameFilterKey: 'adventures',
      demoUrl: 'https://play.mascot.games',
      locPath: '' // (en)
    });

    await wrapper.vm.$nextTick();

    // "Learn more" still points to the slug via NuxtLink
    const learnMoreLink = wrapper.find('.game-content__buttns.bb a[data-to]');
    expect(learnMoreLink.exists()).toBe(true);
    expect(learnMoreLink.attributes('data-to')).toBe('/demo-game');

    // On mobile, play demo link uses "https://${game.linkToDemo}"
    const playDemoLink = wrapper.find('.game-content__buttns.bb a.buttn-colored');
    expect(playDemoLink.exists()).toBe(true);
    expect(playDemoLink.attributes('href')).toBe('https://demo.example.com');
  });

  it('clicking a category button updates filter and router query', async () => {
    const wrapper = createWrapper({ isMobile: false });
    const pushSpy = wrapper.vm.$router.push;

    // Ensure categories are rendered
    await wrapper.setData({
      gamesList: [sampleGame],
      gameFilterKey: 'all'
    });

    await wrapper.vm.$nextTick();

    // Click the "Adventures" category filter button
    const adventuresBtn = wrapper.find('.buttn-adventures');
    expect(adventuresBtn.exists()).toBe(true);

    await adventuresBtn.trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.gameFilterKey).toBe('adventures');
    // The handler pushes query with type: 'adventures'
    expect(pushSpy).toHaveBeenCalledWith({ query: { type: 'adventures' } });
  });
});
