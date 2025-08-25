<template>
  <div class="portfolio-header" :class="{ 'is-color': isActive }">
    <div class="hd-center">
      <div class="hd-wrap">
        <h1 class="logo" :class="{ 'is-active': isOpen }"><router-link :to="{ name: 'Index' }">Kim <br>Jihee</router-link></h1>
        <nav class="gnb-nav tab-hide">
          <ul class="gnb-menu">
            <li class="gnb-list" v-for="item in gnbList" :key="item">
              <a class="gnb-link" @click="goMenu(item)">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <!-- gnb-nav-mo : START -->
        <nav class="gnb-nav-mo tab-show" :class="{ 'is-active': isOpen }">
          <ul class="gnb-mo">
            <li v-for="item in gnbMo" :key="item" class="gnb-list-mo">
              <a @click="goMenu(item)">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <!-- gnb-nav-mo END -->
        <button type="button" class="btn hd-btn tab-show" @click="toggleMoBtn">
          <div class="hd-line-grp">
            <span class="hd-line"></span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LayoutHeader",
  data() {
    return {
      isOpen: false,
      isActive: false,
      gnbMo: ['About', 'Works', 'Contact'],
      gnbList: ['About', 'Works', 'Contact'],
    }
  },
  mounted () {
    this.goMenu();
    this.handleScroll();
  },
  methods: {
    // 모바일 메뉴 열고 닫기
    toggleMoBtn() {
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        document.body.classList.add('is-active');
        document.querySelector('.hd-line-grp').classList.add('is-active');
      } else {
        document.body.classList.remove('is-active');
        document.querySelector('.hd-line-grp').classList.remove('is-active');
      }
    },

    // gnb메뉴 이동 버튼
    goMenu(section) {
      const targetSection = document.querySelector(`#${section}`);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        this.isOpen = false;
        document.body.classList.remove('is-active');
        document.querySelector('.hd-line-grp').classList.remove('is-active');
      }
    },

    // 스크롤 시 헤더 숨기기
    handleScroll () {
      let lastScrollY = 0;
      const vm = this;

      window.addEventListener("scroll", function () {
        if (vm.isOpen) return;

        let header = document.querySelector(".portfolio-header");
        let currentScrollY = window.scrollY;

        if (currentScrollY === 0 || currentScrollY < lastScrollY || currentScrollY < 84) {
            header.classList.remove("is-scroll");
        } else if (currentScrollY > lastScrollY) {
            header.classList.add("is-scroll");
        }

        lastScrollY = currentScrollY;
      });
    },
  },
};
</script>

