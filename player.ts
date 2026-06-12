/**
 * רובי — בלוקים בעברית: מודול "שחקן" (craftOm)
 *
 * עוטף את פעולות player.* המקוריות.
 */

//% weight=94 color="#2980b9" icon=""
//% block="שחקן"
namespace robiPlayer {
    /**
     * כתוב הודעה בצ'אט של המשחק
     */
    //% block="%message אמור"
    //% message.shadow=text
    //% message.defl="שלום"
    //% weight=100
    export function say(message: string): void {
        player.say(message)
    }

    /**
     * לחש הודעה אל מטרה נבחרת
     */
    //% block="%message ההודעה %target לחש אל"
    //% message.shadow=text
    //% inlineInputMode="inline"
    //% weight=90
    export function tell(target: RobiTarget, message: string): void {
        player.tell(robiCommon.targetOf(target), message)
    }

    /**
     * שגר את השחקן אל מיקום נתון
     */
    //% block="%pos=minecraftCreatePosition שגר את השחקן אל"
    //% pos.shadow=minecraftCreatePosition
    //% weight=80
    export function teleport(pos: Position): void {
        player.teleport(pos)
    }

    /**
     * המיקום הנוכחי של השחקן
     */
    //% block="מיקום השחקן"
    //% weight=70
    export function position(): Position {
        return player.position()
    }

    /**
     * שם השחקן
     */
    //% block="שם השחקן"
    //% weight=60
    export function name(): string {
        return player.name()
    }

    /**
     * הרץ קוד כאשר כותבים מילה מסוימת בצ'אט
     */
    //% block="%command כאשר כותבים בצ'אט"
    //% command.shadow=text
    //% command.defl="לך"
    //% weight=50
    export function onChat(command: string, handler: () => void): void {
        player.onChat(command, function (n1: number, n2: number, n3: number) {
            handler()
        })
    }
}
