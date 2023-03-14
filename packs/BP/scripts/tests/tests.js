import { MinecraftBlockTypes, MinecraftEnchantmentTypes, ScriptEventCommandMessageEvent } from "@minecraft/server";
import { ActionFormData } from '@minecraft/server-ui';
import { buildWall, path } from "gameplay/building/index.js";
import { x_enchantments } from "gameplay/initializations/enchantments_load";
import { level_1 } from "resources/wall_definitions";

//please use sneak_case format for test names

export const tests = {
    async show_end_form(data) {
        let form = new ActionFormData();
        form.title("§0§1§rThe Title") //§0§1 is prefix for conditional rendering
        form.body("The details multiline")
        form.button("The Close Button");
        await nextTick;
        form.show(data.sourceEntity);
        return true;
    },
    async place_blocks(data) {
        const e = data.sourceEntity, dim = e.dimension;
        const { x: x1, y: y1, z: z1 } = e.location;
        await buildWall({ x: x1, y: y1, z: z1 }, { x: x1 + 70, y: y1 + -20, z: z1 + 35 },level_1, dim);
        return true;
    },
    add_enchantment(data) {
        const { sourceEntity } = data,
            item = sourceEntity.mainhand.getItem(),
            { enchantments: ench } = item,
            added = ench.addEnchantment(x_enchantments[MinecraftEnchantmentTypes.unbreaking.id][7]);
        item.enchantments = ench;
        sourceEntity.mainhand = item;
        return added;
    }
}