import { ComponentBase } from '@orillusion/core'

export default class RoleCameraController extends ComponentBase {
  // 覆写 初始化
  public init () {
    // 该函数在组件被创建时调用，可以用来初始化内部的变量
    // 注意，此时组件还没有被挂载到 Object3D 上，所以无法访问 this.object3D
  }

  // 覆写 渲染开始
  public start () {
    // 该函数在组件开始渲染前被调用，
    // 此时可以访问 this.object3D, 可以用来获取节点的属性或其他组件
  }

  // 覆写 onUpdate
  public onUpdate () {
    // 每帧渲染循环调用，通常定义节点的循环逻辑
    // 例如，每一帧更新物体旋转角度
    // this.object3D.x = Math.sin(Time.time * 0.001) * 2
    // this.object3D.y = Math.cos(Time.time * 0.001) * 2
  }
}
