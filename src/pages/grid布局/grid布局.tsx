import './grid布局.scss';

const Grid = () => {
    return <div>
        <h3>指定一个三行三列的网格，列宽和行高都是100px</h3>
        <div>
            <div className={"case-1"}>
                <div className={"item"}><p>1</p></div>
                <div className={"item"}><p>2</p></div>
                <div className={"item"}><p>3</p></div>
                <div className={"item"}><p>4</p></div>
                <div className={"item"}><p>5</p></div>
                <div className={"item"}><p>6</p></div>
                <div className={"item"}><p>7</p></div>
                <div className={"item"}><p>8</p></div>
                <div className={"item"}><p>9</p></div>
            </div>
        </div>
        <div className={"divider"}></div>
        <h3>指定一个三行三列的网格，使用repeat宽高平均分配N个</h3>
        <div>
            <div className={"case-2"}>
                <div className={"item"}><p>1</p></div>
                <div className={"item"}><p>2</p></div>
                <div className={"item"}><p>3</p></div>
                <div className={"item"}><p>4</p></div>
                <div className={"item"}><p>5</p></div>
                <div className={"item"}><p>6</p></div>
                <div className={"item"}><p>7</p></div>
                <div className={"item"}><p>8</p></div>
                <div className={"item"}><p>9</p></div>
            </div>
        </div>
        <div className={"divider"}></div>
        <h3>指定一个三行三列的网格，使用repeat 分配固定宽度</h3>
        <h5>repeat(2, 100px 20px 80px) 循环两次 每次三个宽度分别是100 20 80</h5>
        <div>
            <div className={"case-3"}>
                <div className={"item"}><p>1</p></div>
                <div className={"item"}><p>2</p></div>
                <div className={"item"}><p>3</p></div>
                <div className={"item"}><p>4</p></div>
                <div className={"item"}><p>5</p></div>
                <div className={"item"}><p>6</p></div>
                <div className={"item"}><p>7</p></div>
                <div className={"item"}><p>8</p></div>
                <div className={"item"}><p>9</p></div>
            </div>
        </div>
        <div className={"divider"}></div>
        <h3>子元素固定大小，父元素自动填充 直到父元素放不下</h3>
        <h5>repeat(auto-fill, 130px)</h5>
        <div>
            <div className={"case-4"}>
                <div className={"item"}><p>1</p></div>
                <div className={"item"}><p>2</p></div>
                <div className={"item"}><p>3</p></div>
                <div className={"item"}><p>4</p></div>

            </div>
        </div>

        <div className={"divider"}></div>
        <h3>fr 分配到份数</h3>
        <h5>示例 grid-template-columns: 1fr 2fr</h5>
        <h5>代表每行两列，总宽度分成3份，第一个占1份，第二个占2份</h5>
        <div>
            <div className={"case-5"}>
                <div className={"item"}><p>1</p></div>
                <div className={"item"}><p>2</p></div>
                <div className={"item"}><p>3</p></div>
                <div className={"item"}><p>4</p></div>
                <div className={"item"}><p>5</p></div>
                <div className={"item"}><p>6</p></div>
                <div className={"item"}><p>7</p></div>
                <div className={"item"}><p>8</p></div>
                <div className={"item"}><p>9</p></div>
            </div>
        </div>

        <div className={"divider"}></div>
        <h3>fr可以与绝对长度的单位结合使用</h3>
        <h5>示例 grid-template-columns: 150px 1fr 2fr</h5>
        <h5>代表每行三列，总宽度分成3份，第一个占150px份，第二个占剩余空间1,第三个占剩余空间2份</h5>
        <div>
            <div className={"case-6"}>
                <div className={"item"}><p>1</p></div>
                <div className={"item"}><p>2</p></div>
                <div className={"item"}><p>3</p></div>
                <div className={"item"}><p>4</p></div>
                <div className={"item"}><p>5</p></div>
                <div className={"item"}><p>6</p></div>
                <div className={"item"}><p>7</p></div>
                <div className={"item"}><p>8</p></div>
                <div className={"item"}><p>9</p></div>
            </div>
        </div>
    </div>
}

export default Grid