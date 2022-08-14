import { getDeckColor } from '../../../../config/getters/colorSelection';

export let getRegexForLoungeLayoutInsert = (api) => `loungeLayout.insert.${getDeckColor(api)}`;

