<template>
  <div class="home-page">
    <!-- <canvas id="space-wrap"></canvas> -->
  </div>
</template>

<script setup lang="tsx">
import { onMounted } from 'vue'
import { Engine3D, Scene3D, Object3D, Camera3D, AtmosphericComponent, DirectLight, BoxGeometry, PlaneGeometry, MeshRenderer, LitMaterial, View3D, Vector3 } from '@orillusion/core'
import { Stats } from '@orillusion/stats'
import KeyboardScript from '@/components/KeyboardScript'
// import MouseController from '@/components/MouseController'

const config = () => {
  // 引擎启动前需要配置开启拾取和拾取类型
  Engine3D.setting.pick.enable = true
  Engine3D.setting.pick.mode = 'pixel' // Bound: 包围盒拾取, pixel: 帧缓冲区拾取
  Engine3D.setting.shadow.enable = true // 开启阴影
  Engine3D.setting.shadow.type = 'SOFT' // 软阴影类型
  Engine3D.setting.shadow.shadowSize = 2048 // 阴影贴图大小
  Engine3D.setting.shadow.shadowBound = 20 // 阴影区域的世界尺寸
}

const init = async () => {
  config()

  await Engine3D.init()
  const scene3D = new Scene3D()

  const cameraObj = new Object3D()

  const camera = cameraObj.addComponent(Camera3D)

  const light = new Object3D()
  // 添加直接光组件
  const directLight = light.addComponent(DirectLight)

  // 网格渲染器
  const mesh = new Object3D()

  // 创建View3D对象
  const view = new View3D()

  // 添加大气散射天空组件
  const sky = scene3D.addComponent(AtmosphericComponent)

  // 根据窗口大小设置摄像机视角
  camera.perspective(60, Engine3D.aspect, 1, 5000.0)
  camera.lookAt(new Vector3(0, 0, 30), new Vector3(0, 0, 0))

  // 加载控制器组件
  // cameraObj.addComponent(MouseController)

  // 添加相机节点
  scene3D.addChild(cameraObj)
  sky.relativeTransform = directLight.transform

  // 调整光照参数
  light.rotationX = 46
  light.rotationY = 62
  light.rotationZ = 0
  // 添加光照对象
  scene3D.addChild(light)

  // 为对象添 MeshRenderer
  const mr = mesh.addComponent(MeshRenderer)
  // 设置几何体
  mr.geometry = new BoxGeometry(5, 5, 5)
  // 设置材质
  mr.material = new LitMaterial()

  mesh.addComponent(KeyboardScript)

  const mesh2 = new Object3D()
  const mr2 = mesh2.addComponent(MeshRenderer)
  mr2.geometry = new PlaneGeometry(100, 100, 1, 1)
  scene3D.addChild(mesh2)

  scene3D.addChild(mesh)
  scene3D.addComponent(Stats)
  // 指定渲染的场景
  view.scene = scene3D
  // 指定使用的相机
  view.camera = camera
  // 开始渲染
  Engine3D.startRenderView(view)
}

onMounted(() => {
  init()
})

</script>
