// QMK/VIA Keycode to Display Name Mapping
const KEYCODE_MAP = {
    // Basic Keys
    'KC_NO': '',
    'KC_TRNS': '▽',
    'KC_TRANSPARENT': '▽',
    'KC_A': 'A',
    'KC_B': 'B',
    'KC_C': 'C',
    'KC_D': 'D',
    'KC_E': 'E',
    'KC_F': 'F',
    'KC_G': 'G',
    'KC_H': 'H',
    'KC_I': 'I',
    'KC_J': 'J',
    'KC_K': 'K',
    'KC_L': 'L',
    'KC_M': 'M',
    'KC_N': 'N',
    'KC_O': 'O',
    'KC_P': 'P',
    'KC_Q': 'Q',
    'KC_R': 'R',
    'KC_S': 'S',
    'KC_T': 'T',
    'KC_U': 'U',
    'KC_V': 'V',
    'KC_W': 'W',
    'KC_X': 'X',
    'KC_Y': 'Y',
    'KC_Z': 'Z',
    
    // Numbers
    'KC_1': '1',
    'KC_2': '2',
    'KC_3': '3',
    'KC_4': '4',
    'KC_5': '5',
    'KC_6': '6',
    'KC_7': '7',
    'KC_8': '8',
    'KC_9': '9',
    'KC_0': '0',
    
    // Function Keys
    'KC_F1': 'F1',
    'KC_F2': 'F2',
    'KC_F3': 'F3',
    'KC_F4': 'F4',
    'KC_F5': 'F5',
    'KC_F6': 'F6',
    'KC_F7': 'F7',
    'KC_F8': 'F8',
    'KC_F9': 'F9',
    'KC_F10': 'F10',
    'KC_F11': 'F11',
    'KC_F12': 'F12',
    'KC_F13': 'F13',
    'KC_F14': 'F14',
    'KC_F15': 'F15',
    'KC_F16': 'F16',
    'KC_F17': 'F17',
    'KC_F18': 'F18',
    'KC_F19': 'F19',
    'KC_F20': 'F20',
    'KC_F21': 'F21',
    'KC_F22': 'F22',
    'KC_F23': 'F23',
    'KC_F24': 'F24',
    
    // Punctuation
    'KC_ENT': 'Enter',
    'KC_ENTER': 'Enter',
    'KC_ESC': 'Esc',
    'KC_ESCAPE': 'Esc',
    'KC_BSPC': 'Bksp',
    'KC_BACKSPACE': 'Bksp',
    'KC_TAB': 'Tab',
    'KC_SPC': 'Space',
    'KC_SPACE': 'Space',
    'KC_MINS': '-',
    'KC_MINUS': '-',
    'KC_EQL': '=',
    'KC_EQUAL': '=',
    'KC_LBRC': '[',
    'KC_LEFT_BRACKET': '[',
    'KC_RBRC': ']',
    'KC_RIGHT_BRACKET': ']',
    'KC_BSLS': '\\',
    'KC_BACKSLASH': '\\',
    'KC_NUHS': '#',
    'KC_NONUS_HASH': '#',
    'KC_SCLN': ';',
    'KC_SEMICOLON': ';',
    'KC_QUOT': "'",
    'KC_QUOTE': "'",
    'KC_GRV': '`',
    'KC_GRAVE': '`',
    'KC_COMM': ',',
    'KC_COMMA': ',',
    'KC_DOT': '.',
    'KC_SLSH': '/',
    'KC_SLASH': '/',
    
    // Shifted symbols
    'KC_TILD': '~',
    'KC_TILDE': '~',
    'KC_EXLM': '!',
    'KC_EXCLAIM': '!',
    'KC_AT': '@',
    'KC_HASH': '#',
    'KC_DLR': '$',
    'KC_DOLLAR': '$',
    'KC_PERC': '%',
    'KC_PERCENT': '%',
    'KC_CIRC': '^',
    'KC_CIRCUMFLEX': '^',
    'KC_AMPR': '&',
    'KC_AMPERSAND': '&',
    'KC_ASTR': '*',
    'KC_ASTERISK': '*',
    'KC_LPRN': '(',
    'KC_LEFT_PAREN': '(',
    'KC_RPRN': ')',
    'KC_RIGHT_PAREN': ')',
    'KC_UNDS': '_',
    'KC_UNDERSCORE': '_',
    'KC_PLUS': '+',
    'KC_LCBR': '{',
    'KC_LEFT_CURLY_BRACE': '{',
    'KC_RCBR': '}',
    'KC_RIGHT_CURLY_BRACE': '}',
    'KC_PIPE': '|',
    'KC_COLN': ':',
    'KC_COLON': ':',
    'KC_DQUO': '"',
    'KC_DOUBLE_QUOTE': '"',
    'KC_LABK': '<',
    'KC_LEFT_ANGLE_BRACKET': '<',
    'KC_RABK': '>',
    'KC_RIGHT_ANGLE_BRACKET': '>',
    'KC_QUES': '?',
    'KC_QUESTION': '?',
    
    // Modifiers
    'KC_LCTL': 'Ctrl',
    'KC_LCTRL': 'Ctrl',
    'KC_LEFT_CTRL': 'Ctrl',
    'KC_LSFT': 'Shift',
    'KC_LSHIFT': 'Shift',
    'KC_LEFT_SHIFT': 'Shift',
    'KC_LALT': 'Alt',
    'KC_LEFT_ALT': 'Alt',
    'KC_LGUI': 'Win',
    'KC_LCMD': 'Cmd',
    'KC_LWIN': 'Win',
    'KC_LEFT_GUI': 'Win',
    'KC_RCTL': 'Ctrl',
    'KC_RCTRL': 'Ctrl',
    'KC_RIGHT_CTRL': 'Ctrl',
    'KC_RSFT': 'Shift',
    'KC_RSHIFT': 'Shift',
    'KC_RIGHT_SHIFT': 'Shift',
    'KC_RALT': 'Alt',
    'KC_RIGHT_ALT': 'Alt',
    'KC_ALGR': 'AltGr',
    'KC_RGUI': 'Win',
    'KC_RCMD': 'Cmd',
    'KC_RWIN': 'Win',
    'KC_RIGHT_GUI': 'Win',
    'KC_HYPR': 'Hyper',
    'KC_HYPER': 'Hyper',
    'KC_MEH': 'Meh',
    'KC_MEH': 'Meh',
    
    // Navigation
    'KC_UP': '↑',
    'KC_DOWN': '↓',
    'KC_LEFT': '←',
    'KC_RGHT': '→',
    'KC_RIGHT': '→',
    'KC_HOME': 'Home',
    'KC_END': 'End',
    'KC_PGUP': 'PgUp',
    'KC_PAGE_UP': 'PgUp',
    'KC_PGDN': 'PgDn',
    'KC_PAGE_DOWN': 'PgDn',
    'KC_INS': 'Ins',
    'KC_INSERT': 'Ins',
    'KC_DEL': 'Del',
    'KC_DELETE': 'Del',
    
    // Numpad
    'KC_NLCK': 'Num',
    'KC_NUMLOCK': 'Num',
    'KC_P1': '1',
    'KC_P2': '2',
    'KC_P3': '3',
    'KC_P4': '4',
    'KC_P5': '5',
    'KC_P6': '6',
    'KC_P7': '7',
    'KC_P8': '8',
    'KC_P9': '9',
    'KC_P0': '0',
    'KC_PDOT': '.',
    'KC_PCMM': ',',
    'KC_PSLS': '/',
    'KC_PAST': '*',
    'KC_PMNS': '-',
    'KC_PPLS': '+',
    'KC_PEQL': '=',
    'KC_PENT': 'Enter',
    
    // Lock keys
    'KC_CAPS': 'Caps',
    'KC_CAPSLOCK': 'Caps',
    'KC_SLCK': 'ScLk',
    'KC_SCROLLLOCK': 'ScLk',
    'KC_BRK': 'Break',
    'KC_PAUSE': 'Pause',
    
    // Media Keys
    'KC_MUTE': 'Mute',
    'KC_VOLU': 'Vol+',
    'KC_VOLD': 'Vol-',
    'KC_MNXT': 'Next',
    'KC_MEDIA_NEXT_TRACK': 'Next',
    'KC_MPRV': 'Prev',
    'KC_MEDIA_PREV_TRACK': 'Prev',
    'KC_MSTP': 'Stop',
    'KC_MEDIA_STOP': 'Stop',
    'KC_MPLY': 'Play',
    'KC_MEDIA_PLAY_PAUSE': 'Play',
    'KC_MSEL': 'Media',
    'KC_MEDIA_SELECT': 'Media',
    'KC_EJCT': 'Eject',
    'KC_MEDIA_EJECT': 'Eject',
    'KC_MRWD': 'Rewind',
    'KC_MEDIA_REWIND': 'Rewind',
    'KC_MFFD': 'Fast Fwd',
    'KC_MEDIA_FAST_FORWARD': 'Fast Fwd',
    
    // System Keys
    'KC_PWR': 'Power',
    'KC_POWER': 'Power',
    'KC_SLEP': 'Sleep',
    'KC_SYSTEM_SLEEP': 'Sleep',
    'KC_WAKE': 'Wake',
    'KC_WAKE': 'Wake',
    
    // Mouse Keys
    'KC_MS_U': 'M↑',
    'KC_MS_UP': 'M↑',
    'KC_MS_D': 'M↓',
    'KC_MS_DOWN': 'M↓',
    'KC_MS_L': 'M←',
    'KC_MS_LEFT': 'M←',
    'KC_MS_R': 'M→',
    'KC_MS_RIGHT': 'M→',
    'KC_BTN1': 'M1',
    'KC_MS_BTN1': 'M1',
    'KC_BTN2': 'M2',
    'KC_MS_BTN2': 'M2',
    'KC_BTN3': 'M3',
    'KC_MS_BTN3': 'M3',
    'KC_BTN4': 'M4',
    'KC_MS_BTN4': 'M4',
    'KC_BTN5': 'M5',
    'KC_MS_BTN5': 'M5',
    'KC_WH_U': 'W↑',
    'KC_MS_WH_UP': 'W↑',
    'KC_WH_D': 'W↓',
    'KC_MS_WH_DOWN': 'W↓',
    'KC_WH_L': 'W←',
    'KC_MS_WH_LEFT': 'W←',
    'KC_WH_R': 'W→',
    'KC_MS_WH_RIGHT': 'W→',
    'KC_ACL0': 'Slow',
    'KC_MS_ACCEL0': 'Slow',
    'KC_ACL1': 'Norm',
    'KC_MS_ACCEL1': 'Norm',
    'KC_ACL2': 'Fast',
    'KC_MS_ACCEL2': 'Fast',
    
    // Layer Keys
    'MO': 'Momentary',
    'TO': 'To Layer',
    'TG': 'Toggle',
    'TT': 'Tap Toggle',
    'OSL': 'One Shot',
    'LM': 'Layer Mod',
    'LT': 'Layer Tap',
    
    // Special
    'KC_APP': 'Menu',
    'KC_APPLICATION': 'Menu',
    'KC_LEAD': 'Leader',
    'KC_RALT': 'AltGr',
    'KC_RO': 'RO',
    'KC_KANA': 'Kana',
    'KC_JYEN': '¥',
    'KC_HENK': 'Henkan',
    'KC_MHEN': 'Muhenkan',
    'KC_HAEN': 'Han/Eng',
    'KC_INT1': 'Intl 1',
    'KC_INT2': 'Intl 2',
    'KC_INT3': 'Intl 3',
    'KC_INT4': 'Intl 4',
    'KC_INT5': 'Intl 5',
    'KC_INT6': 'Intl 6',
    'KC_INT7': 'Intl 7',
    'KC_INT8': 'Intl 8',
    'KC_INT9': 'Intl 9',
    'KC_LANG1': 'Lang 1',
    'KC_LANG2': 'Lang 2',
    'KC_LANG3': 'Lang 3',
    'KC_LANG4': 'Lang 4',
    'KC_LANG5': 'Lang 5',
    'KC_LANG6': 'Lang 6',
    'KC_LANG7': 'Lang 7',
    'KC_LANG8': 'Lang 8',
    'KC_LANG9': 'Lang 9',
    
    // RGB Lighting
    'RGB_TOG': 'RGB On',
    'RGB_MOD': 'RGB Mode',
    'RGB_RMOD': 'RGB RMod',
    'RGB_HUI': 'Hue+',
    'RGB_HUD': 'Hue-',
    'RGB_SAI': 'Sat+',
    'RGB_SAD': 'Sat-',
    'RGB_VAI': 'Brt+',
    'RGB_VAD': 'Brt-',
    'RGB_SPI': 'Spd+',
    'RGB_SPD': 'Spd-',
    'RGB_M_P': 'Plain',
    'RGB_M_B': 'Breathe',
    'RGB_M_R': 'Rainbow',
    'RGB_M_SW': 'Swirl',
    'RGB_M_SN': 'Snake',
    'RGB_M_K': 'Knight',
    'RGB_M_X': 'Xmas',
    'RGB_M_G': 'Gradient',
    'RGB_M_T': 'Test',
    'RGB_M_TW': 'Twinkle',
    
    // QMK Special
    'QK_BOOT': 'Boot',
    'QK_RBT': 'Reboot',
    'DB_TOGG': 'Debug',
    'EE_CLR': 'Clr EEPROM',
    'AS_UP': 'Auto+',
    'AS_DOWN': 'Auto-',
    'AS_RPT': 'AutoRep',
    'AS_ON': 'AutoOn',
    'AS_OFF': 'AutoOff',
    'AS_TOGG': 'AutoTog',
    
    // Mod Tap aliases
    'SFT_T': 'Shift Tap',
    'CTL_T': 'Ctrl Tap',
    'ALT_T': 'Alt Tap',
    'GUI_T': 'Win Tap',
    'ALL_T': 'Hyper Tap',
    'LCAG_T': 'LCAG Tap',
    'MEH_T': 'Meh Tap',
    'SCMD_T': 'SCMD Tap',
    'SWIN_T': 'Win Tap',
    'LCA_T': 'LCATap',
    
    // Audio
    'AU_ON': 'Audio On',
    'AU_OFF': 'Audio Off',
    'AU_TOGG': 'Audio Tog',
    'CK_TOGG': 'Click Tog',
    'CK_UP': 'Click+',
    'CK_DOWN': 'Click-',
    'CK_RST': 'Click Rst',
    'MU_ON': 'Music On',
    'MU_OFF': 'Music Off',
    'MU_TOGG': 'Music Tog',
    'MU_MOD': 'Music Mode',
};

// Get display name for keycode
function getKeyDisplay(keycode) {
    if (!keycode) return '';
    
    // Direct match
    if (KEYCODE_MAP[keycode]) {
        return KEYCODE_MAP[keycode];
    }
    
    // Check for tap-hold format: KC_TAP_HOLD(key, mod)
    const tapHoldMatch = keycode.match(/^([A-Z0-9_]+)\(([A-Z0-9_]+),\s*([A-Z0-9_]+)\)$/);
    if (tapHoldMatch) {
        const func = tapHoldMatch[1];
        const tap = tapHoldMatch[2];
        const hold = tapHoldMatch[3];
        
        if (func === 'LT' || func === 'MT') {
            return {
                type: 'tap-hold',
                tap: getKeyDisplay(tap) || tap,
                hold: getKeyDisplay(hold) || hold
            };
        }
    }
    
    // Check for layer tap: LT(layer, key)
    const ltMatch = keycode.match(/^LT\((\d+),\s*([A-Z0-9_]+)\)$/);
    if (ltMatch) {
        return {
            type: 'tap-hold',
            tap: getKeyDisplay(ltMatch[2]) || ltMatch[2],
            hold: `L${ltMatch[1]}`
        };
    }
    
    // Check for mod tap: MT(mod, key)
    const mtMatch = keycode.match(/^MT\(([A-Z_]+),\s*([A-Z0-9_]+)\)$/);
    if (mtMatch) {
        return {
            type: 'tap-hold',
            tap: getKeyDisplay(mtMatch[2]) || mtMatch[2],
            hold: getKeyDisplay(mtMatch[1]) || mtMatch[1]
        };
    }
    
    // Check for momentary layer: MO(layer)
    const moMatch = keycode.match(/^MO\((\d+)\)$/);
    if (moMatch) {
        return {
            type: 'layer',
            display: `MO(${moMatch[1]})`,
            layer: parseInt(moMatch[1])
        };
    }
    
    // Check for toggle layer: TG(layer)
    const tgMatch = keycode.match(/^TG\((\d+)\)$/);
    if (tgMatch) {
        return {
            type: 'layer',
            display: `TG(${tgMatch[1]})`,
            layer: parseInt(tgMatch[1])
        };
    }
    
    // Check for to layer: TO(layer)
    const toMatch = keycode.match(/^TO\((\d+)\)$/);
    if (toMatch) {
        return {
            type: 'layer',
            display: `TO(${toMatch[1]})`,
            layer: parseInt(toMatch[1])
        };
    }
    
    // Check for one shot layer: OSL(layer)
    const oslMatch = keycode.match(/^OSL\((\d+)\)$/);
    if (oslMatch) {
        return {
            type: 'layer',
            display: `OSL(${oslMatch[1]})`,
            layer: parseInt(oslMatch[1])
        };
    }
    
    // Check for tap toggle: TT(layer)
    const ttMatch = keycode.match(/^TT\((\d+)\)$/);
    if (ttMatch) {
        return {
            type: 'layer',
            display: `TT(${ttMatch[1]})`,
            layer: parseInt(ttMatch[1])
        };
    }
    
    // Check for layer mod: LM(layer, mod)
    const lmMatch = keycode.match(/^LM\((\d+),\s*([A-Z_]+)\)$/);
    if (lmMatch) {
        return {
            type: 'layer',
            display: `LM(${lmMatch[1]})`,
            layer: parseInt(lmMatch[1])
        };
    }
    
    // Mod tap aliases
    const modTapAliases = {
        'SFT_T': 'KC_RSFT',
        'CTL_T': 'KC_RCTL',
        'ALT_T': 'KC_RALT',
        'GUI_T': 'KC_RGUI',
        'LGUI_T': 'KC_LGUI',
        'LSFT_T': 'KC_LSFT',
        'LCTL_T': 'KC_LCTL',
        'LALT_T': 'KC_LALT',
    };
    
    for (const [alias, mod] of Object.entries(modTapAliases)) {
        const match = keycode.match(new RegExp(`^${alias}\\(([A-Z0-9_]+)\\)$`));
        if (match) {
            return {
                type: 'tap-hold',
                tap: getKeyDisplay(match[1]) || match[1],
                hold: getKeyDisplay(mod) || mod
            };
        }
    }
    
    // Return raw keycode if no mapping
    return keycode.replace('KC_', '');
}

// Check if key is a modifier
function isModifier(keycode) {
    if (!keycode) return false;
    const mods = ['LCTL', 'RCTL', 'LSFT', 'RSFT', 'LALT', 'RALT', 'LGUI', 'RGUI', 'LCMD', 'RCMD', 'LWIN', 'RWIN'];
    return mods.some(mod => keycode.includes(mod));
}

// Check if key is a layer key
function isLayerKey(keycode) {
    if (!keycode) return false;
    const layerPrefixes = ['MO(', 'TO(', 'TG(', 'TT(', 'OSL(', 'LM(', 'LT('];
    return layerPrefixes.some(prefix => keycode.startsWith(prefix));
}
