const characterClassTextMap = {
  ".": "Any character",
  "\\d": "Any digit",
  "\\D": "Non-digit",
  "\\w": "Any alphanumeric",
  "\\W": "Non-alphanumeric",
  "\\s": "White space",
  "\\S": "Non-white space",
  "\\t": "Horizontal tab",
  "\\r": "Carriage return",
  "\\n": "Linefeed",
  "\\v": "Vertical tab",
  "\\f": "Form-feed",
  "[\\b]": "Backspace",
  "[\\0]": "NUL",
  "\\c": "Control",
  "\\xhh": "\\x00-\\xFF",
  "\\uhhhh": "\\u0000-\\uFFFF",
  "\\u{hhhh}": "Unicode",
  "\\u{hhhhh}": "Unicode",
}
export type CharacterClassKey = keyof typeof characterClassTextMap
export { characterClassTextMap }