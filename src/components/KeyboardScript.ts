import { Engine3D, ComponentBase, KeyEvent, KeyCode } from '@orillusion/core'

export default class KeyboardScript extends ComponentBase {
  private setup = 0.1
  private front: boolean = false
  private back: boolean = false
  private left: boolean = false
  private right: boolean = false
  private q: boolean = false
  private e: boolean = false

  public start () {
    Engine3D.inputSystem.addEventListener(KeyEvent.KEY_UP, this.keyUp, this)
    Engine3D.inputSystem.addEventListener(KeyEvent.KEY_DOWN, this.keyDown, this)
  }

  private keyDown (e: KeyEvent) {
    if (e.keyCode === KeyCode.Key_W) {
      this.front = true
    } else if (e.keyCode === KeyCode.Key_S) {
      this.back = true
    } else if (e.keyCode === KeyCode.Key_A) {
      this.left = true
    } else if (e.keyCode === KeyCode.Key_D) {
      this.right = true
    } else if (e.keyCode === KeyCode.Key_Q) {
      this.q = true
    } else if (e.keyCode === KeyCode.Key_E) {
      this.e = true
    }
  }

  private keyUp (e: KeyEvent) {
    const transform = this.object3D.transform
    if (e.keyCode === KeyCode.Key_W) {
      this.front = false
    } else if (e.keyCode === KeyCode.Key_S) {
      this.back = false
    } else if (e.keyCode === KeyCode.Key_A) {
      this.left = false
    } else if (e.keyCode === KeyCode.Key_D) {
      this.right = false
    } else if (e.keyCode === KeyCode.Key_Q) {
      this.q = false
    } else if (e.keyCode === KeyCode.Key_E) {
      this.e = false
    } else {
      transform.x = 0
      transform.y = 0
      transform.z = 0
      transform.rotationX = 0
    }
  }

  public onUpdate () {
    if (!this.enable) return
    const transform = this.object3D.transform
    if (this.front) {
      transform.z -= this.setup
    }
    if (this.back) {
      transform.z += this.setup
    }
    if (this.left) {
      transform.x -= this.setup
    }
    if (this.right) {
      transform.x += this.setup
    }
    // if (this.q) transform.rotationX -= 5
    // if (this.e) transform.rotationX += 5
  }
}
