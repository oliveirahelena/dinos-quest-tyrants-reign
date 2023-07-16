namespace SpriteKind {
    export const Timer = SpriteKind.create()
    export const Sword = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(isAttacking)) {
        isAttacking = true
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
            isAttacking = false
        })
    }
})
let isAttacking = false
let Dino: Sprite = null
tiles.setTilemap(tilemap`level1`)
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
game.onUpdate(function () {
    if (characterAnimations.matchesRule(Dino, characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)) && !(isAttacking)) {
        Dino.setImage(assets.image`Dino-down-side`)
    } else if (characterAnimations.matchesRule(Dino, characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)) && !(isAttacking)) {
        Dino.setImage(assets.image`Dino-down-side0`)
    } else if (characterAnimations.matchesRule(Dino, characterAnimations.rule(Predicate.NotMoving, Predicate.FacingUp)) && !(isAttacking)) {
        Dino.setImage(assets.image`Dino-down-back`)
    } else if (characterAnimations.matchesRule(Dino, characterAnimations.rule(Predicate.NotMoving, Predicate.FacingDown)) && !(isAttacking)) {
        Dino.setImage(assets.image`Dino-down`)
    }
})
