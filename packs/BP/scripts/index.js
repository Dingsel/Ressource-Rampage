import "./global.js"
import './extensions/import';
import './gameplay/index.js';
import './tests/import.js';
import { world, system, DynamicPropertiesDefinition } from "@minecraft/server"

world.events.worldInitialize.subscribe(({ propertyRegistry }) => {
    const propertyDefinitions = new DynamicPropertiesDefinition()
    propertyDefinitions.defineNumber("coins")
    propertyRegistry.registerWorldDynamicProperties(propertyDefinitions)
})

system.runInterval(() => {
    for (const player of world.getPlayers()) player.onScreenDisplay.setActionBar(`Coins: ${coins}`)
}, 1)

//iblqzed
//conmaster
//m9