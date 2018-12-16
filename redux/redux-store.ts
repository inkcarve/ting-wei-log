import { createStore, applyMiddleware, bindActionCreators } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { actionTypesMapping } from "./actions";

const roomFeature = [
  { 
    roomDetail:"粉紅色的房間，牆上有一幅大大的瑪麗蓮夢露臉部浮雕。",
    catLeaveBy:"你看到小貓跑進瑪麗蓮夢露嘴唇形狀的小窗戶，你想進去，但是太小了。",
    // btnClass:"btn-danger",
    color:"danger",
  },
  { 
    roomDetail:"藍色的房間，宛如海底世界，有奇怪的打開的貝殼、水草。",
    catLeaveBy:"你看到小貓，牠跳到貝殼裡面，大扇貝合了起來，你敲了敲扇貝，貝殼打開來，貓卻不見了。",
    // btnClass:"btn-info",
    color:"info",
  },
  { 
    roomDetail:"黃色的房間，裡面有很多玩具，一台玩具火車從右面牆的山洞出來，往左邊的牆山洞離開。",
    catLeaveBy:"你看到小貓，正要撲上去，小貓喵一聲，跑進左側的火車山洞。",
    // btnClass:"btn-warning",
    color:"success",
  },
  { 
    roomDetail:"黑色的房間，裡面有一副棺材，燈光忽明忽滅。",
    catLeaveBy:"你看到小貓跳進了半開的棺材，你害怕地跑了出去。",
    // btnClass:"btn-dark",
    color:"dark",
  },
];

const RoomArray: RoomDataObj[] = [];
for (let i = 0; i < 4; i++) {
  RoomArray.push({
    id: i,
    isDogMark: false,
    ifVisited: false,
    feature: roomFeature[i]
  });
}

export interface InitialState {
  now: number | null;
  youReached: number;
  ifCatch: boolean;
  ifSee: boolean;
  ifPlaying: boolean;
  ifDog: boolean;
  data: RoomDataObj[];
  story: StoryDataObj[];
  log: Log[];
  items: number;
}

export interface RoomDataObj {
  id: number;
  isDogMark: boolean;
  ifVisited: boolean;
  feature: {
    roomDetail: string;
    catLeaveBy: string;
    color: string;
  };
}

export interface StoryDataObj {
  text: string;
}

export interface Log {
  text: string;
  end: boolean;
  color: string;
  fontSize:string;
}

const logDefault: Log = {
  text: "",
  end: false,
  color: "",
  fontSize:"",
};

const initialState: InitialState = {
  now: null,
  youReached: 0,
  ifCatch: false,
  ifSee: false,
  ifPlaying: false,
  ifDog: false,
  data: RoomArray,
  story: [
    {
      text:
        "有一天你在大街上逛著，看到一隻亮晶晶的小貓在小巷裡晃過，好奇之下跟了上去。走著走著，居然看到那隻貓穿進了一面斑駁的老牆，你傻眼了。"
    },
    {
      text:
        "你傻傻的摸了那面牆，忽然一陣涼涼的漣漪感湧了上來，發現自己來到了一個神秘的房間。在四個方向各有一道門。"
    },
    {
      text:
        "房間裡除了在四個方向各有一道門，什麼也沒有。"
    },
    {
      text: "你心想找到貓，看牠是否能帶你回去。"
    },
    {
      text: "於是你開始了找貓的行動..."
    }
    // {
    //   text:'（下面有四道門請選擇進行遊戲，直到找到小貓）'
    // }
  ],
  log: [],
  items: 0
};

let notReachedArray: RoomDataObj[] = [];

export interface Action {
  type: string;
  id: number;
}

const randomArrayActive = (state:InitialState, action:any) => {
  if(action) {
    const color = state.data[action.id].feature.color;
    state.data[action.id].isDogMark = state.ifDog;
    state.log.push({
      ...logDefault,
      text: `你剛才看見小貓了。（喵！）`,
      fontSize: "strong",
      // color
    });
    if(state.data[action.id].isDogMark) {
      state.log.push({
        ...logDefault,
        text: `>> 小狗撲向貓，但是被貓抓了一拳，哀嚎地跑到牆角尿尿去了。`,
        // color
      });
    }
    state.log.push({
      ...logDefault,
      text: `>> ${state.data[action.id].feature.catLeaveBy}`,
      // color
    });
    state.log.push({
      ...logDefault,
      end: true
    });
  }
  notReachedArray = state.data.filter(
    (obj: RoomDataObj, i: number) => !obj.isDogMark
  );
  const nextIndex =
    notReachedArray[Math.floor(Math.random() * notReachedArray.length)].id;
  state.now = nextIndex;
  console.log(state);
  return { ...state };
};

const catchAction = (state: any, action: any) => {
  console.log(state);
  console.log(action);
  const roomNowDataObj = state.data[action.id];
  const color = state.data[action.id].feature.color;
  state.log.push({
    ...logDefault,
    text: `＠ 你${roomNowDataObj.ifVisited?'再次':''}進入了${roomNowDataObj.feature.roomDetail}${roomNowDataObj.isDogMark?'，有股尿騷味':''}`,
    color
  });
  state.youReached++;
  state.data[action.id].ifVisited = true;
  if (state.youReached === 3) {
    state.items = 1;
    state.log.push({
      ...logDefault,
      text: "＊ 你獲得道具卡一張（可從使用道具按鈕使用）",
      color
    });
  }
  state.ifSee = action.id === state.now;
  if (state.ifSee) {
    console.log("action.id === state.no");
    // state.reached++;
    state.ifCatch = notReachedArray.length === 1;
    if (state.ifCatch) {
      state.ifPlaying = false;
      state.log.push({
        ...logDefault,
        text: "找到小貓了！！！",
        fontSize: "strong",
        color: "primary"
      });
      state.log.push({
        ...logDefault,
        text: "是一隻很可愛的亮晶晶小貓。",
        fontSize: "strong",
        color: "primary"
      });
      state.log.push({
        ...logDefault,
        text: ">> 然後你醒了，發現自己躺在床上，是夢...",
      });
      state.log.push({
        ...logDefault,
        text: ">> 手裡有個東西毛茸茸地...難道是...@@",
      });
      state.log.push({
        ...logDefault,
        text: ">> 未完待續",
      });
      state.log.push({
        ...logDefault,
        end: true
      });
      return { ...state };
    }
    return randomArrayActive(state, action);
  }
  state.log.push({
    ...logDefault,
    text: ">> 除了房間，你什麼也沒看到，於是你回到有四個門的房間",
    // color
  });
  state.log.push({
    ...logDefault,
    end: true
  });
  return { ...state };
};

export const reducer = (state = initialState, action: Action) => {
  console.log("reducer");
  console.log(action.type);
  switch (action.type) {
    case actionTypesMapping.CATCH:
      return catchAction(state, action);
      break;
    case actionTypesMapping.DOG:
      state.ifDog = true;
      state.log.push({
        ...logDefault,
        text: ">> 你使用道具！！！獲得了...一隻小狗",
        color: 'primary',
      });
      state.log.push({
        ...logDefault,
        end: true
      });
      return { ...state };
      break;
    case actionTypesMapping.RESET:
      state.ifPlaying = true;
      return randomArrayActive(JSON.parse(JSON.stringify(initialState)),null);
      break;
    default:
      return state;
  }
};

export const initStore = (data: any = initialState) => {
  return createStore(
    reducer,
    data,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
