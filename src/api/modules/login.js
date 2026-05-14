// 获取菜单列表
export const getAuthMenuListApi = () => {
    // 可从服务器请求数据,当前以假数据返回
    const data = [
        {id: 1,name:"home",path:"/home/index",component:"/home/index"}
    ]
    console.log(2, data)
    return data
}