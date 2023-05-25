import './grid布局.scss';

const Grid = () => {
    return <div>
        <div>
            <h1>容器属性</h1>
            <h5> display: grid;</h5>
            把盒子变成网格
            <h2>grid-template-rows grid-template-columns</h2>
            每行成N列 两个属性使用方式一样 一个设置行 一个设置列
            <h4>以下示例包括 repeat minmax fr auto-fill</h4>

            <h3>repeat()</h3>
            <div>接收两个参数
                第一个参数重复的次数
                第二个参数是重复的大小
            </div>
            <h3>auto-fill</h3>
            <div>
                不确定子元素能在父元素放多个个时使用repeat(auto-fill, 130px)自动填充
            </div>
            <h3>fr 关键字</h3>
            <div>
                与fle布局 fle:1 一样
            </div>
            <h3>minmax()</h3>
            <div>
                接收两个参数 最小值和最大值
            </div>
            <h3>auto 关键字</h3>
            <div>
                自动填充
            </div>
            <div>
                <div>示例1 grid-template-rows: 100px 100px 100px</div>
                <div>示例2 grid-template-rows: repeat(3, 1fr)</div>
                <div>示例3 grid-template-columns: repeat(2, 100px 20px 80px)</div>
                <div>示例4 grid-template-columns: repeat(auto-fill, 130px)</div>
                <div>示例5 grid-template-columns: 1fr 2fr</div>
                <div>示例6 grid-template-columns:120px 1fr 2fr</div>
                <div>示例7 grid-template-columns: 1fr 1fr minmax(100px, 1fr)</div>
            </div>

            <h2>grid-row-gap grid-column-gap grid-gap</h2>
            <h5>grid-gap 是前两种的简写</h5>
            <h5>
                grid-row-gap 设置行间距
                grid-column-gap 设置列间距
            </h5>
            <h2>grid-auto-flow</h2>
            <h5>grid-gap 是前两种的简写</h5>
            <h5>
                两个参数值 第一个参数 row|column 第二个参数dense
                默认行排列 row
                dense 的作用是尽可能的填满容器 中间不出现空格
            </h5>
            <h2>justify-items align-items place-items</h2>
            <h5>设置单元格内容的水平位置 </h5>
            <h5>place-items 是前两个简写 </h5>
            <h5>
                值 start | end | center | stretch 默认stretch
                用法与flex 一致
            </h5>
            <h2>justify-content align-content place-content</h2>
            <h5>整个内容区域在容器里面的水平位置 </h5>
            <h5>place-content 是前两个简写 </h5>
            <h5>
                值 start | end | center | stretch | space-around | space-between | space-evenly
                用法与flex 一致
            </h5>
        </div>
        <h1>子元素属性</h1>
        <h2>grid-row-start grid-row-end grid-column-start grid-column-end</h2>
        <h3>简写 grid-column: 开始位置 / 结束位置</h3>
        <h3>简写 grid-row: 开始位置 / 结束位置</h3>
        <h5>start从第几个边框线开始 end到第几个边框线结束 </h5>
        <h5>span代表跨越元素到个数 </h5>
        <h5>示例 grid-column-start: span 2 </h5>

        <h2>justify-self align-self place-self </h2>

        <h5>单元格内容的水平位置</h5>
        <h5>值 start | end | center | stretch</h5>
        <h5>place-self 前两个缩写 </h5>
        <h5>示例 grid-column-start: span 2 </h5>
    </div>
}

export default Grid