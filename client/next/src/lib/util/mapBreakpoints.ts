import appendSuffix from "./appendSuffix";

/**
 * Append `px` to numerical pixel breakpoint values.
 * @param {[key: string]: number} breakpoints base breakpoints object.
 * @returns
 */
// TODO refactor to be functional, generic "object map" function
const mapBreakpoints = (breakpoints: { [key: string]: number }) =>
  Object.fromEntries(
    Object.entries(breakpoints).map(([k, v]: any) => [k, appendSuffix(v, "px")])
  );

export default mapBreakpoints;
