
import {compact, forEach} from 'lodash'
export const 判断当前格式是否是JSON = (原始数据: any) => {
    return Object.prototype.toString.call(原始数据) === '[object Object]'
}
export const 树格式转换平铺格式 = ({原始数据, 自定义格式转换方法, 子级字段 = "children", 数据转换字段}: {
    原始数据: any[]
    自定义格式转换方法?: (arg: any) => any
    数据转换字段?: Record<string, string>
    子级字段?: string
}) => {
    const 新数组: any = []
    const 递归遍历 = (数据: any[]) => {
        数据.forEach(每项数据 => {
            if (数据转换字段 && 判断当前格式是否是JSON(数据转换字段)) {
                forEach(数据转换字段, (value, key) => {
                    每项数据[key] = 每项数据[value]
                })
            }
            const 新数据 = 自定义格式转换方法 ? 自定义格式转换方法?.(每项数据) : 每项数据
            新数组.push(新数据)
            if (每项数据[子级字段]) {
                递归遍历(每项数据[子级字段])
            }
        })
    }
    递归遍历(原始数据)

    return compact(新数组)
}
