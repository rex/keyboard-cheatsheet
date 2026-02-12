# QMK/VIA Keyboard Cheat Sheet Generator

A web-based tool to visualize and generate printable cheat sheets for your QMK/VIA programmable keyboard. Built specifically with the Drop Alt v2 in mind, but works with any VIA-compatible keyboard.

![Keyboard Cheat Sheet Preview](screenshot.png)

## Features

- 📥 **Import VIA Configurations**: Load your keyboard definition and keymap files
- 🎹 **Visual Keyboard Layout**: See your key mappings in a realistic layout
- 📄 **Printable Cheat Sheets**: Generate printer-friendly reference sheets
- 💾 **SVG Export**: Export your layouts as scalable vector graphics
- 🎨 **Layer Visualization**: Toggle between different layers with color coding
- 🔤 **Keycode Translation**: Human-readable labels for QMK keycodes
- ⌨️ **Drop Alt v2 Built-in**: Default layout for Drop Alt v2 included

## Quick Start

1. **Open the app**: Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge)

2. **Load your keyboard definition** (optional for Drop Alt v2):
   - Click "Use Drop Alt v2 Default" OR
   - Import your VIA keyboard JSON file
   - Find keyboard definitions at: https://github.com/the-via/keyboards

3. **Import your keymap**:
   - Open VIA app → File → Save Current Keymap
   - Load the exported JSON file in this app

4. **Generate your cheat sheet**:
   - Click "Generate Printable Cheat Sheet"
   - Print or save as PDF from your browser

## File Formats

### Keyboard Definition JSON (VIA Format)

This defines your keyboard's physical layout:

```json
{
  "name": "Drop ALT V2",
  "vendorId": "0x359B",
  "productId": "0x0006",
  "matrix": { "rows": 5, "cols": 15 },
  "layouts": {
    "keymap": [
      // KLE-style keymap array
    ]
  }
}
```

Find these files in the [VIA Keyboards Repository](https://github.com/the-via/keyboards).

### Keymap JSON (VIA Export)

This contains your actual key assignments per layer:

```json
{
  "version": 1,
  "keyboard": "drop/alt/v2",
  "keymap": "default",
  "layout": "LAYOUT",
  "layers": [
    ["KC_ESC", "KC_1", ...],  // Layer 0
    ["KC_TRNS", "KC_F1", ...] // Layer 1
  ]
}
```

Export this from the VIA app: **File → Save Current Keymap**

## Supported Keycodes

The app recognizes and translates:
- **Basic keys**: Letters, numbers, symbols
- **Function keys**: F1-F24
- **Modifiers**: Ctrl, Shift, Alt, Win/Cmd
- **Navigation**: Arrows, Home, End, PgUp, PgDn
- **Media keys**: Play, Pause, Next, Prev, Volume
- **Mouse keys**: Mouse movement and buttons
- **Layer controls**: MO(), TG(), TO(), TT(), OSL(), LT(), etc.
- **Tap-Hold keys**: SFT_T(), CTL_T(), GUI_T(), etc.
- **RGB controls**: RGB_TOG, RGB_MOD, RGB_HUI, etc.
- **Special**: RESET, DEBUG, EEPROM clear

## Keyboard Support

While designed with the Drop Alt v2 in mind, this tool works with any VIA-compatible keyboard by importing the appropriate keyboard definition JSON.

## Tips

### Creating Layer Names

The VIA keymap export doesn't include layer names. To add custom names, edit your exported JSON:

```json
{
  "layers": [...],
  "layer_names": ["Base", "Fn", "Symbols", "Media"]
}
```

### Print Settings

For best results when printing:
- Use Chrome or Edge
- Enable "Background graphics" in print settings
- Set margins to "Default" or "None"
- Use landscape orientation for wide keyboards

## Browser Compatibility

- Chrome/Edge 80+
- Firefox 75+
- Safari 13+

All processing is done locally in your browser - no data is uploaded to any server.

## Development

The app is built with vanilla HTML/CSS/JavaScript - no build process required.

```
keyboard-cheatsheet/
├── index.html      # Main application
├── styles.css      # Styling
├── app.js          # Application logic
├── keycodes.js     # QMK keycode translations
└── README.md       # This file
```

## Future Enhancements

Potential features that could be added:
- [ ] Drag-and-drop key editing
- [ ] Keymap comparison between versions
- [ ] Animation of layer switching
- [ ] Custom color themes
- [ ] Support for other keyboard firmware (ZMK, etc.)
- [ ] Key sound preview
- [ ] Share keymaps via URL

## Credits

- Built for the QMK and VIA communities
- Keyboard definitions from [the-via/keyboards](https://github.com/the-via/keyboards)
- Inspired by [keymap-drawer](https://github.com/caksoylar/keymap-drawer)

## License

MIT License - Feel free to use, modify, and distribute!

---

Happy typing! ⌨️
