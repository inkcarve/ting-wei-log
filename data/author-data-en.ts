const appLink = 'https://drive.google.com/open?id=1ixrg8WhWQChR_KTav5_e2EvtQomoCQ_D';
const badgeNew = ' <span class=\"badge badge-primary text-white print-d-none\">new</span>';
export default {
    pdfSrc:'static/file/Road of Ting-Wei_EN.pdf',
    bigTitle:{
        personalData:'PERSONAL DATA',
        about:'ABOUT ME',
        education:'EDUCATION',
        jobs:'WORK EXPERIENCE',
        skill:'FRONTEND SKILL',
        otherSkill:'OTHER SKILL',
        project:'ＷORKS OR PROJECTS',
        pay:'EXPECTED SALARY',
        autobiography: 'AUTOBIOGRAPHY',
        summary:'SUMMARY OF QUALIFICATIONS'
    },
  basic: [
    { title: "Name", titleEn: "", detail: "Ting Wei Lin" },
    { title: "Birthday", titleEn: "", detail: "1985.03.04" }
  ],
  contact: [
    {
      title: "Mobile",
      titleEn: "",
      detail: ' <a href="tel:+886982783047">+886 982783047</a>'
    },
    {
      title: "Email",
      titleEn: "",
      detail: ' <a href="mailto:inlcarve@gmail.com">inkcarve@gmail.com</a>'
    }
  ],
  info: [
    { title: "", titleEn: "", detail: 
    "Hi, I'm a web frontend engineer. Actually I had been a junior graphic designer or others. But I think could be a React Native Enigeneer / Web Frontend Enigeneer Now." +
    "<br>Maybe a few days later, I almost become a NodeJs Full stack Enigeneer." +
    "<br>I hope we could continue to create the products and make them better and better."}
  ],
  education: [
    { title: "Yuan Ze University", titleEn: "", detail: "Bachelor’s Degree in Communication Engineering Department" }
  ],
  skill: [
    {
      title: "Basic",
      titleEn: "",
      detail: " HTML, CSS, Javascript, TypeScript"
    },
    {
      title: "Style",
      titleEn: "",
      detail:
        " Bootstrap(3, 4), Scss, ng-Bootstrap(Angular), Bootstrap-Vue(Vue), reactstrap(react), UI-Bootstrap(AngularJs), font-awesome..."
    },
    {
      title: "Web Framework",
      titleEn: "",
      detail: "",
      listGroupTitle: "",
      listGroup: [
        {
          title: "React",
          content: `react-redux${badgeNew}, next-i18next${badgeNew}, mobx-react, NextJs, reactstrap`
        },
        {
          title: "Angular7",
          content: "ng-bootstrap, ng-inline-svg, angular-cropperjs"
        },
        {
          title: "Vue",
          content: "vuex, bootstrap-vue, vuelidate"
        },
        {
          title: "AngularJs",
          content:
            "angular-ui-bootstrap, angular-slick-carousel, ng-device-detector, ui-select"
        }
      ]
    },
    {
      title: "App Framework",
      titleEn: "",
      detail: "",
      listGroup: [
        {
          title: "ReactNative",
          content:
            `react-native-code-push${badgeNew}, react-native-router-flux, native-base, lottie-react-native, victory-native, react-native-fast-image, react-native-splash-screen, react-native-blur, react-native-collapsible, react-native-deck-swiper`
        }
      ]
    },
    {
      title: "Other",
      titleEn: "",
      detail: `redux${badgeNew}, Webpack, Jquery, NodeJs+Express, mobx...還有其他插件`,
      listGroup: [
        // {
        //     title:'ReactNative',
        //     content:'native-base, lottie-native, victory-native, react-native-fast-image, react-native-splash-screen'
        // }
      ]
    }
  ],
  otherSkill: [
    {
      title: "Art tools",
      titleEn: "",
      detail: " Photoshop, Illustractor"
    }
  ],
  pay: [
    {
      title: "",
      titleEn: "",
      detail: "NT$ 800K ~ 900K / year"
    }
  ],
  projects: [
    {
      title: "ReactNative Demo App (Renew Code-push)",
      titleEn: "",
      detail:
        'Doenload from <a href="'+appLink+'" target="_blank"><span class="print-d-none">Google Driver</span><span class="print-d-inlined-none ">https://drive.google.com/open?id=1ixrg8WhWQChR_KTav5_e2EvtQomoCQ_D</span></a>, Not Upload to App Store. Only Android version support download.'
    },
    {
      title: "Road of Ting Wei",
      titleEn: "(Heroku)",
      detail:
        '<a href="https://road-of-ting-wei.herokuapp.com" target="_blank"><span class="print-d-none">Here</span><span class="d-none print-d-inline">https://road-of-ting-wei.herokuapp.com</span></a>'
    },
    {
      title: "HSBC Credit Card Application Online",
      titleEn: "",
      detail:
        '<a href="https://card.apply.hsbc.com.tw/hsbcoa/credit_card/select_your_card" target="_blank"><span class="print-d-none">Go Now!</span><span class="d-none print-d-inline">https://card.apply.hsbc.com.tw/hsbcoa/oaadd</span></a>'
    },
    {
      title: "Old Personal Web Site(2015~2016)",
      titleEn: "",
      detail:
        '<a href="http://vincent0423.byethost3.com/index.html" target="_blank"><span class="print-d-none">Are You Sure want to go ?</span><span class="d-none print-d-inline">http://vincent0423.byethost3.com/index.html</span></a>'
    }
  ],
  jobs: [
    {
      listGroup: [
        {
          title: "Fuco & Solution Co., Ltd",
          titleEn: "Web Frontend Engineer 2016/08 ~ Present",
          content:
            'proect: <a href="https://card.apply.hsbc.com.tw/hsbcoa/credit_card/select_your_card" target="_blank">HSBC Credit Card Application Online</a>, Obank online Bank Statement, Shenzhen Rural Commercial Bank online Bank Statement（China), Chengdu Rural Commercial Bank online Bank Statement（China)... and some projects are onsite.<br>Experiences of Angulr6+, AngularJs, VueJs, JQuery, Webpack, Web Accessibility(WCAG AA), CSP(Content Security Policy), taking a shot in mobile & cropper, chart.'
        },
        {
          title: "精銳合威股份有限公司 (Only Chinese Name)",
          titleEn: "Web Frontend Engineer，2016/04 ~ 2016/06",
          content:
            'Independent Travel To Taiwan (www.go2tw.cn)'
        },
        {
          title: "Shunteam Ltd",
          titleEn: "Web Frontend Engineer，2015/11 ~ 2016/01",
          content:
            'OBM RWD Websites (ex. http://www.quentain.com/)'
        },
        // {
        //   title: "事必得科技有限公司",
        //   titleEn: "網頁前端助理工程師，2015/08 ~ 2015/10",
        //   content:
        //     '負責公司專案協助'
        // },
        {
          title: "Jurassic Jewelry Ltd.",
          titleEn: "Junior Graphic Designer / Web Manager / Digital Marketing Executive 2012/03 ~ 2015/02",
          content:
            'In that time, I designed graphic design, like poster of store, large format printing, publication, and EDM or banner of email and website. Some time I needed to create the marking event of web and store. By the way, I learned some HTML, CSS, Javascript when managed the CMS of web of Jurassic Jewelry.'
        },
        {
          title: "台灣酒聯合策進會 (Only Chinese Name)",
          titleEn: "Junior Visual Designer 2011/09 ~ 2012/01",
          content:
            'In that time, I designed graphic design, like poster, large format printing, graphic publication and DM.'
        },
        {
          title: "花茶大師飲料店 (Only Chinese Name)",
          titleEn: "Junior Visual Designer 2011/03 ~ 2011/07",
          content:
            'I designed graphic design, like poster and DM.'
        },
        // { title: "其他", titleEn: "other", content: "請洽本人", onlyScreen:true, }
      ]
    }
  ],
  autobiography :[
    {
      title:'',
      detail:'Hi, My name is Ting-Wei Lin. I am a web frontend engineer. I present the view and data on web browser , and handle data exchange between browser and server. In my eyes frontend developer is the awesome stuffing in sandwich cookie. Sometimes Extruded, sometimes so sweet.'
    },{
      title:'Begin from A daydream',
      detail:'My Major was communication engineering at University, but I wanted to be another J.K. Rowling. I gave up studying when M.A. Program, then followed my dream.'
    },{
      title:'However, Reality is always Cruel',
      detail:'Novelist road is so difficult that I had no money life in that time. Importantly, my family was worried about me. In that time, visual designer was a famous career (also now), and I intended to be one to them. When I was a junior visual designer, I just understood salary of them is not good in Taiwan. After That, I joined a team of Internet Marketing, and got to know some basic HTML CSS  which used for marketing campaign in website. Next, I builded a personal website, and jump into the trend of web frontend developing.'
    },{
      title:'',
      detail:'After growing in three years, seed grow into a tree , HTML, CSS, JS to Jquery and AngularJS, then combine SCSS and Webpack. Now, I have talent of Reactjs, Angular-6+ and Vuejs, job experience in Angular and Vue, and personal side project experience in React. I think I am a Really Frontend Guy  now. But, I know it’s not enough.'
    },{
      title:'People Could Keep their Life In Suffering, but always Died in Ease Living.',
      detail:'I found there are two career that I can handle and grow up : Full Stack Nodejs engineer and React Native App engineer. I like building visual more than server handling , so I choose to become React Native app developer first.'
          },{
      title:'Future is always a unknown number',
      detail:'Technology of Cross platform App is competitive, maybe Flutter is next star ? Even through It’s base on Dart language. Anyway, future is a unknown number, waiting for our exploring.'
    },
  ],
  summary:[
      {
          detail:'•	3+ years work experience in Web Frontend Developer.'
      },
      {
          detail:'•	3+ years work experience in Junior Visual designer.'
      },
      {
          detail:'•	Have project experience in famous frontend framework, like Angular, ReactJs and VueJs.'
      },
      {
          detail:'•	Have work experience in WCAG AA (Web Accessibility).'
      },
      {
          detail:'•	Created React Native App (Cross platform App) by myself.'
      },
      {
          detail:'•	Ability of Learning New Skill and Using them in new project by self.'
      },
      {
          detail:'•	Always Keep the Faith of Leaning New Technology in mind.'
      }
  ]
};
