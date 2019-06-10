import Vue from 'vue';
import App from './app.vue';
import { install, Prototypes, Affix, Avatar, BackTop, Badge, Breadcrumb, Checkbox, Circle, Category, CategoryPicker, DatePicker, DateRangePicker, DateFullRangePicker, DropdownCustom, DropdownMenu, ImagePreview, Form, FormItem, FormItemList, Menu, Modal, ModalComponent, Pagination, Poptip, Progress, Radio, Rate, Slider, Loading, Steps, Search, Select, HSwitch, SwitchList, Skeleton, Table, TableItem, Tabs, TagInput, Tree, TreePicker, NumberInput, Tooltip, Uploader, AutoComplete, Row, Cell, HHeader, HFooter, Content, Sider, Layout, Timeline, TimelineItem, Transfer, Button, ButtonGroup, TextEllipsis, Carousel, Collapse, CollapseItem } from 'heyui';

Vue.use(install, {
  components: {
    Affix,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    Checkbox,
    Circle,
    Category,
    CategoryPicker,
    DatePicker,
    DateRangePicker,
    DateFullRangePicker,
    DropdownCustom,
    DropdownMenu,
    ImagePreview,
    Form,
    FormItem,
    FormItemList,
    Menu,
    Modal,
    ModalComponent,
    Pagination,
    Poptip,
    Progress,
    Radio,
    Rate,
    Slider,
    Loading,
    Steps,
    Search,
    Select,
    HSwitch,
    SwitchList,
    Skeleton,
    Table,
    TableItem,
    Tabs,
    TagInput,
    Tree,
    TreePicker,
    NumberInput,
    Tooltip,
    Uploader,
    AutoComplete,
    Row,
    Cell,
    HHeader,
    HFooter,
    Content,
    Sider,
    Layout,
    Timeline,
    TimelineItem,
    Transfer,
    Button,
    ButtonGroup,
    TextEllipsis,
    Carousel,
    Collapse,
    CollapseItem
  },
  prototypes: Prototypes
});

export default new Vue({
  el: '#app',
  render: h => h(App)
});