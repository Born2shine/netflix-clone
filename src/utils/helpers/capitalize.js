
export const capitalize = (word) => {
    return word === 'sci_fi' ? 'Science Fiction' :
    word.slice(0,1).toUpperCase() + word.slice(1, word.length).toLowerCase()
}