export const Textures = {
    IconTowers:"textures/icons/mageTower_1.png",
    IconWall:"textures/icons/walls.png",
    ColorPicker: "textures/ui/color_picker",
    PaintBrush: "textures/ui/mashup_PaintBrush",
    ColorBrush: "textures/ui/text_color_paintbrush",
    Reset: "textures/ui/recap_glyph_desaturated",
    Back: "textures/ui/back_button_hover",
}


export const EntityIds = {
    coin: "dest:coin",
    database: "dest:database"
}
export const ItemIds = {

}
export const BlockIds = {

}

export const towers = [
    {
        alias: "Mage Tower",
        description: "Burns Enemies!",
        structureId: "mage_1",
        type: "mage",
        tier: 1,
        icon: "textures/icons/mageTower_1.png",
        size: [5, 5]
    },
    {
        alias: "Archer Tower",
        description: "Single Target, High DPS",
        structureId: "archer_1",
        type: "archer",
        tier: 1,
        icon: "textures/items/arrow.png",
        size: [5, 5]
    }
]

export const towerUpgrades = [
    {
        alias: "Mage Tower",
        description: "Burns Enemies!",
        structureId: "mage_2",
        type: "mage",
        tier: 2,
        icon: "textures/icons/mageTower_2.png",
        size: [5, 5]
    },
    {
        alias: "Mage Tower",
        description: "Burns Enemies!",
        structureId: "mage_3",
        type: "mage",
        tier: 3,
        icon: "textures/icons/mageTower_3.png",
        size: [11, 11]
    },
    {
        alias: "Archer Tower",
        description: "Single Target, High DPS",
        structureId: "archer_1",
        type: "archer",
        tier: 2,
        icon: "textures/items/arrow.png",
        size: [5, 5]
    }
]
