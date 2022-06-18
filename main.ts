controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Directions = 12
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (object_sword == 1) {
        attack = 1
        pause(500)
        attack = 0
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Directions = 9
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (Hero.overlapsWith(Chest01)) {
        Hero.sayText("You received a Pickaxe", 1000, false)
        tiles.setTileAt(location, assets.tile`transparency16`)
        Chest01.setImage(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `)
        object_pickaxe = 1
    }
    if (Hero.overlapsWith(Chest02)) {
        Hero.sayText("You received a Sword", 1000, false)
        tiles.setTileAt(location, assets.tile`transparency16`)
        Chest02.setImage(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `)
        object_sword = 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Directions = 3
})
function Setup () {
    Chest01 = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Chest01, tiles.getTileLocation(8, 1))
    Chest02 = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Chest02, tiles.getTileLocation(8, 9))
    Stairs02 = sprites.create(assets.image`myImage`, SpriteKind.Food)
    tiles.placeOnTile(Stairs02, tiles.getTileLocation(1, 14))
    Ghost01 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Ghost01, tiles.getTileLocation(5, 12))
    Ghost01.follow(Hero, 20)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Directions = 6
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight3, function (sprite, location) {
    if (object_pickaxe == 0) {
        Hero.sayText("You need a pickaxe to break the tile!", 1000, false)
    } else {
        Hero.sayText("You found a secret Passage!", 1000, false)
        tiles.setTileAt(location, sprites.dungeon.stairLarge)
        Stairs01 = sprites.create(assets.image`myImage`, SpriteKind.Food)
        tiles.placeOnTile(Stairs01, tiles.getTileLocation(8, 6))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    if (sprite.overlapsWith(Stairs01)) {
        tiles.placeOnTile(sprite, tiles.getTileLocation(2, 14))
    }
    if (sprite.overlapsWith(Stairs02)) {
        tiles.placeOnTile(sprite, tiles.getTileLocation(7, 6))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (attack == 1) {
        otherSprite.destroy()
    } else {
        info.changeLifeBy(-1)
        tiles.placeOnTile(Hero, tiles.getTileLocation(4, 3))
    }
})
let Stairs01: Sprite = null
let Ghost01: Sprite = null
let Stairs02: Sprite = null
let Chest02: Sprite = null
let Chest01: Sprite = null
let attack = 0
let Directions = 0
let object_sword = 0
let object_pickaxe = 0
let Hero: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Hero, 100, 100)
scene.cameraFollowSprite(Hero)
Setup()
Hero.z = 10
object_pickaxe = 0
object_sword = 0
game.onUpdate(function () {
    if (attack == 0) {
        if (Directions == 12) {
            Hero.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `)
        }
        if (Directions == 6) {
            Hero.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `)
        }
        if (Directions == 3) {
            Hero.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . 4 d d e 4 4 4 e f . . . 
                . . . . e d d e 2 2 2 2 f . . . 
                . . . . f e e f 4 4 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `)
        }
        if (Directions == 9) {
            Hero.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d e e e e e f . . . 
                . . . f e 4 e d d 4 f . . . . . 
                . . . f 2 2 e d d e f . . . . . 
                . . f f 5 5 f e e f f f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `)
        }
    }
    if (attack == 1) {
        if (Directions == 12) {
            Hero.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `)
        }
        if (Directions == 6) {
            Hero.setImage(img`
                ........................
                ........................
                .......ff...............
                .....ff22ff.............
                ...fff2222fff...........
                ..fff222222fff..........
                ..fff222222fff..........
                ..feeeeeeeeeeff.........
                .ffe22222222eff.........
                .fffffeeeefffff.........
                fdfefbf44fbfeff.........
                fbfe41fddf14ef..........
                fbffe4dddd4efe..........
                fcfef22222f4e...........
                .ff4f44554f4e...........
                ....ffffffdde...........
                .....ffffedde...........
                ..........ee............
                .........ccc............
                ........cc1cc...........
                .........c1c............
                .........c1c............
                .........c1c............
                .........c1c............
                `)
        }
        if (Directions == 3) {
            Hero.setImage(img`
                ........................
                .......fff..............
                ....fffff2f.............
                ..ffeeeee22ff...........
                .ffeeeeee222ff..........
                .feeeefffeeeef..........
                .fffffeee2222ef.........
                fffe222fffffe2f.........
                fffffffffeeefff.....cc..
                fefe44ebbf44eef...ccdc..
                .fee4d4bbfddef..ccddcc..
                ..feee4dddddfeecdddc....
                ...f2222222eeddcdcc.....
                ...f444445e44ddccc......
                ...ffffffffeeee.........
                ...fff...ff.............
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `)
        }
        if (Directions == 9) {
            Hero.setImage(img`
                ...............ff.......
                .............ff2ffff....
                ............ff2feeeeff..
                ...........ff22feeeeeff.
                ...........feeeeffeeeef.
                ..........fe2222eefffff.
                ..........f2effff222efff
                ..........fffeeeffffffff
                ..........fee44fbe44efef
                ...........feddfb4d4eef.
                ..........c.eeddd4eeef..
                ....ccccccceddee2222f...
                .....dddddcedd44e444f...
                ......ccccc.eeeefffff...
                ..........c...ffffffff..
                ...............ff..fff..
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `)
        }
    }
})
