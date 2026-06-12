/**
 * רובי — בלוקים בעברית: מודול "מיקומים" (craftOm)
 *
 * עוטף את עוזרי המיקום של הליבה (world / pos / randpos) כדי שאפשר יהיה
 * ליצור מיקומים בעברית ולחבר אותם לבלוקים אחרים.
 */

//% weight=91 color="#69B090" icon=""
//% block="מיקומים"
namespace robiPositions {
    /**
     * מיקום בעולם: מזרח/מערב, מעלה/מטה, דרום/צפון
     */
    //% block="מיקום בעולם %x %y %z"
    //% inlineInputMode="inline"
    //% weight=100
    export function world(x: number, y: number, z: number): Position {
        return positions.createWorld(x, y, z)
    }

    /**
     * מיקום יחסי למיקום הנוכחי (~)
     */
    //% block="מיקום יחסי ~%x ~%y ~%z"
    //% inlineInputMode="inline"
    //% weight=90
    export function relative(x: number, y: number, z: number): Position {
        return positions.create(x, y, z)
    }

    /**
     * מיקום אקראי בתוך תיבה בין שני מיקומים
     */
    //% block="מיקום אקראי מ %p1=minecraftCreatePosition עד %p2=minecraftCreatePosition"
    //% p1.shadow=minecraftCreatePosition
    //% p2.shadow=minecraftCreatePosition
    //% inlineInputMode="external"
    //% weight=80
    export function random(p1: Position, p2: Position): Position {
        return positions.random(p1, p2)
    }
}
