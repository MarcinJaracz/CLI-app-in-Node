import fs from 'fs';
import path from 'path';

export function getCurrentDirectoryBase() {
    return path.basename(process.cwd());
}

export function directoryExits(filepath) {
    try {
        return fs.statSync(filepath).isDirectory();
    } catch (err) {
        return false;
    }
}
