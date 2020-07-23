import Vue from 'vue'
import Antd from 'ant-design-vue/lib'
import { 
	Layout, Row, Col,
	Steps,
	Button, Icon, Checkbox, Input,
	Upload,
} from 'ant-design-vue';

[
	Antd, 
	Layout, Row, Col,
	Steps,
	Button, Icon, Checkbox, Input,
	Upload,
].forEach(element => {
	Vue.use(element);
});
