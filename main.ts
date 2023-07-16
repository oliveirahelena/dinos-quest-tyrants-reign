namespace SpriteKind {
    export const Timer = SpriteKind.create()
    export const Sword = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(sprites.readDataBoolean(Dino, "isAttacking"))) {
        sprites.setDataBoolean(Dino, "isAttacking", true)
        if (characterAnimations.matchesRule(Dino, characterAnimations.rule(Predicate.FacingRight))) {
            animation.runImageAnimation(
            Dino,
            assets.animation`luta-right`,
            200,
            false
            )
        } else if (characterAnimations.matchesRule(Dino, characterAnimations.rule(Predicate.FacingLeft))) {
            animation.runImageAnimation(
            Dino,
            assets.animation`luta-right0`,
            200,
            false
            )
        } else if (characterAnimations.matchesRule(Dino, characterAnimations.rule(Predicate.FacingUp))) {
            animation.runImageAnimation(
            Dino,
            assets.animation`back-luta`,
            200,
            false
            )
        } else if (characterAnimations.matchesRule(Dino, characterAnimations.rule(Predicate.FacingDown))) {
            animation.runImageAnimation(
            Dino,
            assets.animation`rabo-luta`,
            200,
            false
            )
        }
        characterAnimations.setCharacterAnimationsEnabled(Dino, false)
        timer.after(800, function () {
            characterAnimations.setCharacterAnimationsEnabled(Dino, true)
            sprites.setDataBoolean(Dino, "isAttacking", false)
        })
    }
})
let Dino: Sprite = null
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level2`))
Dino = sprites.create(assets.image`Dino-down`, SpriteKind.Player)
controller.moveSprite(Dino, 50, 50)
scene.cameraFollowSprite(Dino)
characterAnimations.loopFrames(
Dino,
assets.animation`walk-dino-right`,
200,
characterAnimations.rule(Predicate.FacingRight, Predicate.Moving)
)
characterAnimations.loopFrames(
Dino,
assets.animation`walk-dino-left`,
200,
characterAnimations.rule(Predicate.FacingLeft, Predicate.Moving)
)
characterAnimations.loopFrames(
Dino,
assets.animation`walk-dino-back`,
200,
characterAnimations.rule(Predicate.FacingUp, Predicate.Moving)
)
characterAnimations.loopFrames(
Dino,
assets.animation`walk-dino-front`,
200,
characterAnimations.rule(Predicate.FacingDown, Predicate.Moving)
)
let Tyrant = sprites.create(assets.image`tyrant-front`, SpriteKind.Boss)
characterAnimations.loopFrames(
Tyrant,
assets.animation`tyrant-walk-right`,
200,
characterAnimations.rule(Predicate.FacingRight, Predicate.Moving)
)
characterAnimations.loopFrames(
Tyrant,
assets.animation`tyrant-walk-left`,
200,
characterAnimations.rule(Predicate.FacingLeft, Predicate.Moving)
)
characterAnimations.loopFrames(
Tyrant,
assets.animation`walk-dino-back`,
200,
characterAnimations.rule(Predicate.FacingUp, Predicate.Moving)
)
characterAnimations.loopFrames(
Tyrant,
assets.animation`tyrant-walk-front`,
200,
characterAnimations.rule(Predicate.FacingDown, Predicate.Moving)
)
Tyrant.setBounceOnWall(true)
Tyrant.setVelocity(50, 0)
game.onUpdate(function () {
    if (characterAnimations.matchesRule(Dino, characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)) && !(sprites.readDataBoolean(Dino, "isAttacking"))) {
        Dino.setImage(assets.image`Dino-down-side`)
    } else if (characterAnimations.matchesRule(Dino, characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)) && !(sprites.readDataBoolean(Dino, "isAttacking"))) {
        Dino.setImage(assets.image`Dino-down-side0`)
    } else if (characterAnimations.matchesRule(Dino, characterAnimations.rule(Predicate.NotMoving, Predicate.FacingUp)) && !(sprites.readDataBoolean(Dino, "isAttacking"))) {
        Dino.setImage(assets.image`Dino-down-back`)
    } else if (characterAnimations.matchesRule(Dino, characterAnimations.rule(Predicate.NotMoving, Predicate.FacingDown)) && !(sprites.readDataBoolean(Dino, "isAttacking"))) {
        Dino.setImage(assets.image`Dino-down`)
    }
})
game.onUpdateInterval(10000, function () {
    Tyrant.setVelocity(0, 0)
    if (characterAnimations.matchesRule(Tyrant, characterAnimations.rule(Predicate.FacingLeft))) {
        animation.runImageAnimation(
        Tyrant,
        assets.animation`tyrant-left-uivando`,
        200,
        false
        )
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    } else if (characterAnimations.matchesRule(Tyrant, characterAnimations.rule(Predicate.FacingRight))) {
        animation.runImageAnimation(
        Tyrant,
        assets.animation`tyrant-right-uivando`,
        200,
        false
        )
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    } else if (characterAnimations.matchesRule(Tyrant, characterAnimations.rule(Predicate.FacingDown))) {
        animation.runImageAnimation(
        Tyrant,
        assets.animation`tyrant-front-uivando`,
        200,
        false
        )
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    }
    characterAnimations.setCharacterAnimationsEnabled(Tyrant, false)
    timer.after(2000, function () {
        characterAnimations.setCharacterAnimationsEnabled(Tyrant, true)
        if (characterAnimations.matchesRule(Tyrant, characterAnimations.rule(Predicate.FacingLeft))) {
            Tyrant.setVelocity(-50, 0)
        } else if (characterAnimations.matchesRule(Tyrant, characterAnimations.rule(Predicate.FacingRight))) {
            Tyrant.setVelocity(50, 0)
        }
    })
})
