/**
 * רובי — בלוקים בעברית: מודול "בלוקים" (craftOm)
 *
 * עוטף את פעולות blocks.* המקוריות. בורר הבלוק (גריד) ובורר המיקום
 * מגיעים מהליבה דרך %name=minecraftBlock ו-%name=minecraftCreatePosition.
 */

//% weight=95 color="#8854d0" icon=""
//% block="בלוקים"
namespace robiWorldBlocks {
    /**
     * הנח בלוק במיקום נתון
     */
    //% block="%pos=minecraftCreatePosition במיקום %block=minecraftBlock הנח"
    //% block.shadow=minecraftBlock
    //% pos.shadow=minecraftCreatePosition
    //% weight=100
    export function place(block: number, pos: Position): void {
        blocks.place(block, pos)
    }

    /**
     * מלא נפח בין שני מיקומים בבלוק נתון
     */
    //% block="%to=minecraftCreatePosition עד %from=minecraftCreatePosition מ %block=minecraftBlock מלא ב"
    //% block.shadow=minecraftBlock
    //% from.shadow=minecraftCreatePosition
    //% to.shadow=minecraftCreatePosition
    //% inlineInputMode="external"
    //% weight=90
    export function fill(block: number, from: Position, to: Position): void {
        blocks.fill(block, from, to)
    }

    /**
     * החלף בלוק אחד באחר בתוך נפח נתון
     */
    //% block="%to=minecraftCreatePosition עד %from=minecraftCreatePosition מ %oldblock=minecraftBlock כאשר הבלוק הוא %newblock=minecraftBlock החלף ל"
    //% newblock.shadow=minecraftBlock
    //% oldblock.shadow=minecraftBlock
    //% from.shadow=minecraftCreatePosition
    //% to.shadow=minecraftCreatePosition
    //% inlineInputMode="external"
    //% weight=80
    export function replace(newblock: number, oldblock: number, from: Position, to: Position): void {
        blocks.replace(newblock, oldblock, from, to)
    }

    /**
     * בדוק אם קיים בלוק מסוים במיקום נתון (אמת / שקר)
     */
    //% block="%pos=minecraftCreatePosition במיקום %block=minecraftBlock קיים"
    //% block.shadow=minecraftBlock
    //% pos.shadow=minecraftCreatePosition
    //% weight=70
    export function testForBlock(block: number, pos: Position): boolean {
        return blocks.testForBlock(block, pos)
    }

    /**
     * הרץ קוד כאשר מניחים בלוק מסוג נתון
     */
    //% block="%block=minecraftBlock כאשר מניחים"
    //% block.shadow=minecraftBlock
    //% weight=60
    export function onBlockPlaced(block: number, handler: () => void): void {
        blocks.onBlockPlaced(block, handler)
    }

    /**
     * הרץ קוד כאשר שוברים בלוק מסוג נתון
     */
    //% block="%block=minecraftBlock כאשר שוברים"
    //% block.shadow=minecraftBlock
    //% weight=50
    export function onBlockBroken(block: number, handler: () => void): void {
        blocks.onBlockBroken(block, handler)
    }
}
