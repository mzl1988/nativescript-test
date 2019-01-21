/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { syntaxError } from '../util';
const FORMATTED_MESSAGE = 'ngFormattedMessage';
function indentStr(level) {
    if (level <= 0)
        return '';
    if (level < 6)
        return ['', ' ', '  ', '   ', '    ', '     '][level];
    const half = indentStr(Math.floor(level / 2));
    return half + half + (level % 2 === 1 ? ' ' : '');
}
function formatChain(chain, indent = 0) {
    if (!chain)
        return '';
    const position = chain.position ?
        `${chain.position.fileName}(${chain.position.line + 1},${chain.position.column + 1})` :
        '';
    const prefix = position && indent === 0 ? `${position}: ` : '';
    const postfix = position && indent !== 0 ? ` at ${position}` : '';
    const message = `${prefix}${chain.message}${postfix}`;
    return `${indentStr(indent)}${message}${(chain.next && ('\n' + formatChain(chain.next, indent + 2))) || ''}`;
}
export function formattedError(chain) {
    const message = formatChain(chain) + '.';
    const error = syntaxError(message);
    error[FORMATTED_MESSAGE] = true;
    error.chain = chain;
    error.position = chain.position;
    return error;
}
export function isFormattedError(error) {
    return !!error[FORMATTED_MESSAGE];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVkX2Vycm9yLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY29tcGlsZXIvc3JjL2FvdC9mb3JtYXR0ZWRfZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQW1CcEMsTUFBTSxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQztBQUUvQyxTQUFTLFNBQVMsQ0FBQyxLQUFhO0lBQzlCLElBQUksS0FBSyxJQUFJLENBQUM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUMxQixJQUFJLEtBQUssR0FBRyxDQUFDO1FBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckUsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsT0FBTyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLEtBQXdDLEVBQUUsU0FBaUIsQ0FBQztJQUMvRSxJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3RCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25GLEVBQUUsQ0FBQztJQUNQLE1BQU0sTUFBTSxHQUFHLFFBQVEsSUFBSSxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDL0QsTUFBTSxPQUFPLEdBQUcsUUFBUSxJQUFJLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRSxNQUFNLE9BQU8sR0FBRyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBRSxDQUFDO0lBRXRELE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQy9HLENBQUM7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQTRCO0lBQ3pELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDekMsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBbUIsQ0FBQztJQUNwRCxLQUFhLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDekMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ2hDLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxLQUFZO0lBQzNDLE9BQU8sQ0FBQyxDQUFFLEtBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7c3ludGF4RXJyb3J9IGZyb20gJy4uL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uIHtcbiAgZmlsZU5hbWU6IHN0cmluZztcbiAgbGluZTogbnVtYmVyO1xuICBjb2x1bW46IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtYXR0ZWRNZXNzYWdlQ2hhaW4ge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHBvc2l0aW9uPzogUG9zaXRpb247XG4gIG5leHQ/OiBGb3JtYXR0ZWRNZXNzYWdlQ2hhaW47XG59XG5cbmV4cG9ydCB0eXBlIEZvcm1hdHRlZEVycm9yID0gRXJyb3IgJiB7XG4gIGNoYWluOiBGb3JtYXR0ZWRNZXNzYWdlQ2hhaW47XG4gIHBvc2l0aW9uPzogUG9zaXRpb247XG59O1xuXG5jb25zdCBGT1JNQVRURURfTUVTU0FHRSA9ICduZ0Zvcm1hdHRlZE1lc3NhZ2UnO1xuXG5mdW5jdGlvbiBpbmRlbnRTdHIobGV2ZWw6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChsZXZlbCA8PSAwKSByZXR1cm4gJyc7XG4gIGlmIChsZXZlbCA8IDYpIHJldHVybiBbJycsICcgJywgJyAgJywgJyAgICcsICcgICAgJywgJyAgICAgJ11bbGV2ZWxdO1xuICBjb25zdCBoYWxmID0gaW5kZW50U3RyKE1hdGguZmxvb3IobGV2ZWwgLyAyKSk7XG4gIHJldHVybiBoYWxmICsgaGFsZiArIChsZXZlbCAlIDIgPT09IDEgPyAnICcgOiAnJyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdENoYWluKGNoYWluOiBGb3JtYXR0ZWRNZXNzYWdlQ2hhaW4gfCB1bmRlZmluZWQsIGluZGVudDogbnVtYmVyID0gMCk6IHN0cmluZyB7XG4gIGlmICghY2hhaW4pIHJldHVybiAnJztcbiAgY29uc3QgcG9zaXRpb24gPSBjaGFpbi5wb3NpdGlvbiA/XG4gICAgICBgJHtjaGFpbi5wb3NpdGlvbi5maWxlTmFtZX0oJHtjaGFpbi5wb3NpdGlvbi5saW5lKzF9LCR7Y2hhaW4ucG9zaXRpb24uY29sdW1uKzF9KWAgOlxuICAgICAgJyc7XG4gIGNvbnN0IHByZWZpeCA9IHBvc2l0aW9uICYmIGluZGVudCA9PT0gMCA/IGAke3Bvc2l0aW9ufTogYCA6ICcnO1xuICBjb25zdCBwb3N0Zml4ID0gcG9zaXRpb24gJiYgaW5kZW50ICE9PSAwID8gYCBhdCAke3Bvc2l0aW9ufWAgOiAnJztcbiAgY29uc3QgbWVzc2FnZSA9IGAke3ByZWZpeH0ke2NoYWluLm1lc3NhZ2V9JHtwb3N0Zml4fWA7XG5cbiAgcmV0dXJuIGAke2luZGVudFN0cihpbmRlbnQpfSR7bWVzc2FnZX0keyhjaGFpbi5uZXh0ICYmICgnXFxuJyArIGZvcm1hdENoYWluKGNoYWluLm5leHQsIGluZGVudCArIDIpKSkgfHwgJyd9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdHRlZEVycm9yKGNoYWluOiBGb3JtYXR0ZWRNZXNzYWdlQ2hhaW4pOiBGb3JtYXR0ZWRFcnJvciB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXRDaGFpbihjaGFpbikgKyAnLic7XG4gIGNvbnN0IGVycm9yID0gc3ludGF4RXJyb3IobWVzc2FnZSkgYXMgRm9ybWF0dGVkRXJyb3I7XG4gIChlcnJvciBhcyBhbnkpW0ZPUk1BVFRFRF9NRVNTQUdFXSA9IHRydWU7XG4gIGVycm9yLmNoYWluID0gY2hhaW47XG4gIGVycm9yLnBvc2l0aW9uID0gY2hhaW4ucG9zaXRpb247XG4gIHJldHVybiBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRm9ybWF0dGVkRXJyb3IoZXJyb3I6IEVycm9yKTogZXJyb3IgaXMgRm9ybWF0dGVkRXJyb3Ige1xuICByZXR1cm4gISEoZXJyb3IgYXMgYW55KVtGT1JNQVRURURfTUVTU0FHRV07XG59XG4iXX0=