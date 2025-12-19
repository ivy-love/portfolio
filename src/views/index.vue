<template>
  <div class="page">npm install gh-pages
    <!-- LayoutHeader START -->
    <LayoutHeader/>
    <!-- LayoutHeader : END -->
    <!-- btn-top : START -->
    <button class="btn-top" type="button" title="상단으로 이동">
      <i class="icon icon-arrow-top"></i>
    </button>
    <!-- btn-top : END -->
    <!-- loader : START -->
    <div class="loader">
      <div class="loader-blue"></div>
      <div class="loader-red"></div>
    </div>
    <!-- loader : END -->
    <!-- intro-section : START -->
     <section id="Home" class="intro-section">
      <h2 class="voice-only">인트로 영역</h2>
      <div class="intro-wrap">
        <div class="bg-img-grp">
          <figure>
            <video
              class="img"
              autoplay
              muted
              loop
              playsinline
              disablePictureInPicture
              controlsList="nodownload"
              title="포트폴리오 인트로 영상"
              aria-label="포트폴리오 인트로 영상"
            >
              <source
                src="@/assets/video/video_intro_bg.mp4"
                type="video/mp4"
              >
            </video>
            <figcaption class="voice-only">포트폴리오 인트로 영상</figcaption>
          </figure>
        </div>
        <div class="intro-title-grp">
          <h1 class="intro-title" data-aos="fade-up" data-aos-duration="550" data-aos-delay="1000">Kim Ji Hee</h1>
          <h1 class="intro-title second" data-aos="fade-up" data-aos-duration="550" data-aos-delay="1300">Web Pusblisher</h1>
        </div>
        <div class="scroll-grp">
          <div class="scroll"></div>
          <p class="scroll-txt">Scroll Down</p>
        </div>
      </div>
    </section>
    <!-- intro-section : END -->
    <div class="contents-wrap">
      <!-- about-section : START -->
      <section id="About" class="about-section">
        <h2 class="voice-only">
          어바웃 영역
        </h2>
        <div class="l-center">
          <div class="about-wrap">
            <div class="about-title-grp">
              <div class="rolling-title-grp">
                <span v-for="(title, idx) in titles" :key="idx" :class="{ 'is-active': activeIndex === idx, 'is-exiting': exitingIndex === idx }" class="rolling-title">
                  {{ title }}
                </span>
              </div>
              <span class="title">Publisher</span>
              <button type="button" class="btn btn-about" onclick="window.open('https://aluminum-okra-bac.notion.site/2007439c15b88031abb9e86bb53ecc43?source=copy_link')">Go to Resume</button>
            </div>
            <div class="about-grp">
              <div class="skill-img-wrap">
                <div class="img-grp" v-for="(item, idx) in 17" :key="idx">
                  <img :src="require(`@/assets/images/img_skill_icon_${idx + 1}.webp`)" alt="스킬 아이콘" class="img" loading="lazy">
                </div>
              </div>
              <div class="txt-grp">
                <span class="txt">
                  웹 디자이너로 IT 업계에 첫 발을 내딛고, 코딩을 통해 브라우저에 결과물을 구현하는 과정에서 흥미를 느껴 웹 퍼블리셔의 길을 걷게 되었습니다. 저는 단순히 디자인을 화면에 옮기는 것에 그치지 않고, 사용자 관점에서 고민하며 더 나은 방향을 제시하는 협업을 추구합니다. 특히, 웹 표준을 준수하며 컴포넌트 단위로 최적화된 마크업을 구현하는 데 집중하고 있으며, 이를 통해 더 나은 결과물을 만들어내기 위해 꾸준히 성장하고자 노력합니다.
                </span>
              </div>
              <div class="about-item-grp">
                <h4 class="about-title">Work Experience</h4>
                <OrgItem v-for="(item, idx) in careerItems" :key="idx" :title="item.title" :detail="item.detail" :period="item.period"/>
              </div>
              <div class="about-item-grp">
                <h4 class="about-title">Education</h4>
                <OrgItem v-for="(item, idx) in eduItems" :key="idx" :title="item.title" :detail="item.detail" :period="item.period"/>
              </div>
              <div class="about-item-grp">
                <h4 class="about-title">License</h4>
                <OrgItem v-for="(item, idx) in licItems" :key="idx" :title="item.title" :detail="item.detail" :period="item.period"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- about-section : END -->
      <!-- works-section : START -->
      <section id="Works" class="works-section">
        <h2 class="voice-only">작업 영역</h2>
          <div class="works-wrap">
            <article class="works-grp" v-for="(item, idx) in worksItem" :key="idx">
              <a href="#" @click.prevent="goToLink(item.btn[0].link)" target="_blank" class="works-link">
                <div class="img-bg" data-aos="slide-down" data-aos-duration="350" data-aos-delay="200"></div>
                <div class="img-grp" data-aos="slide-down" data-aos-duration="450" data-aos-delay="450">
                  <video
                    class="img"
                    autoplay
                    muted
                    loop
                    playsinline
                    disablePictureInPicture
                    controlsList="nodownload"
                    title="작업 영상"
                    aria-label="작업 영상"
                  >
                    <source
                      :src="require(`@/assets/video/video_work_item0${idx + 1}.mp4`)"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </a>
              <div class="works-txt" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
                <strong class="title">{{ item.title }}</strong>
                <p class="type">{{ item.type }}</p>
                <p class="txt">{{ item.desc }}</p>
                <p class="skill">{{ item.skills }}</p>
                <button type="button" class="btn works-btn" v-for="(btn, btnIdx) in item.btn" :key="btnIdx" @click="goToLink(btn.link)">
                  <span class="btn-txt">
                    <i class="icon-arrow-gray left">
                      <span class="shaft"></span>
                    </i>
                    {{ btn.text }}
                    <i class="icon-arrow-gray right">
                      <span class="shaft"></span>
                    </i>
                  </span>
                </button>
              </div>
            </article>
          </div>
      </section>
      <!-- works-section : END -->
      <!-- contact-section : START -->
      <section id="Contact" class="contact-section">
        <h2 class="voice-only">컨텍트 영역</h2>
        <div class="l-center">
          <div class="contact-left">
            <strong class="contact-title">CONTACT</strong>
            <div class="contact-info-wrap">
              <div class="contact-info-grp" v-for="item in contactInfo" :key="item">
                <span class="contact-label">{{ item.label }}</span>
                <span class="contact-info">{{ item.info }}</span>
              </div>
            </div>
            <div class="contact-link-grp">
              <a v-for="(item, idx) in contactLinks" :key="idx" :href="item.url" class="contact-link" target='_blank'>
                <img class="img" :src="require(`@/assets/images/img_link_${idx + 1}.webp`)" alt="링크 아이콘" loading="lazy">
              </a>
            </div>
          </div>
          <div class="contact-right">
            <form @submit.prevent="sendEmail">
              <div class="input-flex">
                <div class="input" v-for="item in contactIpt" :key="item">
                  <label :for="item.for" class="label-sm">{{ item.label }}</label>
                  <div class="input-grp">
                    <input :id="item.id" :name="item.name" v-model="formData[item.model]" type="text" :placeholder="item.placeholder" class="inp" autocomplete='off'>
                  </div>
                </div>
              </div>
              <div class="input">
                <label for="message" class="label-sm type-textarea">내용</label>
                <textarea name="message" v-model="message" id="message" cols="30" rows="10" placeholder="문의할 내용을 입력해 주세요" class="textarea" autocomplete='off'></textarea>
              </div>
              <div class="btn-grp">
                <button type="submit" id="emailBtn" class="btn btn-more" value="Send Email">
                  문의하기
                  <i class="icon icon-arrow scroll-horizontal-img"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <!-- contact-section : END -->
    </div>
    <!-- LayoutFooter : START -->
    <LayoutFooter />
    <!-- LayoutFooter : END -->
  </div>
</template>
<script>
import emailjs from 'emailjs-com';
import 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap'
import { Autoplay, FreeMode } from 'swiper/modules';
import OrgItem from './components/OrgItem.vue'

gsap.registerPlugin(ScrollTrigger);


export default {
  name: "Index",
  components: {
    OrgItem,
  },
  data() {
    return {
      formData: {
        name: '',
        email: ''
      },
      message: '',
      modules: [Autoplay, FreeMode],
      titles: ['Passionate', 'Smart', 'Flexible'],
      activeIndex: 0,
      exitingIndex: 0,
      intervalId: null,
      careerItems: [
        {
          title: '포켓컴퍼니',
          detail: '웹 퍼블리셔',
          period: '2023.09 - 2024.10'
        },
        {
          title: '(주)씨케이앤비',
          detail: '웹 디자이너 / 대리, 파트장',
          period: '2019.03 - 2021.01'
        },
      ],
      eduItems: [
        {
          title: '리액트 & Node.js',
          period: '2023.04 - 2023.06'
        },
        {
          title: 'jQuery & Javascript',
          period: '2022.04 - 2022.06'
        },
        {
          title: 'jQuery & Javascript',
          period: '2020.10 - 2020.12'
        },
        {
          title: 'HTML & CSS',
          period: '2020.05 - 2020.08'
        },
        {
          title: '웹표준 & 접근성',
          period: '2020.02 - 2020.03'
        },
      ],
      licItems: [
        {
          title: '컴퓨터 그래픽스 운용기능사',
          period: '2018.09'
        },
      ],
      worksItem: [
        {
          title: 'TO DO LIST',
          type: 'personal',
          desc: '간단한 할 일 관리 앱. 할 일을 추가하고 삭제할 수 있도록 구현하였습니다.',
          skills: '#기여도100% #HTML #CSS #JAVASCRIPT',
          btn: [
            { text: 'VISIT SITE', link: 'https://ivy-love.github.io/To-Do-List/' },
            { text: 'REVIEW', link: 'https://github.com/ivy-love/To-Do-List' }
          ]
        },
        {
          title: 'BREATION',
          type: 'work',
          desc: 'Vue.js를 기반으로 반응형 웹 페이지를 퍼블리싱하고 GSAP를 활용해 스크롤에 반응하는 인터랙션을 구현하였습니다.',
          skills: '#메인50% 서브40%, #VUE, #SCSS, #JAVASCRIPT, #GSAP',
          btn: [
            { text: 'VISIT SITE', link: 'https://breation.co.kr/#/' },
          ]
        },
        {
          title: 'EduOk',
          type: 'work',
          desc: '학원 운영 솔루션을 소개하는 반응형 웹 페이지를 제작했으며, 모달, 스와이퍼, 이중 탭메뉴 등 다양한 UI 화면을 퍼블리싱했습니다.',
          skills: '#메인80% #서브40%, #HTML, #SCSS, #JQUERY',
          btn: [
            { text: 'VISIT SITE', link: 'https://www.edu-ok.co.kr/' },
          ]
        },
        {
          title: '장사는 건물주다',
          type: 'work',
          desc: '메인 페이지를 중심으로 레이아웃을 리뉴얼했습니다. CSS를 활용해 타이핑 애니메이션을 적용하여 동적인 애니메이션을 구현했습니다.',
          skills: '#메인90% 서브30%, #HTML, #SCSS, #JQUERY',
          btn: [
            { text: 'VISIT SITE', link: 'https://jangsabuilding.com/main' },
          ]
        },
        {
          title: '에스티리테일',
          type: 'work',
          desc: '카페24 플랫폼을 기반으로 GSAP를 활용해 스크롤 시 콘텐츠가 자연스럽게 강조되는 인터랙션 애니메이션을 구현했습니다.',
          skills: '메인50% #서브20%, #HTML, #CSS, #JQUERY, #GSAP',
          btn: [
            { text: 'VISIT SITE', link: 'https://stretail.co.kr/stretail/about.html' },
          ]
        },
      ],
      horizonTxt: [
        '<strong class="point">With a dream</strong>',
        'in my heart,',
        'I take small steps',
        'each day toward',
        'something greater',
      ],
      contactInfo: [
        {
          label: 'T.',
          info: '010-9467-6972'
        },
        {
          label: 'E.',
          info: 'blueskae_@naver.com'
        }
      ],
      contactIpt: [
        {
          for: 'name',
          id: 'name',
          model: 'name',
          label: '성함',
          placeholder: '성함을 입력해 주세요'
        },
        {
          for: 'email',
          id: 'email',
          model: 'email',
          label: '이메일',
          placeholder: '이메일을 입력해 주세요'
        }
      ],
      contactLinks: [
        {
          url:'https://github.com/ivy-love/portfolio'
        },
        {
          url:'https://aluminum-okra-bac.notion.site/2007439c15b88031abb9e86bb53ecc43?source=copy_link'
        }
      ]
    }
  },
  mounted() {
    this.goMenu();
    this.aboutTxtAni();
    this.worksBgChagne();
    this.introAni();
    this.goTopBtn();
    this.introScrollAni();
    this.rollingTitleAni();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    // gnb메뉴 이동 버튼
    goMenu(section) {
      const targetSection = document.querySelector(`#${section}`);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        document.querySelector('.hd-btn').classList.remove('is-active');
      }
    },
    // contact-section 문의하기
    sendEmail() {
      if(!this.formData.name) {
        return alert('성함을 입력해 주세요')
      }

      if(!this.formData.email) {
        return alert('이메일을 입력해 주세요')
      }

      const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

      if(!regEmail.test(this.formData.email)) {
        return alert('올바른 이메일 형식을 입력해 주세요')
      }

      if(!this.message) {
        return alert('내용을 입력해 주세요')
      }

      const payload = {
        name: this.formData.name,
        email: this.formData.email,
        message: this.message
      }

      const serviceID = "service_uc9vtui"
      const templateID = "template_w8yaxhk"
      const publicKey = '-qE5UGCxYzOr5sZZN'

      emailjs.send(serviceID, templateID, payload, publicKey)

        .then(() => {
          alert('문의하기가 완료되었습니다.')

          this.formData.name = ''
          this.formData.email = ''
          this.message = ''

        }, (error) => {
          console.log(error)
        })
    },

    // works-section 링크 연결
    goToLink(url) {
      window.open(url, '_blank');
    },

    // about-section 텍스트 애니메이션
    aboutTxtAni() {
      const textElements = gsap.utils.toArray('.about-section .txt');

      textElements.forEach(txt => {
        const isTablet = window.innerWidth <= 900;

        gsap.to(txt, {
          backgroundSize: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: txt,
            start: isTablet ? 'top 95%' : 'bottom 100%',
            end: isTablet ? 'bottom 100%' : 'center 50%',
            scrub: true,
          },
        });
      });
       ScrollTrigger.refresh();
    },

    // 스크롤 시 배경색 바꾸기
    worksBgChagne() {
      const isTablet = window.innerWidth <= 900;

      gsap.to("body", {
        backgroundColor: "#0d0e10",
        scrollTrigger: {
          trigger: ".works-section",
          start: isTablet ? "top 140%" : "top 140%",
          end: isTablet ? "top 85%" : "top 90%",
          scrub: true,
        }
      });
    },


    // 인트로 애니메이션
    introAni() {
      this.$nextTick(() => {
        document.querySelector('.loader').classList.add('is-ready');
      });
    },

    // 최상단으로 올라가는 버튼
    goTopBtn() {
      let btnTop = document.querySelector('.btn-top');
      btnTop.addEventListener('click', function(e){
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
      });
    },

    // 스크롤 시 인트로 흐려지는 애니메이션
    introScrollAni() {
      const isTablet = window.innerWidth <= 900;
      gsap.fromTo(".intro-section", {
        opacity: 2,
      }, {
        opacity: 0,
        ease: "power1.in",
        scrollTrigger: {
          trigger: ".intro-section",
          start: isTablet ? "top" : "top center",
          end: isTablet ? "40%" : "center",
          scrub: true,
          toggleActions: "play none none play",
        }
      });
    },

    // 어바웃섹션 타이틀 롤링 애니메이션
    rollingTitleAni() {
      setInterval(() => {
        this.exitingIndex = this.activeIndex;
        this.activeIndex = (this.activeIndex + 1) % this.titles.length;

        setTimeout(() => {
          this.exitingIndex = null;
        }, 800);
      }, 1500);
    }
  }
};
</script>