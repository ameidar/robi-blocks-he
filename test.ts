// בדיקה בסיסית — וידוא שכל הבלוקים מתקמפלים ונקראים נכון.

// סוכן
robiAgent.move(RobiDir.Forward, 3)
robiAgent.turn(RobiTurn.Right)
robiAgent.place(RobiDir.Down)
robiAgent.destroy(RobiDir.Forward)
robiAgent.collectAll()
robiAgent.setSlot(1)
if (robiAgent.detect(RobiDetect.Block, RobiDir.Forward)) {
    robiAgent.teleportToPlayer()
}

// בלוקים
robiWorldBlocks.place(Block.Stone, pos(0, 0, 1))
robiWorldBlocks.fill(Block.Grass, world(0, 0, 0), world(3, 0, 3))
robiWorldBlocks.replace(Block.Air, Block.Dirt, world(0, 0, 0), world(3, 3, 3))
if (robiWorldBlocks.testForBlock(Block.Stone, pos(0, -1, 0))) {
    robiPlayer.say("יש אבן מתחתיי")
}
robiWorldBlocks.onBlockPlaced(Block.Stone, function () {
    robiPlayer.say("הונח בלוק!")
})

// שחקן
robiPlayer.say("שלום")
robiPlayer.tell(RobiTarget.AllPlayers, "ברוכים הבאים")
robiPlayer.teleport(world(0, 100, 0))
let here = robiPlayer.position()
let who = robiPlayer.name()
robiPlayer.onChat("לך", function () {
    robiAgent.move(RobiDir.Forward, 1)
})

// יצורים
robiMobs.spawn(RobiMob.Cow, pos(0, 0, 2))
robiMobs.give(RobiTarget.NearestPlayer, Item.Diamond, 5)
robiMobs.applyEffect(RobiEffect.Speed, RobiTarget.LocalPlayer, 10, 1)
robiMobs.teleportToPosition(RobiTarget.AllEntities, world(0, 64, 0))
robiMobs.kill(RobiTarget.AllEntities)

// משחק
robiGameplay.timeSet(1000)
robiGameplay.setWeather(RobiWeather.Clear)
robiGameplay.setGameMode(RobiGameMode.Creative, RobiTarget.AllPlayers)
robiGameplay.setDifficulty(RobiDifficulty.Easy)
robiGameplay.title(RobiTarget.AllPlayers, "שלב 1", "בהצלחה")
robiGameplay.xp(10, RobiTarget.NearestPlayer)

// מיקומים
let p = robiPositions.world(10, 64, 10)
let r = robiPositions.relative(0, 1, 0)
let rnd = robiPositions.random(world(0, 0, 0), world(5, 0, 5))
