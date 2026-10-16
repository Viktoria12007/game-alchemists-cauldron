import type {IIngredient} from "../types/types.ts";
import dragonTearsIcon from "../assets/ingredients/dragon-tears.png";
import fairyDustIcon from "../assets/ingredients/fairy-dust.png";
import frostLotusIcon from "../assets/ingredients/frost-lotus.png";
import mandrakeRootIcon from "../assets/ingredients/mandrake-root.png";
import causticAcidIcon from "../assets/ingredients/caustic-acid.png";
import essenceOfTheVoidIcon from "../assets/ingredients/essence-of-the-void.png";
import phoenixFeatherIcon from "../assets/ingredients/phoenix-feather.png";
import toadSlimeIcon from "../assets/ingredients/toad-slime.png";

export const ingredientCatalogue: IIngredient[] = [
    {
        id: 'dragon-tears',
        name: 'Dragon Tears',
        icon: dragonTearsIcon,
        temperature: 25,
        density: 8,
        magicPower: 10,
    },
    {
        id: 'fairy-dust',
        name: 'Fairy Dust',
        icon: fairyDustIcon,
        temperature: 12,
        density: 9,
        magicPower: 12,
    },
    {
        id: 'frost-lotus',
        name: 'Frost Lotus',
        icon: frostLotusIcon,
        temperature: -18,
        density: 4,
        magicPower: 14,
    },
    {
        id: 'mandrake-root',
        name: 'Mandrake Root',
        icon: mandrakeRootIcon,
        temperature: -5,
        density: 20,
        magicPower: 8,
    },
    {
        id: 'caustic-acid',
        name: 'Caustic Acid',
        icon: causticAcidIcon,
        temperature: 10,
        density: 14,
        magicPower: 22,
    },
    {
        id: 'essence-of-the-void',
        name: 'Essence of the Void',
        icon: essenceOfTheVoidIcon,
        temperature: -20,
        density: -10,
        magicPower: 40,
    },
    {
        id: 'phoenix-feather',
        name: 'Phoenix Feather',
        icon: phoenixFeatherIcon,
        temperature: 50,
        density: -10,
        magicPower: 30,
    },
    {
        id: 'toad-slime',
        name: 'Toad Slime',
        icon: toadSlimeIcon,
        temperature: 5,
        density: 30,
        magicPower: 0,
    },
];
