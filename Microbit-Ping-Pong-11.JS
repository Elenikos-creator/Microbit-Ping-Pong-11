function cpu_moves () {
    cpu_plrL.set(LedSpriteProperty.X, bool.get(LedSpriteProperty.X) - 1)
    cpu_plrroute.set(LedSpriteProperty.X, bool.get(LedSpriteProperty.X))
    cpu_plrR.set(LedSpriteProperty.X, bool.get(LedSpriteProperty.X) + 0)
}
input.onButtonPressed(Button.A, function () {
    real_plrroute.turn(Direction.Left, 180)
    real_plrL.turn(Direction.Left, 180)
    real_plrR.turn(Direction.Left, 180)
    real_plrroute.move(1)
    real_plrL.move(1)
    real_plrR.move(1)
    real_plrroute.turn(Direction.Right, 180)
    real_plrL.turn(Direction.Right, 180)
    real_plrR.turn(Direction.Right, 180)
})
input.onButtonPressed(Button.B, function () {
    real_plrroute.turn(Direction.Right, 0)
    real_plrL.turn(Direction.Right, 0)
    real_plrR.turn(Direction.Right, 0)
    real_plrroute.move(1)
    real_plrL.move(1)
    real_plrR.move(1)
    real_plrroute.turn(Direction.Left, 0)
    real_plrL.turn(Direction.Left, 0)
    real_plrR.turn(Direction.Left, 0)
})
let score = 0
let fails = 0
let bool: game.LedSprite = null
let cpu_plrR: game.LedSprite = null
let cpu_plrL: game.LedSprite = null
let cpu_plrroute: game.LedSprite = null
let real_plrR: game.LedSprite = null
let real_plrL: game.LedSprite = null
let real_plrroute: game.LedSprite = null
real_plrroute = game.createSprite(2, 4)
real_plrL = game.createSprite(1, 4)
real_plrR = game.createSprite(3, 4)
cpu_plrroute = game.createSprite(2, 0)
cpu_plrL = game.createSprite(1, 0)
cpu_plrR = game.createSprite(3, 0)
bool = game.createSprite(2, 2)
bool.turn(Direction.Right, -90)
basic.forever(function () {
    bool.move(1)
    bool.ifOnEdgeBounce()
    basic.pause(200)
    cpu_moves()
    if (bool.get(LedSpriteProperty.X) == 4) {
        fails += 1
    }
    if (fails == 10) {
        game.setScore(score)
        game.gameOver()
    }
    if (bool.isTouching(real_plrL)) {
        bool.turn(Direction.Left, 45)
        bool.ifOnEdgeBounce()
        score += 1
    }
    if (bool.isTouching(cpu_plrroute)) {
        bool.ifOnEdgeBounce()
        score += 1
    }
    if (bool.isTouching(cpu_plrR)) {
        bool.turn(Direction.Right, 45)
        bool.ifOnEdgeBounce()
        score += 1
    }
})
