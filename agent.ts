/**
 * רובי — בלוקים בעברית ללימוד תכנות בתוך Minecraft Education (craftOm)
 *
 * מודול: סוכן (Agent). הבלוקים תואמים אחד-לאחד לבלוקי הסוכן המקוריים,
 * רק שהתווית שלהם בעברית. כל בלוק עוטף את אותה פעולת agent.* מהמקור.
 * בלוקי הליבה של MakeCode (לולאות / לוגיקה / משתנים) הם מובְנים ולא ניתנים
 * לתרגום דרך הרחבה — הם יישארו באנגלית.
 */

enum RobiDir {
    //% block="קדימה"
    Forward = 0,
    //% block="אחורה"
    Back = 1,
    //% block="שמאלה"
    Left = 2,
    //% block="ימינה"
    Right = 3,
    //% block="למעלה"
    Up = 4,
    //% block="למטה"
    Down = 5
}

enum RobiTurn {
    //% block="שמאלה"
    Left = 0,
    //% block="ימינה"
    Right = 1
}

enum RobiDetect {
    //% block="בלוק"
    Block = 0,
    //% block="אבן אדומה"
    Redstone = 1
}

enum RobiInspect {
    //% block="בלוק"
    Block = 0,
    //% block="נתונים"
    Data = 1
}

//% weight=100 color="#23a455" icon=""
//% block="סוכן רובי"
namespace robiAgent {

    function six(d: RobiDir): SixDirection {
        switch (d) {
            case RobiDir.Forward: return SixDirection.Forward
            case RobiDir.Back: return SixDirection.Back
            case RobiDir.Left: return SixDirection.Left
            case RobiDir.Right: return SixDirection.Right
            case RobiDir.Up: return SixDirection.Up
            case RobiDir.Down: return SixDirection.Down
        }
        return SixDirection.Forward
    }

    function turnOf(t: RobiTurn): TurnDirection {
        return t == RobiTurn.Left ? TurnDirection.Left : TurnDirection.Right
    }

    function detectOf(d: RobiDetect): AgentDetection {
        return d == RobiDetect.Redstone ? AgentDetection.Redstone : AgentDetection.Block
    }

    function inspectOf(i: RobiInspect): AgentInspection {
        return i == RobiInspect.Data ? AgentInspection.Data : AgentInspection.Block
    }

    /**
     * הזזת הסוכן בכיוון נתון מספר צעדים
     */
    //% block="צעדים %distance %direction הזז את הסוכן"
    //% distance.defl=1 distance.min=1
    //% weight=100
    export function move(direction: RobiDir, distance: number): void {
        agent.move(six(direction), distance)
    }

    /**
     * סיבוב הסוכן שמאלה או ימינה
     */
    //% block="%direction סובב את הסוכן"
    //% weight=99
    export function turn(direction: RobiTurn): void {
        agent.turn(turnOf(direction))
    }

    /**
     * הסוכן מניח בלוק בכיוון נתון
     */
    //% block="%direction הסוכן מניח בלוק בכיוון"
    //% weight=95
    export function place(direction: RobiDir): void {
        agent.place(six(direction))
    }

    /**
     * הסוכן הורס בלוק בכיוון נתון
     */
    //% block="%direction הסוכן הורס בלוק בכיוון"
    //% weight=94
    export function destroy(direction: RobiDir): void {
        agent.destroy(six(direction))
    }

    /**
     * הסוכן חורש אדמה בכיוון נתון
     */
    //% block="%direction הסוכן חורש אדמה בכיוון"
    //% weight=90
    export function till(direction: RobiDir): void {
        agent.till(six(direction))
    }

    /**
     * הסוכן תוקף בכיוון נתון
     */
    //% block="%direction הסוכן תוקף בכיוון"
    //% weight=89
    export function attack(direction: RobiDir): void {
        agent.attack(six(direction))
    }

    /**
     * הסוכן מבצע פעולה (interact) בכיוון נתון
     */
    //% block="%direction הסוכן מבצע פעולה בכיוון"
    //% weight=88
    export function interact(direction: RobiDir): void {
        agent.interact(six(direction))
    }

    /**
     * הסוכן אוסף פריט מסוים מהקרקע
     */
    //% block="%item הסוכן אוסף"
    //% weight=80
    export function collect(item: Block): void {
        agent.collect(item)
    }

    /**
     * הסוכן אוסף את כל הפריטים שמסביבו
     */
    //% block="הסוכן אוסף הכל"
    //% weight=79
    export function collectAll(): void {
        agent.collectAll()
    }

    /**
     * הסוכן בוחר תא מלאי פעיל
     */
    //% block="%slot הסוכן בוחר תא מלאי"
    //% slot.defl=1 slot.min=1 slot.max=27
    //% weight=70
    export function setSlot(slot: number): void {
        agent.setSlot(slot)
    }

    /**
     * הסוכן משליך פריטים מתא מסוים בכיוון נתון
     */
    //% block="%direction בכיוון %count כמות %slot הסוכן משליך מתא"
    //% slot.defl=1 count.defl=1
    //% weight=69
    export function drop(slot: number, count: number, direction: RobiDir): void {
        agent.drop(six(direction), slot, count)
    }

    /**
     * הסוכן משליך את כל הפריטים בכיוון נתון
     */
    //% block="%direction הסוכן משליך הכל בכיוון"
    //% weight=68
    export function dropAll(direction: RobiDir): void {
        agent.dropAll(six(direction))
    }

    /**
     * הסוכן מעביר פריטים בין תאי המלאי שלו
     */
    //% block="%count כמות %toSlot לתא %fromSlot הסוכן מעביר מתא"
    //% fromSlot.defl=1 toSlot.defl=2 count.defl=1
    //% weight=67
    export function transfer(fromSlot: number, toSlot: number, count: number): void {
        agent.transfer(fromSlot, toSlot, count)
    }

    /**
     * האם הסוכן מזהה משהו בכיוון נתון (אמת / שקר)
     */
    //% block="%direction בכיוון %detection הסוכן מזהה"
    //% weight=60
    export function detect(detection: RobiDetect, direction: RobiDir): boolean {
        return agent.detect(detectOf(detection), six(direction))
    }

    /**
     * הסוכן בודק מה נמצא בכיוון נתון
     */
    //% block="%direction בכיוון %inspection הסוכן בודק"
    //% weight=59
    export function inspect(inspection: RobiInspect, direction: RobiDir): number {
        return agent.inspect(inspectOf(inspection), six(direction))
    }

    /**
     * כמות הפריטים בתא מלאי של הסוכן
     */
    //% block="של הסוכן %slot כמות הפריטים בתא"
    //% slot.defl=1
    //% weight=50
    export function itemCount(slot: number): number {
        return agent.getItemCount(slot)
    }

    /**
     * כמות המקום הפנוי בתא מלאי של הסוכן
     */
    //% block="של הסוכן %slot מקום פנוי בתא"
    //% slot.defl=1
    //% weight=49
    export function itemSpace(slot: number): number {
        return agent.getItemSpace(slot)
    }

    /**
     * שיגור הסוכן אל מיקום השחקן
     */
    //% block="שגר את הסוכן אל השחקן"
    //% weight=40
    export function teleportToPlayer(): void {
        agent.teleportToPlayer()
    }
}
