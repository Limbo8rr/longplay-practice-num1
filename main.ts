enum ActionKind {
    Walking,
    Idle,
    Jumping,
    spinning
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (girl == true) {
        animation.runImageAnimation(
        mySpritehead,
        assets.animation`girl animation`,
        250,
        false
        )
        animation.runImageAnimation(
        mySpritehead,
        assets.animation`girl animation`,
        250,
        false
        )
    } else {
        if (boyAnimVersion) {
            animation.runImageAnimation(
            mySpritehead,
            assets.animation`boy animation1`,
            250,
            false
            )
        } else {
            animation.runImageAnimation(
            mySpritehead,
            assets.animation`boy animation2`,
            250,
            false
            )
        }
        boyAnimVersion = !(boyAnimVersion)
    }
})
let boyAnimVersion = false
let mySpritefeet: Sprite = null
let mySpritehead: Sprite = null
let girl = false
scene.setBackgroundColor(7)
game.splash("girls and boys actions and thoughts are different")
game.showLongText("example: girls can use magic, boys can't but are better with a physical attack. girls's regular attack does little damage but before you can cast spells you have to learn them. learn spells by leveling up then press B, when pressing B, you will get 2 options, menu and magic, magic list the magic you know so you can use them. menu opensthe menu where you can use items, change equipment, and learn about the magic you know, and show this guide. use A to use a normal attack.and that is all this guide possesses.", DialogLayout.Full)
if (game.ask("girl", "boy")) {
    girl = true
    info.setLife(110)
    mySpritehead = sprites.create(assets.image`girl Head`, SpriteKind.Player)
    mySpritefeet = sprites.create(assets.image`girlBottom`, SpriteKind.Player)
} else {
    girl = false
    info.setLife(160)
    mySpritehead = sprites.create(assets.image`boy`, SpriteKind.Player)
}
mySpritehead.setFlag(SpriteFlag.GhostThroughWalls, true)
tiles.setTilemap(tilemap`world1`)
controller.moveSprite(mySpritefeet)
scene.cameraFollowSprite(mySpritefeet)
boyAnimVersion = false
game.onUpdate(function () {
    mySpritehead.bottom = mySpritefeet.top
    mySpritehead.x = mySpritefeet.x
})
