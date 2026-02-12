// ===== Keyboard Cheat Sheet App =====

// State
let keyboardDefinition = null;
let keymapData = null;
let currentLayer = 0;

// Sample keymap for Drop Alt v2 (simplified default layout)
const DEFAULT_DROP_ALT_V2_KEYMAP = {
    "layers": [
        // Layer 0: Base
        [
            "KC_ESC", "KC_1", "KC_2", "KC_3", "KC_4", "KC_5", "KC_6", "KC_7", "KC_8", "KC_9", "KC_0", "KC_MINS", "KC_EQL", "KC_BSPC", "KC_DEL",
            "KC_TAB", "KC_Q", "KC_W", "KC_E", "KC_R", "KC_T", "KC_Y", "KC_U", "KC_I", "KC_O", "KC_P", "KC_LBRC", "KC_RBRC", "KC_BSLS", "KC_PGUP",
            "KC_CAPS", "KC_A", "KC_S", "KC_D", "KC_F", "KC_G", "KC_H", "KC_J", "KC_K", "KC_L", "KC_SCLN", "KC_QUOT", "KC_ENT", "KC_PGDN",
            "KC_LSFT", "KC_Z", "KC_X", "KC_C", "KC_V", "KC_B", "KC_N", "KC_M", "KC_COMM", "KC_DOT", "KC_SLSH", "KC_RSFT", "KC_UP", "KC_END",
            "KC_LCTL", "KC_LGUI", "KC_LALT", "KC_SPC", "KC_RALT", "MO(1)", "KC_RCTL", "KC_LEFT", "KC_DOWN", "KC_RGHT"
        ],
        // Layer 1: Function
        [
            "KC_GRV", "KC_F1", "KC_F2", "KC_F3", "KC_F4", "KC_F5", "KC_F6", "KC_F7", "KC_F8", "KC_F9", "KC_F10", "KC_F11", "KC_F12", "KC_TRNS", "KC_TRNS",
            "KC_TRNS", "RGB_TOG", "RGB_MOD", "RGB_HUI", "RGB_SAI", "RGB_VAI", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS",
            "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS",
            "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS",
            "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS", "KC_TRNS"
        ]
    ],
    "layer_names": ["Base", "Function"]
};

// Default Drop Alt v2 definition
const DEFAULT_DROP_ALT_V2_DEFINITION = {
    "name": "Drop ALT V2",
    "vendorId": "0x359B",
    "productId": "0x0006",
    "matrix": { "rows": 5, "cols": 15 },
    "layouts": {
        "keymap": [
            [{ "c": "#777777" }, "0,0", { "c": "#cccccc" }, "0,1", "0,2", "0,3", "0,4", "0,5", "0,6", "0,7", "0,8", "0,9", "0,10", "0,11", "0,12", { "c": "#aaaaaa", "w": 2 }, "0,13", "0,14"],
            [{ "w": 1.5 }, "1,0", { "c": "#cccccc" }, "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "1,9", "1,10", "1,11", "1,12", { "w": 1.5 }, "1,13", { "c": "#aaaaaa" }, "1,14"],
            [{ "w": 1.75 }, "2,0", { "c": "#cccccc" }, "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "2,10", "2,11", { "c": "#777777", "w": 2.25 }, "2,13", { "c": "#aaaaaa" }, "2,14"],
            [{ "w": 2.25 }, "3,0", { "c": "#cccccc" }, "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "3,10", "3,11", { "c": "#aaaaaa", "w": 1.75 }, "3,12", { "c": "#777777" }, "3,13", { "c": "#aaaaaa" }, "3,14"],
            [{ "w": 1.25 }, "4,0", { "w": 1.25 }, "4,1", { "w": 1.25 }, "4,2", { "c": "#cccccc", "w": 6.25 }, "4,6", { "c": "#aaaaaa", "w": 1.25 }, "4,10", { "w": 1.25 }, "4,11", { "x": 0.5, "c": "#777777" }, "4,12", "4,13", "4,14"]
        ]
    }
};

// Parse KLE-style keymap from VIA definition
function parseKeymap(kleKeymap) {
    const rows = [];
    let currentY = 0;
    let currentX = 0;
    
    for (const row of kleKeymap) {
        const keys = [];
        currentX = 0;
        
        let i = 0;
        while (i < row.length) {
            const item = row[i];
            
            if (typeof item === 'object') {
                // This is a metadata object (colors, width, etc.)
                // Apply it to the next key
                if (i + 1 < row.length && typeof row[i + 1] === 'string') {
                    const matrixPos = row[i + 1];
                    const key = {
                        matrix: matrixPos,
                        row: parseInt(matrixPos.split(',')[0]),
                        col: parseInt(matrixPos.split(',')[1]),
                        width: item.w || 1,
                        height: item.h || 1,
                        x: currentX,
                        y: currentY,
                        color: item.c || '#cccccc'
                    };
                    keys.push(key);
                    currentX += key.width;
                    i += 2;
                } else if (item.x) {
                    // Just spacing
                    currentX += item.x;
                    i++;
                } else {
                    i++;
                }
            } else if (typeof item === 'string') {
                // This is a matrix position string
                const key = {
                    matrix: item,
                    row: parseInt(item.split(',')[0]),
                    col: parseInt(item.split(',')[1]),
                    width: 1,
                    height: 1,
                    x: currentX,
                    y: currentY,
                    color: '#cccccc'
                };
                keys.push(key);
                currentX += 1;
                i++;
            }
        }
        
        rows.push(keys);
        currentY += 1;
    }
    
    return rows;
}

// Find key at matrix position
function findKeyByMatrix(layerData, row, col) {
    if (!layerData || !Array.isArray(layerData)) return null;
    
    // layerData is an array of keycodes indexed by matrix position
    // The index is row * cols + col
    const index = row * keyboardDefinition.matrix.cols + col;
    return layerData[index] || 'KC_NO';
}

// Get all layer names from keymap
function getLayerNames(keymap) {
    if (!keymap || !keymap.layers) return [];
    
    const names = [];
    for (let i = 0; i < keymap.layers.length; i++) {
        names.push(keymap.layer_names?.[i] || `Layer ${i}`);
    }
    return names;
}

// Render keyboard for a specific layer
function renderKeyboard(layerIndex = 0) {
    if (!keyboardDefinition) return;
    
    const container = document.getElementById('keyboard-container');
    const parsedLayout = parseKeymap(keyboardDefinition.layouts.keymap);
    
    let html = '<div class="keyboard">';
    
    for (const row of parsedLayout) {
        html += '<div class="keyboard-row">';
        
        for (const key of row) {
            const matrixIndex = key.row * keyboardDefinition.matrix.cols + key.col;
            let keycode = 'KC_NO';
            
            if (keymapData && keymapData.layers && keymapData.layers[layerIndex]) {
                keycode = keymapData.layers[layerIndex][matrixIndex] || 'KC_NO';
            }
            
            const display = getKeyDisplay(keycode);
            const isMod = isModifier(keycode);
            const isLayer = isLayerKey(keycode);
            const isTapHold = typeof display === 'object' && display.type === 'tap-hold';
            
            let keyClasses = ['key'];
            if (key.width !== 1) keyClasses.push(`w-${key.width.toString().replace('.', '-')}`);
            if (isMod) keyClasses.push('modifier');
            if (isLayer) keyClasses.push('special active-layer');
            if (isTapHold) keyClasses.push('tap-hold');
            if (keycode === 'KC_TRNS' || keycode === 'KC_TRANSPARENT') keyClasses.push('transparent');
            
            let keyContent = '';
            if (isTapHold) {
                keyContent = `
                    <span class="key-hold">${display.hold}</span>
                    <span class="key-main">${display.tap}</span>
                `;
            } else if (typeof display === 'object') {
                keyContent = `<span class="key-main">${display.display || ''}</span>`;
            } else {
                keyContent = `<span class="key-main">${display}</span>`;
            }
            
            // Add title for tooltip
            const title = keycode !== 'KC_NO' && keycode !== 'KC_TRNS' ? `title="${keycode}"` : '';
            
            html += `<div class="${keyClasses.join(' ')}" ${title} style="flex: ${key.width}">${keyContent}</div>`;
        }
        
        html += '</div>';
    }
    
    html += '</div>';
    container.innerHTML = html;
}

// Render layer tabs
function renderLayerTabs() {
    const container = document.getElementById('layer-tabs');
    const names = getLayerNames(keymapData);
    
    if (names.length === 0) {
        container.innerHTML = '<span class="layer-tab active">Default Layer</span>';
        return;
    }
    
    container.innerHTML = names.map((name, i) => `
        <span class="layer-tab ${i === currentLayer ? 'active' : ''}" onclick="switchLayer(${i})">${name}</span>
    `).join('');
}

// Switch to a different layer
function switchLayer(index) {
    currentLayer = index;
    renderLayerTabs();
    renderKeyboard(currentLayer);
}

// Load default Drop Alt v2 definition
function loadDefaultDropAltV2() {
    keyboardDefinition = JSON.parse(JSON.stringify(DEFAULT_DROP_ALT_V2_DEFINITION));
    keymapData = JSON.parse(JSON.stringify(DEFAULT_DROP_ALT_V2_KEYMAP));
    
    document.getElementById('keyboard-name').textContent = keyboardDefinition.name;
    document.getElementById('keyboard-info').style.display = 'block';
    document.getElementById('actions').style.display = 'flex';
    
    renderLayerTabs();
    renderKeyboard(0);
}

// Handle layout file upload
document.getElementById('layout-file')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            keyboardDefinition = JSON.parse(event.target.result);
            
            document.getElementById('keyboard-name').textContent = keyboardDefinition.name || 'Custom Keyboard';
            document.getElementById('keyboard-info').style.display = 'block';
            document.getElementById('actions').style.display = 'flex';
            
            renderLayerTabs();
            renderKeyboard(0);
        } catch (err) {
            alert('Error parsing layout file: ' + err.message);
        }
    };
    reader.readAsText(file);
});

// Handle keymap file upload
document.getElementById('keymap-file')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const rawData = JSON.parse(event.target.result);
            keymapData = normalizeKeymapFormat(rawData);
            
            renderLayerTabs();
            renderKeyboard(currentLayer);
        } catch (err) {
            alert('Error parsing keymap file: ' + err.message);
        }
    };
    reader.readAsText(file);
});

// Normalize various keymap formats to our internal format
function normalizeKeymapFormat(data) {
    // VIA app export format (has layers array directly)
    if (data.layers && Array.isArray(data.layers)) {
        console.log('Detected VIA format with', data.layers.length, 'layers');
        return {
            layers: data.layers,
            layer_names: data.layer_names || data.layers.map((_, i) => `Layer ${i}`),
            keyboard: data.keyboard,
            keymap: data.keymap
        };
    }
    
    // QMK Configurator format (has keymap array)
    if (data.keymap && Array.isArray(data.keymap)) {
        console.log('Detected QMK Configurator format');
        return {
            layers: data.keymap,
            layer_names: data.keymap.map((_, i) => `Layer ${i}`),
            keyboard: data.keyboard,
            layout: data.layout
        };
    }
    
    // VIA backup format (has "keycodes" or "keymap" nested in layers)
    if (data.version && data.keyboard) {
        console.log('Detected VIA backup format');
        // Try to find layers in various locations
        let layers = data.layers;
        
        if (!layers && data.keymap) {
            // Try to extract from keymap.c style
            layers = data.keymap;
        }
        
        if (layers) {
            return {
                layers: layers,
                layer_names: data.layer_names || layers.map((_, i) => `Layer ${i}`),
                keyboard: data.keyboard,
                layout: data.layout
            };
        }
    }
    
    // Direct array format (just the layers)
    if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0])) {
        console.log('Detected raw layers array');
        return {
            layers: data,
            layer_names: data.map((_, i) => `Layer ${i}`)
        };
    }
    
    // Unknown format - try to find something that looks like layers
    console.warn('Unknown format, attempting to find layers...', data);
    
    // Look for arrays that could be layers
    for (const key of Object.keys(data)) {
        if (Array.isArray(data[key]) && data[key].length > 0) {
            const firstItem = data[key][0];
            if (Array.isArray(firstItem) || typeof firstItem === 'string') {
                console.log('Found potential layers in key:', key);
                return {
                    layers: data[key],
                    layer_names: data[key].map((_, i) => `Layer ${i}`),
                    ...data
                };
            }
        }
    }
    
    throw new Error('Could not find layer data in the imported file');
}

// Generate printable cheat sheet
function togglePrintMode() {
    const printArea = document.getElementById('print-area');
    
    if (printArea.style.display === 'block') {
        // Hide print area
        printArea.style.display = 'none';
        return;
    }
    
    // Generate cheat sheet content
    let html = `
        <div class="cheat-sheet">
            <h2>${keyboardDefinition?.name || 'Keyboard'} - Cheat Sheet</h2>
            <div class="cheat-sheet-layers">
    `;
    
    const layerNames = getLayerNames(keymapData);
    const numLayers = layerNames.length || 1;
    
    for (let i = 0; i < numLayers; i++) {
        html += `
            <div class="cheat-sheet-layer">
                <h3>${layerNames[i] || `Layer ${i}`}</h3>
                ${generateKeyboardHTML(i)}
            </div>
        `;
    }
    
    html += '</div></div>';
    
    printArea.innerHTML = html;
    printArea.style.display = 'block';
    
    // Trigger print
    window.print();
}

// Generate keyboard HTML for a layer
function generateKeyboardHTML(layerIndex) {
    if (!keyboardDefinition) return '';
    
    const parsedLayout = parseKeymap(keyboardDefinition.layouts.keymap);
    
    let html = '<div class="keyboard">';
    
    for (const row of parsedLayout) {
        html += '<div class="keyboard-row">';
        
        for (const key of row) {
            const matrixIndex = key.row * keyboardDefinition.matrix.cols + key.col;
            let keycode = 'KC_NO';
            
            if (keymapData && keymapData.layers && keymapData.layers[layerIndex]) {
                keycode = keymapData.layers[layerIndex][matrixIndex] || 'KC_NO';
            }
            
            const display = getKeyDisplay(keycode);
            const isMod = isModifier(keycode);
            const isLayer = isLayerKey(keycode);
            const isTapHold = typeof display === 'object' && display.type === 'tap-hold';
            
            let keyClasses = ['key'];
            if (isMod) keyClasses.push('modifier');
            if (isLayer) keyClasses.push('special active-layer');
            if (isTapHold) keyClasses.push('tap-hold');
            
            let keyContent = '';
            if (isTapHold) {
                keyContent = `<span class="key-hold">${display.hold}</span><span class="key-main">${display.tap}</span>`;
            } else if (typeof display === 'object') {
                keyContent = `<span class="key-main">${display.display || ''}</span>`;
            } else {
                keyContent = `<span class="key-main">${display}</span>`;
            }
            
            html += `<div class="${keyClasses.join(' ')}" style="flex: ${key.width}">${keyContent}</div>`;
        }
        
        html += '</div>';
    }
    
    html += '</div>';
    return html;
}

// Export as SVG
function exportSVG() {
    if (!keyboardDefinition) {
        alert('Please load a keyboard definition first');
        return;
    }
    
    const svg = generateSVG();
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${keyboardDefinition.name || 'keyboard'}_cheatsheet.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Generate SVG representation
function generateSVG() {
    const parsedLayout = parseKeymap(keyboardDefinition.layouts.keymap);
    const layerNames = getLayerNames(keymapData);
    const numLayers = layerNames.length || 1;
    
    const keySize = 50;
    const keyGap = 6;
    const padding = 40;
    const layerSpacing = 400;
    
    // Calculate dimensions
    const maxWidth = parsedLayout[0]?.reduce((acc, k) => acc + k.width * keySize + keyGap, 0) || 800;
    const height = parsedLayout.length * (keySize + keyGap);
    
    let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${maxWidth + padding * 2}" height="${(height + layerSpacing) * numLayers}" viewBox="0 0 ${maxWidth + padding * 2} ${(height + layerSpacing) * numLayers}">
    <style>
        .keyboard-bg { fill: #f5f5f5; stroke: #ccc; }
        .key { fill: #fff; stroke: #999; }
        .key.modifier { fill: #e8e8e8; }
        .key.layer { fill: #a0d8f0; }
        .key.tap-hold { fill: #e8d8f8; }
        .key-text { font-family: sans-serif; font-size: 10px; text-anchor: middle; fill: #333; }
        .key-text-small { font-family: sans-serif; font-size: 8px; text-anchor: middle; fill: #666; }
        .layer-title { font-family: sans-serif; font-size: 18px; font-weight: bold; fill: #333; }
    </style>
`;
    
    for (let layerIdx = 0; layerIdx < numLayers; layerIdx++) {
        const layerOffset = layerIdx * (height + layerSpacing);
        
        // Layer title
        svg += `    <text x="${(maxWidth + padding * 2) / 2}" y="${layerOffset + 25}" class="layer-title" text-anchor="middle">${layerNames[layerIdx] || `Layer ${layerIdx}`}</text>\n`;
        
        // Keyboard background
        svg += `    <rect x="${padding}" y="${layerOffset + 40}" width="${maxWidth}" height="${height}" class="keyboard-bg" rx="10"/>\n`;
        
        let currentY = layerOffset + 50;
        
        for (const row of parsedLayout) {
            let currentX = padding + 10;
            
            for (const key of row) {
                const keyWidth = key.width * keySize;
                const matrixIndex = key.row * keyboardDefinition.matrix.cols + key.col;
                let keycode = 'KC_NO';
                
                if (keymapData && keymapData.layers && keymapData.layers[layerIdx]) {
                    keycode = keymapData.layers[layerIdx][matrixIndex] || 'KC_NO';
                }
                
                const display = getKeyDisplay(keycode);
                const isMod = isModifier(keycode);
                const isLayer = isLayerKey(keycode);
                const isTapHold = typeof display === 'object' && display.type === 'tap-hold';
                
                let keyClass = 'key';
                if (isMod) keyClass += ' modifier';
                if (isLayer) keyClass += ' layer';
                if (isTapHold) keyClass += ' tap-hold';
                
                // Key rect
                svg += `    <rect x="${currentX}" y="${currentY}" width="${keyWidth}" height="${keySize}" class="${keyClass}" rx="4"/>\n`;
                
                // Key text
                if (isTapHold) {
                    svg += `    <text x="${currentX + keyWidth / 2}" y="${currentY + 15}" class="key-text-small">${escapeXml(display.hold)}</text>\n`;
                    svg += `    <text x="${currentX + keyWidth / 2}" y="${currentY + 35}" class="key-text">${escapeXml(String(display.tap))}</text>\n`;
                } else if (typeof display === 'object') {
                    svg += `    <text x="${currentX + keyWidth / 2}" y="${currentY + 30}" class="key-text">${escapeXml(display.display || '')}</text>\n`;
                } else {
                    svg += `    <text x="${currentX + keyWidth / 2}" y="${currentY + 30}" class="key-text">${escapeXml(String(display))}</text>\n`;
                }
                
                currentX += keyWidth + keyGap;
            }
            
            currentY += keySize + keyGap;
        }
    }
    
    svg += '</svg>';
    return svg;
}

// Escape XML special characters
function escapeXml(str) {
    if (typeof str !== 'string') str = String(str);
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    console.log('QMK/VIA Keyboard Cheat Sheet loaded');
    console.log('Load a keyboard definition and keymap to get started');
});
