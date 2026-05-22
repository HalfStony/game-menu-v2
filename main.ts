let myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Warehouse"),
    miniMenu.createMenuItem("Asteroids"),
    miniMenu.createMenuItem("Catch the Cherry"),
    miniMenu.createMenuItem("Flappy Duck"),
    miniMenu.createMenuItem("Flappy Duck (rage)")
)
miniMenu.setTitle(myMenu, "Games ----------")
miniMenu.setFrame(myMenu, img`
        . . 1 . . . . . . . . . 1 . . 
        . 1 . 1 1 1 1 1 1 1 1 1 . 1 . 
        1 . 1 . . . . . . . . . 1 . 1 
        . 1 . . . . . . . . . . . 1 . 
        . 1 . . . . . . . . . . . 1 . 
        . 1 . . . . . . . . . . . 1 . 
        . 1 . . . . . . . . . . . 1 . 
        . 1 . . . . . . . . . . . 1 . 
        . 1 . . . . . . . . . . . 1 . 
        . 1 . . . . . . . . . . . 1 . 
        . 1 . . . . . . . . . . . 1 . 
        . 1 . . . . . . . . . . . 1 . 
        1 . 1 . . . . . . . . . 1 . 1 
        . 1 . 1 1 1 1 1 1 1 1 1 . 1 . 
        . . 1 . . . . . . . . . 1 . . 
        `)
miniMenu.setMenuStyleProperty(myMenu, miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)

// ============================================================
// NAMESPACES & ENUMS (kept at top level as required)
// ============================================================

namespace SpriteKind {
    export const Crate = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Floor = SpriteKind.create()
    export const Gold = SpriteKind.create()
}

namespace projectImages {
    export const stalagmite_small = image.ofBuffer(hex`e418180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0ee000000000000000000e0eedd0000000000000000eededddd000000000000e0eedddddd1d0000000000e0deddd11ddd1d000000e0eedd11dd11dd111d00e0eede1dd111d111dd111ddddddddd11d111d111d111dd001011d111d111d111dd11d1000000dd11dd11dd11d111d100000000001011dd11dd11dd00000000000000ddd11d111d0000000000000000001d111d00000000000000000000dd1d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`);
    export const stalagmite_med = image.ofBuffer(hex`e41824000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeee00000000000000000000000000000000eeeeeeee0000000000000000000000000000eeeeeeeededd000000000000000000000000e0eeeedddddddddd0000000000000000000000eeeeddddddddddddd1000000000000000000e0eedddddddd11dd1ddd110000000000000000eeddddddd111dd11dd1ddd11000000000000e0eede1dd11dd111d111dd11d1110000000000eedd11dd1dd11dd111d11dd111d11d000000e0dedd1d11d11111ddd111d11dd111d11d0000dd1d11111d11dd1111ddd11dd11dd111d11d0000000010111d111d1111dd111dd11dd11dd11d0000000000001d11dd1111dd111dd11dd11dd1110000000000000010d11111ddd11ddd11d111d11100000000000000000011d11dd111dd11d111d11100000000000000000000d011dd11dd11d111dd1100000000000000000000000010dd1d11d111dd1100000000000000000000000000101111dd11dd11000000000000000000000000000000111dd1dd110000000000000000000000000000000010dd1d11000000000000000000000000000000000000101100000000000000000000000000000000000000000000`);
    export const stalagmite_large = image.ofBuffer(hex`e4183000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0eeee00000000000000000000000000000000000000eeeeeeeede0000000000000000000000000000000000eeeeeede1dd1dd0000000000000000000000000000eeeeeededddddd1d11dd0000000000000000000000e0eeeeeededd1d1111dddd11dd000000000000000000eeeeeededddddddddd1d11d1dd11d1000000000000e0eeeededddddd1dd1dd1ddd1d11d1dd11d100000000eeeeeeeedddddd11dddd11dd1d11dd1111dd11d100e0eeeeeeddddd1dd1dd11d11dd1dd1dd11d11111dd1111ddeed1d11dd11d11d11d111d11d11d11d111d11111d11111001111111d11dd11d11d111d1111dd11d111d11111d11111000000d11d11d111dd1111dd1111d111d111d11111d11111000000000011dd11dd1111dd1111d111d111d11111d11111000000000000d011dd11d1dd1111dd11d111d11111d11d1100000000000000000011d11111111d11d111d11111d11d1100000000000000000000001111dd1d11dd11dd1111d11111000000000000000000000000001d11d11d11dd1111d11111000000000000000000000000000000d111d1dd1111d111110000000000000000000000000000000000dd1d1111dd1111000000000000000000000000000000000000000011dd11d10000000000000000000000000000000000000000001011dd00000000000000000000000000000000000000000000001d000000000000000000000000000000000000000000000000`);
    export const stalagmite_xlarge = image.ofBuffer(hex`e41840000000000000000000000000000000000000000000000000000000000000e0eeee000000000000000000000000000000000000000000000000000000e0eeeedddd00000000000000000000000000000000000000000000000000eeeeeeddd1dddd00000000000000000000000000000000000000000000e0eeeededddddd11dddd0000000000000000000000000000000000000000eeeeeedddd11d1dddd1111dd0000000000000000000000000000000000e0eeeedd1dddddd11111dddd1111dd000000000000000000000000000000eeeeee1dd11d1111dd111d1111dd1d11d1000000000000000000000000eeeeeedddddd1d111d1111d11ddd1111dd1d11d100000000000000000000eeeedddddddd1d11dd11d11111d11ddd1111dd1d11d100000000000000e0eeeeddd1dd1d1d11dd11d111d11111d11ddd1111dd1d11d10000000000eeeede11d11d11dd11dd11d111d11dd11111d11ddd1111dd1d11d10000e0eeee1d11111d11dd11d111d111d111111dd11111111ddd1111d11d1111dddddd1111d11d111d11d111d111d111d11d111dd11d11d111dd1111d11d11110000000010111dd11d11d111dd11d111111d111d111d11d111dd1111d11d1111000000000000dd111111dd111d11dd11111d111d111d11d111dd1111d11d1111000000000000000000d011d111111d11d111111d111d11d111dd1111d11d111100000000000000000000000011d11d11d111d11d111d11d111dd1111d11d111100000000000000000000000000dd1d11dd11d111111d11d111dd1111dd1d1111000000000000000000000000000000000011dd11111d11dd11dd1111dd1d11110000000000000000000000000000000000000010dd1dd11dd11d1111dd1d11d100000000000000000000000000000000000000000000d111d1111111dd1111d1000000000000000000000000000000000000000000000000dd1111d11d1111dd000000000000000000000000000000000000000000000000000000d11111111d000000000000000000000000000000000000000000000000000000000010d11d`);
    export const stalagtite_small = image.ofBuffer(hex`e4181800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ee0e00000000000000000000ddee0e000000000000000000ddddedee0000000000000000d1ddddddee0e000000000000d1ddd11ddded0e0000000000d111dd11dd11ddee0e000000d111dd111d111dd1edee0e00dd111d111d111d11dddddddd1d11dd111d111d111d1101001d111d11dd11dd11dd000000dd11dd11dd11010000000000d111d11ddd00000000000000d111d1000000000000000000d1dd00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`);
    export const stalagtite_med = image.ofBuffer(hex`e418240000000000000000000000000000000000000000000000000000000000000000000000000000000000eeee000000000000000000000000000000000000eeeeeeee00000000000000000000000000000000ddedeeeeeeee0000000000000000000000000000ddddddddddeeee0e0000000000000000000000001dddddddddddddeeee000000000000000000000011ddd1dd11ddddddddee0e00000000000000000011ddd1dd11dd111dddddddee0000000000000000111d11dd111d111dd11dd1edee0e000000000000d11d111dd11d111dd11dd1dd11ddee0000000000d11d111dd11d111ddd11111d11d1dded0e000000d11d111dd11dd11ddd1111dd11d11111d1dd0000d11dd11dd11dd111dd1111d111d1110100000000111dd11dd11dd111dd1111dd11d1000000000000111d111d11ddd11ddd11111d0100000000000000111d111d11dd111dd11d1100000000000000000011dd111d11dd11dd110d0000000000000000000011dd111d11d1dd0100000000000000000000000011dd11dd1111010000000000000000000000000011dd1dd11100000000000000000000000000000011d1dd010000000000000000000000000000000011010000000000000000000000000000000000000000000000000000000000000000000000000000`);
    export const stalagtite_large = image.ofBuffer(hex`e4183000000000000000000000000000000000000000000000000000eeee0e000000000000000000000000000000000000000000edeeeeeeee00000000000000000000000000000000000000dd1dd1edeeeeee0000000000000000000000000000000000dd11d1ddddddedeeeeee0000000000000000000000000000dd11dddd1111d1ddedeeeeee0e00000000000000000000001d11dd1d11d1ddddddddddedeeeeee0000000000000000001d11dd1d11d1ddd1dd1dd1ddddddedeeee0e0000000000001d11dd1111dd11d1dd11dddd11ddddddeeeeeeee000000001111dd11111d11dd1dd1dd11d11dd1dd1dddddeeeeee0e0011111d11111d111d11d11d11d111d11d11d11dd11d1deedd11111d11111d111d11dd1111d111d11d11dd11d11111110011111d11111d111d111d1111dd1111dd111d11d11d00000011111d11111d111d111d1111dd1111dd11dd11000000000011d11d11111d111d11dd1111dd1d11dd110d00000000000011d11d11111d111d11d11111111d1100000000000000000011111d1111dd11dd11d1dd1111000000000000000000000011111d1111dd11d11d11d10000000000000000000000000011111d1111dd1d111d0000000000000000000000000000001111dd1111d1dd00000000000000000000000000000000001d11dd110000000000000000000000000000000000000000dd1101000000000000000000000000000000000000000000d10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`);
    export const stalagtite_xlarge = image.ofBuffer(hex`e4184000eeee0e0000000000000000000000000000000000000000000000000000000000ddddeeee0e000000000000000000000000000000000000000000000000000000dddd1dddeeeeee00000000000000000000000000000000000000000000000000dddd11ddddddedeeee0e00000000000000000000000000000000000000000000dd1111dddd1d11ddddeeeeee0000000000000000000000000000000000000000dd1111dddd11111dddddd1ddeeee0e00000000000000000000000000000000001d11d1dd1111d111dd1111d11dd1eeeeee0000000000000000000000000000001d11d1dd1111ddd11d1111d111d1ddddddeeeeee0000000000000000000000001d11d1dd1111ddd11d11111d11dd11d1ddddddddeeee000000000000000000001d11d1dd1111ddd11d11111d111d11dd11d1d1dd1dddeeee0e000000000000001d11d1dd1111ddd11d11111dd11d111d11dd11dd11d11d11edeeee00000000001111d11d1111ddd11111111dd111111d111d111d11dd11d11111d1eeee0e00001111d11d1111dd111d11d11dd111d11d111d111d111d11d111d11d1111dddddd1111d11d1111dd111d11d111d111d111111d11dd111d11d11dd11101000000001111d11d1111dd111d11d111d111d11111dd11d111dd111111dd0000000000001111d11d1111dd111d11d111d111111d11d111111d110d0000000000000000001111d11d1111dd111d11d111d11d111d11d11d110000000000000000000000001111d1dd1111dd111d11d111111d11dd11d1dd000000000000000000000000001111d1dd1111dd11dd11d11111dd1100000000000000000000000000000000001d11d1dd1111d11dd11dd1dd01000000000000000000000000000000000000001d1111dd1111111d111d00000000000000000000000000000000000000000000dd1111d11d1111dd000000000000000000000000000000000000000000000000d11111111d000000000000000000000000000000000000000000000000000000d11d010000000000000000000000000000000000000000000000000000000000`);
}

namespace lighting {
    let bandPalettes: Buffer[]
    const palette_ramps = image.ofBuffer(hex`e4100400ffff0000d1cb0000a2ff0000b3fc0000e4fc000045ce000086fc000067c80000c8ff000069c80000bafc0000cbff0000fcff0000bdfc0000ceff0000ffff0000`)

    export interface LightAnchor { x: number; y: number }

    export class LightSource {
        anchor: LightAnchor
        offsetTable: Buffer
        width: number
        height: number
        constructor(public rings: number, public bandWidth: number, public centerRadius: number) {
            const halfh = centerRadius + rings * bandWidth
            this.offsetTable = pins.createBuffer((rings + 1) * halfh)
            let x: number, band: number, y2: number
            for (let y = 0; y < halfh; y++) {
                y2 = Math.pow(y, 2)
                for (band = 0; band < rings; band++) {
                    x = Math.sqrt(Math.pow(centerRadius + bandWidth * (band + 1), 2) - y2) | 0
                    this.offsetTable[y * rings + band] = x
                }
            }
            this.width = halfh
            this.height = halfh
        }
        apply() {
            const halfh = this.width
            const cx = this.anchor.x
            const cy = this.anchor.y
            let prev: number, offset: number, band: number
            screen.fillRect(0, 0, screen.width, cy - halfh + 1, 15)
            screen.fillRect(0, cy - halfh + 1, cx - halfh, halfh << 1, 15)
            screen.fillRect(cx + halfh, cy - halfh + 1, screen.width - cx - halfh, halfh << 1, 15)
            screen.fillRect(0, cy + halfh, screen.width, screen.height - (cy + halfh), 15)
            for (let y = 0; y < halfh; y++) {
                band = this.rings
                prev = 0
                offset = this.offsetTable[y * this.rings + band - 1]
                screen.mapRect(cx - halfh, cy + y + 1, halfh - offset, 1, bandPalettes[bandPalettes.length - 1])
                screen.mapRect(cx - halfh, cy - y, halfh - offset, 1, bandPalettes[bandPalettes.length - 1])
                screen.mapRect(cx + offset, cy + y + 1, halfh - offset, 1, bandPalettes[bandPalettes.length - 1])
                screen.mapRect(cx + offset, cy - y, halfh - offset, 1, bandPalettes[bandPalettes.length - 1])
                while (band > 0) {
                    offset = this.offsetTable[y * this.rings + band - 1]
                    if (offset) offset += (Math.idiv(Math.randomRange(0, 11), 5))
                    screen.mapRect(cx + offset, cy + y + 1, prev - offset, 1, bandPalettes[band - 1])
                    screen.mapRect(cx - prev, cy + y + 1, prev - offset, 1, bandPalettes[band - 1])
                    screen.mapRect(cx + offset, cy - y, prev - offset, 1, bandPalettes[band - 1])
                    screen.mapRect(cx - prev, cy - y, prev - offset, 1, bandPalettes[band - 1])
                    prev = offset
                    band--
                }
            }
        }
    }

    export class LanternEffect implements effects.BackgroundEffect {
        protected sources: LightSource[]
        protected static instance: LanternEffect
        protected anchor: LightAnchor
        protected init: boolean
        public static getInstance() {
            if (!LanternEffect.instance) LanternEffect.instance = new LanternEffect()
            return LanternEffect.instance
        }
        private constructor() {
            bandPalettes = []
            for (let band = 0; band < 6; band++) {
                const buffer = pins.createBuffer(16)
                for (let i = 0; i < 16; i++) buffer[i] = palette_ramps.getPixel(i, band + 1)
                bandPalettes.push(buffer)
            }
            this.sources = []
            this.sources.push(new LightSource(4, 12, 2))
            this.sources.push(new LightSource(4, 13, 1))
            this.sources.push(new LightSource(4, 13, 2))
            this.setAnchor({ x: screen.width >> 1, y: screen.height >> 1 })
        }
        startScreenEffect() {
            if (this.init) return
            this.init = true
            let index = 0
            game.eventContext().registerFrameHandler(91, () => { this.sources[index].apply() })
            let up = true
            game.onUpdateInterval(1000, () => {
                if (up) index++; else index--
                if (index < 0) { index = 1; up = true }
                else if (index >= this.sources.length) { index = this.sources.length - 2; up = false }
            })
        }
        setAnchor(anchor: LightAnchor) {
            this.anchor = anchor
            this.sources.forEach((value: LightSource) => { value.anchor = this.anchor })
        }
    }
}

// ============================================================
// SHARED ENUMS
// ============================================================
enum ActionKind { Walking, Idle, Jumping }
namespace SpriteKind {
    export const Gap = SpriteKind.create()
}

// ============================================================
// MENU
// ============================================================

function showMainMenu() {
    miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
        miniMenu.close(myMenu)
        if (selectedIndex == 0) {
            game.pushScene()
            runWarehouse()
        } else if (selectedIndex == 1) {
            game.pushScene()
            runAsteroids()
        } else if (selectedIndex == 2) {
            game.pushScene()
            runCatchTheCherry()
        } else if (selectedIndex == 3) {
            game.pushScene()
            runFlappyDuck()
        } else {
            game.pushScene()
            runFlappyDuckRage()
        }
    })
}

// ============================================================
// GAME 1: WAREHOUSE
// ============================================================
function runWarehouse() {

    function setLevel(level: number) {
        game.splash("Level " + level, "\"B\" to reset level")
        if (level != 1) {
            deleteSprites()
        }
        if (level == 1) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . 
            . . . . . 3 4 1 1 1 e 1 1 c 3 . . . . . 
            . . . . . 3 3 3 3 3 3 3 3 3 3 . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 2) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . 3 3 3 . . . . . . . . 
            . . . . . 3 3 3 3 3 c 3 3 3 . . . . . . 
            . . . . . 3 4 1 1 1 e 1 1 3 . . . . . . 
            . . . . . 3 1 1 1 1 e 1 1 3 . . . . . . 
            . . . . . 3 3 3 3 3 c 3 3 3 . . . . . . 
            . . . . . . . . . 3 3 3 . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 3) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 3 3 3 3 . . . . . . . 
            . . . . . . . 3 c 1 1 1 3 . . . . . . . 
            . . . . . . . 3 4 e e 1 3 . . . . . . . 
            . . . . . . . 3 3 1 1 1 3 . . . . . . . 
            . . . . . . . . 3 3 1 1 3 . . . . . . . 
            . . . . . . . . . 3 3 c 3 . . . . . . . 
            . . . . . . . . . . 3 3 3 . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 4) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . 3 3 3 3 3 3 . . . . . . 
            . . . . . . . . 3 4 1 1 1 3 . . . . . . 
            . . . . . . . . 3 1 3 e 1 3 3 . . . . . 
            . . . . . . . . 3 1 1 c 1 1 3 . . . . . 
            . . . . . . . . 3 1 c c e 1 3 . . . . . 
            . . . . . . . . 3 1 e 1 1 1 3 . . . . . 
            . . . . . . . . 3 3 1 1 3 3 3 . . . . . 
            . . . . . . . . . 3 3 3 3 . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 5) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . 3 3 3 3 . . . . . . . . 
            . . . . . . . . 3 1 c 3 . . . . . . . . 
            . . . . . . . . 3 1 1 3 3 3 . . . . . . 
            . . . . . . . . 3 c e 4 1 3 . . . . . . 
            . . . . . . . . 3 1 1 e 1 3 . . . . . . 
            . . . . . . . . 3 1 1 3 3 3 . . . . . . 
            . . . . . . . . 3 3 3 3 . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 6) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 3 3 . . . . . . . . . 
            . . . . . 3 3 3 1 1 3 3 3 3 . . . . . . 
            . . . . . 3 1 1 1 1 1 e 1 3 . . . . . . 
            . . . . . 3 1 3 1 1 3 e 1 3 . . . . . . 
            . . . . . 3 1 c 1 c 3 4 1 3 . . . . . . 
            . . . . . 3 3 3 3 3 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 7) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . 3 3 3 3 3 3 3 3 . . . . . . 
            . . . . . . 3 1 1 1 1 1 1 3 . . . . . . 
            . . . . . . 3 1 c c c e 4 3 . . . . . . 
            . . . . . . 3 1 1 e 1 e 1 3 . . . . . . 
            . . . . . . 3 3 3 3 3 1 1 3 . . . . . . 
            . . . . . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 8) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 3 3 3 3 3 . . . . . . 
            . . . . . . . 3 1 1 1 1 1 3 . . . . . . 
            . . . . . . . 3 1 c e c 1 3 . . . . . . 
            . . . . . . 3 3 1 e 4 e 1 3 . . . . . . 
            . . . . . . 3 1 1 c e c 1 3 . . . . . . 
            . . . . . . 3 1 1 1 1 1 1 3 . . . . . . 
            . . . . . . 3 3 3 3 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 9) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . 3 3 3 3 3 3 . 3 3 3 3 3 . . . . 
            . . . . 3 1 1 1 1 3 3 3 1 1 1 3 . . . . 
            . . . . 3 1 e e 1 1 1 1 1 3 4 3 . . . . 
            . . . . 3 1 e 1 3 c c c 1 1 1 3 . . . . 
            . . . . 3 1 1 1 3 3 3 3 3 3 3 3 . . . . 
            . . . . 3 3 3 3 3 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 10) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 3 3 3 3 3 . . . . . . 
            . . . . . . . 3 1 1 1 1 1 3 . . . . . . 
            . . . . . . . 3 1 c e c 1 3 . . . . . . 
            . . . . . . . 3 1 e c e 1 3 . . . . . . 
            . . . . . . . 3 1 c e c 1 3 . . . . . . 
            . . . . . . . 3 1 e c e 1 3 . . . . . . 
            . . . . . . . 3 1 1 4 1 1 3 . . . . . . 
            . . . . . . . 3 3 3 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 11) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . 3 3 3 3 3 3 . . . . . . 
            . . . . . . . . 3 1 c c 4 3 . . . . . . 
            . . . . . . . . 3 1 e e 1 3 . . . . . . 
            . . . . . . . . 3 3 1 3 3 3 . . . . . . 
            . . . . . . . . . 3 1 3 . . . . . . . . 
            . . . . . . . . . 3 1 3 . . . . . . . . 
            . . . . . . 3 3 3 3 1 3 . . . . . . . . 
            . . . . . . 3 1 1 1 1 3 3 . . . . . . . 
            . . . . . . 3 1 3 1 1 1 3 . . . . . . . 
            . . . . . . 3 1 1 1 3 1 3 . . . . . . . 
            . . . . . . 3 3 3 1 1 1 3 . . . . . . . 
            . . . . . . . . 3 3 3 3 3 . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 12) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . 3 3 3 3 3 3 3 3 3 3 3 3 . . . . . 
            . . . 3 c c 1 1 3 1 1 1 1 1 3 3 3 . . . 
            . . . 3 c c 1 1 3 1 e 1 1 e 1 1 3 . . . 
            . . . 3 c c 1 1 3 e 3 3 3 3 1 1 3 . . . 
            . . . 3 c c 1 1 1 1 4 1 3 3 1 1 3 . . . 
            . . . 3 c c 1 1 3 1 3 1 1 e 1 3 3 . . . 
            . . . 3 3 3 3 3 3 1 3 3 e 1 e 1 3 . . . 
            . . . . . 3 1 e 1 1 e 1 e 1 e 1 3 . . . 
            . . . . . 3 1 1 1 1 3 1 1 1 1 1 3 . . . 
            . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 13) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . 3 3 3 3 3 3 3 3 . . . 
            . . . . . . . . . 3 1 1 1 1 1 4 3 . . . 
            . . . . . . . . . 3 1 e 3 e 1 3 3 . . . 
            . . . . . . . . . 3 1 e 1 1 e 3 . . . . 
            . . . . . . . . . 3 3 e 1 e 1 3 . . . . 
            . 3 3 3 3 3 3 3 3 3 1 e 1 3 1 3 3 3 . . 
            . 3 c c c c 1 1 3 3 1 e 1 1 e 1 1 3 . . 
            . 3 3 c c c 1 1 1 1 e 1 1 e 1 1 1 3 . . 
            . 3 c c c c 1 1 3 3 3 3 3 3 3 3 3 3 . . 
            . 3 3 3 3 3 3 3 3 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 14) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . 3 3 3 3 3 3 . . 3 3 3 . . . . . 
            . . . . 3 c c 1 1 3 . 3 3 4 3 3 . . . . 
            . . . . 3 c c 1 1 3 3 3 1 1 1 3 . . . . 
            . . . . 3 c c 1 1 1 1 1 e e 1 3 . . . . 
            . . . . 3 c c 1 1 3 1 3 1 e 1 3 . . . . 
            . . . . 3 c c 3 3 3 1 3 1 e 1 3 . . . . 
            . . . . 3 3 3 3 1 e 1 3 e 1 1 3 . . . . 
            . . . . . . . 3 1 1 e 3 1 e 1 3 . . . . 
            . . . . . . . 3 1 e 1 1 e 1 1 3 . . . . 
            . . . . . . . 3 1 1 3 3 1 1 1 3 . . . . 
            . . . . . . . 3 3 3 3 3 3 3 3 3 . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        if (level == 15) {
            scene.setTileMap(img`
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 3 3 3 3 3 . . . . . 
            . . . . 3 3 3 3 3 3 3 1 1 1 3 3 . . . . 
            . . . 3 3 1 3 1 4 3 3 1 e e 1 3 . . . . 
            . . . 3 1 1 1 1 e 1 1 1 1 1 1 3 . . . . 
            . . . 3 1 1 e 1 1 3 3 3 1 1 1 3 . . . . 
            . . . 3 3 3 1 3 3 3 3 3 e 3 3 3 . . . . 
            . . . 3 1 e 1 1 3 3 3 1 c c 3 . . . . . 
            . . . 3 1 e 1 e 1 e 1 c c c 3 . . . . . 
            . . . 3 1 1 1 1 3 3 3 c c c 3 . . . . . 
            . . . 3 1 e e 1 3 . 3 c c c 3 . . . . . 
            . . . 3 1 1 3 3 3 . 3 3 3 3 3 . . . . . 
            . . . 3 3 3 3 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . . . . 
            `, TileScale.Eight)
        }
        initSprites()
    }
    function initSprites() {
        for (let value13 of scene.getTilesByType(1)) {
            ground = sprites.create(img`
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            `, SpriteKind.Floor)
            ground.z = 0
            value13.place(ground)
        }
        for (let value14 of scene.getTilesByType(12)) {
            target = sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . c c . . . 
            . . c . . c . . 
            . . c . . c . . 
            . . . c c . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, SpriteKind.Goal)
            target.z = 1
            value14.place(target)
        }
        for (let value15 of scene.getTilesByType(14)) {
            ground = sprites.create(img`
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            `, SpriteKind.Floor)
            ground.z = 0
            value15.place(ground)
            box = sprites.create(img`
            e e e e e e e e 
            e e 4 4 4 4 e e 
            e 4 e 4 4 e 4 e 
            e 4 4 e e 4 4 e 
            e 4 4 e e 4 4 e 
            e 4 e 4 4 e 4 e 
            e e 4 4 4 4 e e 
            e e e e e e e e 
            `, SpriteKind.Crate)
            box.z = 3
            value15.place(box)
        }
        ground = sprites.create(img`
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        `, SpriteKind.Floor)
        ground.z = 0
        scene.placeOnRandomTile(ground, 4)
        sokoban = sprites.create(img`
        . . . e e . . . 
        . . . e e . . . 
        . 4 4 4 4 4 4 . 
        4 . 4 4 4 4 . 4 
        e . 4 4 4 4 . e 
        . . 8 8 8 8 . . 
        . . 8 . . 8 . . 
        . . 8 . . 8 . . 
        `, SpriteKind.Player)
        sokoban.z = 2
        scene.placeOnRandomTile(sokoban, 4)
        dir = "up"
    }
    controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
        dir = "up"
        music.playTone(523, music.beat(BeatFraction.Eighth))
        isPlayerBlocked()
        if (!(blocked)) {
            sokoban.y += -4
            sokoban.y += -4
        }
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Crate, function (sprite, otherSprite) {
        if (dir == "right") {
            otherSprite.x += 4
            otherSprite.x += 4
        } else if (dir == "left") {
            otherSprite.x += -4
            otherSprite.x += -4
        } else if (dir == "up") {
            otherSprite.y += -4
            otherSprite.y += -4
        } else if (dir == "down") {
            otherSprite.y += 4
            otherSprite.y += 4
        }
    })
    sprites.onOverlap(SpriteKind.Crate, SpriteKind.Goal, function (sprite, otherSprite) {
        sprite.setImage(img`
        4 4 4 4 4 4 4 4 
        4 4 5 5 5 5 4 4 
        4 5 4 5 5 4 5 4 
        4 5 5 4 4 5 5 4 
        4 5 5 4 4 5 5 4 
        4 5 4 5 5 4 5 4 
        4 4 5 5 5 5 4 4 
        4 4 4 4 4 4 4 4 
        `)
    })
    controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        setLevel(level)
    })
    function deleteSprites() {
        for (let value16 of sprites.allOfKind(SpriteKind.Player)) {
            value16.destroy()
        }
        for (let value17 of sprites.allOfKind(SpriteKind.Gold)) {
            value17.destroy()
        }
        for (let value18 of sprites.allOfKind(SpriteKind.Crate)) {
            value18.destroy()
        }
        for (let value19 of sprites.allOfKind(SpriteKind.Goal)) {
            value19.destroy()
        }
        for (let value20 of sprites.allOfKind(SpriteKind.Floor)) {
            value20.destroy()
        }
    }
    function initTiles() {
        scene.setTile(3, img`
        b 1 b b b b b b b 1 b b b b b b 
        b 1 b b b b b b b 1 b b b b b b 
        b 1 b b b b b b b 1 b b b b b b 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        b b b b b 1 b b b b b b b 1 b b 
        b b b b b 1 b b b b b b b 1 b b 
        b b b b b 1 b b b b b b b 1 b b 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        b 1 b b b b b b b 1 b b b b b b 
        b 1 b b b b b b b 1 b b b b b b 
        b 1 b b b b b b b 1 b b b b b b 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        b b b b b 1 b b b b b b b 1 b b 
        b b b b b 1 b b b b b b b 1 b b 
        b b b b b 1 b b b b b b b 1 b b 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, true)
        scene.setTile(1, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
        scene.setTile(4, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
        scene.setTile(14, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
        scene.setTile(12, img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, false)
    }
    controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
        dir = "left"
        music.playTone(523, music.beat(BeatFraction.Eighth))
        isPlayerBlocked()
        if (!(blocked)) {
            sokoban.x += -4
            sokoban.x += -4
        }
    })
    sprites.onOverlap(SpriteKind.Crate, SpriteKind.Floor, function (sprite, otherSprite) {
        sprite.setImage(img`
        e e e e e e e e 
        e e 4 4 4 4 e e 
        e 4 e 4 4 e 4 e 
        e 4 4 e e 4 4 e 
        e 4 4 e e 4 4 e 
        e 4 e 4 4 e 4 e 
        e e 4 4 4 4 e e 
        e e e e e e e e 
        `)
    })
    controller.combos.attachCombo("a+d", function () {
        if (level < 15) {
            level += 1
            setLevel(level)
        }
    })
    controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
        dir = "right"
        music.playTone(523, music.beat(BeatFraction.Eighth))
        isPlayerBlocked()
        if (!(blocked)) {
            sokoban.x += 4
            sokoban.x += 4
        }
    })
    function isPlayerBlocked() {
        blocked = false
        if (dir == "right") {
            for (let value of sprites.allOfKind(SpriteKind.Crate)) {
                if (value.y == sokoban.y) {
                    if (value.x == sokoban.x + 8) {
                        for (let value2 of sprites.allOfKind(SpriteKind.Crate)) {
                            if (value2.y == sokoban.y) {
                                if (value2.x == sokoban.x + 16) {
                                    blocked = true
                                }
                            }
                        }
                        for (let value3 of scene.getTilesByType(3)) {
                            if (value3.y == sokoban.y) {
                                if (value3.x == sokoban.x + 16) {
                                    blocked = true
                                }
                            }
                        }
                    }
                }
            }
        } else if (dir == "left") {
            for (let value4 of sprites.allOfKind(SpriteKind.Crate)) {
                if (value4.y == sokoban.y) {
                    if (value4.x == sokoban.x - 8) {
                        for (let value5 of sprites.allOfKind(SpriteKind.Crate)) {
                            if (value5.y == sokoban.y) {
                                if (value5.x == sokoban.x - 16) {
                                    blocked = true
                                }
                            }
                        }
                        for (let value6 of scene.getTilesByType(3)) {
                            if (value6.y == sokoban.y) {
                                if (value6.x == sokoban.x - 16) {
                                    blocked = true
                                }
                            }
                        }
                    }
                }
            }
        } else if (dir == "up") {
            for (let value7 of sprites.allOfKind(SpriteKind.Crate)) {
                if (value7.x == sokoban.x) {
                    if (value7.y == sokoban.y - 8) {
                        for (let value8 of sprites.allOfKind(SpriteKind.Crate)) {
                            if (value8.x == sokoban.x) {
                                if (value8.y == sokoban.y - 16) {
                                    blocked = true
                                }
                            }
                        }
                        for (let value9 of scene.getTilesByType(3)) {
                            if (value9.x == sokoban.x) {
                                if (value9.y == sokoban.y - 16) {
                                    blocked = true
                                }
                            }
                        }
                    }
                }
            }
        } else if (dir == "down") {
            for (let value10 of sprites.allOfKind(SpriteKind.Crate)) {
                if (value10.x == sokoban.x) {
                    if (value10.y == sokoban.y + 8) {
                        for (let value11 of sprites.allOfKind(SpriteKind.Crate)) {
                            if (value11.x == sokoban.x) {
                                if (value11.y == sokoban.y + 16) {
                                    blocked = true
                                }
                            }
                        }
                        for (let value12 of scene.getTilesByType(3)) {
                            if (value12.x == sokoban.x) {
                                if (value12.y == sokoban.y + 16) {
                                    blocked = true
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
        dir = "down"
        music.playTone(523, music.beat(BeatFraction.Eighth))
        isPlayerBlocked()
        if (!(blocked)) {
            sokoban.y += 4
            sokoban.y += 4
        }
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Gold, function (sprite, otherSprite) {
        if (dir == "right") {
            otherSprite.x += 4
            otherSprite.x += 4
            if (otherSprite.isHittingTile(CollisionDirection.Right)) {
                sprite.x = otherSprite.x - 8
            }
        } else if (dir == "left") {
            otherSprite.x += -4
            otherSprite.x += -4
            if (otherSprite.isHittingTile(CollisionDirection.Left)) {
                sprite.x = otherSprite.x + 8
            }
        } else if (dir == "up") {
            otherSprite.y += -4
            otherSprite.y += -4
            if (otherSprite.isHittingTile(CollisionDirection.Top)) {
                sprite.y = otherSprite.y + 8
            }
        } else if (dir == "down") {
            otherSprite.y += 4
            otherSprite.y += 4
            if (otherSprite.isHittingTile(CollisionDirection.Bottom)) {
                sprite.y = otherSprite.y - 8
            }
        }
    })
    let boxesInTargets = 0
    let blocked = false
    let dir = ""
    let sokoban: Sprite = null
    let box: Sprite = null
    let target: Sprite = null
    let ground: Sprite = null
    let level = 0
    scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccddccddccccccddccccccddccccccddccddccddddccccddccddccddddccccddccccccddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccddccddccccccddccccccddccccccddccddccddddccccddccddccddddccccddccccccddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccddccddccddccddccddccddccddddddccddccddccddccddccddccddccddddddccddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccddccddccddccddccddccddccddddddccddccddccddccddccddccddccddddddccddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccddccddccccccddccccddddccccddddccccccddccddccddccddccddccccccddccccddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccddccddccccccddccccddddccccddddccccccddccddccddccddccddccccccddccccddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccccccddccddccddccddccddccddddddccddccddccddccddccddccddddddccddccddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccccccddccddccddccddccddccddddddccddccddccddccddccddccddddddccddccddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccccccddccddccddccddccddccccccddccddccddccccddddddccccddccccddddccccccddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccccccddccddccddccddccddccccccddccddccddccccddddddccccddccccddddccccccddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb44bb44444444bb44bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb44bb44444444bb44bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebb44444444bbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebb44444444bbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88bbbb88bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88bbbb88bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88bbbb88bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88bbbb88bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeee44444444eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeee44444444eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee44ee4444ee44eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee44ee4444ee44eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee4444eeee4444eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee4444eeee4444eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee4444eeee4444eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee4444eeee4444eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee44ee4444ee44eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee44ee4444ee44eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeee44444444eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeee44444444eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444bbbbbbbbbbbbbbbb4444444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444bbbbbbbbbbbbbbbb4444444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444555555554444bbbbbbbbbbbbbbbb4444555555554444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444555555554444bbbbbbbbbbbbbbbb4444555555554444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4455445555445544bbbbbbccccbbbbbb4455445555445544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4455445555445544bbbbbbccccbbbbbb4455445555445544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4455554444555544bbbbccbbbbccbbbb4455554444555544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4455554444555544bbbbccbbbbccbbbb4455554444555544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4455554444555544bbbbccbbbbccbbbb4455554444555544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4455554444555544bbbbccbbbbccbbbb4455554444555544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4455445555445544bbbbbbccccbbbbbb4455445555445544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4455445555445544bbbbbbccccbbbbbb4455445555445544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444555555554444bbbbbbbbbbbbbbbb4444555555554444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444555555554444bbbbbbbbbbbbbbbb4444555555554444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444bbbbbbbbbbbbbbbb4444444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444bbbbbbbbbbbbbbbb4444444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
    pause(1000)
    music.playTone(523, music.beat(BeatFraction.Eighth))
    scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccddccddccccccddccccccddccccccddccddccddddccccddccddccddddccccddccccccddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccddccddccccccddccccccddccccccddccddccddddccccddccddccddddccccddccccccddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccddccddccddccddccddccddccddddddccddccddccddccddccddccddccddddddccddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccddccddccddccddccddccddccddddddccddccddccddccddccddccddccddddddccddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccddccddccccccddccccddddccccddddccccccddccddccddccddccddccccccddccccddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccddccddccccccddccccddddccccddddccccccddccddccddccddccddccccccddccccddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccccccddccddccddccddccddccddddddccddccddccddccddccddccddddddccddccddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccccccddccddccddccddccddccddddddccddccddccddccddccddccddddddccddccddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccccccddccddccddccddccddccccccddccddccddccccddddddccccddccccddddccccccddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddccccccddccddccddccddccddccccccddccddccddccccddddddccccddccccddddccccccddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb44bb44444444bb44bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb44bb44444444bb44bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebb44444444bbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebb44444444bbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88bbbb88bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88bbbb88bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88bbbb88bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb88bbbb88bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444444444444444444444444444444444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444444444444444444444444444444444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444455555555444444445555555544444444555555554444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444455555555444444445555555544444444555555554444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb445544555544554444554455554455444455445555445544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb445544555544554444554455554455444455445555445544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb445555444455554444555544445555444455554444555544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb445555444455554444555544445555444455554444555544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb445555444455554444555544445555444455554444555544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb445555444455554444555544445555444455554444555544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb445544555544554444554455554455444455445555445544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb445544555544554444554455554455444455445555445544bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444455555555444444445555555544444444555555554444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444455555555444444445555555544444444555555554444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444444444444444444444444444444444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444444444444444444444444444444444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
    pause(1000)
    scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
    pause(100)
    game.setDialogCursor(img`
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e 4 4 4 4 4 4 4 4 e e e e 
    e e e e 4 4 4 4 4 4 4 4 e e e e 
    e e 4 4 e e 4 4 4 4 e e 4 4 e e 
    e e 4 4 e e 4 4 4 4 e e 4 4 e e 
    e e 4 4 4 4 e e e e 4 4 4 4 e e 
    e e 4 4 4 4 e e e e 4 4 4 4 e e 
    e e 4 4 4 4 e e e e 4 4 4 4 e e 
    e e 4 4 4 4 e e e e 4 4 4 4 e e 
    e e 4 4 e e 4 4 4 4 e e 4 4 e e 
    e e 4 4 e e 4 4 4 4 e e 4 4 e e 
    e e e e 4 4 4 4 4 4 4 4 e e e e 
    e e e e 4 4 4 4 4 4 4 4 e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    `)
    level = 1
    initTiles()
    setLevel(level)
    game.onUpdateInterval(500, function () {
        boxesInTargets = 0
        for (let box2 of sprites.allOfKind(SpriteKind.Crate)) {
            for (let value21 of sprites.allOfKind(SpriteKind.Goal)) {
                if (box2.x == value21.x && box2.y == value21.y) {
                    boxesInTargets += 1
                }
            }
        }
        if (boxesInTargets == sprites.allOfKind(SpriteKind.Crate).length) {
            if (level == 15) {
                game.over(true)
            } else {
                music.playMelody("C - C G C5 C5 - - ", 480)
                level += 1
                setLevel(level)
            }
        }
    })

}

// ============================================================
// GAME 2: ASTEROIDS
// ============================================================
function runAsteroids() {
    let asteroids: Image[] = []
    let ship: Sprite = null
    let projectile: Sprite = null

    sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
        scene.cameraShake(4, 500)
        otherSprite.destroy(effects.disintegrate)
        sprite.startEffect(effects.fire, 200)
        info.changeLifeBy(-1)
        if (info.life() <= 0) {
            game.splash("Game Over!", "Score: " + info.score())
            game.popScene()
        }
    })
    sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
        sprite.destroy()
        otherSprite.destroy(effects.disintegrate)
        info.changeScoreBy(1)
    })
    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . .
            . . . . . . . .
            . . . . . . . .
            . . . . . . . .
            . . . 7 7 . . .
            . . . 7 7 . . .
            . . . 7 7 . . .
            . . . 7 7 . . .
        `, ship, 0, -140)
        projectile.startEffect(effects.coolRadial, 100)
    })
    asteroids = [sprites.space.spaceSmallAsteroid1, sprites.space.spaceSmallAsteroid0,
    sprites.space.spaceAsteroid0, sprites.space.spaceAsteroid1,
    sprites.space.spaceAsteroid4, sprites.space.spaceAsteroid3]
    ship = sprites.create(sprites.space.spaceRedShip, SpriteKind.Player)
    ship.setStayInScreen(true)
    ship.bottom = 120
    controller.moveSprite(ship, 100, 100)
    info.setLife(3)
    info.setScore(0)
    effects.starField.startScreenEffect()
    game.onUpdateInterval(500, function () {
        projectile = sprites.createProjectileFromSide(asteroids[randint(0, asteroids.length - 1)], 0, 75)
        projectile.setKind(SpriteKind.Enemy)
        projectile.x = randint(10, 150)
    })
}

// ============================================================
// GAME 3: CATCH THE CHERRY
// ============================================================
function runCatchTheCherry() {
    let food1: Sprite = null
    let Harry: Sprite = null

    info.setScore(0)
    info.setLife(5)
    tiles.setCurrentTilemap(tilemap`level1`)

    Harry = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f b b b b b b f 4 e 
        4 d f d d d d d d c d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Player)
    Harry.setPosition(80, 104)
    controller.moveSprite(Harry, 100, 0)

    controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
        animation.runImageAnimation(Harry, [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f b b b b b b f 4 e 
            4 d f d d d d d d c d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `, img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f e e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f e e e e e e e f e f 
            f f f e e e e f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            . 4 f b b b b b f e 4 e 
            . 4 f d d d d d e d d 4 
            . e f f f f f f e e 4 . 
            . . f f f . . . . . . . 
            `, img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f f e e e e e f e f 
            f f f f f e e e e f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 e f b b b b b f 4 . 
            4 d d e d d d d d f 4 . 
            . 4 e e f f f f f f e . 
            . . . . . . . f f f . . 
            `], 500, false)
    })

    controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
        animation.runImageAnimation(Harry, [img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e e f . . 
            . . f 1 1 1 e d d 4 . . 
            . . f 1 1 1 e d d e . . 
            . . f 6 6 6 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `, img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f d d d d 4 d 4 f . 
            . . f b b d e e f f f . 
            . . f e 4 e d d 4 f . . 
            . . f 1 1 e d d e f . . 
            . f f 6 6 f e e f f f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `, img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f d d d d 4 d 4 f f 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e d d 4 . 
            . . f 1 1 1 1 e d d e . 
            . f f 6 6 6 6 f e e f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `], 500, true)
    })

    controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
        animation.runImageAnimation(Harry, [img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            f f 4 d 4 d d d d f . . 
            . f f f 4 d d b b f . . 
            . 4 d d e 4 4 4 e f . . 
            . e d d e 1 1 1 1 f . . 
            . f e e f 6 6 6 6 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `, img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            . f 4 d 4 d d d d f . . 
            . f f f e e d b b f . . 
            . . f 4 d d e 4 e f . . 
            . . f e d d e 1 1 f . . 
            . f f f e e f 6 6 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `, img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 d d d d f f . 
            . f f f 4 d d b b f . . 
            . . f e e 4 4 4 e f . . 
            . . 4 d d e 1 1 1 f . . 
            . . e d d e 1 1 1 f . . 
            . . f e e f 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `], 500, true)
    })

    scene.onHitWall(SpriteKind.Food, function (sprite, location) {
        sprites.destroy(sprite, effects.fire, 100)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        info.changeLifeBy(-1)
        if (info.life() <= 0) {
            game.splash("Game Over!", "Score: " + info.score())
            game.popScene()
        }
    })
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
        info.changeScoreBy(1)
        sprites.destroy(otherSprite)
    })

    game.onUpdateInterval(1000, function () {
        food1 = sprites.create(img`
            . . . . . . . . . . . 6 6 6 6 6 
            . . . . . . . . . 6 6 7 7 7 7 8 
            . . . . . . 8 8 8 7 7 8 8 6 8 8 
            . . e e e e c 6 6 8 8 . 8 7 8 . 
            . e 2 5 4 2 e c 8 . . . 6 7 8 . 
            e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
            e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
            e 2 e e 2 2 2 2 e e e e c 6 8 . 
            c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
            . c 2 e e e 2 e 2 4 2 2 2 2 c . 
            . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
            . . . e c c e c 2 2 2 2 2 2 2 e 
            . . . . . . . c 2 e e 2 2 e 2 c 
            . . . . . . . c e e e e e e 2 c 
            . . . . . . . . c e 2 2 2 2 c . 
            . . . . . . . . . c c c c c . . 
            `, SpriteKind.Food)
        food1.setPosition(randint(10, 145), 0)
        food1.setVelocity(0, 50)
    })
}

// ============================================================
// GAME 4: FLAPPY DUCK
// ============================================================
function runFlappyDuck() {
    let projectile: Sprite = null
    let bottomImage: Image = null
    let topImage: Image = null
    let gap = 0
    let mySprite: Sprite = null

    scene.setBackgroundColor(9)
    info.setScore(0)
    mySprite = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player)
    mySprite.ay = 300
    mySprite.setFlag(SpriteFlag.StayInScreen, true)

    controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
        mySprite.vy = -100
    })

    sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
        game.splash("Game Over!", "Score: " + info.score())
        game.popScene()
    })

    game.onUpdateInterval(2000, function () {
        info.changeScoreBy(1)
    })

    game.onUpdateInterval(1500, function () {
        gap = randint(0, 3)
        if (gap == 0) {
            topImage = img`
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                ....ff777777777777ff....
                ....f77777777777777f....
                ....f77777777777777f....
                ....f77777777777777f....
                ....f77777777777777f....
                ....f77777777777777f....
                ....ffffffffffffffff....
                `
            bottomImage = img`
                ........................
                ........................
                ........................
                ....ffffffffffffffff....
                ....f77777777777777f....
                ....f77777777777777f....
                ....f77777777777777f....
                ....f77777777777777f....
                ....f77777777777777f....
                ....f77777777777777f....
                ....ff777777777777ff....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                `
        } else if (gap == 1) {
            topImage = img`
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                .....ff7777777777ff.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....ffffffffffffff.....
                ........................
                ........................
                `
            bottomImage = img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                .....ffffffffffffff.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....ff7777777777ff.....
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                `
        } else if (gap == 2) {
            topImage = img`
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                .....ff7777777777ff.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....ffffffffffffff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                ........................
                `
            bottomImage = img`
                ........................
                ........................
                ........................
                ........................
                .....ffffffffffffff.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....ff7777777777ff.....
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                ......f7777777777f......
                `
        } else {
            topImage = img`
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                ......f77777777777f.....
                .....ff77777777777ff....
                .....f7777777777777f....
                .....f7777777777777f....
                .....f7777777777777f....
                .....f7777777777777f....
                .....f7777777777777f....
                .....f7777777777777f....
                .....f7777777777777f....
                .....f7777777777777f....
                .....fffffffffffffff....
                `
            bottomImage = img`
                ........................
                ....ffffffffffffffff....
                ....f77777777777777f....
                ....f77777777777777f....
                ....f77777777777777f....
                ....f77777777777777f....
                ....f77777777777777f....
                ....ff777777777777ff....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                .....f777777777777f.....
                `
        }
        projectile = sprites.createProjectileFromSide(topImage, -45, 0)
        projectile.top = 0
        projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
        projectile.bottom = scene.screenHeight()
    })
}

// ============================================================
// GAME 5: FLAPPY DUCK RAGE
// ============================================================
function runFlappyDuckRage() {
    let anim: animation.Animation = null
    let bottomImage: Image = null
    let projectile: Sprite = null
    let topImage: Image = null
    let gap = 0
    let mySprite: Sprite = null

    controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
        mySprite.vy = -100
        animation.setAction(mySprite, ActionKind.Jumping)
    })

    sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
        game.splash("Game Over!", "Score: " + info.score())
        game.popScene()
    })

    scene.setBackgroundColor(9)
    effects.blizzard.startScreenEffect()

    mySprite = sprites.create(img`
        . . . . . . . . . . b 5 b . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . . . . b c . . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . . . . b b 5 d 1 f 5 5 d f . .
        . . . . b 5 5 1 f f 5 d 4 c . .
        . . . . b 5 5 d f b d d 4 4 . .
        b d d d b b d 5 5 5 4 4 4 4 4 b
        b b d 5 5 5 b 5 5 4 4 4 4 4 b .
        b d c 5 5 5 5 d 5 5 5 5 5 b . .
        c d d c d 5 5 b 5 5 5 5 5 5 b .
        c b d d c c b 5 5 5 5 5 5 5 b .
        . c d d d d d d 5 5 5 5 5 d b .
        . . c b d d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
        `, SpriteKind.Player)
    mySprite.ay = 300

    anim = animation.createAnimation(ActionKind.Jumping, 25)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . b 5 5 b . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . b b b b b 5 5 5 5 5 5 5 b . .
        . b d 5 b 5 5 5 5 5 5 5 5 b . .
        . . b 5 5 b 5 d 1 f 5 d 4 f . .
        . . b d 5 5 b 1 f f 5 4 4 c . .
        b b d b 5 5 5 d f b 4 4 4 4 b .
        b d d c d 5 5 b 5 4 4 4 4 4 4 b
        c d d d c c b 5 5 5 5 5 5 5 b .
        c b d d d d d 5 5 5 5 5 5 5 b .
        . c d d d d d d 5 5 5 5 5 d b .
        . . c b d d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
    `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . b 5 b . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . b b b b b 5 5 5 5 5 5 5 b . .
        . b d 5 b 5 5 5 5 5 5 5 5 b . .
        . . b 5 5 b 5 d 1 f 5 d 4 f . .
        . . b d 5 5 b 1 f f 5 4 4 c . .
        b b d b 5 5 5 d f b 4 4 4 4 4 b
        b d d c d 5 5 b 5 4 4 4 4 4 b .
        c d d d c c b 5 5 5 5 5 5 5 b .
        c b d d d d d 5 5 5 5 5 5 5 b .
        . c d d d d d d 5 5 5 5 5 d b .
        . . c b d d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
    `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . b 5 b . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . . . . b c . . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . . . . b b 5 d 1 f 5 5 d f . .
        . . . . b 5 5 1 f f 5 d 4 c . .
        . . . . b 5 5 d f b d d 4 4 . .
        b d d d b b d 5 5 5 4 4 4 4 4 b
        b b d 5 5 5 b 5 5 4 4 4 4 4 b .
        b d c 5 5 5 5 d 5 5 5 5 5 b . .
        c d d c d 5 5 b 5 5 5 5 5 5 b .
        c b d d c c b 5 5 5 5 5 5 5 b .
        . c d d d d d d 5 5 5 5 5 d b .
        . . c b d d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
    `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . b 5 b . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . . . . b b 5 d 1 f 5 d 4 c . .
        . . . . b 5 5 1 f f d d 4 4 4 b
        . . . . b 5 5 d f b 4 4 4 4 b .
        . . . b d 5 5 5 5 4 4 4 4 b . .
        . . b d d 5 5 5 5 5 5 5 5 b . .
        . b d d d d 5 5 5 5 5 5 5 5 b .
        b d d d b b b 5 5 5 5 5 5 5 b .
        c d d b 5 5 d c 5 5 5 5 5 5 b .
        c b b d 5 d c d 5 5 5 5 5 5 b .
        . b 5 5 b c d d 5 5 5 5 5 d b .
        b b c c c d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
    `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . b 5 b . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . . . . b b 5 d 1 f 5 d 4 c . .
        . . . . b 5 5 1 f f d d 4 4 4 b
        . . . . b 5 5 d f b 4 4 4 4 b .
        . . . b d 5 5 5 5 4 4 4 4 b . .
        . b b d d d 5 5 5 5 5 5 5 b . .
        b d d d b b b 5 5 5 5 5 5 5 b .
        c d d b 5 5 d c 5 5 5 5 5 5 b .
        c b b d 5 d c d 5 5 5 5 5 5 b .
        c b 5 5 b c d d 5 5 5 5 5 5 b .
        b b c c c d d d 5 5 5 5 5 d b .
        . . . . c c d d d 5 5 5 b b . .
        . . . . . . c c c c c b b . . .
    `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . b 5 b . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . . . . b b 5 d 1 f 5 5 d f . .
        . . . . b 5 5 1 f f 5 d 4 c . .
        . . . . b 5 5 d f b d d 4 4 . .
        . b b b d 5 5 5 5 5 4 4 4 4 4 b
        b d d d b b d 5 5 4 4 4 4 4 b .
        b b d 5 5 5 b 5 5 5 5 5 5 b . .
        c d c 5 5 5 5 d 5 5 5 5 5 5 b .
        c b d c d 5 5 b 5 5 5 5 5 5 b .
        . c d d c c b d 5 5 5 5 5 d b .
        . . c b d d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
        . . . . . . . . . . . . . . . .
    `)
    animation.attachAnimation(mySprite, anim)

    game.onUpdateInterval(1500, function () {
        info.changeScoreBy(1)
        gap = Math.randomRange(0, 3)
        if (gap == 0) {
            topImage = projectImages.stalagtite_small
            bottomImage = projectImages.stalagmite_xlarge
        } else if (gap == 1) {
            topImage = projectImages.stalagtite_med
            bottomImage = projectImages.stalagmite_large
        } else if (gap == 2) {
            topImage = projectImages.stalagtite_large
            bottomImage = projectImages.stalagmite_med
        } else {
            topImage = projectImages.stalagtite_xlarge
            bottomImage = projectImages.stalagmite_small
        }
        projectile = sprites.createProjectileFromSide(topImage, -45, 0)
        projectile.top = 0
        projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
        projectile.bottom = scene.screenHeight()
    })

    game.onUpdate(function () {
        if (mySprite.vy > 0) animation.setAction(mySprite, ActionKind.Idle)
        if (mySprite.bottom > 120 || mySprite.top < 0) {
            game.splash("Game Over!", "Score: " + info.score())
            game.popScene()
        }
    })

    scene.setBackgroundColor(3)
    const effect = lighting.LanternEffect.getInstance()
    effect.setAnchor(mySprite)
    effect.startScreenEffect()
}

// ============================================================
// ENTRY POINT
// ============================================================
showMainMenu()
