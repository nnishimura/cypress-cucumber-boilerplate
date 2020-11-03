export const paths = {
    home: () => `/`
};

export function getPath(section, args) {
    return paths[section](args);
}