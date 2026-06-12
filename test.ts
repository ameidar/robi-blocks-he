// בדיקה בסיסית — וידוא שהבלוקים מתקמפלים ונקראים נכון.
robiAgent.move(RobiDir.Forward, 3)
robiAgent.turn(RobiTurn.Right)
robiAgent.place(RobiDir.Down)
robiAgent.destroy(RobiDir.Forward)
robiAgent.collectAll()
robiAgent.setSlot(1)
if (robiAgent.detect(RobiDetect.Block, RobiDir.Forward)) {
    robiAgent.teleportToPlayer()
}
