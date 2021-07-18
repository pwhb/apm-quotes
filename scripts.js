const quotes = ["ကျေးဇူးပြု၍ ဖင်ကိုင်ခွင့်ပေးပါလား",
    "I'm not the only one who said this kind of weird stuffs. fuck u",

    "gym ဆော့ပြီး thot တွေကို လက်စားချေမယ်‌ဗျာ",

    "anime profile တင်ထားတဲ့သူတွေကြည့်လိုက် ငပေါ တဏှာကောင်တွေချည်းပဲ 2Dကာတွန်းမတွေကိုမှန်းနေတဲ့ကောင်တွေ ဆေးမမှီတော့ဘူး မိဘတွေအနေနဲ့ သင့်ကလေးအာနီမဲကြည့်နေပြီဆိုတခါထဲ ကျင်းတူးပြီးအရှင်လတ်လတ်မြေမြှုပ်လိုက်",

    "exo fan တွေထက် ထန်တယ် \n ယီးပါတဲ့ဆော်ပါမချန်ဘူး",

    "ငတ်လို့ဖင်ခံခိုင်းတာက liberal တွေ \n ဘာလာလာဖင်ပဲခံခိုင်း‌နေတာကတော့ မိန်းကလေးတွေပဲ",

    "မိန်းကလေးအချင်းချင်း bodyshaming တွေဘာတွေ မလုပ်သင့်ပါဘူး \n ရုပ်ပဲချောချော ရုပ်ပဲဆိုးဆိုး \n အားလုံး ပိန်းတာတော့တူတယ်မလား",

    "ငယ်ငယ်ကအိမ်မက်က Ben 10 လက်ပက်ရဖို့ပဲ \n More like to become ben 10 and fuck gwen",

    "စက်ခေါင်းတွဲ‌အနေနဲ့ မိမိကို privatize လုပ်ပြီး ကျွန်ပြုထားတဲ့ ပိုင်ရှင်ကိုတော်လှန်ဖို့လိုနေပြီ",

    "တောသားဆိုတာမရှိဘူး \n you're just constantly hating people for being poor",

    "ပိုင်တံခွန်ကသူဖင်ခံတဲ့အကြောင်းတွေအသံဖိုင်ထဲမှာပြောနေတာ",

    "အခြောက်ဖြစ်တာနဲ့ attention လိုချင်တာဆက်စပ်မှုရှိလောက်တယ်",

    "My job here is done  .But the 'here ' is an abstraction out of the plurality of heres.",

    "ဘယ်သူ့ဖင်လဲ \n ဖင်အားလုံးက 'မင်းဖင်' ပဲ",

    "မှားတယ်လို့ဝန်မခံရင်နေ့တိုင်းစာအရှည်ကြီးတွေပို့မယ် ငါရေးထားတာတော့မဟုတ်ဘူး",

    "ဘုန်းထက်နောင်ကလာပြုံးပြနေတယ် \n စောက်ခွက်ရိုက်ပေးလိုက်ဦးမဟ်",

    "ဖုန်းသီရိကျော်ပြီးရင် နောက်ထပ် YU ကနေနာမည်ကြီးမှာချောချောများလား ငါခန့်မှန်းနေပါပြီ",

    "Evangayion is the most valuable thing the Otaku culture gave to me.I don't watch hentai anymore,I have abandoned masturbation and embraced intellectuality.Now my sexuality is in the condition of pure fluidity.",

    "Plot twist  I'll have boyfriend ဒီနေ့တောင် ကောင်မလေးတွေအိမ်ခေါ်တာ မသွားဘူး 😌",

    "Very sublime \n :You masturbate but why ? ",

    "The-name-of-the-father: Bo Choke Aung San \n me: 😍Choke me daddy 💦💦",

    "Pussy is cute but I'm way more cuter"];


const buttons = ["သိပြီ သိပြီ", "လီး", "ဟုတ်ပြီ၊ ဟုတ်ပြီ၊ ဟုတ်ပြီ", "ktv က ဆော်ကြီးက စားတယ်ဗျာ", "သုံးသပ်ပေးမယ်"]


document.addEventListener("DOMContentLoaded", function () {
    load_quote();
})

function load_quote() {
    const random_quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector("#quote").innerHTML = random_quote;
    const random_button = buttons[Math.floor(Math.random() * buttons.length)];
    document.querySelector("#button_frame").innerHTML =  `<button id="button">${random_button}</button>`;
    document.querySelector("#button").onclick = load_quote
}
