/**
 * רובי — הגדרות משותפות (craftOm)
 *
 * רשימות בחירה (enums) בעברית + ממירים לליבת MakeCode.
 * המזהים באנגלית (ASCII) כדי ש-Static TypeScript לא ידחה אותם;
 * העברית נמצאת רק בתווית //% block= של כל פריט.
 */

enum RobiTarget {
    //% block="כל השחקנים"
    AllPlayers = 0,
    //% block="השחקן הקרוב ביותר"
    NearestPlayer = 1,
    //% block="אני"
    LocalPlayer = 2,
    //% block="שחקן אקראי"
    RandomPlayer = 3,
    //% block="כל היצורים"
    AllEntities = 4,
    //% block="הסוכן שלי"
    MyAgent = 5
}

enum RobiMob {
    //% block="תרנגולת"
    Chicken = 0,
    //% block="פרה"
    Cow = 1,
    //% block="חזיר"
    Pig = 2,
    //% block="כבשה"
    Sheep = 3,
    //% block="זאב"
    Wolf = 4,
    //% block="כפרי"
    Villager = 5,
    //% block="ארנב"
    Rabbit = 6,
    //% block="זומבי"
    Zombie = 7,
    //% block="קריפר"
    Creeper = 8,
    //% block="שלד"
    Skeleton = 9,
    //% block="עכביש"
    Spider = 10,
    //% block="אנדרמן"
    Enderman = 11
}

enum RobiGameMode {
    //% block="הישרדות"
    Survival = 0,
    //% block="יצירה"
    Creative = 1,
    //% block="הרפתקה"
    Adventure = 2
}

enum RobiWeather {
    //% block="בהיר"
    Clear = 0,
    //% block="גשם"
    Rain = 1,
    //% block="סופה"
    Thunder = 2
}

enum RobiDifficulty {
    //% block="שליו"
    Peaceful = 0,
    //% block="קל"
    Easy = 1,
    //% block="רגיל"
    Normal = 2,
    //% block="קשה"
    Hard = 3
}

enum RobiEffect {
    //% block="מהירות"
    Speed = 0,
    //% block="קפיצה"
    JumpBoost = 1,
    //% block="כוח"
    Strength = 2,
    //% block="התחדשות"
    Regeneration = 3,
    //% block="היעלמות"
    Invisibility = 4,
    //% block="ראיית לילה"
    NightVision = 5,
    //% block="עמידות"
    Resistance = 6,
    //% block="חסינות אש"
    FireResistance = 7
}

// ממירים פנימיים — ללא בלוקים (לא מופיעים בעורך)
namespace robiCommon {
    export function targetOf(t: RobiTarget): TargetSelector {
        switch (t) {
            case RobiTarget.AllPlayers: return mobs.target(TargetSelectorKind.AllPlayers)
            case RobiTarget.NearestPlayer: return mobs.target(TargetSelectorKind.NearestPlayer)
            case RobiTarget.LocalPlayer: return mobs.target(TargetSelectorKind.LocalPlayer)
            case RobiTarget.RandomPlayer: return mobs.target(TargetSelectorKind.RandomPlayer)
            case RobiTarget.AllEntities: return mobs.target(TargetSelectorKind.AllEntities)
            case RobiTarget.MyAgent: return mobs.target(TargetSelectorKind.MyAgent)
        }
        return mobs.target(TargetSelectorKind.NearestPlayer)
    }

    export function mobNumber(m: RobiMob): number {
        switch (m) {
            case RobiMob.Chicken: return AnimalMob.Chicken
            case RobiMob.Cow: return AnimalMob.Cow
            case RobiMob.Pig: return AnimalMob.Pig
            case RobiMob.Sheep: return AnimalMob.Sheep
            case RobiMob.Wolf: return AnimalMob.Wolf
            case RobiMob.Villager: return AnimalMob.Villager
            case RobiMob.Rabbit: return AnimalMob.Rabbit
            case RobiMob.Zombie: return MonsterMob.Zombie
            case RobiMob.Creeper: return MonsterMob.Creeper
            case RobiMob.Skeleton: return MonsterMob.Skeleton
            case RobiMob.Spider: return MonsterMob.Spider
            case RobiMob.Enderman: return MonsterMob.Enderman
        }
        return AnimalMob.Chicken
    }

    export function gameModeOf(m: RobiGameMode): GameMode {
        switch (m) {
            case RobiGameMode.Survival: return GameMode.Survival
            case RobiGameMode.Creative: return GameMode.Creative
            case RobiGameMode.Adventure: return GameMode.Adventure
        }
        return GameMode.Survival
    }

    export function weatherOf(w: RobiWeather): number {
        switch (w) {
            case RobiWeather.Clear: return Weather.Clear
            case RobiWeather.Rain: return Weather.Rain
            case RobiWeather.Thunder: return Weather.Thunder
        }
        return Weather.Clear
    }

    export function difficultyOf(d: RobiDifficulty): GameDifficulty {
        switch (d) {
            case RobiDifficulty.Peaceful: return GameDifficulty.Peaceful
            case RobiDifficulty.Easy: return GameDifficulty.Easy
            case RobiDifficulty.Normal: return GameDifficulty.Normal
            case RobiDifficulty.Hard: return GameDifficulty.Hard
        }
        return GameDifficulty.Normal
    }

    export function effectOf(e: RobiEffect): number {
        switch (e) {
            case RobiEffect.Speed: return Effect.Speed
            case RobiEffect.JumpBoost: return Effect.JumpBoost
            case RobiEffect.Strength: return Effect.Strength
            case RobiEffect.Regeneration: return Effect.Regeneration
            case RobiEffect.Invisibility: return Effect.Invisibility
            case RobiEffect.NightVision: return Effect.NightVision
            case RobiEffect.Resistance: return Effect.Resistance
            case RobiEffect.FireResistance: return Effect.FireResistance
        }
        return Effect.Speed
    }
}
