
function createTree(id) {
	tree = new dTree("content");

	tree.add(0, -1, "前言", "http://localhost/waibo/bible/css3/html/0/0.html");
	tree.add(0, -1, "版权声明", "http://localhost/waibo/bible/css3/html/0/0.0.html");
	tree.add(1, -1, "1 CSS基础", "http://localhost/waibo/bible/css3/html/1/1.html");
	tree.add(101, 1, "1.1 CSS简介", "http://localhost/waibo/bible/css3/html/1/1.1.1.html");
	tree.add(10101, 101, "1.1.1 认识CSS", "http://localhost/waibo/bible/css3/html/1/1.1.1.html");
	tree.add(10102, 101, "1.1.2 CSS简史", "http://localhost/waibo/bible/css3/html/1/1.1.2.html");
	tree.add(102, 1, "1.2 CSS开发环境", "http://localhost/waibo/bible/css3/html/1/1.2.1.html");
	tree.add(10201, 102, "1.2.1 编辑工具", "http://localhost/waibo/bible/css3/html/1/1.2.1.html");
	tree.add(10202, 102, "1.2.2 预览工具", "http://localhost/waibo/bible/css3/html/1/1.2.2.html");
	tree.add(103, 1, "1.3 CSS语法", "http://localhost/waibo/bible/css3/html/1/1.3.1.html");
	tree.add(10301, 103, "1.3.1 样式规则语法", "http://localhost/waibo/bible/css3/html/1/1.3.1.html");
	tree.add(10302, 103, "1.3.2 CSS注释语法", "http://localhost/waibo/bible/css3/html/1/1.3.2.html");
	tree.add(104, 1, "1.4 CSS属性的值", "http://localhost/waibo/bible/css3/html/1/1.4.1.html");
	tree.add(10401, 104, "1.4.1 数字", "http://localhost/waibo/bible/css3/html/1/1.4.1.html");
	tree.add(10402, 104, "1.4.2 长度", "http://localhost/waibo/bible/css3/html/1/1.4.2.html");
	tree.add(10403, 104, "1.4.3 百分数", "http://localhost/waibo/bible/css3/html/1/1.4.3.html");
	tree.add(10404, 104, "1.4.4 颜色", "http://localhost/waibo/bible/css3/html/1/1.4.4.html");
	tree.add(10405, 104, "1.4.5 URI", "http://localhost/waibo/bible/css3/html/1/1.4.5.html");
	tree.add(10406, 104, "1.4.6 时间", "http://localhost/waibo/bible/css3/html/1/1.4.6.html");
	tree.add(10407, 104, "1.4.7 角度", "http://localhost/waibo/bible/css3/html/1/1.4.7.html");
	tree.add(105, 1, "1.5 创建样式表", "http://localhost/waibo/bible/css3/html/1/1.5.1.html");
	tree.add(10501, 105, "1.5.1 创建外部样式表", "http://localhost/waibo/bible/css3/html/1/1.5.1.html");
	tree.add(10502, 105, "1.5.2 创建内嵌样式表", "http://localhost/waibo/bible/css3/html/1/1.5.2.html");
	tree.add(10503, 105, "1.5.3 创建内联样式表", "http://localhost/waibo/bible/css3/html/1/1.5.3.html");
	tree.add(10504, 105, "1.5.4 样式表的优先级", "http://localhost/waibo/bible/css3/html/1/1.5.4.html");
	tree.add(10505, 105, "1.5.5 样式继承与层叠", "http://localhost/waibo/bible/css3/html/1/1.5.5.html");
	tree.add(2, -1, "2 CSS选择器", "http://localhost/waibo/bible/css3/html/2/2.html");
	tree.add(201, 2, "2.1 概述", "http://localhost/waibo/bible/css3/html/2/2.1.1.html");
	tree.add(20101, 201, "2.1.1 HTML DOM", "http://localhost/waibo/bible/css3/html/2/2.1.1.html");
	tree.add(20102, 201, "2.1.2 选择器的分类", "http://localhost/waibo/bible/css3/html/2/2.1.2.html");
	tree.add(202, 2, "2.2 基本选择器", "http://localhost/waibo/bible/css3/html/2/2.2.1.html");
	tree.add(20201, 202, "2.2.1 元素选择器", "http://localhost/waibo/bible/css3/html/2/2.2.1.html");
	tree.add(20202, 202, "2.2.2 类选择器", "http://localhost/waibo/bible/css3/html/2/2.2.2.html");
	tree.add(20203, 202, "2.2.3 id选择器", "http://localhost/waibo/bible/css3/html/2/2.2.3.html");
	tree.add(20204, 202, "2.2.4 群组选择器", "http://localhost/waibo/bible/css3/html/2/2.2.4.html");
	tree.add(20205, 202, "2.2.5 通配选择器", "http://localhost/waibo/bible/css3/html/2/2.2.5.html");
	tree.add(203, 2, "2.3 关系选择器", "http://localhost/waibo/bible/css3/html/2/2.3.1.html");
	tree.add(20301, 203, "2.3.1 后代选择器", "http://localhost/waibo/bible/css3/html/2/2.3.1.html");
	tree.add(20302, 203, "2.3.2 子代选择器", "http://localhost/waibo/bible/css3/html/2/2.3.2.html");
	tree.add(20303, 203, "2.3.3 相邻同胞选择器", "http://localhost/waibo/bible/css3/html/2/2.3.3.html");
	tree.add(20304, 203, "2.3.4 同胞选择器", "http://localhost/waibo/bible/css3/html/2/2.3.4.html");
	tree.add(204, 2, "2.4 属性选择器", "http://localhost/waibo/bible/css3/html/2/2.4.html");
	tree.add(205, 2, "2.5 伪元素选择器", "http://localhost/waibo/bible/css3/html/2/2.5.html");
	tree.add(206, 2, "2.6 伪类选择器", "http://localhost/waibo/bible/css3/html/2/2.6.1.html");
	tree.add(20601, 206, "2.6.1 链接伪类选择器", "http://localhost/waibo/bible/css3/html/2/2.6.1.html");
	tree.add(20602, 206, "2.6.2 结构伪类选择器", "http://localhost/waibo/bible/css3/html/2/2.6.2.html");
	tree.add(20603, 206, "2.6.3 否定伪类选择器", "http://localhost/waibo/bible/css3/html/2/2.6.3.html");
	tree.add(20604, 206, "2.6.4 目标伪类选择器", "http://localhost/waibo/bible/css3/html/2/2.6.4.html");
	tree.add(20605, 206, "2.6.5 语言伪类选择器", "http://localhost/waibo/bible/css3/html/2/2.6.5.html");
	tree.add(20606, 206, "2.6.6 UI状态伪类选择器", "http://localhost/waibo/bible/css3/html/2/2.6.6.html");
	tree.add(3, -1, "3 字体和文本", "http://localhost/waibo/bible/css3/html/3/3.html");
	tree.add(301, 3, "3.1 字体", "http://localhost/waibo/bible/css3/html/3/3.1.1.html");
	tree.add(30101, 301, "3.1.1 字体系列", "http://localhost/waibo/bible/css3/html/3/3.1.1.html");
	tree.add(30102, 301, "3.1.2 字体大小", "http://localhost/waibo/bible/css3/html/3/3.1.2.html");
	tree.add(30103, 301, "3.1.3 字体粗细", "http://localhost/waibo/bible/css3/html/3/3.1.3.html");
	tree.add(30104, 301, "3.1.4 字体风格", "http://localhost/waibo/bible/css3/html/3/3.1.4.html");
	tree.add(30105, 301, "3.1.5 字体变形", "http://localhost/waibo/bible/css3/html/3/3.1.5.html");
	tree.add(30106, 301, "3.1.6 字体拉伸", "http://localhost/waibo/bible/css3/html/3/3.1.6.html");
	tree.add(30107, 301, "3.1.7 字体调整", "http://localhost/waibo/bible/css3/html/3/3.1.7.html");
	tree.add(30108, 301, "3.1.8 @font-face", "http://localhost/waibo/bible/css3/html/3/3.1.8.html");
	tree.add(302, 3, "3.2 文本", "http://localhost/waibo/bible/css3/html/3/3.2.1.html");
	tree.add(30201, 302, "3.2.1 文本缩进", "http://localhost/waibo/bible/css3/html/3/3.2.1.html");
	tree.add(30202, 302, "3.2.2 水平对齐", "http://localhost/waibo/bible/css3/html/3/3.2.2.html");
	tree.add(30203, 302, "3.2.3 水平对齐", "http://localhost/waibo/bible/css3/html/3/3.2.3.html");
	tree.add(30204, 302, "3.2.4 行高", "http://localhost/waibo/bible/css3/html/3/3.2.4.html");
	tree.add(30205, 302, "3.2.5 垂直对齐", "http://localhost/waibo/bible/css3/html/3/3.2.5.html");
	tree.add(30206, 302, "3.2.6 字符间距", "http://localhost/waibo/bible/css3/html/3/3.2.6.html");
	tree.add(30207, 302, "3.2.7 单词间距", "http://localhost/waibo/bible/css3/html/3/3.2.7.html");
	tree.add(30208, 302, "3.2.8 文本转换", "http://localhost/waibo/bible/css3/html/3/3.2.8.html");
	tree.add(30209, 302, "3.2.9 文本装饰", "http://localhost/waibo/bible/css3/html/3/3.2.9.html");
	tree.add(30210, 302, "3.2.10 文本阴影", "http://localhost/waibo/bible/css3/html/3/3.2.10.html");
	tree.add(30211, 302, "3.2.11 文本方向", "http://localhost/waibo/bible/css3/html/3/3.2.11.html");
	tree.add(30212, 302, "3.2.12 处理空白符", "http://localhost/waibo/bible/css3/html/3/3.2.12.html");
	tree.add(30213, 302, "3.2.13 单词折行", "http://localhost/waibo/bible/css3/html/3/3.2.13.html");
	tree.add(30214, 302, "3.2.14 单词换行", "http://localhost/waibo/bible/css3/html/3/3.2.14.html");
	tree.add(30215, 302, "3.2.15 文本溢出", "http://localhost/waibo/bible/css3/html/3/3.2.15.html");
	tree.add(30216, 302, "3.2.16 Tab宽度", "http://localhost/waibo/bible/css3/html/3/3.2.16.html");
	tree.add(4, -1, "4 盒模型", "http://localhost/waibo/bible/css3/html/4/4.html");
	tree.add(401, 4, "4.1 概述", "http://localhost/waibo/bible/css3/html/4/4.1.html");
	tree.add(402, 4, "4.2 内边距", "http://localhost/waibo/bible/css3/html/4/4.2.html");
	tree.add(403, 4, "4.3 外边距", "http://localhost/waibo/bible/css3/html/4/4.3.html");
	tree.add(404, 4, "4.4 边框", "http://localhost/waibo/bible/css3/html/4/4.4.1.html");
	tree.add(40401, 404, "4.4.1 线条边框", "http://localhost/waibo/bible/css3/html/4/4.4.1.html");
	tree.add(40402, 404, "4.4.2 图像边框", "http://localhost/waibo/bible/css3/html/4/4.4.2.html");
	tree.add(40403, 404, "4.4.3 圆角边框", "http://localhost/waibo/bible/css3/html/4/4.4.3.html");
	tree.add(40404, 404, "4.4.4 盒阴影", "http://localhost/waibo/bible/css3/html/4/4.4.4.html");
	tree.add(405, 4, "4.5 背景", "http://localhost/waibo/bible/css3/html/4/4.5.html");
	tree.add(40501, 405, "4.5.1 背景颜色", "http://localhost/waibo/bible/css3/html/4/4.5.1.html");
	tree.add(40502, 405, "4.5.2 背景图像", "http://localhost/waibo/bible/css3/html/4/4.5.2.html");
	tree.add(40503, 405, "4.5.3 背景重复", "http://localhost/waibo/bible/css3/html/4/4.5.3.html");
	tree.add(40504, 405, "4.5.4 背景位置", "http://localhost/waibo/bible/css3/html/4/4.5.4.html");
	tree.add(40505, 405, "4.5.5 背景附着", "http://localhost/waibo/bible/css3/html/4/4.5.5.html");
	tree.add(40506, 405, "4.5.6 背景尺寸", "http://localhost/waibo/bible/css3/html/4/4.5.6.html");
	tree.add(40507, 405, "4.5.7 背景起始位置", "http://localhost/waibo/bible/css3/html/4/4.5.7.html");
	tree.add(40508, 405, "4.5.8 背景裁剪区域", "http://localhost/waibo/bible/css3/html/4/4.5.8.html");
	tree.add(40509, 405, "4.5.9 多重背景", "http://localhost/waibo/bible/css3/html/4/4.5.9.html");
	tree.add(40510, 405, "4.5.10 渐变背景", "http://localhost/waibo/bible/css3/html/4/4.5.10.html");
	tree.add(406, 4, "4.6 盒尺寸", "http://localhost/waibo/bible/css3/html/4/4.6.html");
	tree.add(407, 4, "4.7 处理溢出", "http://localhost/waibo/bible/css3/html/4/4.7.html");
	tree.add(408, 4, "4.8 框的生成", "http://localhost/waibo/bible/css3/html/4/4.8.1.html");
	tree.add(40801, 408, "4.8.1 块级元素和块框", "http://localhost/waibo/bible/css3/html/4/4.8.1.html");
	tree.add(40802, 408, "4.8.2 行内级元素和行内框", "http://localhost/waibo/bible/css3/html/4/4.8.2.html");
	tree.add(40803, 408, "4.8.3 匿名文本和匿名框", "http://localhost/waibo/bible/css3/html/4/4.8.3.html");
	tree.add(40804, 408, "4.8.4 元素的display属性", "http://localhost/waibo/bible/css3/html/4/4.8.4.html");
	tree.add(409, 4, "4.9 框的外观", "http://localhost/waibo/bible/css3/html/4/4.9.1.html");
	tree.add(40901, 409, "4.9.1 轮廓样式", "http://localhost/waibo/bible/css3/html/4/4.9.1.html");
	tree.add(40902, 409, "4.9.2 自由缩放", "http://localhost/waibo/bible/css3/html/4/4.9.2.html");
	tree.add(40903, 409, "4.9.3 显示风格", "http://localhost/waibo/bible/css3/html/4/4.9.3.html");
	tree.add(40904, 409, "4.9.4 倒影效果", "http://localhost/waibo/bible/css3/html/4/4.9.4.html");
	tree.add(40905, 409, "4.9.5 鼠标样式", "http://localhost/waibo/bible/css3/html/4/4.9.5.html");
	tree.add(5, -1, "5 元素的定位", "http://localhost/waibo/bible/css3/html/5/5.html");
	tree.add(501, 5, "5.1 普通流", "http://localhost/waibo/bible/css3/html/5/5.1.1.html");
	tree.add(50101, 501, "5.1.1 行格式化上下文", "http://localhost/waibo/bible/css3/html/5/5.1.1.html");
	tree.add(50102, 501, "5.1.2 块格式化上下文", "http://localhost/waibo/bible/css3/html/5/5.1.2.html");
	tree.add(502, 5, "5.2 定位", "http://localhost/waibo/bible/css3/html/5/5.2.1.html");
	tree.add(50201, 502, "5.2.1 相对定位", "http://localhost/waibo/bible/css3/html/5/5.2.1.html");
	tree.add(50202, 502, "5.2.2 绝对定位", "http://localhost/waibo/bible/css3/html/5/5.2.2.html");
	tree.add(50203, 502, "5.2.3 z-index", "http://localhost/waibo/bible/css3/html/5/5.2.3.html");
	tree.add(503, 5, "5.3 浮动", "http://localhost/waibo/bible/css3/html/5/5.3.1.html");
	tree.add(50301, 503, "5.3.1 浮动", "http://localhost/waibo/bible/css3/html/5/5.3.1.html");
	tree.add(50302, 503, "5.3.2 清理", "http://localhost/waibo/bible/css3/html/5/5.3.2.html");
	tree.add(6, -1, "6 链接和导航", "http://localhost/waibo/bible/css3/html/6/6.html");
	tree.add(601, 6, "6.1 链接的样式", "http://localhost/waibo/bible/css3/html/6/6.1.1.html");
	tree.add(60101, 601, "6.1.1 动态超链接", "http://localhost/waibo/bible/css3/html/6/6.1.1.html");
	tree.add(60102, 601, "6.1.2 按钮式链接", "http://localhost/waibo/bible/css3/html/6/6.1.2.html");
	tree.add(602, 6, "6.2 列表的样式", "http://localhost/waibo/bible/css3/html/6/6.2.html");
	tree.add(603, 6, "6.3 创建导航", "http://localhost/waibo/bible/css3/html/6/6.3.1.html");
	tree.add(60301, 603, "6.3.1 面包屑导航", "http://localhost/waibo/bible/css3/html/6/6.3.1.html");
	tree.add(60302, 603, "6.3.2 分页导航", "http://localhost/waibo/bible/css3/html/6/6.3.2.html");
	tree.add(60303, 603, "6.3.3 垂直导航", "http://localhost/waibo/bible/css3/html/6/6.3.3.html");
	tree.add(60304, 603, "6.3.4 手风琴导航", "http://localhost/waibo/bible/css3/html/6/6.3.4.html");
	tree.add(60305, 603, "6.3.5 主导航", "http://localhost/waibo/bible/css3/html/6/6.3.5.html");
	tree.add(60306, 603, "6.3.6 下拉导航", "http://localhost/waibo/bible/css3/html/6/6.3.6.html");
	tree.add(7, -1, "7 表格和表单", "http://localhost/waibo/bible/css3/html/7/7.html");
	tree.add(701, 7, "7.1 表格", "http://localhost/waibo/bible/css3/html/7/7.1.1.html");
	tree.add(70101, 701, "7.1.1 表格特有的元素", "http://localhost/waibo/bible/css3/html/7/7.1.1.html");
	tree.add(70102, 701, "7.1.2 表格的基本布局", "http://localhost/waibo/bible/css3/html/7/7.1.2.html");
	tree.add(70103, 701, "7.1.3 表格的样式属性", "http://localhost/waibo/bible/css3/html/7/7.1.3.html");
	tree.add(702, 7, "7.2 表单", "http://localhost/waibo/bible/css3/html/7/7.2.1.html");
	tree.add(70201, 702, "7.2.1 表单元素的样式", "http://localhost/waibo/bible/css3/html/7/7.2.1.html");
	tree.add(70202, 702, "7.2.2 水平布局的表单", "http://localhost/waibo/bible/css3/html/7/7.2.2.html");
	tree.add(70203, 702, "7.2.3 垂直布局的表单", "http://localhost/waibo/bible/css3/html/7/7.2.3.html");
	tree.add(70204, 702, "7.2.4 弹出隐藏的表单", "http://localhost/waibo/bible/css3/html/7/7.2.4.html");
	tree.add(8, -1, "8 变换、过渡和动画", "http://localhost/waibo/bible/css3/html/8/8.html");
	tree.add(801, 8, "8.1 变换", "http://localhost/waibo/bible/css3/html/8/8.1.html");
	tree.add(802, 8, "8.2 过渡", "http://localhost/waibo/bible/css3/html/8/8.2.html");
	tree.add(803, 8, "8.3 动画", "http://localhost/waibo/bible/css3/html/8/8.3.1.html");
	tree.add(80301, 803, "8.3.1 关键帧", "http://localhost/waibo/bible/css3/html/8/8.3.1.html");
	tree.add(80302, 803, "8.3.2 动画", "http://localhost/waibo/bible/css3/html/8/8.3.2.html");
	tree.add(9, -1, "9 布局", "http://localhost/waibo/bible/css3/html/9/9.html");
	tree.add(901, 9, "9.1 基本布局类型", "http://localhost/waibo/bible/css3/html/9/9.1.1.html");
	tree.add(90101, 901, "9.1.1 固定布局", "http://localhost/waibo/bible/css3/html/9/9.1.1.html");
	tree.add(90102, 901, "9.1.2 流式布局", "http://localhost/waibo/bible/css3/html/9/9.1.2.html");
	tree.add(90103, 901, "9.1.3 弹性布局", "http://localhost/waibo/bible/css3/html/9/9.1.3.html");
	tree.add(902, 9, "9.2 多列布局", "http://localhost/waibo/bible/css3/html/9/9.2.1.html");
	tree.add(90201, 902, "9.2.1 多列布局", "http://localhost/waibo/bible/css3/html/9/9.2.1.html");
	tree.add(90202, 902, "9.2.2 列间隙和边框", "http://localhost/waibo/bible/css3/html/9/9.2.2.html");
	tree.add(90203, 902, "9.2.3 跨列", "http://localhost/waibo/bible/css3/html/9/9.2.3.html");
	tree.add(90204, 902, "9.2.4 列的填充方式", "http://localhost/waibo/bible/css3/html/9/9.2.4.html");
	tree.add(903, 9, "9.3 弹性布局盒模型", "http://localhost/waibo/bible/css3/html/9/9.3.1.html");
	tree.add(90301, 903, "9.3.1 弹性布局盒模型", "http://localhost/waibo/bible/css3/html/9/9.3.1.html");
	tree.add(90302, 903, "9.3.2 建立弹性盒布局", "http://localhost/waibo/bible/css3/html/9/9.3.2.html");
	tree.add(90303, 903, "9.3.3 弹性容器的属性", "http://localhost/waibo/bible/css3/html/9/9.3.3.html");
	tree.add(90304, 903, "9.3.4 弹性子元素的属性", "http://localhost/waibo/bible/css3/html/9/9.3.4.html");
	tree.add(904, 9, "9.4 响应式布局", "http://localhost/waibo/bible/css3/html/9/9.4.1.html");
	tree.add(90401, 904, "9.4.1 媒体查询", "http://localhost/waibo/bible/css3/html/9/9.4.1.html");
	tree.add(90402, 904, "9.4.2 弹性网格", "http://localhost/waibo/bible/css3/html/9/9.4.2.html");
	tree.add(90403, 904, "9.4.3 弹性图片", "http://localhost/waibo/bible/css3/html/9/9.4.3.html");
	tree.add(90404, 904, "9.4.4 兼容老IE", "http://localhost/waibo/bible/css3/html/9/9.4.4.html");
	tree.add(90405, 904, "9.4.5 布局实例", "http://localhost/waibo/bible/css3/html/9/9.4.5.html");
	tree.add(10, -1, "10 解决跨浏览器问题", "http://localhost/waibo/bible/css3/html/10/10.html");
	tree.add(1001, 10, "10.1 渐进增强与优雅降级", "http://localhost/waibo/bible/css3/html/10/10.1.html");
	tree.add(1002, 10, "10.2 兼容浏览器的方法", "http://localhost/waibo/bible/css3/html/10/10.2.1.html");
	tree.add(100201, 1002, "10.2.1 CSS Hack", "http://localhost/waibo/bible/css3/html/10/10.2.1.html");
	tree.add(100202, 1002, "10.2.2 客户端脚本", "http://localhost/waibo/bible/css3/html/10/10.2.2.html");
	tree.add(100203, 1002, "10.2.3 浏览器私有前缀", "http://localhost/waibo/bible/css3/html/10/10.2.3.html");
	tree.add(1003, 10, "10.3 IE的hasLayout", "http://localhost/waibo/bible/css3/html/10/10.3.html");
	tree.add(1004, 10, "10.4 修复IE的常见Bug", "http://localhost/waibo/bible/css3/html/10/10.4.1.html");
	tree.add(100401, 1004, "10.4.1 浮动元素双倍边距Bug", "http://localhost/waibo/bible/css3/html/10/10.4.1.html");
	tree.add(100402, 1004, "10.4.2 文本3像素偏移Bug", "http://localhost/waibo/bible/css3/html/10/10.4.2.html");
	tree.add(100403, 1004, "10.4.3 列表 li 的阶梯Bug", "http://localhost/waibo/bible/css3/html/10/10.4.3.html");
	tree.add(100404, 1004, "10.4.4 列表 li 底部空行Bug", "http://localhost/waibo/bible/css3/html/10/10.4.4.html");
	tree.add(100405, 1004, "10.4.5 相对容器中绝对定位Bug", "http://localhost/waibo/bible/css3/html/10/10.4.5.html");
	tree.add(100406, 1004, "10.4.6 相对定位子元素溢出Bug", "http://localhost/waibo/bible/css3/html/10/10.4.6.html");
	tree.add(100407, 1004, "10.4.7 IE6重复字符Bug", "http://localhost/waibo/bible/css3/html/10/10.4.7.html");
	tree.add(100408, 1004, "10.4.8 IE6躲猫猫Bug", "http://localhost/waibo/bible/css3/html/10/10.4.8.html");
	tree.add(11, -1, "11 构建网页版word", "http://localhost/waibo/bible/css3/html/11/11.html");
	tree.add(1101, 11, "11.1 布局设计", "http://localhost/waibo/bible/css3/html/11/11.1.1.html");
	tree.add(110101, 1101, "11.1.1 总体设计", "http://localhost/waibo/bible/css3/html/11/11.1.1.html");
	tree.add(110102, 1101, "11.1.2 左栏布局", "http://localhost/waibo/bible/css3/html/11/11.1.2.html");
	tree.add(110103, 1101, "11.1.3 右栏布局", "http://localhost/waibo/bible/css3/html/11/11.1.3.html");
	tree.add(110104, 1101, "11.1.4 穿上马甲", "http://localhost/waibo/bible/css3/html/11/11.1.4.html");
	tree.add(1102, 11, "11.2 目录树设计", "http://localhost/waibo/bible/css3/html/11/11.2.html");
	tree.add(1103, 11, "11.3 正文设计", "http://localhost/waibo/bible/css3/html/11/11.3.1.html");
	tree.add(110301, 1103, "11.3.1 正文设计", "http://localhost/waibo/bible/css3/html/11/11.3.1.html");
	tree.add(110302, 1103, "11.3.2 段落", "http://localhost/waibo/bible/css3/html/11/11.3.2.html");
	tree.add(110303, 1103, "11.3.3 列表", "http://localhost/waibo/bible/css3/html/11/11.3.3.html");
	tree.add(110304, 1103, "11.3.4 表格", "http://localhost/waibo/bible/css3/html/11/11.3.4.html");
	tree.add(110305, 1103, "11.3.5 超链接", "http://localhost/waibo/bible/css3/html/11/11.3.5.html");
	tree.add(110306, 1103, "11.3.6 嵌入对象", "http://localhost/waibo/bible/css3/html/11/11.3.6.html");
	tree.add(1104, 11, "11.4 交互性设计", "http://localhost/waibo/bible/css3/html/11/11.4.1.html");
	tree.add(110401, 1104, "11.4.1 交互性设计", "http://localhost/waibo/bible/css3/html/11/11.4.1.html");
	tree.add(110402, 1104, "11.4.2 文档结构视图", "http://localhost/waibo/bible/css3/html/11/11.4.2.html");
	tree.add(110403, 1104, "11.4.3 键盘翻页功能", "http://localhost/waibo/bible/css3/html/11/11.4.3.html");

	document.write(tree);
	tree.openTo(id, true);
}