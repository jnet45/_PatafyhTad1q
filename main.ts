input.onGesture(Gesture.TiltLeft, function () {
    主角.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.A, function () {
    子彈 = game.createSprite(主角.get(LedSpriteProperty.X), 主角.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        子彈.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
        if (子彈.isTouching(敵機)) {
            子彈.delete()
            敵機.delete()
            basic.pause(500)
            敵機 = game.createSprite(0, 0)
        }
    }
    子彈.delete()
})
input.onGesture(Gesture.TiltRight, function () {
    主角.change(LedSpriteProperty.X, 1)
})
let 子彈: game.LedSprite = null
let 主角: game.LedSprite = null
let 敵機: game.LedSprite = null
敵機 = game.createSprite(0, 0)
主角 = game.createSprite(2, 4)
basic.pause(500)
basic.forever(function () {
    if (主角.isTouching(敵機)) {
        game.gameOver()
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        敵機.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    }
    敵機.change(LedSpriteProperty.Y, 1)
    敵機.set(LedSpriteProperty.X, 0)
    basic.pause(500)
})
