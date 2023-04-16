import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
// 1. 引入你需要的组件
import {
    Button, Card,
    Cell,
    CellGroup,
    Col,
    Divider, Field, Form,
    Icon,
    NavBar,
    Row,
    Search,
    Tabbar,
    TabbarItem,
    Tag,
    TreeSelect
} from 'vant';
import { Image as VanImage } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
// import './assets/main.css'

const app = createApp(App)

app.use(Card);
app.use(VanImage);
app.use(Form);
app.use(Field);
app.use(Cell);
app.use(CellGroup);
app.use(Col);
app.use(Row);
app.use(Tag);
app.use(TreeSelect);
app.use(Divider);
app.use(Search);
app.use(Icon)
app.use(Tabbar);
app.use(TabbarItem);
app.use(NavBar);

app.use(Button)
app.use(router)

app.mount('#app')
