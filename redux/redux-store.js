var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { actionTypesMapping } from "./actions";
var roomFeature = [
    {
        roomDetail: "粉紅色的房間，牆上有一幅大大的瑪麗蓮夢露臉部浮雕。",
        catLeaveBy: "你看到小貓跑進瑪麗蓮夢露嘴唇形狀的小窗戶，你想進去，但是太小了。",
        color: "danger",
    },
    {
        roomDetail: "藍色的房間，宛如海底世界，有奇怪的打開的貝殼、水草。",
        catLeaveBy: "你看到小貓，牠跳到貝殼裡面，大扇貝合了起來，你敲了敲扇貝，貝殼打開來，貓卻不見了。",
        color: "info",
    },
    {
        roomDetail: "黃色的房間，裡面有很多玩具，一台玩具火車從右面牆的山洞出來，往左邊的牆山洞離開。",
        catLeaveBy: "你看到小貓，正要撲上去，小貓喵一聲，跑進左側的火車山洞。",
        color: "success",
    },
    {
        roomDetail: "黑色的房間，裡面有一副棺材，燈光忽明忽滅。",
        catLeaveBy: "你看到小貓跳進了半開的棺材，你害怕地跑了出去。",
        color: "dark",
    },
];
var RoomArray = [];
for (var i = 0; i < 4; i++) {
    RoomArray.push({
        id: i,
        isDogMark: false,
        ifVisited: false,
        feature: roomFeature[i]
    });
}
var logDefault = {
    text: "",
    end: false,
    color: "",
    fontSize: "",
};
var initialState = {
    now: null,
    youReached: 0,
    ifCatch: false,
    ifSee: false,
    ifPlaying: false,
    ifDog: false,
    data: RoomArray,
    story: [
        {
            text: "有一天你在大街上逛著，看到一隻亮晶晶的小貓在小巷裡晃過，好奇之下跟了上去。走著走著，居然看到那隻貓穿進了一面斑駁的老牆，你傻眼了。"
        },
        {
            text: "你傻傻的摸了那面牆，忽然一陣涼涼的漣漪感湧了上來，發現自己來到了一個神秘的房間。在四個方向各有一道門。"
        },
        {
            text: "房間裡除了在四個方向各有一道門，什麼也沒有。"
        },
        {
            text: "你心想找到貓，看牠是否能帶你回去。"
        },
        {
            text: "於是你開始了找貓的行動..."
        }
    ],
    log: [],
    items: 0
};
var notReachedArray = [];
var randomArrayActive = function (state, action) {
    if (action) {
        var color = state.data[action.id].feature.color;
        state.data[action.id].isDogMark = state.ifDog;
        state.log.push(__assign({}, logDefault, { text: "\u4F60\u525B\u624D\u770B\u898B\u5C0F\u8C93\u4E86\u3002\uFF08\u55B5\uFF01\uFF09", fontSize: "strong" }));
        if (state.data[action.id].isDogMark) {
            state.log.push(__assign({}, logDefault, { text: ">> \u5C0F\u72D7\u64B2\u5411\u8C93\uFF0C\u4F46\u662F\u88AB\u8C93\u6293\u4E86\u4E00\u62F3\uFF0C\u54C0\u568E\u5730\u8DD1\u5230\u7246\u89D2\u5C3F\u5C3F\u53BB\u4E86\u3002" }));
        }
        state.log.push(__assign({}, logDefault, { text: ">> " + state.data[action.id].feature.catLeaveBy }));
        state.log.push(__assign({}, logDefault, { end: true }));
    }
    notReachedArray = state.data.filter(function (obj, i) { return !obj.isDogMark; });
    var nextIndex = notReachedArray[Math.floor(Math.random() * notReachedArray.length)].id;
    state.now = nextIndex;
    console.log(state);
    return __assign({}, state);
};
var catchAction = function (state, action) {
    console.log(state);
    console.log(action);
    var roomNowDataObj = state.data[action.id];
    var color = state.data[action.id].feature.color;
    state.log.push(__assign({}, logDefault, { text: "\uFF20 \u4F60" + (roomNowDataObj.ifVisited ? '再次' : '') + "\u9032\u5165\u4E86" + roomNowDataObj.feature.roomDetail + (roomNowDataObj.isDogMark ? '，有股尿騷味' : ''), color: color }));
    state.youReached++;
    state.data[action.id].ifVisited = true;
    if (state.youReached === 3) {
        state.items = 1;
        state.log.push(__assign({}, logDefault, { text: "＊ 你獲得道具卡一張（可從使用道具按鈕使用）", color: color }));
    }
    state.ifSee = action.id === state.now;
    if (state.ifSee) {
        console.log("action.id === state.no");
        state.ifCatch = notReachedArray.length === 1;
        if (state.ifCatch) {
            state.ifPlaying = false;
            state.log.push(__assign({}, logDefault, { text: "找到小貓了！！！", fontSize: "strong", color: "primary" }));
            state.log.push(__assign({}, logDefault, { text: "是一隻很可愛的亮晶晶小貓。", fontSize: "strong", color: "primary" }));
            state.log.push(__assign({}, logDefault, { text: ">> 然後你醒了，發現自己躺在床上，是夢..." }));
            state.log.push(__assign({}, logDefault, { text: ">> 手裡有個東西毛茸茸地...難道是...@@" }));
            state.log.push(__assign({}, logDefault, { text: ">> 未完待續" }));
            state.log.push(__assign({}, logDefault, { end: true }));
            return __assign({}, state);
        }
        return randomArrayActive(state, action);
    }
    state.log.push(__assign({}, logDefault, { text: ">> 除了房間，你什麼也沒看到，於是你回到有四個門的房間" }));
    state.log.push(__assign({}, logDefault, { end: true }));
    return __assign({}, state);
};
export var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    console.log("reducer");
    console.log(action.type);
    switch (action.type) {
        case actionTypesMapping.CATCH:
            return catchAction(state, action);
            break;
        case actionTypesMapping.DOG:
            state.ifDog = true;
            state.log.push(__assign({}, logDefault, { text: ">> 你使用道具！！！獲得了...一隻小狗", color: 'primary' }));
            state.log.push(__assign({}, logDefault, { end: true }));
            return __assign({}, state);
            break;
        case actionTypesMapping.RESET:
            state.ifPlaying = true;
            return randomArrayActive(JSON.parse(JSON.stringify(initialState)), null);
            break;
        default:
            return state;
    }
};
export var initStore = function (data) {
    if (data === void 0) { data = initialState; }
    return createStore(reducer, data, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
//# sourceMappingURL=redux-store.js.map