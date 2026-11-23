export * from './md5';

export function getActiveColor(variableName: string): string {
    const div = document.createElement('div');
    div.style.color = `var(${variableName})`;
    document.body.appendChild(div);

    const resolvedColor = getComputedStyle(div).color;

    document.body.removeChild(div);

    return resolvedColor;
}

export function isDev(): boolean {
    return import.meta.env.DEV;
}
