# Quick Start Guide

## Where to Find Your Files

### 1. Keyboard Definition File (VIA JSON)

This file describes your keyboard's physical layout.

**For Drop Alt v2**: Click "Use Drop Alt v2 Default" in the app - it's built-in!

**For other keyboards**:
1. Go to https://github.com/the-via/keyboards
2. Navigate to your keyboard model (e.g., `v3/drop/alt/v2/alt-v2.json`)
3. Download the JSON file

Or directly:
```bash
# Drop Alt v2
curl -O https://raw.githubusercontent.com/the-via/keyboards/master/v3/drop/alt/v2/alt-v2.json

# Other keyboards - replace the path
curl -O https://raw.githubusercontent.com/the-via/keyboards/master/v3/[vendor]/[keyboard]/[file].json
```

### 2. Keymap File (Your Configuration)

This file contains your key assignments per layer.

**Export from VIA App**:
1. Open [VIA](https://usevia.app) (web version) or launch the VIA desktop app
2. Connect your keyboard
3. Configure your keymap (make sure layers are set up)
4. Go to **File → Save Current Keymap**
5. Save the `.json` file somewhere you can find it

**Alternative: Export from QMK Configurator**:
1. Go to https://config.qmk.fm
2. Select your keyboard
3. Configure your layout
4. Click **Download Keymap JSON**

## Using the App

### Option 1: Quick Test (Drop Alt v2)
1. Open `index.html` in your browser
2. Click **"Use Drop Alt v2 Default"**
3. See the default layout with sample keymap

### Option 2: Your Custom Configuration
1. Open `index.html` in your browser
2. Import your **Keyboard Definition JSON** (or use default for Drop Alt v2)
3. Import your **Keymap JSON** (exported from VIA)
4. Click through layer tabs to see different layers
5. Click **"Generate Printable Cheat Sheet"** to print

## Print Settings for Best Results

1. In the print dialog:
   - **Layout**: Landscape (recommended for full-size keyboards)
   - **Margins**: Minimum or None
   - **Background Graphics**: Enabled (crucial for colors!)
   - **Scale**: Fit to page

2. Recommended browsers:
   - Chrome/Edge (best for print rendering)
   - Firefox
   - Safari

## Troubleshooting

### "Could not find layer data"
- Make sure you're importing the keymap file (with your assignments), not the keyboard definition
- The keymap file should have been exported from VIA using **File → Save Current Keymap**

### Keys don't match my keyboard
- You may have imported the wrong keyboard definition
- Check that the matrix size matches your keyboard (rows × columns)

### Missing layer names
- VIA exports don't include custom layer names by default
- Edit your exported JSON and add a `layer_names` array:
```json
{
  "layers": [...],
  "layer_names": ["Base", "Symbols", "Navigation", "Media"]
}
```

### Print looks wrong
- Make sure "Background graphics" is enabled in print settings
- Try a different browser (Chrome usually works best)
- Use landscape orientation for wide keyboards

## Advanced: Custom Layer Names

To add custom layer names to your VIA export, edit the JSON file:

```json
{
  "version": 1,
  "keyboard": "drop/alt/v2",
  "keymap": "default",
  "layout": "LAYOUT",
  "layers": [
    [...],  // Layer 0
    [...],  // Layer 1
    [...]   // Layer 2
  ],
  "layer_names": [
    "Base (Qwerty)",
    "Function Keys",
    "Media & RGB"
  ]
}
```

## Keyboard Layouts Supported

The app should work with any VIA-compatible keyboard, including:
- Drop Alt / Ctrl / Shift / Sense75
- Keychron keyboards
- Custom QMK boards with VIA support
- Any keyboard with a VIA definition file

## Need Help?

- Check the browser console (F12 → Console) for error messages
- Verify your JSON files are valid: https://jsonlint.com
- Make sure the matrix size in the keyboard definition matches your keymap
