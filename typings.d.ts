

declare interface 路由类型 {
    element: JSX.Element,
    name?: string;
    path: string;
    children?: 路由类型[]
}