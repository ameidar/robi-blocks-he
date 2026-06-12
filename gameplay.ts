/**
 * רובי — בלוקים בעברית: מודול "משחק" (craftOm)
 *
 * עוטף את פעולות gameplay.* המקוריות. מצב משחק / מזג אוויר / רמת קושי
 * נבחרים בעברית דרך רשימות הבחירה.
 */

//% weight=92 color="#16a085" icon=""
//% block="משחק"
namespace robiGameplay {
    /**
     * קבע את שעת היום (0=בוקר, 6000=צהריים, 13000=לילה)
     */
    //% block="קבע את הזמן ל %time"
    //% time.defl=1000 time.min=0 time.max=24000
    //% weight=100
    export function timeSet(time: number): void {
        gameplay.timeSet(time)
    }

    /**
     * קבע את מזג האוויר
     */
    //% block="קבע מזג אוויר %weather"
    //% weight=90
    export function setWeather(weather: RobiWeather): void {
        gameplay.setWeather(robiCommon.weatherOf(weather))
    }

    /**
     * קבע מצב משחק למטרה נבחרת
     */
    //% block="קבע מצב משחק %mode עבור %target"
    //% inlineInputMode="inline"
    //% weight=80
    export function setGameMode(mode: RobiGameMode, target: RobiTarget): void {
        gameplay.setGameMode(robiCommon.gameModeOf(mode), robiCommon.targetOf(target))
    }

    /**
     * קבע רמת קושי
     */
    //% block="קבע רמת קושי %difficulty"
    //% weight=70
    export function setDifficulty(difficulty: RobiDifficulty): void {
        gameplay.setDifficulty(robiCommon.difficultyOf(difficulty))
    }

    /**
     * הצג כותרת גדולה על המסך של מטרה נבחרת
     */
    //% block="הצג ל %target כותרת %title וכותרת משנה %subTitle"
    //% title.shadow=text subTitle.shadow=text
    //% inlineInputMode="inline"
    //% weight=60
    export function title(target: RobiTarget, title: string, subTitle: string): void {
        gameplay.title(robiCommon.targetOf(target), title, subTitle)
    }

    /**
     * הענק נקודות ניסיון (XP) למטרה נבחרת
     */
    //% block="הענק %amount נקודות ניסיון ל %target"
    //% amount.defl=1
    //% inlineInputMode="inline"
    //% weight=50
    export function xp(amount: number, target: RobiTarget): void {
        gameplay.xp(amount, robiCommon.targetOf(target))
    }
}
