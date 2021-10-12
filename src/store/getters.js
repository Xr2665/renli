// 根据getters获取子模块state数据 建立state快捷访问
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device
  // token: state => state.user.token,
  // avatar: state => state.user.avatar,
  // name: state => state.user.name
}
export default getters
