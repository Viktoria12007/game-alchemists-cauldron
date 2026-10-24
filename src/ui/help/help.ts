import {add, button, element} from "../dom.ts";
import {resume} from "../../logic/resume.ts";

export function createHelp() {
    const elementHelp = element('div', 'help');
    const firstText = element('p', 'help__text', 'Mix ingredients, match 3 target ranges, and brew potions before time or lives run out.');
    const title = element('h2', 'help__title', 'How the game works');
    const firstList = element('ol', 'help__list');
    const first = element('li', 'help__item', 'Start a game. The app picks one random recipe from the recipe pool, and the recipe panel shows how many ingredients you may use, for example Ingredients: 0 / 4. When the run starts, the shelf is filled according to the chosen difficulty, the cauldron is still empty, and the score/time/lives switch from the start screen state to the active game state.');
    const second = element('li', 'help__item', 'Add ingredients from the shelf to the cauldron. The counter grows with every ingredient (1 / 4, 2 / 4 …). At the maximum the shelf is blocked.');
    const third = element('li', 'help__item', 'Watch the 3 bars: Temperature, Density and Magic Power.');
    const fourth = element('li', 'help__item', 'Try to move every value into the recipe target zones.');
    const fifth = element('li', 'help__item', 'Click Brew to check the mix.');
    const sixth = element('li', 'help__item', 'Keep brewing until time ends, you lose all lives, or the ingredients run out.');
    add(firstList, first, second, third, fourth, fifth, sixth);
    const secondText = element('p', 'help__text', 'Every ingredient has a limited stock. The number on the shelf card shows how many portions are left');
    const thirdText = element('p', 'help__text', 'Worked example round:');
    const secondList = element('ol', 'help__list');
    const firstS = element('li', 'help__item', 'The selected recipe is Moon Mist from the recipe pool. It says: Temperature 32..42, Density 12..22, Magic Power 17..27.');
    const secondS = element('li', 'help__item', 'You add Dragon Tears (+25, +8, +10) and Fairy Dust (+12, +9, +12).');
    const thirdS = element('li', 'help__item', 'The cauldron totals become 37 / 17 / 22, and the counter shows Ingredients: 2 / 4.');
    const fourthS = element('li', 'help__item', 'The Medium rules, so brew tolerance is ±8.');
    const fifthS = element('li', 'help__item', 'The checked ranges become 24..50, 4..30 and 9..35.');
    const sixthS = element('li', 'help__item', '37 / 17 / 22 is inside all 3 checked ranges, so the brew succeeds.');
    add(secondList, firstS, secondS, thirdS, fourthS, fifthS, sixthS);
    const backButton = button('Back', 'button help__button');
    backButton.addEventListener('click', resume);
    add(elementHelp, firstText, title, firstList, secondText, thirdText, secondList, backButton);
    return elementHelp;
}
