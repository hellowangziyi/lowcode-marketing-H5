import { customAlphabet } from "nanoid";

/**----------------------
 *  @description 生产nanoid
 *------------------------**/
export const generateNanoid = customAlphabet("1234567890abcdef", 10);
