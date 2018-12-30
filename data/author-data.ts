const appLink = 'https://drive.google.com/open?id=1ixrg8WhWQChR_KTav5_e2EvtQomoCQ_D';
const badgeNew = ' <span class=\"badge badge-primary text-white print-d-none\">new</span>';
export default {
  pdfSrc:'static/file/Road of Ting-Wei.pdf',
  bigTitle:{
    personalData:'基本資料 / PERSONAL DATA',
    about:'自述 / ABOUT ME',
    education:'學歷 / EDUCATION',
    jobs:'工作經驗 / WORK EXPERIENCE',
    skill:'網頁相關技能 / SKILL OF WEB',
    otherSkill:'其他技能 / OTHER SKILL',
    project:'公開作品或專案 / ＷORKS OR PROJECTS',
    pay:'希望待遇 / EXPECTED SALARY',
    autobiography: '自傳 / AUTOBIOGRAPHY',
    summary:'總覽 / SUMMARY OF QUALIFICATIONS'
},
  basic: [
    { title: "姓名", titleEn: "Name", detail: " 林庭瑋 / Ting Wei Lin" },
    { title: "生日", titleEn: "Birthday", detail: "1985.03.04" }
  ],
  contact: [
    {
      title: "行動電話",
      titleEn: "Mobile",
      detail: ' <a href="tel:+886982783047">+886 982783047</a>'
    },
    {
      title: "電子信箱",
      titleEn: "Email",
      detail: ' <a href="mailto:inlcarve@gmail.com">inkcarve@gmail.com</a>'
    }
  ],
  info: [
    { title: "", titleEn: "", detail: 
    "你好，我是一名網頁前端工程師，曾經是一名半生不熟的小平面設計或網路行銷雜工，但現在想跨足成為一名 React-Native App 工程師。" +
    "<br>由於對製作視覺畫面與互動比較有興趣，因此比起成為一位全端Ｗeb工程師，優先選擇了 Web Frontend / React Native App 工程師這條路。" +
    "<br>希望我們能一起繼續成就產品的美好。" }
  ],
  education: [
    { title: "", titleEn: "", detail: "元智大學通訊工程學系學士" }
  ],
  skill: [
    {
      title: "基本語言",
      titleEn: "Basic",
      detail: " HTML、CSS、Javascript、TypeScript"
    },
    {
      title: "樣式相關",
      titleEn: "Style",
      detail:
        " Bootstrap(3、4)、Scss、ng-Bootstrap(Angular)、Bootstrap-Vue(Vue)、reactstrap(react)、UI-Bootstrap(AngularJs)、font-awesome..."
    },
    {
      title: "網頁前端框架",
      titleEn: "Web Framework",
      detail: "",
      listGroupTitle: "",
      listGroup: [
        {
          title: "React",
          content: `react-redux${badgeNew}、next-i18next${badgeNew}、mobx-react、NextJs、reactstrap`
        },
        {
          title: "Angular7",
          content: "ng-bootstrap、ng-inline-svg、angular-cropperjs"
        },
        {
          title: "Vue",
          content: "vuex、bootstrap-vue、vuelidate"
        },
        {
          title: "AngularJs",
          content:
            "angular-ui-bootstrap、angular-slick-carousel、ng-device-detector、ui-select"
        }
      ]
    },
    {
      title: "App 框架",
      titleEn: "App Framework",
      detail: "",
      listGroup: [
        {
          title: "ReactNative",
          content:
            `react-native-code-push${badgeNew}、react-native-router-flux、native-base、lottie-react-native、victory-native、react-native-fast-image、react-native-splash-screen、react-native-blur、react-native-collapsible、react-native-deck-swiper`
        }
      ]
    },
    {
      title: "其他",
      titleEn: "Other",
      detail: `redux${badgeNew}、Webpack、Jquery、NodeJs+Express+helmetJs${badgeNew}、mobx...還有其他插件`,
      listGroup: [
        // {
        //     title:'ReactNative',
        //     content:'native-base、lottie-native、victory-native、react-native-fast-image、react-native-splash-screen'
        // }
      ]
    }
  ],
  otherSkill: [
    {
      title: "繪圖工具",
      titleEn: "Art tools",
      detail: " Photoshop、Illustractor"
    }
  ],
  pay: [
    {
      title: "",
      titleEn: "",
      detail: "800K ~ 900K / year"
    }
  ],
  projects: [
    {
      title: "ReactNative Demo App (Renew Code-push)",
      titleEn: "",
      detail:
        '從 Google Driver <a href="'+appLink+'" target="_blank"><span class="print-d-none">下載</span><span class="print-d-inline d-none ">https://drive.google.com/open?id=1ixrg8WhWQChR_KTav5_e2EvtQomoCQ_D</span></a>，（只是作品並非產品，未上架 App Store，因此只提供 Android版本下載）'
    },
    {
      title: "Road of Ting Wei",
      titleEn: "(Heroku 免費空間連不上或比較慢請見諒)",
      detail:
        '<a href="https://road-of-ting-wei.herokuapp.com" target="_blank"><span class="print-d-none">Here</span><span class="d-none print-d-inline">https://road-of-ting-wei.herokuapp.com</span></a>'
    },
    {
      title: "HSBC信用卡線上開戶",
      titleEn: "",
      detail:
        '<a href="https://card.apply.hsbc.com.tw/hsbcoa/credit_card/select_your_card" target="_blank"><span class="print-d-none">Go Now!</span><span class="d-none print-d-inline">https://card.apply.hsbc.com.tw/hsbcoa/oaadd</span></a>'
    },
    {
      title: "舊的個人網站",
      titleEn: "Old Personal Web Site(2015~2016)",
      detail:
        '<a href="http://vincent0423.byethost3.com/index.html" target="_blank"><span class="print-d-none">Are You Sure want to go ?</span><span class="d-none print-d-inline">http://vincent0423.byethost3.com/index.html</span></a>'
    }
  ],
  jobs: [
    {
      listGroup: [
        {
          title: "景丞科技股份有限公司",
          titleEn: "網頁前端工程師，2016/08 ~ Present(在職)",
          content:
            '參與過<a href="https://card.apply.hsbc.com.tw/hsbcoa/credit_card/select_your_card" target="_blank">HSBC信用卡線上開戶</a>、王道銀行行動對帳單、深圳農商銀行對帳單（中國）、成都農商銀行對帳單（中國）、上海裕順內部對帳單專案（中國）...還有一些正在進行項目。<br>相關經驗有 Angular、VueJs、AngularJs、Jquery、Bootstrap、無障礙網頁、CSP(Content Security Policy), 手機拍照並進行圖片裁切元件, 資料視覺化。'
        },
        {
          title: "精銳合威股份有限公司",
          titleEn: "網頁前端工程師，2016/04 ~ 2016/06",
          content:
            '參與過台灣自由行網站(由於網站變動已經很大，就不再提供連結)'
        },
        {
          title: "采霆科技有限公司",
          titleEn: "網頁前端工程師，2015/11 ~ 2016/01",
          content:
            '負責公司承接專案前端製作，包含頁面設計'
        },
        // {
        //   title: "事必得科技有限公司",
        //   titleEn: "網頁前端助理工程師，2015/08 ~ 2015/10",
        //   content:
        //     '負責公司專案協助'
        // },
        {
          title: "侏羅紀股份有限公司",
          titleEn: "網站美編/行銷專員專員，2012/03 ~ 2015/02",
          content:
            '負責網站管理、banner與活動頁製作維護，協助平面美編事務'
        },
        {
          title: "台灣酒聯合策進會",
          titleEn: "美編，2011/09 ~ 2012/01",
          content:
            '平面美編事務'
        },
        {
          title: "花茶大師飲料店",
          titleEn: "美編，2011/03 ~ 2011/07",
          content:
            '平面美編事務'
        },
        // { title: "其他", titleEn: "other", content: "請洽本人", onlyScreen:true, }
      ]
    }
  ],
  autobiography :[
    {
      title:'',
      detail:'你好，我的名子是林庭瑋，目前是一位網頁前端工程師，主要負責網頁前端程式撰寫，將視覺設計師的設計與需求資料面呈現在畫面上，並與後端進行資料交換的動作。可說是夾心餅乾的中的美好餡料，偶爾會爆餡，偶爾很甜美。'
    },{
      title:'從「異想天開」開始。',
      detail:'當初會踏入這一行，可以說是因緣際會，也可以說是迫於現實壓力。大學念的是通訊工程學系，天線、交換器與波段頻譜本來應該是我的未來，但是小弟異想天開想當個十把刀（九把刀你好），研究所上多久就因為沒興趣而放棄，追求夢想去了。'
    },{
      title:'然而「現實總是血淋淋」。',
      detail:'小說家當不成就算了，還成為了沒錢吃飯的不肖子，只好摸摸鼻子，決定好好工作。當時視覺設計很紅（現在可能也還是），傻傻的我還是一樣抱持著樂觀進取的心態，以為努力就能賺到錢，完全沒想到視覺設計界薪情並不輕鬆。後來因緣際會，負責網頁美編，偶寫要寫寫HTML與CSS，於是努力自己做了個Web Site，搭上了Web Frontend 的熱潮。'
    },{
      title:'',
      detail:'三年前端Coding之路跌跌撞撞，從基礎開枝散葉，從HTML、CSS、JS長出Jquery與AngularJS，又結合了SCSS與Webpack，再到現今的三大前端框架。如今雖然不能算是前端大師，也算是個能「隨著浪潮，自我成長的前端人」了。目前三大前端Framework，除了React因為現在公司沒有別的工程師特別去學以外，Angular跟Vue近年都有了公司專案經驗，React則是有作品經驗。但是本著學如逆水行舟的精神，我知道這樣絕對不夠。'
    },{
      title:'時代洪流下就是生於憂患，死於安樂，就是不進則退。',
      detail:'在分析技能與局勢之後，發現有兩個方向跟JS相關，可以發展：「NodeJS全端」與「ReactNative App Developer」。本來想朝NodeJS全端發展，但後來還是覺得App較有趣些啊！當紅的ReactNative便成了新的選擇。當然不會放棄Web的。'
          },{
      title:'未來是未知數。',
      detail:'跨平台App也算競爭，雖然Flutter使用Dart，但或許能成為下個明日之星的選擇？未來是未知數，只待大家共同去探索、拓展與開創。'
    },
  ],
  summary:[
    {
        detail:'•	3年以上網頁前端工程師工作經驗'
    },
    {
        detail:'•	3年平面視覺設計師經驗'
    },
    {
        detail:'•	有知名前端框架 Angular, ReactJs and VueJs經驗'
    },
    {
        detail:'•	無障礙網頁經驗（ WCAG 2.0 AA ）'
    },
    {
        detail:'•	React Native App (跨平台 App) 開發經驗'
    },
    {
        detail:'•	擁有自己學習新技能並實踐在專案上的能力與自信.'
    },
    {
        detail:'•	將會不斷抱持著虛心學習的精神'
    }
]
};
