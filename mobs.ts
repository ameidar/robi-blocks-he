/**
 * רובי — בלוקים בעברית: מודול "יצורים" (craftOm)
 *
 * עוטף את פעולות mobs.* המקוריות. בחירת היצור והמטרה בעברית
 * דרך רשימות הבחירה RobiMob / RobiTarget.
 */

//% weight=93 color="#e67e22" icon=""
//% block="יצורים"
namespace robiMobs {
    /**
     * צור יצור במיקום נתון
     */
    //% block="צור %mob במיקום %pos=minecraftCreatePosition"
    //% pos.shadow=minecraftCreatePosition
    //% weight=100
    export function spawn(mob: RobiMob, pos: Position): void {
        mobs.spawn(robiCommon.mobNumber(mob), pos)
    }

    /**
     * חסל מטרה נבחרת
     */
    //% block="חסל את %target"
    //% weight=90
    export function kill(target: RobiTarget): void {
        mobs.kill(robiCommon.targetOf(target))
    }

    /**
     * תן פריט למטרה נבחרת
     */
    //% block="תן ל %target את %item=minecraftItem בכמות %amount"
    //% item.shadow=minecraftItem
    //% amount.defl=1 amount.min=1
    //% inlineInputMode="inline"
    //% weight=80
    export function give(target: RobiTarget, item: number, amount: number): void {
        mobs.give(robiCommon.targetOf(target), item, amount)
    }

    /**
     * הפעל אפקט על מטרה נבחרת
     */
    //% block="הפעל אפקט %effect על %target למשך %duration שניות בעוצמה %amplifier"
    //% duration.min=0 duration.max=600 duration.defl=10
    //% amplifier.min=0 amplifier.max=255 amplifier.defl=1
    //% inlineInputMode="inline"
    //% weight=70
    export function applyEffect(effect: RobiEffect, target: RobiTarget, duration: number, amplifier: number): void {
        mobs.applyEffect(robiCommon.effectOf(effect), robiCommon.targetOf(target), duration, amplifier)
    }

    /**
     * שגר מטרה נבחרת אל מיקום נתון
     */
    //% block="שגר את %target אל %pos=minecraftCreatePosition"
    //% pos.shadow=minecraftCreatePosition
    //% weight=60
    export function teleportToPosition(target: RobiTarget, pos: Position): void {
        mobs.teleportToPosition(robiCommon.targetOf(target), pos)
    }
}
