### display: grid

设置元素为grid 独占一行
如果子元素没有给宽高 默认每个高度占50px

### grid-template-rows

### grid-template-columns

### repeat()

接收两个参数
第一个参数重复的次数
第二个参数是重复的大小

### auto-fill 关键字

不确定子元素能在父元素放多个个时使用repeat(auto-fill, 130px)自动填充

### fr 关键字

示例 grid-template-columns: 1fr 2fr
代表每行两列，总宽度分成3份，第一个占1份，第二个占2份
fr可以与绝对长度的单位结合使用
示例 grid-template-columns: 150px 1fr 2fr
代表每行三列，总宽度分成3份，第一个占150px份，第二个占剩余空间1,第三个占剩余空间2份

### minmax()

接收两个参数 最小值和最大值
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
代表 第三列最小值不能低于100

### auto 关键字

示例 grid-template-columns: 100px auto 100px;
代表 第二列自动填充

### grid-row-gap grid-column-gap  grid-gap

grid-row-gap 设置行间距
grid-column-gap 设置列间距
grid-gap 是grid-column-gap和grid-row-gap的合并简写形式
grid-gap 第一个值是列的间距 第二个值是行的间距
如果只写一个值 代表行和列是一样的间距
grid-row-gap grid-column-gap grid-gap 可以简写成 row-gap column-gap gap

### grid-auto-flow

两个参数值 第一个参数 row|column 第二个参数dense     
默认行排列 row
dense 的作用是尽可能的填满容器 中间不出现空格

### justify-items  align-items place-items

设置单元格内容的水平位置

### justify-content  align-content place-content

整个内容区域在容器

### grid-row-start grid-row-end grid-column-start grid-column-end

简写 grid-column: 开始位置 / 结束位置
简写 grid-row: 开始位置 / 结束位置
start从第几个边框线开始 end到第几个边框线结束
span代表跨越元素到个数
示例 grid-column-start: span 2

### justify-self  align-self place-self

单元格内容的水平位置
值 start | end | center | stretch
place-self 前两个缩写